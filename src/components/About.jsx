import React from "react";
import Marquee from "react-fast-marquee";
import ProfileCard from "./assets/ProfileCard";

const About = () => {
  return (
    <section id="about" className="mt-64 relative">
    <div className="flex justify-center items-center scale-130 relative z-20">
        <ProfileCard
        name="M. Alif Wahyudi"
        title="Full Stack Developer"
        handle="MAW"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/img/foto-diri.png"
        showUserInfo={false}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
    <div className="overflow-hidden absolute inset-0 pointer-events-none select-none flex justify-center items-center">
      <div className="flex flex-col gap-8 md:gap-12 w-[140vw] -rotate-6 opacity-30 md:opacity-40">
        <Marquee speed={35} gradient={false}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 md:mx-10 text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)" }}
            >
              MAW
            </span>
          ))}
        </Marquee>

        <Marquee direction="right" speed={30} gradient={false}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 md:mx-10 text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)" }}
            >
              MAW
            </span>
          ))}
        </Marquee>

        <Marquee speed={40} gradient={false}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 md:mx-10 text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)" }}
            >
              MAW
            </span>
          ))}
        </Marquee>

        <Marquee direction="right" speed={35} gradient={false}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 md:mx-10 text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)" }}
            >
              MAW
            </span>
          ))}
        </Marquee>

        <Marquee speed={25} gradient={false}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 md:mx-10 text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)" }}
            >
              MAW
            </span>
          ))}
        </Marquee>
      </div>
    </div>

    </section>
  );
};

export default About;
