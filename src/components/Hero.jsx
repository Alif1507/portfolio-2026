import React, { useCallback } from "react";
import AuroraBackground from "./AuroraBackground";
import { Github, ArrowDown } from "lucide-react";
import "../styles/hero.css";

const Hero = () => {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToAbout();
      }
    },
    [scrollToAbout]
  );

  return (
    <section id="home" className="hero-section" style={{ fontFamily: "Sora Variable" }}>
      <AuroraBackground />

      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I'm</p>

        <div className="hero-name-mask">
          <h1 className="hero-name">Muhammad Alif Wahyudi</h1>
        </div>

        <p className="hero-description">
          I'm a Web Developer, UI/UX Designer, and Mobile Developer.
        </p>

        <div className="hero-actions">
          <a
            href="https://github.com/Alif1507"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-github"
            aria-label="GitHub Profile"
          >
            <Github size={22} strokeWidth={1.8} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-connect"
          >
            <span className="hero-btn-connect-inner">Connect With Me</span>
          </a>
        </div>
      </div>

      <div
        className="hero-scroll-container"
        onClick={scrollToAbout}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to about section"
      >
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-arrow-wrapper">
          <ArrowDown size={18} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

export default Hero;