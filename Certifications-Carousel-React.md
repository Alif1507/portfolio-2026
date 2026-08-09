# Certifications Carousel — React JS (Liquid Glass + Smooth Scroll)

Rebuild of the wireframe: a "Certifications" section with a horizontally
scrollable card carousel, liquid-glass card backgrounds, smooth scroll-snap
animation, dot indicators, and prev/next arrow buttons.

Simple theme, flexbox-based layout, no starter kit — plain React + CSS.

---

## 1. Folder structure

```
src/
  components/
    CertificationsCarousel/
      CertificationsCarousel.jsx
      CertificationsCarousel.css
```

---

## 2. `CertificationsCarousel.jsx`

```jsx
import { useRef, useState, useEffect, useCallback } from "react";
import "./CertificationsCarousel.css";

const certifications = [
  {
    id: 1,
    title: "Backend Fundamental (Lumoshive)",
    name: "Muhammad Alif Wahyudi",
    course: "Backend Fundamental",
    issued: "Issued September 30, 2024",
    certNo: "Certificate No. 24092000010028",
    image: "/certificates/backend-fundamental.png",
  },
  {
    id: 2,
    title: "Backend Fundamental (Lumoshive)",
    name: "Muhammad Alif Wahyudi",
    course: "Backend Fundamental",
    issued: "Issued September 30, 2024",
    certNo: "Certificate No. 24092000010028",
    image: "/certificates/backend-fundamental.png",
  },
  {
    id: 3,
    title: "Backend Fundamental (Lumoshive)",
    name: "Muhammad Alif Wahyudi",
    course: "Backend Fundamental",
    issued: "Issued September 30, 2024",
    certNo: "Certificate No. 24092000010028",
    image: "/certificates/backend-fundamental.png",
  },
  // add more certificates here...
];

export default function CertificationsCarousel() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset =
      cardRect.left -
      trackRect.left +
      track.scrollLeft -
      (trackRect.width - cardRect.width) / 2;

    track.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  const handlePrev = () => {
    const next = Math.max(activeIndex - 1, 0);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const handleNext = () => {
    const next = Math.min(activeIndex + 1, certifications.length - 1);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  // Keep dots/active state in sync when user drags/scrolls manually
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distance = Math.abs(cardCenter - center);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        setActiveIndex(closestIndex);
      }, 100);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="certs-section">
      <h2 className="certs-title">Certifications</h2>

      <div className="certs-carousel">
        <button
          className="certs-arrow certs-arrow--prev"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous certificate"
        >
          &#8249;
        </button>

        <div className="certs-track" ref={trackRef}>
          {certifications.map((cert, i) => (
            <div
              className={`certs-card ${i === activeIndex ? "is-active" : ""}`}
              key={cert.id}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="certs-card__glass">
                <div className="certs-card__image-wrap">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certs-card__image"
                  />
                </div>
              </div>

              <h3 className="certs-card__title">{cert.title}</h3>

              <button className="certs-card__btn">See More</button>
            </div>
          ))}
        </div>

        <button
          className="certs-arrow certs-arrow--next"
          onClick={handleNext}
          disabled={activeIndex === certifications.length - 1}
          aria-label="Next certificate"
        >
          &#8250;
        </button>
      </div>

      <div className="certs-dots">
        {certifications.map((cert, i) => (
          <button
            key={cert.id}
            className={`certs-dot ${i === activeIndex ? "is-active" : ""}`}
            onClick={() => {
              setActiveIndex(i);
              scrollToIndex(i);
            }}
            aria-label={`Go to certificate ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
```

---

## 3. `CertificationsCarousel.css`

```css
.certs-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #050505;
  padding: 80px 24px;
  overflow: hidden;
}

.certs-title {
  color: #fff;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0 0 56px;
  text-align: center;
}

/* Carousel row: arrows + track, flexbox */
.certs-carousel {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1400px;
}

/* Scroll track */
.certs-track {
  display: flex;
  gap: 32px;
  flex: 1;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 24px 8px 8px;

  /* smooth momentum + hide scrollbar */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.certs-track::-webkit-scrollbar {
  display: none;
}

/* Card */
.certs-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: min(380px, 80vw);
  scroll-snap-align: center;
  opacity: 0.55;
  transform: scale(0.92);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.certs-card.is-active {
  opacity: 1;
  transform: scale(1);
}

/* Liquid glass background */
.certs-card__glass {
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.04) 40%,
    rgba(120, 60, 200, 0.12) 100%
  );
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -20px 40px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

/* Faint liquid highlight blob for extra "glass" feel */
.certs-card__glass::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -20%;
  width: 70%;
  height: 70%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  pointer-events: none;
}

.certs-card.is-active .certs-card__glass {
  box-shadow:
    0 12px 40px rgba(140, 30, 60, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.certs-card__image-wrap {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.certs-card__image {
  display: block;
  width: 100%;
  height: auto;
}

.certs-card__title {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 20px 0 16px;
  text-align: center;
}

.certs-card__btn {
  padding: 12px 28px;
  border-radius: 999px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  background: linear-gradient(90deg, #5a2ea6, #b0234a);
  box-shadow: 0 6px 18px rgba(176, 35, 74, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.certs-card__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(176, 35, 74, 0.45);
}

/* Arrows */
.certs-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.certs-arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

.certs-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Dots */
.certs-dots {
  display: flex;
  gap: 10px;
  margin-top: 32px;
}

.certs-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.certs-dot.is-active {
  background: #fff;
  transform: scale(1.3);
}

/* Responsive */
@media (max-width: 640px) {
  .certs-arrow {
    width: 44px;
    height: 44px;
    font-size: 1.4rem;
  }
  .certs-card {
    width: 78vw;
  }
}
```

---

## 4. Usage

```jsx
import CertificationsCarousel from "./components/CertificationsCarousel/CertificationsCarousel";

function App() {
  return (
    <div>
      <CertificationsCarousel />
    </div>
  );
}

export default App;
```

---

## Notes

- **Smooth scroll**: handled natively via CSS `scroll-behavior: smooth` +
  `scroll-snap-type: x mandatory` on `.certs-track`, plus a JS
  `scrollTo({ behavior: "smooth" })` call when arrows/dots are clicked.
- **Liquid glass effect**: `.certs-card__glass` uses `backdrop-filter: blur() saturate()`
  with a soft gradient + inner highlight (`::before`) to fake the "liquid"
  refraction look. Works best over a dark or colorful background — put a
  gradient/blurred blob behind `.certs-section` for the glass to really pop.
- Replace `cert.image` paths with your actual certificate image URLs.
- Card scale/opacity transition (`is-active` class) gives the "focused center
  card" effect seen in the wireframe.
- All layout uses **flexbox** (`.certs-carousel`, `.certs-track`, `.certs-card`)
  per your usual preference, no CSS grid.
