"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function Typewriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0]);
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
    <span className="text-blue-400 inline-block min-w-[120px] sm:min-w-[200px]">
      {currentText}
      <span className="animate-pulse text-white inline-block ml-0.5" aria-hidden="true">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToBottom = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-[95dvh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 md:px-12 py-16 lg:py-0">
      {/* Left side: Text & Description */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col items-start z-10 max-w-2xl w-full"
      >
        <p className="text-lg md:text-xl text-blue-400 font-medium tracking-wide mb-2 uppercase">Hello, I&apos;m</p>
        <h1 className="font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-gray-400 leading-[1.05] py-2 pr-4 drop-shadow-sm">
          MAHAN<br />GHAFARIAN
        </h1>
        
        <div className="text-xl md:text-3xl font-medium text-gray-300 mt-2 mb-6">
          I&apos;m a <Typewriter words={["Software Engineer.", "Security Enthusiast.", "Hardware Hacker."]} />
        </div>
        
        <p className="text-gray-400 max-w-lg leading-relaxed text-base md:text-lg">
          Software Engineering student at York University in the Software Security stream, and
          Application Support Intern at HomeEquity Bank. I build local-first apps and full-stack
          web tools, and most of them start with a problem I ran into myself.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.7)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={scrollToBottom}
            className="px-7 py-3 rounded-full border border-white/15 text-gray-200 text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-blue-400/50 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Right side: Portrait Circle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="flex-1 w-full max-w-xl flex justify-center items-center z-10 perspective"
      >
        <div className="relative group w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] animate-float">
          {/* Animated Glow Behind */}
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-blue-600 to-purple-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          
          {/* The Circle Container */}
          <div className="relative w-full h-full rounded-full p-1 bg-linear-to-bl from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] group-hover:scale-[1.02] hover:-rotate-2 transition-all duration-700">
            <div className="relative w-full h-full rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden border-4 border-[#0a0a0a]">
              <Image 
                src="/portrait.webp" 
                alt="Mahan Ghafarian" 
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 288px, (max-width: 1024px) 384px, 448px"
                preload={true}
                className="object-cover object-[center_30%] opacity-90 group-hover:opacity-100 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors duration-300 z-10"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
