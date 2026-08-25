"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import "../styles/loader.css";

const ALWAYS_PLAY_INTRO = true; // Set false for production once-per-session

const IntroLoader = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const wordsContainerRef = useRef(null);
  const thisRef = useRef(null);
  const isRef = useRef(null);
  const mawRef = useRef(null);
  const tlRef = useRef(null);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // ── 1. Asset Preloader ──
  useEffect(() => {
    if (!ALWAYS_PLAY_INTRO) {
      const hasPlayed = sessionStorage.getItem("maw-intro-played");
      if (hasPlayed) {
        setIsFinished(true);
        return;
      }
    }

    let cancelled = false;

    const waitForAssets = async () => {
      try {
        const promises = [];

        // Fonts
        if (document.fonts?.ready) {
          promises.push(document.fonts.ready);
        }

        // Critical images
        ["/logo.png"].forEach((src) => {
          promises.push(
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.complete ? resolve() : ((img.onload = resolve), (img.onerror = resolve));
            })
          );
        });

        // Window load with fallback timeout
        promises.push(
          new Promise((resolve) => {
            if (document.readyState === "complete") return resolve();
            window.addEventListener("load", resolve, { once: true });
            setTimeout(resolve, 2000);
          })
        );

        await Promise.all(promises);
      } catch (_) {
        /* continue regardless */
      } finally {
        if (!cancelled) setAssetsLoaded(true);
      }
    };

    waitForAssets();
    return () => { cancelled = true; };
  }, []);

  // ── 2. Master GSAP Timeline ──
  useEffect(() => {
    if (!assetsLoaded || isFinished) return;

    if (prefersReducedMotion) {
      setIsFinished(true);
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    // ---- Set hero elements hidden for coordinated reveal ----
    gsap.set(".navbar-logo", { opacity: 0 });
    gsap.set(".nav-item", { opacity: 0, y: -15 });
    gsap.set(".hero-eyebrow", { opacity: 0, y: 20 });
    gsap.set(".hero-name", { clipPath: "inset(0 100% 0 0)" });
    gsap.set(".hero-description", { opacity: 0, y: 20 });
    gsap.set(".hero-actions", { opacity: 0, scale: 0.95, y: 20 });
    gsap.set(".aurora-container", { opacity: 0 });
    gsap.set(".hero-scroll-container", { opacity: 0, y: 15 });

    // ---- Set loader word states ----
    if (thisRef.current && isRef.current && mawRef.current) {
      gsap.set([thisRef.current, isRef.current, mawRef.current], {
        opacity: 0,
        y: 30,
      });
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setIsFinished(true);
        sessionStorage.setItem("maw-intro-played", "true");
      },
    });
    tlRef.current = tl;

    // ── Step 1: Counter 0 → 1,000 ──
    tl.to(counter, {
      value: 1000,
      duration: 4.8,
      ease: "power4.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toLocaleString();
        }
      },
    })
      .to({}, { duration: 0.4 })

      // ── Step 2: Counter exit ──
      .to(counterRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.35,
        ease: "power2.inOut",
      })

      // ── Step 3: THIS ──
      .to(thisRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" })
      .to({}, { duration: 0.45 })
      .to(thisRef.current, { opacity: 0, y: -40, duration: 0.4, ease: "power3.inOut" })

      // ── Step 4: IS ──
      .to(isRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, "-=0.2")
      .to({}, { duration: 0.5 })
      .to(isRef.current, { opacity: 0, y: -40, duration: 0.4, ease: "power3.inOut" })

      // ── Step 5: MAW centered ──
      .to(mawRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, "-=0.2")
      .to({}, { duration: 1.3 })

      // ── Step 6: MAW → Navbar flight ──
      .call(() => {
        const loaderLogo = mawRef.current;
        const allNavbarLogos = document.querySelectorAll(".navbar-logo");

        // Find the visible navbar logo (may differ between desktop / mobile)
        let navbarLogo = null;
        for (const el of allNavbarLogos) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) {
            navbarLogo = el;
            break;
          }
        }
        if (!navbarLogo && allNavbarLogos.length) {
          navbarLogo = allNavbarLogos[0];
        }

        if (loaderLogo && navbarLogo) {
          const start = loaderLogo.getBoundingClientRect();
          const target = navbarLogo.getBoundingClientRect();

          const dx = target.left + target.width / 2 - (start.left + start.width / 2);
          const dy = target.top + target.height / 2 - (start.top + start.height / 2);
          const s = (target.height || 20) / (start.height || 40);

          gsap.to(loaderLogo, {
            x: dx,
            y: dy,
            scale: Math.max(s, 0.3),
            duration: 1.0,
            ease: "power4.inOut",
            onComplete: () => {
              gsap.set(".navbar-logo", { opacity: 1 });
              gsap.set(loaderLogo, { opacity: 0 });
            },
          });
        } else {
          gsap.set(".navbar-logo", { opacity: 1 });
        }
      })

      // ── Step 7: Loader fade-out ──
      .to(loaderRef.current, { opacity: 0, duration: 1.0, ease: "power3.inOut" }, "+=0.1")

      // ── Step 8: Coordinated hero reveal ──
      .to(".aurora-container", { opacity: 1, duration: 1.0, ease: "power2.out" }, "-=0.7")
      .to(".nav-item", { opacity: 1, y: 0, stagger: 0.06, duration: 0.5, ease: "power3.out" }, "-=0.6")
      .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.4")
      .to(".hero-name", { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.inOut" }, "-=0.3")
      .to(".hero-description", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.4")
      .to(".hero-actions", { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .to(".hero-scroll-container", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.2");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [assetsLoaded, isFinished, prefersReducedMotion]);

  // ── Render ──
  return (
    <div
      ref={loaderRef}
      className={`intro-loader${isFinished ? " is-finished" : ""}`}
      style={isFinished ? { display: "none" } : undefined}
      aria-live="polite"
      aria-label="Loading animation"
    >
      {!assetsLoaded ? (
        <div className="intro-asset-preloader">
          <div className="intro-preloader-pulse" aria-hidden="true" />
          <span>Loading…</span>
        </div>
      ) : (
        <>
          <div ref={counterRef} className="loader-counter" aria-hidden="true">
            0
          </div>
          <div ref={wordsContainerRef} className="intro-word-container" aria-hidden="true">
            <span ref={thisRef}>THIS</span>
            <span ref={isRef}>IS</span>
            <span ref={mawRef} className="word-maw">MAW</span>
          </div>
        </>
      )}
    </div>
  );
};

export default IntroLoader;
