"use client";

import { useState, useEffect } from "react";

function Typewriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-blue-400 inline-block min-w-[200px]">
      {currentText}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 md:px-12">
      {/* Left side: Text & Description */}
      <div className="flex-1 flex flex-col items-start z-10 max-w-2xl">
        <p className="text-xl text-gray-400 mb-1">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
          MAHAN<br className="hidden md:block"/> GHAFARIAN
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mt-2 mb-3">
          I&apos;m a <Typewriter words={["Software Developer.", "Creative Engineer.", "Tech Enthusiast."]} />
        </div>
        
        <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
          I specialize in bridging the gap between elegant design and robust engineering, 
          building scalable applications that deliver exceptional user experiences.
        </p>
      </div>

      {/* Right side: Portrait Circle */}
      <div className="flex-1 w-full max-w-xl flex justify-center items-center z-10 perspective">
        <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-104 lg:h-104">
          {/* Animated Glow Behind */}
          <div className="absolute -inset-2 rounded-full bg-blue-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          
          {/* The Circle Container */}
          <div className="relative w-full h-full rounded-full p-[3px] bg-blue-500 shadow-2xl group-hover:scale-[1.02] hover:-rotate-1 transition-all duration-500">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden border-[6px] border-[#0a0a0a] relative group-hover:border-blue-500/10 transition-colors duration-500">
              
              {/* To add your portrait here, you can uncomment and use the img tag: */}
              <img src="portrait.jpg" alt="Mahan Ghafarian" className="w-full h-full object-cover object-[center_30%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
