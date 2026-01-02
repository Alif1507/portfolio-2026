import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import axios from "axios";
import TiltedCard from "./assets/TiltedCard";

const Projects = () => {
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function ambilData() {
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
            setProject(normalized);
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

    ambilData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const visibleProjects = project.slice(0, 4);

  const enter = (index) => {
    const card = cardRefs.current[index];
    const arrow = arrowRefs.current[index];
    if (!card || !arrow) return;

    gsap.to(card, {
      x: 150,
      duration: 0.35,
      ease: "power3.inOut",
    });

    gsap.to(arrow, {
      x: 120,
      scale: 4,
      duration: 0.35,
      ease: "power3.inOut",
    });
  };

  const leave = (index) => {
    const card = cardRefs.current[index];
    const arrow = arrowRefs.current[index];
    if (!card || !arrow) return;

    gsap.to(card, {
      x: 0,
      duration: 0.35,
      ease: "power3.inOut",
    });

    gsap.to(arrow, {
      x: -100,
      scale: 1,
      duration: 0.35,
      ease: "power3.inOut",
    });
  };

  return (
    <section
      className="mt-64 text-white"
      style={{ fontFamily: "Sora Variable" }}
      id="projects"
    >
      <h1 className="text-white text-[96px] font-bold mb-24 ml-16">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 mx-4 md:mx-16">
        {visibleProjects.map((d, index) => (
          <div
            key={d.id ?? index}
            className="flex flex-col w-[600px] overflow-hidden"
            onMouseEnter={() => enter(index)}
            onMouseLeave={() => leave(index)}
          >
            <TiltedCard
              imageSrc={`https://github.com/Alif1507/projects/blob/main/Projects/img/thubnail${d.id}.png?raw=true`}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText={`${d.judul}`}
              containerHeight="300px"
              containerWidth="600px"
              imageHeight="300px"
              imageWidth="600px"
              rotateAmplitude={12}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
            <div className="flex flex-row justify-between items-center font-extralight text-sm mt-2">
              <span>{d.tech}</span>
              <span>{d.category}</span>
            </div>
            <h1 className="text-5xl font-bold mt-5 flex items-center">
              <svg
                ref={(el) => {
                  arrowRefs.current[index] = el;
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 -translate-x-[100%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <a
                href={d.link}
                target="_blank"
                className="hover:underline"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                {d.judul}
              </a>
            </h1>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-screen">
        <Link to="/projects">
          <button
            className="border-2 border-transparent mt-16
        bg-gradient-to-r from-[#280087] to-[#C00000]
        bg-clip-padding p-1 relative text-white rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="bg-black text-white p-4 rounded-full">
              SEE ALL PROJECTS
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
