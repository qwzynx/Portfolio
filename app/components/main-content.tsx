"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import GlitchText from "./glitch-text";

const SECTIONS = [
  { id: "skills", title: "SKILLS", subtitle: "I use arch btw" },
  { id: "experience", title: "EXPERIENCES", subtitle: "Professional journey" },
  { id: "projects", title: "PROJECT", subtitle: "Recent work" },
  { id: "contact", title: "CONTACT", subtitle: "Get in touch" }
];

export default function MainContent() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [hasShownHeader, setHasShownHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently most centered in the viewport
      const viewportCenter = window.innerHeight / 2;
      
      let currentActive = SECTIONS[0];
      let minDistance = Infinity;

      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Distance from the vertical center of the viewport to the vertical center of the section
          const sectionMid = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(sectionMid - viewportCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentActive = section;
          }
        }
      });

      if (currentActive.id !== activeSection.id) {
        setActiveSection(currentActive);
      }

      // Check if header should be visible (appears sooner, when skills section is approaching the top)
      const skillsElement = document.getElementById("skills");
      if (skillsElement) {
        const rect = skillsElement.getBoundingClientRect();
        // Trigger earlier (when top of skills is 400px from top)
        const visible = rect.top <= 400;
        setIsHeaderVisible(visible);
        if (visible && !hasShownHeader) {
          setHasShownHeader(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection.id, hasShownHeader]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative">
      {/* 
        The "Navbar" Title Section
        - Fixed to the top
        - Offset by md:pl-20 to account for side navbar
      */}
      <div className="fixed top-0 left-0 md:left-20 right-0 z-40 pointer-events-none flex justify-center pt-6 px-6">
        <AnimatePresence>
          {isHeaderVisible && (
            <motion.div
              initial={hasShownHeader ? { opacity: 1, y: 0 } : { y: -120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -120, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-full px-8 md:px-12 py-3 md:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-row items-center gap-6 md:gap-10"
            >
              <GlitchText 
                text={activeSection.title} 
                className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase"
              />
              
              {/* Vertical Separator */}
              <div className="w-px h-8 bg-white/10 hidden sm:block" />

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 text-[10px] md:text-xs italic font-bold tracking-[0.3em] uppercase whitespace-nowrap hidden sm:block"
              >
                {activeSection.subtitle}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 
        The Scrollable Content Section
        - Now full width
        - pt-40 to give more space for the horizontal navbar
      */}
      <div className="w-full flex flex-col pt-32 sm:pt-40 pb-0 overflow-visible">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          <Skills hideTitle />
          <Experience hideTitle />
          <Projects hideTitle />
        </div>
        <Contact hideTitle />
      </div>
    </div>
  );
}
