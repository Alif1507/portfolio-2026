"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navlinks = [
    {
      id: 1,
      text: "Home",
      link: "#home",
    },
    {
      id: 2,
      text: "About",
      link: "#about",
    },
    {
      id: 4,
      text: "Projects",
      link: "#projects",
    },
    {
      id: 5,
      text: "Achievements",
      link: "#achievements",
    },
    {
      id: 6,
      text: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex fixed top-4 inset-x-0 z-[9998] justify-center px-4 pointer-events-none">
        <nav className="flex justify-between items-center w-full max-w-5xl h-16 bg-black/40 backdrop-blur-xl border border-white/15 rounded-2xl px-8 shadow-2xl pointer-events-auto transition-all duration-300">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold tracking-wider text-white navbar-logo select-none">
              MAW
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              {navlinks.map((navlink) => (
                <li key={navlink.id} className="nav-item">
                  <a
                    href={navlink.link}
                    className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    {navlink.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 inset-x-0 z-[9998] flex justify-between items-center h-16 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6">
        <div>
          <a href="#home" className="text-lg font-bold tracking-wider text-white navbar-logo select-none">
            MAW
          </a>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isSidebarOpen}
          aria-controls="mobile-navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        id="mobile-navigation"
        aria-hidden={!isSidebarOpen}
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-zinc-950/95 backdrop-blur-2xl border-l border-white/15 shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-lg font-bold tracking-wider text-white">MAW</span>
          <button
            onClick={closeSidebar}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-4">
            {navlinks.map((navlink) => (
              <li key={navlink.id}>
                <a
                  href={navlink.link}
                  onClick={closeSidebar}
                  className="block text-zinc-200 hover:text-white font-medium text-base py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  {navlink.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
