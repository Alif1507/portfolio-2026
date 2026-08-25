"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import ProfileCard from "./assets/ProfileCard";

const marqueeRows = [
  { direction: "left", speed: 35, opacity: "opacity-30" },
  { direction: "right", speed: 30, opacity: "opacity-45" },
  { direction: "left", speed: 40, opacity: "opacity-55" },
  { direction: "right", speed: 35, opacity: "opacity-40" },
  { direction: "left", speed: 25, opacity: "opacity-25" },
];

function MawWordmark() {
  return (
    <Image
      src="/img/MAW.png"
      alt=""
      width={263}
      height={75}
      draggable={false}
      className="mx-5 h-auto w-[11.5rem] select-none sm:mx-7 sm:w-[14rem] md:mx-9 md:w-[16.5rem]"
    />
  );
}

export default function About() {
  return (
    <section id="about" className="relative mt-64">
      <div className="relative z-20 flex scale-130 items-center justify-center">
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

      <div className="relative z-20 mx-auto mt-28 max-w-3xl px-6 text-center text-white">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Engineering with a designer&apos;s eye.
        </h2>
        <p className="mt-5 text-base leading-7 text-zinc-300 md:text-lg">
          I design and build responsive web and mobile products, turning ideas
          into interfaces that feel focused, fast, and easy to use.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="about-marquee pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <div className="flex w-[145vw] -rotate-6 flex-col gap-7 py-6 sm:gap-9 md:gap-11">
          {marqueeRows.map((row) => (
            <div key={`${row.direction}-${row.speed}`} className={row.opacity}>
              <Marquee
                autoFill
                direction={row.direction}
                speed={row.speed}
                gradient={false}
              >
                <MawWordmark />
              </Marquee>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.56)_35%,rgba(0,0,0,0.12)_68%,transparent_85%)]" />
      </div>
    </section>
  );
}
