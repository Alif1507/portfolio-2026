import React, { useEffect, useState } from "react";
import axios from "axios";
import TiltedCard from "./assets/TiltedCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import OpeningPro from "./OpeningPro";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProjects() {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(
          "https://projects-sooty-chi.vercel.app/Projects/projects.json"
        );

        const data = res.data;
        const normalized = Array.isArray(data)
          ? data
          : Array.isArray(data?.projects)
          ? data.projects
          : Array.isArray(data?.Projects)
          ? data.Projects
          : [];

        if (isMounted) {
          if (normalized.length === 0) {
            setError("Unexpected response format from projects API.");
          } else {
            setProjects(normalized);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.response?.data?.message || err.message || "Something went wrong"
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

  return (
    <section
      style={{ fontFamily: "Sora Variable" }}
      className="min-h-screen w-full bg-gradient-to-b from-[#050507] via-[#0c0f17] to-[#06070a] text-white relative overflow-hidden"
    >
      <OpeningPro />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-24 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/15 blur-[110px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 space-y-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 10.8 }}
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-3">
              Showcase
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h1>
            <p className="text-gray-300 mt-3 max-w-2xl">
              A curated selection of builds across web, design, and data hover to
              explore the visuals and stack.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/"
              className="rounded-full px-4 py-2 border border-white/20 text-sm hover:border-white/50 transition-colors"
            >
              Back Home
            </Link>
            <a
              href="https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-sm bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 hover:brightness-110 transition-all"
            >
              Connect
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 10.8 },
            },
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id ?? index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.98 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/60 via-blue-500/60 to-red-500/60 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
              <div className="relative rounded-2xl bg-[#0c0f17] p-4 h-full flex flex-col gap-4">
                <TiltedCard
                  imageSrc={`https://github.com/Alif1507/projects/blob/main/Projects/img/thubnail${proj.id}.png?raw=true`}
                  altText={proj.judul}
                  captionText={proj.category}
                  containerHeight="260px"
                  containerWidth="100%"
                  imageHeight="260px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.02}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="bg-black/50 text-white px-3 py-2 rounded-lg text-sm">
                      {proj.judul}
                    </div>
                  }
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span className="uppercase tracking-wide">{proj.category}</span>
                    <span className="text-xs bg-white/10 rounded-full px-3 py-1">
                      {proj.tech}
                    </span>
                  </div>
                  <a href={proj.link} target="_blank" className="text-2xl font-semibold hover:underline">{proj.judul}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
