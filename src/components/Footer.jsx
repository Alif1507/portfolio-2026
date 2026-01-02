import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-row items-center justify-around py-6 text-white relative">
      <div className="absolute top-0 left-0 w-screen h-[1px] bg-white" />
      <a href="mailto:m.alifwahyudi2007@gmailcom">
        m.alifwahyudi2007@gmailcom
      </a>
      <p>{currentYear} &copy; MAW</p>
    </footer>
  );
};

export default Footer;
