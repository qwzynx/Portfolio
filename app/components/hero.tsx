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
    <section className="w-full min-h-[calc(100vh-200px)] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 pt-20 px-4 md:px-12">
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

      {/* Right side: Interactive Code Block Box */}
      <div className="flex-1 w-full max-w-xl group perspective z-10">
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-500 group-hover:scale-[1.02] -rotate-2 group-hover:rotate-0">
          <div className="bg-[#0f111a] rounded-[10px] p-6 text-sm md:text-base font-mono leading-loose tracking-wide h-full w-full">
            {/* Windows Window Controls */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-800/60 pb-2 -mt-2 -mx-2 px-2">
              <div className="text-xs text-gray-500 font-sans tracking-tight">developer.js</div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center hover:bg-white/10 text-gray-400 transition-colors cursor-pointer rounded-sm">
                  <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor"><rect width="10" height="1" /></svg>
                </div>
                <div className="w-8 h-8 flex items-center justify-center hover:bg-white/10 text-gray-400 transition-colors cursor-pointer rounded-sm">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"><rect x="0.5" y="0.5" width="9" height="9" /></svg>
                </div>
                <div className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white text-gray-400 transition-colors cursor-pointer rounded-sm">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M1 0.292969L0.292969 1L4.29297 5L0.292969 9L1 9.70703L5 5.70703L9 9.70703L9.70703 9L5.70703 5L9.70703 1L9 0.292969L5 4.29297L1 0.292969Z"/></svg>
                </div>
              </div>
            </div>
            <p>
              <span className="text-blue-400">const</span>{' '}
              <span className="text-white">developer</span>{' '}
              <span className="text-blue-400">=</span>{' '}
              <span className="text-yellow-300">{'{'}</span>
            </p>
            <div className="pl-6">
              <p>
                <span className="text-purple-300">name</span>: <span className="text-green-300">&apos;Mahan Ghafarian&apos;</span>,
              </p>
              <p>
                <span className="text-purple-300">skills</span>: <span className="text-blue-300">[</span>
              </p>
              <div className="pl-6 text-green-300">
                &apos;React&apos;, &apos;TypeScript&apos;, &apos;Next.js&apos;,<br/>
                &apos;Python&apos;, &apos;TailwindCSS&apos;, &apos;Node.js&apos;
              </div>
              <p>
                <span className="text-blue-300">]</span>,
              </p>
              <p>
                <span className="text-purple-300">hardWorker</span>: <span className="text-orange-400">true</span>,
              </p>
              <p>
                <span className="text-purple-300">quickLearner</span>: <span className="text-orange-400">true</span>
              </p>
            </div>
            <p className="text-yellow-300">{'};'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
