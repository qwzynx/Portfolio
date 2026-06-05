import Hero from "./components/hero";
import MainContent from "./components/main-content";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Snap Point 1: The Hero */}
      <div className="snap-start w-full">
        <Hero />
      </div>

      {/* Snap Point 2: The Start of Content */}
      <div className="snap-start w-full pt-8 md:pt-10">
        <MainContent />
      </div>
    </div>
  );
}
