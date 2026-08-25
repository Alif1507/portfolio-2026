"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Modern = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const words1Ref = useRef([]);
  const words2Ref = useRef([]);

  const line1Words = ["I", "BUILD", "MODERN", "&"];
  const line2Words = ["CLEAN", "UI", "WITH", "LATEST", "TECH"];

  useEffect(() => {
    const section = sectionRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const words1 = words1Ref.current.filter(Boolean);
    const words2 = words2Ref.current.filter(Boolean);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([words1, words2], { opacity: 1, y: 0 });
        return;
      }

      // Initial word states: shifted down with subtle opacity
      gsap.set([...words1, ...words2], {
        opacity: 0,
        y: 45,
        rotateX: 20,
      });

      // 1. Entrance Word Stagger Reveal
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      revealTl
        .to(words1, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
        })
        .to(
          words2,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.6"
        );

      // 2. Smooth Scrubbed Parallax Drift (Opposing Directions)
      gsap.fromTo(
        line1,
        { xPercent: -3 },
        {
          xPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        line2,
        { xPercent: 4 },
        {
          xPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="my-36 md:my-52 overflow-hidden select-none py-12"
      style={{ fontFamily: "Sora Variable, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-3 md:gap-6">
        {/* Line 1 */}
        <div
          ref={line1Ref}
          className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 sm:gap-x-5 md:gap-x-7 will-change-transform"
        >
          {line1Words.map((word, i) => (
            <span
              key={i}
              ref={(el) => (words1Ref.current[i] = el)}
              className={`text-4xl sm:text-6xl md:text-8xl lg:text-[104px] font-extrabold tracking-tight leading-none inline-block will-change-transform ${
                word === "MODERN"
                  ? "bg-gradient-to-r from-purple-400 via-violet-300 to-white bg-clip-text text-transparent"
                  : "text-white"
              }`}
              style={{ transformOrigin: "bottom center" }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Line 2 */}
        <div
          ref={line2Ref}
          className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-5 md:gap-x-7 will-change-transform"
        >
          {line2Words.map((word, i) => (
            <span
              key={i}
              ref={(el) => (words2Ref.current[i] = el)}
              className={`text-4xl sm:text-6xl md:text-8xl lg:text-[104px] font-extrabold tracking-tight leading-none inline-block will-change-transform ${
                word === "LATEST" || word === "TECH"
                  ? "bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent"
                  : "text-white"
              }`}
              style={{ transformOrigin: "bottom center" }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modern;
