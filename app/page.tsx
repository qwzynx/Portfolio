import Hero from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-24 md:gap-32 pb-24">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
