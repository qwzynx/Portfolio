import Hero from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Snap Point 1: The Hero */}
      <div className="snap-start w-full">
        <Hero />
      </div>

      {/* Snap Point 2: The Start of Content */}
      <div className="snap-start w-full flex flex-col gap-6 md:gap-8 pb-16 pt-8 md:pt-10">
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
