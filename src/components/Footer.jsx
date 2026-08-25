import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex flex-col items-center justify-around gap-3 px-4 py-6 text-center text-sm text-white sm:flex-row">
      <div className="absolute top-0 left-0 w-screen h-[1px] bg-white" />
      <a href="mailto:m.alifwahyudi2007@gmail.com">
        m.alifwahyudi2007@gmail.com
      </a>
      <p>{currentYear} &copy; MAW</p>
    </footer>
  );
};

export default Footer;
