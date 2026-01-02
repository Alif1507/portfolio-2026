import React, { useEffect, useState } from "react";
import TiltedCard from "./assets/TiltedCard";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pencapaian = () => {
  const [competition, setCompetition] = useState([]);
  const [certif, setCertif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function ambilData() {
      try {
        setLoading(true);
        setError("");

        const [competitionRes, certifRes] = await Promise.all([
          axios.get(
            "https://projects-sooty-chi.vercel.app/Competiton/competition.json"
          ),
          axios.get("https://projects-sooty-chi.vercel.app/Certif/certif.json"),
        ]);

        const competitionData = competitionRes.data;
        const competitionNormalized = Array.isArray(competitionData)
          ? competitionData
          : Array.isArray(competitionData?.competition)
          ? competitionData.competition
          : Array.isArray(competitionData?.Competitions)
          ? competitionData.Competitions
          : Array.isArray(competitionData?.Competition)
          ? competitionData.Competition
          : [];

        const certifData = certifRes.data;
        const certifNormalized = Array.isArray(certifData)
          ? certifData
          : Array.isArray(certifData?.certif)
          ? certifData.certif
          : Array.isArray(certifData?.certifs)
          ? certifData.certifs
          : [];

        if (isMounted) {
          let message = "";

          if (competitionNormalized.length === 0) {
            message = "Unexpected response format from Competitions API.";
          } else {
            setCompetition(competitionNormalized);
          }

          if (certifNormalized.length === 0) {
            message = "Unexpected response format from Certif API.";
          } else {
            setCertif(certifNormalized);
          }

          if (message) setError(message);
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

  return (
    <section className="mt-64" style={{ fontFamily: "Sora Variable" }}>
      <h1 className="text-white text-[96px] font-bold mb-24 ml-16">
        My Achievements
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl">Competitions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 mx-4 md:mx-16 mt-16">
          {competition.map((c, index) => (
            <a className="cursor-pointer" href={c.link} target="_blank">
              <TiltedCard
                key={c.id ?? index}
                imageSrc={`https://github.com/Alif1507/projects/blob/main/Competiton/img/thubnail${c.id}.jpg?raw=true`}
                altText={c.category}
                captionText={c.category}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-white font-bold bg-slate-500/70 p-2 text-xs rounded-full">
                    {c.judul}
                  </p>
                }
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl mt-24 mb-10">Certifications</h1>
        <article className="relative w-full px-4 md:px-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{
              "--swiper-navigation-color": "#c0c0c0",
              "--swiper-pagination-color": "#c0c0c0",
              "--swiper-pagination-bullet-inactive-color": "#9aa0a6",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {certif.map((cer, index) => (
              <SwiperSlide key={cer.id ?? index}>
                <section className="flex flex-col bg-gradient-to-r from-[#280087] to-[#C00000] items-center justify-around max-w-[410px] min-h-[400px] rounded-2xl p-1 relative mx-auto">
                  <div className="flex flex-col items-center justify-around w-full h-full bg-black rounded-2xl p-5 text-center gap-5">
                    <img
                      src={`https://raw.githubusercontent.com/Alif1507/projects/refs/heads/main/Certif/img/thubnail${cer.id}.png`}
                      className="h-[180px] w-auto"
                      alt={cer.judul}
                    />
                    <h1 className="text-white font-semibold text-2xl text-center">
                      {cer.judul}
                    </h1>
                    <a
                      href={cer.link}
                      className="my-7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-white font-semibold bg-gradient-to-tr hover:scale-105 from-[#280087] to-[#C00000] cursor-pointer p-3 rounded-xl transition-transform">
                        See More
                      </button>
                    </a>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>
    </section>
  );
};

export default Pencapaian;
