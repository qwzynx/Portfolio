"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 rounded-full p-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
      style={{
        background: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.8) ${scrollProgress}%, rgba(255, 255, 255, 0.1) ${scrollProgress}%)`
      }}
    >
      <nav className="w-16 flex flex-col items-center gap-10 py-8 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full h-full">
        {/* Logo */}
        <div className="w-full flex justify-center">
          <Link href="#home" className="text-white text-2xl font-bold tracking-tighter" style={{ fontFamily: 'Cal Sans' }}>
            MG
          </Link>
        </div>

        {/* Primary Links */}
        <div className="flex flex-col gap-8 items-center text-gray-300">
          <Link 
            href="#experience" 
            className="hover:text-white transition-colors duration-300 tracking-widest text-sm font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Experience
          </Link>
          <Link 
            href="#projects" 
            className="hover:text-white transition-colors duration-300 tracking-widest text-sm font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-white transition-colors duration-300 tracking-widest text-sm font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4 items-center text-gray-400">
          <a href="https://www.instagram.com/qwzynx/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mahan-ghafarian-b02ba0298/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/qwzynx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub size={20} />
          </a>
        </div>
      </nav>
    </div>
  );
}
