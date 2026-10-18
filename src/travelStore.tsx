import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { supabase } from "./lib/supabase";

export type ListName = "favorites" | "beenThere" | "wishlist" | "nextTrip";

export interface Place {
  id: string;
  name: string;
  flag: string;
  region: string;
}

type TravelState = Record<ListName, Place[]>;

interface TravelContextValue {
  state: TravelState;
  add: (list: ListName, place: Place) => void;
  remove: (list: ListName, id: string) => void;
  moveUp: (list: ListName, target: string | number) => void;
  moveDown: (list: ListName, target: string | number) => void;
  isIn: (list: ListName, id: string) => boolean;
}

const createEmptyState = (): TravelState => ({
  favorites: [],
  beenThere: [],
  wishlist: [],
  nextTrip: [],
});

const TravelContext = createContext<TravelContextValue | undefined>(undefined);

export function TravelProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TravelState>(createEmptyState());

  // Betöltjük az aktuális felhasználó listáit a Supabase-ből.
  useEffect(() => {
    let cancelled = false;

    async function loadLists() {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("Nem sikerült lekérni a felhasználót:", userError);
        return;
      }

      if (!user) {
        if (!cancelled) setState(createEmptyState());
        return;
      }

      const { data, error } = await supabase
        .from("travel_list_items")
        .select("list_name, place_id, place_name, flag, region, sort_order")
        .eq("user_id", user.id)
        .order("sort_order", { ascending: true });

      if (error) {
        console.error("Nem sikerült betölteni az utazási listákat:", error);
        return;
      }

      if (cancelled) return;

      const loadedState = createEmptyState();

      for (const row of data ?? []) {
        const list = row.list_name as ListName;

        loadedState[list].push({
          id: row.place_id,
          name: row.place_name,
          flag: row.flag,
          region: row.region,
        });
      }

      setState(loadedState);
    }

    loadLists().catch((error) => {
      console.error("Hiba az utazási listák betöltésekor:", error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Hozzáadunk egy elemet az adott listához.
  async function add(list: ListName, place: Place) {
    if (state[list].some((item) => item.id === place.id)) return;

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error(
        "A mentéshez bejelentkezett felhasználó szükséges.",
        userError,
      );
      return;
    }

    const { error } = await supabase.from("travel_list_items").insert({
      user_id: user.id,
      list_name: list,
      place_id: place.id,
      place_name: place.name,
      flag: place.flag,
      region: place.region,
      sort_order: state[list].length,
    });

    if (error) {
      console.error("Nem sikerült elmenteni a listaelemet:", error);
      return;
    }

    setState((previous) => {
      if (previous[list].some((item) => item.id === place.id)) {
        return previous;
      }

      return {
        ...previous,
        [list]: [...previous[list], place],
      };
    });
  }

  // Eltávolítunk egy elemet az adott listából.
  async function remove(list: ListName, id: string) {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Nem sikerült azonosítani a felhasználót.", userError);
      return;
    }

    const { error } = await supabase
      .from("travel_list_items")
      .delete()
      .eq("user_id", user.id)
      .eq("list_name", list)
      .eq("place_id", id);

    if (error) {
      console.error("Nem sikerült törölni a listaelemet:", error);
      return;
    }

    setState((previous) => ({
      ...previous,
      [list]: previous[list].filter((item) => item.id !== id),
    }));
  }

  // Fel- vagy lemozgatunk egy elemet, és elmentjük az új sorrendet.
  async function move(
    list: ListName,
    target: string | number,
    direction: -1 | 1,
  ) {
    const items = [...state[list]];

    const index =
      typeof target === "number"
        ? target
        : items.findIndex((item) => item.id === target);

    const newIndex = index + direction;

    if (
      index < 0 ||
      index >= items.length ||
      newIndex < 0 ||
      newIndex >= items.length
    ) {
      return;
    }

    [items[index], items[newIndex]] = [items[newIndex], items[index]];

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Nem sikerült azonosítani a felhasználót.", userError);
      return;
    }

    const results = await Promise.all(
      items.map((item, position) =>
        supabase
          .from("travel_list_items")
          .update({ sort_order: position })
          .eq("user_id", user.id)
          .eq("list_name", list)
          .eq("place_id", item.id),
      ),
    );

    const failedUpdate = results.find((result) => result.error);

    if (failedUpdate?.error) {
      console.error(
        "Nem sikerült elmenteni a lista sorrendjét:",
        failedUpdate.error,
      );
      return;
    }

    setState((previous) => ({
      ...previous,
      [list]: items,
    }));
  }

  function moveUp(list: ListName, target: string | number) {
    void move(list, target, -1);
  }

  function moveDown(list: ListName, target: string | number) {
    void move(list, target, 1);
  }

  function isIn(list: ListName, id: string) {
    return state[list].some((item) => item.id === id);
  }

  return (
    <TravelContext.Provider
      value={{
        state,
        add,
        remove,
        moveUp,
        moveDown,
        isIn,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  const context = useContext(TravelContext);

  if (!context) {
    throw new Error("A useTravel csak TravelProvideren belül használható.");
  }

  return context;
}
