"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import TiltedCard from "./assets/TiltedCard";
import Image from "next/image";

const Pencapaian = ({ competitions = [], certificates = [] }) => {
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
    const next = Math.min(activeIndex + 1, certificates.length - 1);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  // Sync active card state when scrolling manually
  useEffect(() => {
    const track = trackRef.current;
    if (!track || certificates.length === 0) return;

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
  }, [certificates]);

  return (
    <section className="mt-64" style={{ fontFamily: "Sora Variable" }} id="achievements">
      <h2 className="text-white md:text-[96px] text-4xl font-bold mb-24 ml-16">
        My Achievements
      </h2>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-4xl">Competitions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 mx-4 md:mx-16 mt-16">
          {competitions.map((c, index) => (
            <a key={c.id ?? index} className="cursor-pointer" href={c.link} target="_blank" rel="noopener noreferrer">
              <TiltedCard
                imageSrc={`https://raw.githubusercontent.com/Alif1507/projects/main/Competiton/img/thubnail${c.id}.jpg`}
                altText={`${c.judul} competition preview`}
                captionText={c.category}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-white font-bold bg-slate-500/70 p-2 text-xs rounded-full">
                    {c.judul}
                  </p>
                }
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24">
        <h3 className="text-white text-4xl mb-10">Certifications</h3>
        
        <section className="certs-section">
          <div className="certs-carousel">
            <div className="certs-track" ref={trackRef}>
              {certificates.map((cer, i) => (
                <div
                  className={`certs-card ${i === activeIndex ? "is-active" : ""}`}
                  key={cer.id ?? i}
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <div className="certs-card__glass">
                    <div className="certs-card__image-wrap">
                      <Image
                        src={`https://raw.githubusercontent.com/Alif1507/projects/refs/heads/main/Certif/img/thubnail${cer.id}.png`}
                        alt={cer.judul}
                        width={800}
                        height={500}
                        sizes="(max-width: 768px) 85vw, 520px"
                        className="certs-card__image"
                      />
                    </div>
                  </div>
                  <h3 className="certs-card__title">{cer.judul}</h3>
                  <div className="flex justify-center">
                    <a
                      href={cer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certs-card__btn"
                    >
                      See credential
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="certs-controls">
              <button
                className="certs-arrow certs-arrow--prev"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous certificate"
              >
                &lt;
              </button>

              <div className="certs-dots">
                {certificates.map((cer, i) => (
                  <button
                    key={cer.id ?? i}
                    className={`certs-dot ${i === activeIndex ? "is-active" : ""}`}
                    onClick={() => {
                      setActiveIndex(i);
                      scrollToIndex(i);
                    }}
                    aria-label={`Go to certificate ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="certs-arrow certs-arrow--next"
                onClick={handleNext}
                disabled={activeIndex === certificates.length - 1}
                aria-label="Next certificate"
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pencapaian;

