

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

const Gallery = () => {
   const galleryItems = [
    {
      title: "Neon Noir",
      subtitle: "Night street study",
      img: "/gellery/1.png",
      colSpan: "col-span-4",
      rowSpan: "row-span-2",
    },
    {
      title: "Portrait Glow",
      subtitle: "Mood practice",
      img: "/gellery/2.png",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      title: "Cyber Alley",
      subtitle: "Perspective",
      img: "/gellery/3.png",
      colSpan: "col-span-3",
      rowSpan: "row-span-3",
    },
    {
      title: "Studio Light",
      subtitle: "Soft shadow",
      img: "/gellery/4.png",
      colSpan: "col-span-3",
      rowSpan: "row-span-2",
    },
    {
      title: "Chrome Dreams",
      subtitle: "Specular study",
      img: "/gellery/5.png",
      colSpan: "col-span-4",
      rowSpan: "row-span-3",
    },
    {
      title: "Kinetic Blur",
      subtitle: "Motion test",
      img: "/gellery/6.png",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
  ];
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const startValue = isMobile ? "top 50%" : "center 40%";
    const endValue = isMobile ? "+=1500" : "+=7500";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    video.onloadedmetadata = () => {
      tl.to(video, {
        currentTime: video.duration,
      });
    };
  }, []);
  return (
    <section className="flex flex-col justify-center items-center mt-64">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-center justify-center md:text-left w-full max-w-5xl">
        <img
          src="/img/pfp-g0d.png"
          alt="@g0.d_usopp.ps"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover"
        />
        <div className="space-y-2">
          <h1 className="text-white font-bold text-[42px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-none">
            My Gallery
          </h1>
          <p className="text-white text-lg md:text-2xl">@g0.d_usopp.ps</p>
        </div>
      </div>
      <div className="w-full justify-center max-sm:hidden">
        <video
          src="/output.mp4"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="sm:hidden mt-10 px-4 w-full">
          <div className="grid grid-cols-6 auto-rows-[84px] gap-3">
            {galleryItems.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className={`relative overflow-hidden rounded-2xl bg-[#111111] ${item.colSpan} ${item.rowSpan}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-3 bottom-3 text-white space-y-1">
                </div>
              </div>
            ))}
          </div>
        </div>
      <Marquee direction="right">
        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>

        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>

        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>

        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>

        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>

        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>

        <div className="mx-10">
          <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank">
            <img src="/img/instagrram.png" alt="" />
          </a>
        </div>
      </Marquee>
    </section>
  );
};

export default Gallery;
