"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const rows = [
  ["Frame-1.png", "Frame-2.png", "Frame-3.png", "Frame-4.png", "Frame-5.png", "Frame-6.png"],
  ["Frame.png", "Frame-7.png", "Frame-8.png", "Frame-9.png", "Frame-10.png", "Frame-11.png"],
  ["Frame-12.png", "Frame-13.png", "Frame-14.png", "Frame-15.png", "Frame-16.png", "Vector.png"],
];

const capabilities = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Laravel",
  "Flask",
  "Kotlin",
  "Jetpack Compose",
  "MySQL",
  "Supabase",
  "Figma",
  "GSAP",
  "Three.js",
];

export default function Tech() {
  return (
    <section className="mt-64" aria-labelledby="tech-heading">
      <div className="mx-auto mb-20 max-w-6xl px-6">
        <h2 id="tech-heading" className="text-5xl font-bold text-white md:text-[96px]">
          Tech Stack
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
          I work across {capabilities.join(", ")} to take products from interface concept to production-ready build.
        </p>
      </div>

      <div className="flex flex-col gap-16" aria-hidden="true">
        {rows.map((row, rowIndex) => (
          <Marquee key={rowIndex} direction={rowIndex === 1 ? "right" : "left"} gradient={false}>
            {[...row, ...row].map((file, index) => (
              <Image
                key={`${file}-${index}`}
                className="mx-10 h-10 w-24 object-contain sm:h-14 sm:w-32"
                src={`/img/tech/${file}`}
                alt=""
                width={128}
                height={56}
                sizes="128px"
              />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
