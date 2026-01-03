import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Modern = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const charsRef = useRef([]); 

  const text = "I BUILD MODERN &";

  const chars = useMemo(() => Array.from(text), [text]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const charEls = charsRef.current;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        if (line) gsap.set(line, { clearProps: "all" });
        if (charEls.length) gsap.set(charEls, { clearProps: "all" });
        return;
      }

      gsap.set(charEls, { x: 20, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "sine.inOut" },
      });

      tl.fromTo(
        line,
        { opacity: 1 },
        { xPercent: 33, duration: 1, invalidateOnRefresh: true },
        0
      );

      tl.to(
        charEls,
        {
          x: 0,
          duration: 0.8,
          stagger: 0.05, 
        },
        0.1 
      );

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, section);

    return () => ctx.revert();
  }, [chars.length]);

  return (
    <section className="mt-64 text-center md:text-start text-3xl" ref={sectionRef}>
      <h1 ref={lineRef} className="md:text-[100px] font-bold text-white">
        {" "}
        {chars.map((ch, i) => (
          <span
            key={i}
            ref={(el) => (charsRef.current[i] = el)}
            className="inline-block"
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>
      <h1 className="md:text-[100px] font-bold text-white text-center">
        CLEAN UI WITH LATEST TECH
      </h1>
    </section>
  );
};

export default Modern;
