import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

const Gallery = () => {
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
      <div className="flex flex-row gap-10">
        <img src="/img/pfp-g0d.png" alt="@g0.d_usopp.ps" />
        <div>
          <h1 className="text-[128px] text-white font-bold">My Gallery</h1>
          <p className="text-[32px] text-white">@g0.d_usopp.ps</p>
        </div>
      </div>
      <div className="w-full justify-center">
        <video
          src="/output.mp4"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        />
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
