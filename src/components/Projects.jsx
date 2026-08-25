"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import TiltedCard from "./assets/TiltedCard";

export default function Projects({ projects = [] }) {
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);
  const visibleProjects = projects.slice(0, 4);

  const enter = (index) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const card = cardRefs.current[index];
    const arrow = arrowRefs.current[index];
    if (!card || !arrow) return;
    gsap.to(card, { x: 150, duration: 0.35, ease: "power3.inOut" });
    gsap.to(arrow, { x: 120, scale: 4, duration: 0.35, ease: "power3.inOut" });
  };

  const leave = (index) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const card = cardRefs.current[index];
    const arrow = arrowRefs.current[index];
    if (!card || !arrow) return;
    gsap.to(card, { x: 0, duration: 0.35, ease: "power3.inOut" });
    gsap.to(arrow, { x: -100, scale: 1, duration: 0.35, ease: "power3.inOut" });
  };

  return (
    <section className="mt-32 px-4 text-white md:mt-48 md:px-8 lg:mt-64" id="projects" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-12">
        <h2 id="projects-heading" className="text-[46px] font-bold sm:text-[64px] md:text-[80px] lg:text-[96px]">
          My Projects
        </h2>

        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id ?? project.judul ?? index}
                className="flex w-full flex-col overflow-hidden rounded-2xl bg-black/40 p-4 backdrop-blur-sm md:p-6"
                onMouseEnter={() => enter(index)}
                onMouseLeave={() => leave(index)}
              >
                <TiltedCard
                  imageSrc={`https://raw.githubusercontent.com/Alif1507/projects/main/Projects/img/thubnail${project.id}.png`}
                  altText={`${project.judul} project preview`}
                  captionText={project.judul}
                  containerHeight="240px"
                  containerWidth="100%"
                  imageHeight="240px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1}
                  showMobileWarning={false}
                  showTooltip
                />
                <div className="mt-4 flex items-center justify-between text-xs font-extralight md:text-sm">
                  <span className="text-gray-300">{project.tech}</span>
                  <span className="text-gray-300">{project.category}</span>
                </div>
                <h3 className="mt-3 flex items-center gap-2 text-3xl font-bold md:text-4xl">
                  <svg
                    ref={(element) => { arrowRefs.current[index] = element; }}
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 -translate-x-full"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    ref={(element) => { cardRefs.current[index] = element; }}
                  >
                    {project.judul}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 bg-white/5 p-6 text-gray-300">
            Project details are temporarily unavailable. Visit my GitHub to see the latest work.
          </p>
        )}

        <div className="flex w-full items-center justify-center">
          <Link
            href="/projects"
            className="mt-16 rounded-full bg-gradient-to-r from-[#280087] to-[#C00000] p-[2px] text-sm font-semibold tracking-wider text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            <span className="block rounded-full bg-black px-6 py-4">SEE ALL PROJECTS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
