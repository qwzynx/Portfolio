"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = window.scrollY;
        const progress = Math.min(100, Math.max(0, (scrolled / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed bottom-6 md:bottom-auto left-1/2 md:left-6 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-50 rounded-full p-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
      style={{
        background: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.8) ${scrollProgress}%, rgba(255, 255, 255, 0.1) ${scrollProgress}%)`
      }}
    >
      <nav className="flex flex-row md:flex-col items-center gap-5 md:gap-10 px-6 py-3 md:py-8 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full h-full">
        {/* Logo - Hidden on tiny screens, shown on md+ */}
        <div className="hidden md:flex w-full justify-center">
          <Link href="#home" className="text-white text-2xl font-bold tracking-tighter" style={{ fontFamily: 'Cal Sans' }}>
            MG
          </Link>
        </div>

        {/* Primary Links */}
        <div className="flex flex-row md:flex-col gap-6 md:gap-8 items-center text-gray-300">
          <Link 
            href="#experience" 
            className="hover:text-white transition-colors duration-300 tracking-widest text-xs md:text-sm font-medium uppercase md:capitalize writing-v-rl"
            title="Experience"
          >
            <span className="md:hidden"><FaBriefcase size={20} /></span>
            <span className="hidden md:inline">Exp<span className="hidden lg:inline">erience</span></span>
          </Link>
          <Link 
            href="#projects" 
            className="hover:text-white transition-colors duration-300 tracking-widest text-xs md:text-sm font-medium uppercase md:capitalize writing-v-rl"
            title="Projects"
          >
            <span className="md:hidden"><FaCode size={20} /></span>
            <span className="hidden md:inline">Proj<span className="hidden lg:inline">ects</span></span>
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-white transition-colors duration-300 tracking-widest text-xs md:text-sm font-medium uppercase md:capitalize writing-v-rl"
            title="Contact"
          >
            <span className="md:hidden"><FaEnvelope size={20} /></span>
            <span className="hidden md:inline">Contact</span>
          </Link>
        </div>

        {/* Separator - Mobile only */}
        <div className="w-px h-6 bg-white/10 md:hidden mx-1"></div>

        {/* Social Icons */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-4 items-center text-gray-400">
          <a href="https://www.instagram.com/qwzynx/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaInstagram size={18} className="md:w-5 md:h-5 w-4.5 h-4.5" />
          </a>
          <a href="https://www.linkedin.com/in/mahan-ghafarian-b02ba0298/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin size={18} className="md:w-5 md:h-5 w-4.5 h-4.5" />
          </a>
          <a href="https://github.com/qwzynx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub size={18} className="md:w-5 md:h-5 w-4.5 h-4.5" />
          </a>
        </div>
      </nav>
    </div>
  );
}
