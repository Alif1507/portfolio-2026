"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Bumi3d = dynamic(() => import("./assets/Bumi3d"), {
  ssr: false,
  loading: () => (
    <div
      className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.28),transparent_42%)]"
      aria-hidden="true"
    />
  ),
});
const Particles = dynamic(() => import("./assets/Particles"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" aria-hidden="true" />,
});
const BubbleMenu = dynamic(() => import("./assets/BubbleMenu"), {
  ssr: false,
  loading: () => <div className="h-32" aria-hidden="true" />,
});

const Together = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    fetch("https://formspree.io/f/xykzdwdo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.error) {
          throw new Error(data.error || "Failed to send message.");
        }
        setStatus({ state: "success", message: "Message sent! Thanks for reaching out." });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setStatus({
          state: "error",
          message: err.message || "Could not send message. Please try again.",
        });
      });
  };

  const items = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/m._a_.w/',
    ariaLabel: 'Instagram',
    rotation: -8,
    hoverStyles: { bgColor: '#FF0069', textColor: '#ffffff' }
  },
  {
    label: 'Github',
    href: 'https://github.com/Alif1507',
    ariaLabel: 'Github',
    rotation: 8,
    hoverStyles: { bgColor: '#181717', textColor: '#ffffff' }
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/',
    ariaLabel: 'LinkedIn',
    rotation: 8,
    hoverStyles: { bgColor: '#264E70', textColor: '#ffffff' }
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@alif2007_',
    ariaLabel: 'TikTok',
    rotation: 8,
    hoverStyles: { bgColor: '#000000', textColor: '#ffffff' }
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/mawfree',
    ariaLabel: 'upwork',
    rotation: -8,
    hoverStyles: { bgColor: '#6FDA44', textColor: '#ffffff' }
  }
];
  return (
    <section
      style={{ fontFamily: "Sora Variable" }}
      className="relative isolate mt-64 mb-64 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black"
      id="contact"
    >
      <div className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
        <Bumi3d />
        <h2 className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 px-5 text-center text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-[128px]">
          Let’s Work <br />
          Together!
        </h2>
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
      <div className="relative z-20 mt-24 w-full max-w-[1000px] px-4 md:px-6">
        <form onSubmit={handleSubmit} className="w-full space-y-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-3 text-sm md:text-base">
              <span className="font-semibold">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ucok"
                className="w-full rounded-full bg-[#3a3a3a] text-[#d8d8d8] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6a6a6a] border border-transparent"
                required
              />
            </label>

            <label className="flex flex-col gap-3 text-sm md:text-base">
              <span className="font-semibold">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ucok@gmail.com"
                className="w-full rounded-full bg-[#3a3a3a] text-[#d8d8d8] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6a6a6a] border border-transparent"
                required
              />
            </label>
          </div>

          <label className="flex flex-col gap-3 text-sm md:text-base">
            <span className="font-semibold">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full min-h-[300px] md:min-h-[400px] rounded-3xl bg-[#3a3a3a] text-[#d8d8d8] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#6a6a6a] border border-transparent resize-none"
              required
            />
          </label>

          <div className="relative">
            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="block w-full rounded-[10px] bg-black py-3 text-base font-semibold tracking-wide">
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>
          {status.message && (
            <p
              className={`text-sm ${
                status.state === "error" ? "text-red-400" : "text-green-400"
              }`}
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </form>
        <BubbleMenu
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        className={"justify-center items-center flex mt-32"}
      />
      </div>

      
    </section>
  );
};

export default Together;
