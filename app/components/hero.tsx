"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <span className="text-blue-400 inline-block min-w-[120px] sm:min-w-[200px]">
      {currentText}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-[95dvh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 md:px-12 py-16 lg:py-0">
      {/* Left side: Text & Description */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
          I specialize in bridging the gap between elegant design and robust engineering, 
          building scalable applications that deliver exceptional user experiences.
        </p>
      </motion.div>

      {/* Right side: Portrait Circle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full max-w-xl flex justify-center items-center z-10 perspective"
      >
        <div className="relative group w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
          {/* Animated Glow Behind */}
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-blue-600 to-purple-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          
          {/* The Circle Container */}
          <div className="relative w-full h-full rounded-full p-1 bg-linear-to-bl from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] group-hover:scale-[1.02] hover:-rotate-2 transition-all duration-700">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden border-4 border-[#0a0a0a] relative">
              
              {/* Using standard img for this specific container to ensure visibility */}
              <img 
                src="/portrait.jpg" 
                alt="Mahan Ghafarian" 
                className="w-full h-full object-cover object-[center_30%] opacity-90 group-hover:opacity-100 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
