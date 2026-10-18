import { useState, useMemo, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { cx } from "@emotion/css";
import type Photo from "./type";
import type { Styles } from "./type";
import { styles } from "./styles";

import torokKaja from "../../assets/torok_ebed.jpg";
import arc from "../../assets/arc.jpg";
import beachMirror from "../../assets/beach_mirror.jpg";
import weddingKiss from "../../assets/wedding_kiss.jpg";
import weddingBox from "../../assets/wedding_box.jpg";
import tiszalok from "../../assets/tiszalok.jpg";
import cinema from "../../assets/cinema.jpg";
import rooftop from "../../assets/rooftop.jpg";
import rooftopViki from "../../assets/rooftop_viki.jpg";
import tejbetok from "../../assets/tejbetok.jpg";
import naplemente from "../../assets/naplemente.jpg";
import torony from "../../assets/torony.jpg";
import fiordinapoli from "../../assets/fiordinapoli.jpg";
import szallas from "../../assets/szallas.jpg";
import jetski from "../../assets/jetski.jpg";

const initialPhotos: Photo[] = [
  { id: "1", url: torokKaja, caption: "Egy 'kis' laza török vacsora" },
  { id: "2", url: beachMirror, caption: "Beach time Antalyba!" },
  { id: "3", url: weddingKiss, caption: "Csókcsók puszipuszi" },
  { id: "4", url: weddingBox, caption: "Boxolók" },
  { id: "5", url: arc, caption: "Nincs hozzá fűzni valóm" },
  { id: "6", url: tiszalok, caption: "Random Tiszalöki séta" },
  { id: "7", url: cinema, caption: "Mozis est, pókemberrel" },
  { id: "8", url: rooftop, caption: "Rooftop koktélozgatás Törökben" },
  { id: "9", url: rooftopViki, caption: "Gyémántos hercegnőm" },
  { id: "10", url: tejbetok, caption: "TejbeTök" },
  { id: "11", url: naplemente, caption: "A nagy esténk a hegyen!" },
  { id: "12", url: torony, caption: "Hadrian kapuja" },
  { id: "13", url: fiordinapoli, caption: "Fior di Napoli. NyamNyam" },
  { id: "14", url: szallas, caption: "Antalya szállásunk kilátása" },
  {
    id: "15",
    url: jetski,
    caption: "Give me the beat, I ride it like a jetski",
  },
];

const quotes = [
  "I want to travel the whole world with you, and still feel at home.",
  "With you, every destination is my favorite.",
  "You are the reason every trip feels like a fairy tale.",
  "Not all who wander are lost — but I'm glad I'm lost with you.",
  "The best journeys are the ones we take together.",
  "Home isn't a place. It's wherever you are.",
];

async function compressImage(file: File): Promise<File> {
  const bitmap = await createImageBitmap(file);

  try {
    const maxSize = 1600;
    const maxBytes = 400 * 1024;

    let scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Nem sikerült előkészíteni a képet.");
    }

    // Többször próbálkozunk, ha a kép túl nagy marad.
    for (const dimension of [1600, 1400, 1200]) {
      scale = Math.min(
        scale,
        dimension / Math.max(bitmap.width, bitmap.height),
      );

      canvas.width = Math.round(bitmap.width * scale);
      canvas.height = Math.round(bitmap.height * scale);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

      for (const quality of [0.8, 0.7, 0.6]) {
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (result) => {
              if (result) resolve(result);
              else reject(new Error("Nem sikerült tömöríteni a képet."));
            },
            "image/webp",
            quality,
          );
        });

        // Ha a böngésző nem támogatja a WebP-t, használjunk JPEG-et.
        let output = blob;

        if (blob.type !== "image/webp") {
          output = await new Promise<Blob>((resolve, reject) => {
            canvas.toBlob(
              (result) => {
                if (result) resolve(result);
                else reject(new Error("Nem sikerült JPEG-képet készíteni."));
              },
              "image/jpeg",
              quality,
            );
          });
        }

        if (
          output.size <= maxBytes ||
          (dimension === 1200 && quality === 0.6)
        ) {
          const extension = output.type === "image/webp" ? "webp" : "jpg";
          const name = file.name.replace(/\.[^.]+$/, "");

          return new File([output], `${name}.${extension}`, {
            type: output.type,
            lastModified: Date.now(),
          });
        }
      }
    }

    throw new Error("Nem sikerült megfelelő méretű képet készíteni.");
  } finally {
    bitmap.close();
  }
}

function PhotoCard({
  photo,
  onRemove,
  photoStyles,
}: {
  photo: Photo;
  onRemove: (id: string) => void;
  photoStyles: Styles;
}) {
  const s = photoStyles;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={s.photoWrap}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={photo.url}
        alt={photo.caption}
        className={s.photoImg}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop";
        }}
      />
      <div className={cx(s.photoOverlay, hovered ? s.photoOverlayVisible : "")}>
        <p className={s.photoCaption}>{photo.caption}</p>
      </div>
      {photo.storagePath && (
        <button
          type="button"
          aria-label={`Emlék törlése: ${photo.caption}`}
          className={cx(s.photoRemove, hovered ? s.photoRemoveVisible : "")}
          onClick={() => onRemove(photo.id)}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default function MemoriesPage() {
  const heroQuote = useMemo(
    () => quotes[Math.floor(Math.random() * quotes.length)],
    [],
  );
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [showAdd, setShowAdd] = useState(false);
  const [newFile, setNewFile] = useState<File | null>(null);
  const [newCaption, setNewCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPhotos() {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError || !authData.user) {
        if (!cancelled) {
          setErrorMessage("A képek betöltéséhez jelentkezz be.");
        }
        return;
      }

      const { data, error } = await supabase
        .from("memories")
        .select("id, image_path, caption")
        .order("created_at", { ascending: false });

      if (error) {
        if (!cancelled) {
          setErrorMessage(`Nem sikerült betölteni a képeket: ${error.message}`);
        }
        return;
      }

      const savedPhotos = (
        await Promise.all(
          data.map(async (item): Promise<Photo | null> => {
            const { data: signedData, error: signedError } =
              await supabase.storage
                .from("memories")
                .createSignedUrl(item.image_path, 60 * 60 * 24 * 7);

            if (signedError || !signedData) return null;

            return {
              id: item.id,
              url: signedData.signedUrl,
              caption: item.caption,
              storagePath: item.image_path,
            };
          }),
        )
      ).filter((photo): photo is Photo => photo !== null);

      if (!cancelled) {
        setPhotos([...initialPhotos, ...savedPhotos]);
      }
    }

    void loadPhotos();

    return () => {
      cancelled = true;
    };
  }, []);

  async function addPhoto() {
    if (!newFile || isUploading) return;

    if (!newFile.type.startsWith("image/")) {
      setErrorMessage("Csak képfájlt tölthetsz fel.");
      return;
    }

    if (newFile.size > 20 * 1024 * 1024) {
      setErrorMessage("A kép legfeljebb 20 MB lehet.");
      return;
    }

    setIsUploading(true);
    setErrorMessage("");

    let uploadedPath: string | null = null;

    try {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError || !authData.user) {
        throw new Error("Jelentkezz be a feltöltéshez.");
      }

      const compressedFile = await compressImage(newFile);

      const extension = compressedFile.type === "image/webp" ? "webp" : "jpg";
      const path = `${authData.user.id}/${crypto.randomUUID()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("memories")
        .upload(path, compressedFile, {
          contentType: compressedFile.type,
          upsert: false,
        });

      if (uploadError) throw uploadError;

      uploadedPath = path;

      const { data: saved, error: insertError } = await supabase
        .from("memories")
        .insert({
          user_id: authData.user.id,
          image_path: path,
          caption: newCaption.trim() || "Egy közös emlék",
        })
        .select("id, image_path, caption")
        .single();

      if (insertError) throw insertError;

      const { data: signedData, error: signedError } = await supabase.storage
        .from("memories")
        .createSignedUrl(saved.image_path, 60 * 60 * 24 * 7);

      if (signedError || !signedData) {
        throw signedError ?? new Error("Nem sikerült megjeleníteni a képet.");
      }

      setPhotos((current) => [
        ...current,
        {
          id: saved.id,
          url: signedData.signedUrl,
          caption: saved.caption,
          storagePath: saved.image_path,
        },
      ]);

      setNewFile(null);
      setNewCaption("");
      setShowAdd(false);
    } catch (error) {
      if (uploadedPath) {
        await supabase.storage.from("memories").remove([uploadedPath]);
      }

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ismeretlen hiba történt feltöltés közben.",
      );
    } finally {
      setIsUploading(false);
    }
  }

  async function removePhoto(id: string) {
    const photo = photos.find((item) => item.id === id);

    // A projektbe beépített képek nem Supabase-fájlok.
    if (!photo?.storagePath) return;

    setErrorMessage("");

    const { error: storageError } = await supabase.storage
      .from("memories")
      .remove([photo.storagePath]);

    if (storageError) {
      setErrorMessage(`Nem sikerült törölni a képet: ${storageError.message}`);
      return;
    }

    const { error: databaseError } = await supabase
      .from("memories")
      .delete()
      .eq("id", id);

    if (databaseError) {
      setErrorMessage(
        `A fájl törlődött, de az adatbázis frissítése sikertelen: ${databaseError.message}`,
      );
      return;
    }

    setPhotos((current) => current.filter((item) => item.id !== id));
  }

  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Ez a mi kis sarkunk</p>
          <h1 className={styles.heroTitle}>Viki & Bálint ♡</h1>
          <p className={styles.heroQuote}>"{heroQuote}"</p>
        </div>
      </div>

      <div className={styles.quoteStrip}>
        {quotes.map((q, i) => (
          <span key={i} className={styles.quoteItem}>
            ♡ {q} ♡
          </span>
        ))}
      </div>

      <div className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <h2 className={styles.gridTitle}>Az emlékeink</h2>
          <button
            className={styles.addBtn}
            onClick={() => setShowAdd(!showAdd)}
          >
            <span>+</span> Tölts fel egy új emléket
          </button>
        </div>

        {showAdd && (
          <div className={styles.addForm}>
            <h3 className={styles.addFormTitle}>Adj hozzá egy új emléket</h3>
            <div className={styles.addFormInputs}>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setNewFile(event.target.files?.[0] ?? null);
                  setErrorMessage("");
                }}
                className={styles.formInput}
              />

              <input
                type="text"
                value={newCaption}
                onChange={(event) => setNewCaption(event.target.value)}
                placeholder="Kép felirata (nem kötelező)"
                className={styles.formInput}
                maxLength={200}
              />

              {errorMessage && <p role="alert">{errorMessage}</p>}

              <div className={styles.formActions}>
                <button
                  className={styles.formSubmit}
                  onClick={() => void addPhoto()}
                  disabled={!newFile || isUploading}
                >
                  {isUploading ? "Feltöltés..." : "Kép feltöltése"}
                </button>

                <button
                  className={styles.formCancel}
                  onClick={() => {
                    setShowAdd(false);
                    setNewFile(null);
                    setErrorMessage("");
                  }}
                  disabled={isUploading}
                >
                  Mégse
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.masonry}>
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onRemove={removePhoto}
              photoStyles={styles}
            />
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerHeart}>♡</p>
        <p className={styles.footerQuote}>"Ott az otthonom, ahol Te vársz."</p>
        <p className={styles.footerQuote}>Szeretlek!</p>
      </div>
    </div>
  );
}
