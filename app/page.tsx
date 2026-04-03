import Hero from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <Experience />
    </main>
  );
}
