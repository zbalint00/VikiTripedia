import { useState, useMemo } from "react";
import { cx } from "@emotion/css";
import type Photo from "./type";
import type { Styles } from "./type";
import { styles } from "./styles";



const initialPhotos: Photo[] = [
  { id: "1", url: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=600&h=800&fit=crop&auto=format", caption: "Chasing sunsets together" },
  { id: "2", url: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&h=400&fit=crop&auto=format", caption: "Every adventure starts with you" },
  { id: "3", url: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=600&fit=crop&auto=format", caption: "Lost in beautiful places" },
  { id: "4", url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&auto=format", caption: "Our favorite kind of view" },
  { id: "5", url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=700&fit=crop&auto=format", caption: "You make every place magical" },
  { id: "6", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop&auto=format", caption: "Mountains can wait — this moment can't" },
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
          <p className={styles.heroLabel}>A little corner just for us</p>
          <h1 className={styles.heroTitle}>Maya & [Your Name] ♡</h1>
          <p className={styles.heroQuote}>"{heroQuote}"</p>
        </div>
      </div>

      <div className={styles.quoteStrip}>
        {quotes.map((q, i) => (
          <span key={i} className={styles.quoteItem}>♡ {q}</span>
        ))}
      </div>

      <div className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <h2 className={styles.gridTitle}>Our Memories</h2>
          <button className={styles.addBtn} onClick={() => setShowAdd(!showAdd)}>
            <span>+</span> Add Photo
          </button>
        </div>

        {showAdd && (
          <div className={styles.addForm}>
            <h3 className={styles.addFormTitle}>Add a Memory</h3>
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
        <p className={styles.footerQuote}>"Home isn't a place. It's wherever you are."</p>
      </div>
    </div>
  );
}
