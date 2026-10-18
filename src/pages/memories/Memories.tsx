import { useState, useMemo } from "react";
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
  { id: "15", url: jetski, caption: "Give me the beat, I ride it like a jetski" },
];

const quotes = [
  "I want to travel the whole world with you, and still feel at home.",
  "With you, every destination is my favorite.",
  "You are the reason every trip feels like a fairy tale.",
  "Not all who wander are lost — but I'm glad I'm lost with you.",
  "The best journeys are the ones we take together.",
  "Home isn't a place. It's wherever you are.",
];

function PhotoCard({ photo, onRemove, photoStyles }: { photo: Photo; onRemove: (id: string) => void; photoStyles: Styles }) {
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
        onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop"; }}
      />
      <div className={cx(s.photoOverlay, hovered ? s.photoOverlayVisible : "")}>
        <p className={s.photoCaption}>{photo.caption}</p>
      </div>
      <button
        className={cx(s.photoRemove, hovered ? s.photoRemoveVisible : "")}
        onClick={() => onRemove(photo.id)}
      >✕</button>
    </div>
  );
}

export default function MemoriesPage() {
  const heroQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [showAdd, setShowAdd] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [newCaption, setNewCaption] = useState("");

  function addPhoto() {
    if (!newUrl.trim()) return;
    setPhotos([...photos, { id: Date.now().toString(), url: newUrl.trim(), caption: newCaption.trim() || "Our memory" }]);
    setNewUrl("");
    setNewCaption("");
    setShowAdd(false);
  }

  function removePhoto(id: string) {
    setPhotos(photos.filter(p => p.id !== id));
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
          <span key={i} className={styles.quoteItem}>♡ {q} ♡</span>
        ))}
      </div>

      <div className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <h2 className={styles.gridTitle}>Az emlékeink</h2>
          <button className={styles.addBtn} onClick={() => setShowAdd(!showAdd)}>
            <span>+</span> Tölts fel egy új emléket
          </button>
        </div>

        {showAdd && (
          <div className={styles.addForm}>
            <h3 className={styles.addFormTitle}>Adj hozzá egy új emléket</h3>
            <div className={styles.addFormInputs}>
              <input
                type="url"
                value={newUrl}
                onChange={e => setNewUrl(e.target.value)}
                placeholder="Photo URL (e.g. from Google Photos)"
                className={styles.formInput}
              />
              <input
                type="text"
                value={newCaption}
                onChange={e => setNewCaption(e.target.value)}
                placeholder="Caption (optional)"
                className={styles.formInput}
              />
              <div className={styles.formActions}>
                <button className={styles.formSubmit} onClick={addPhoto}>Add Memory</button>
                <button className={styles.formCancel} onClick={() => setShowAdd(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.masonry}>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onRemove={removePhoto} photoStyles={styles} />
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
