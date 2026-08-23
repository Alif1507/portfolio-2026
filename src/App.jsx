import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Modern from "./components/Modern";
import Gallery from "./components/Gallery";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Pencapaian from "./components/Pencapaian";
import Together from "./components/Together";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ClickSpark from "./components/assets/ClickSpark";
import IntroLoader from "./components/IntroLoader";
import ProjectsPage from "./components/ProjectsPage";

const HomePage = () => (
  <>
    <IntroLoader />
    <Navbar />
    <Hero />
    <About />
    <Modern />
    <Tech />
    <Projects />
    <Pencapaian />
    <Together />
    <Footer />
  </>
);

const App = () => {
  return (
    <main style={{ fontFamily: "Sora Variable" }}>
      <BrowserRouter>
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </ClickSpark>
      </BrowserRouter>
    </main>
  );
};

export default App;
