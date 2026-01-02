import React, { useState } from "react";
import Bumi3d from "./assets/Bumi3d";
import Particles from "./assets/Particles";
import BubbleMenu from "./assets/BubbleMenu";

const Together = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const recipientEmail = "m.alifwahyudi2007@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${form.name || "Portfolio"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
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
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden mb-64"
      id="contact"
    >
      <div className="relative w-screen h-screen flex items-center justify-center">
        <Bumi3d />
        <h1 className="text-white text-[128px] font-bold absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
          Let’s Work <br />
          Together!
        </h1>
        <div className="absolute h-full w-full -z-10">
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
      <div className="mt-24 w-[400px] md:w-[600px] lg:w-[1000px] px-4 md:px-0">
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
              className="w-full rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 hover:brightness-110 transition-all"
            >
              <span className="block w-full rounded-[10px] bg-black py-3 text-base font-semibold tracking-wide">
                Send Message
              </span>
            </button>
          </div>
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
