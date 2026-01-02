import React from "react";
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import DarkVeil from "./assets/Darkveil";

gsap.registerPlugin(SplitText);

const Hero = () => {
  // useGSAP(() => {
  //   gsap.set("#nama", { overflow: "hidden" });
  //   gsap.set([".hero-subtitle", ".hero-description", ".scroll-text", ".scroll-arrow"], {
  //     opacity: 0,
  //     y: 50
  //   });
    
  //   const heroText = new SplitText("#nama", { type: "chars,words" });
    
  //   gsap.set(heroText.chars, { yPercent: 100, opacity: 0 });
    
  //   const tl = gsap.timeline();
    
  //   tl.to(".hero-subtitle", {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1.2,
  //     delay: 10.9,
  //     ease: "power3.out",
  //   })
  //   .to(".hero-description", {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1.2,
  //     ease: "power3.out",
  //   }, "-=0.8")
  //   .to(heroText.chars, {
  //     yPercent: 0,
  //     opacity: 1,
  //     duration: 1.8,
  //     ease: "expo.out",
  //     stagger: 0.05,
  //   }, "-=0.5")
  //   .to(".scroll-text", {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //   }, "-=0.3")
  //   .to(".scroll-arrow", {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     ease: "back.out(1.7)",
  //   }, "-=0.5");
    
  //   gsap.to(".scroll-arrow", {
  //     y: -10,
  //     duration: 1.5,
  //     ease: "power2.inOut",
  //     yoyo: true,
  //     repeat: -1,
  //     delay: 3
  //   });
    
  // }, []);

  return (
    <section id="home"
      style={{ fontFamily: "Sora Variable" }}
      className="font-sora flex flex-col items-center relative min-h-screen"
    >
      <div style={{ width: '100%', height: '600px' }} className="absolute top-0">
        <DarkVeil />
      </div>
     
      <div className="relative z-10 mt-[155px]">
        <h2 className="text-3xl hero-subtitle bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent relative z-50 overflow-hidden">
          Hi, I'm
        </h2>
        <h1 id="nama" className="text-[81px] text-white font-bold overflow-hidden leading-tight max-sm:text-center max-sm:text-[48px]">
          Muhammad Alif Wahyudi
        </h1>
        <p className="text-3xl hero-description bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent text-center relative z-50 overflow-hidden mt-4">
          I’m a Web Developer, UI/UX Designer, and Photographer.
        </p>
        <div className="flex flex-row items-center justify-center mt-10 gap-10">
          <a href="https://github.com/Alif1507" target="_blank">
            <img src="/img/github.png" className="h-[50px] w-[50px] hover:scale-105 transition-all cursor-pointer duration-300" alt="" />
          </a>
          <button className="border-2 border-transparent
        bg-gradient-to-r from-[#280087] to-[#C00000]
        bg-clip-padding p-1 relative text-white rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="bg-black text-white p-4 rounded-full">
              <a href="https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/" target="_blank">
                Connect With Me
              </a>
            </div>
          </button>
        </div>
      </div>

     
      <div className="mt-[155px] flex flex-col items-center gap-10 relative z-10">
        <h1 className="text-3xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-extralight">
          Scroll Down
        </h1>
        <div className="animate-bounce">
          <img src="/img/Arrow 1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;