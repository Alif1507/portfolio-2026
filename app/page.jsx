import Navbar from "../src/components/Navbar";
import IntroLoader from "../src/components/IntroLoader";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Modern from "../src/components/Modern";
import Tech from "../src/components/Tech";
import Projects from "../src/components/Projects";
import Pencapaian from "../src/components/Pencapaian";
import Together from "../src/components/Together";
import Footer from "../src/components/Footer";
import { getPortfolioData } from "../src/lib/portfolio-data";

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function HomePage() {
  const { projects, competitions, certificates } = await getPortfolioData();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Alif Wahyudi",
      alternateName: "MAW",
      url: "https://www.alifwahyudi.my.id/",
      image: "https://www.alifwahyudi.my.id/img/foto-diri.png",
      jobTitle: "Full-Stack Web and Mobile Developer",
      knowsAbout: ["Web development", "Mobile development", "UI/UX design", "React", "Next.js"],
      sameAs: [
        "https://github.com/Alif1507",
        "https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/",
        "https://www.instagram.com/m._a_.w/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Muhammad Alif Wahyudi development projects",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.judul,
          url: project.link,
          genre: project.category,
          keywords: project.tech,
          creator: { "@type": "Person", name: "Muhammad Alif Wahyudi" },
        },
      })),
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <IntroLoader />
      <Navbar />
      <Hero />
      <About />
      <Modern />
      <Tech />
      <Projects projects={projects} />
      <Pencapaian competitions={competitions} certificates={certificates} />
      <Together />
      <Footer />
    </main>
  );
}
