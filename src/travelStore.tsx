import React, { createContext, useContext, useReducer } from "react";

export type ListName = "favorites" | "beenThere" | "wishlist" | "nextTrip";

export interface Place {
  id: string;
  name: string;
  flag: string;
  region: string;
}

interface State {
  favorites: Place[];
  beenThere: Place[];
  wishlist: Place[];
  nextTrip: Place[];
}

type Action =
  | { type: "ADD"; list: ListName; place: Place }
  | { type: "REMOVE"; list: ListName; id: string }
  | { type: "MOVE_UP"; list: ListName; index: number }
  | { type: "MOVE_DOWN"; list: ListName; index: number };

const initial: State = { favorites: [], beenThere: [], wishlist: [], nextTrip: [] };

function reducer(state: State, action: Action): State {
  const list = [...state[action.list]];
  switch (action.type) {
    case "ADD": {
      if (list.find((p) => p.id === action.place.id)) return state;
      return { ...state, [action.list]: [...list, action.place] };
    }
    case "REMOVE":
      return { ...state, [action.list]: list.filter((p) => p.id !== action.id) };
    case "MOVE_UP": {
      if (action.index === 0) return state;
      [list[action.index - 1], list[action.index]] = [list[action.index], list[action.index - 1]];
      return { ...state, [action.list]: list };
    }
    case "MOVE_DOWN": {
      if (action.index === list.length - 1) return state;
      [list[action.index], list[action.index + 1]] = [list[action.index + 1], list[action.index]];
      return { ...state, [action.list]: list };
    }
    default:
      return state;
  }
}

interface TravelCtx {
  state: State;
  add: (list: ListName, place: Place) => void;
  remove: (list: ListName, id: string) => void;
  moveUp: (list: ListName, index: number) => void;
  moveDown: (list: ListName, index: number) => void;
  isIn: (list: ListName, id: string) => boolean;
}

const Ctx = createContext<TravelCtx | null>(null);

export function TravelProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const add = (list: ListName, place: Place) => dispatch({ type: "ADD", list, place });
  const remove = (list: ListName, id: string) => dispatch({ type: "REMOVE", list, id });
  const moveUp = (list: ListName, index: number) => dispatch({ type: "MOVE_UP", list, index });
  const moveDown = (list: ListName, index: number) => dispatch({ type: "MOVE_DOWN", list, index });
  const isIn = (list: ListName, id: string) => state[list].some((p) => p.id === id);
  return <Ctx.Provider value={{ state, add, remove, moveUp, moveDown, isIn }}>{children}</Ctx.Provider>;
}

export function useTravel() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTravel must be used within TravelProvider");
  return ctx;
}
