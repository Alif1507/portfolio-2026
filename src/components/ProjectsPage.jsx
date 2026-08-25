"use client";

import Link from "next/link";
import { motion } from "motion/react";
import TiltedCard from "./assets/TiltedCard";
import OpeningPro from "./OpeningPro";

export default function ProjectsPage({ projects = [] }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050507] via-[#0c0f17] to-[#06070a] text-white">
      <OpeningPro />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/15 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-12 px-6 py-16">
        <motion.header
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">Selected work</p>
            <h1 className="text-4xl font-bold md:text-6xl">Projects built to be used.</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-gray-300">
              Web products, interfaces, and data-driven builds by Muhammad Alif Wahyudi. Open a project to explore the live result.
            </p>
          </div>
          <nav className="flex gap-3" aria-label="Project page navigation">
            <Link href="/" className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-white/50">
              Back home
            </Link>
            <a
              href="https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 px-4 py-2 text-sm transition-all hover:brightness-110"
            >
              Connect
            </a>
          </nav>
        </motion.header>

        {projects.length > 0 ? (
          <motion.section
            aria-label="Project collection"
            className="grid grid-cols-1 gap-10 sm:grid-cols-2"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id ?? project.judul ?? index}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.98 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/60 via-blue-500/60 to-red-500/60 p-px"
              >
                <div className="relative flex h-full flex-col gap-4 rounded-2xl bg-[#0c0f17] p-4">
                  <TiltedCard
                    imageSrc={`https://raw.githubusercontent.com/Alif1507/projects/main/Projects/img/thubnail${project.id}.png`}
                    altText={`${project.judul} project preview`}
                    captionText={project.category}
                    containerHeight="260px"
                    containerWidth="100%"
                    imageHeight="260px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={<span className="rounded-lg bg-black/60 px-3 py-2 text-sm">{project.judul}</span>}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span className="uppercase tracking-wide">{project.category}</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{project.tech}</span>
                    </div>
                    <h2 className="text-2xl font-semibold">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.judul}
                      </a>
                    </h2>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.section>
        ) : (
          <p className="rounded-2xl border border-white/10 bg-white/5 p-8 text-gray-300">
            The project feed is temporarily unavailable. You can browse the source work on{" "}
            <a className="text-violet-300 underline" href="https://github.com/Alif1507" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        )}
      </div>
    </main>
  );
}
