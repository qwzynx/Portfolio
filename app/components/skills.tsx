"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiArchlinux, SiSupabase, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "Arch Linux", icon: SiArchlinux, color: "text-[#1793D1]" },
  { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
  { name: "Java", icon: FaJava, color: "text-[#007396]" },
  { 
    name: "MATLAB", 
    icon: () => <div className="font-serif italic font-bold tracking-tighter" style={{ fontSize: '1.2em', lineHeight: 1 }}>M</div>, 
    color: "text-[#e16524]" 
  },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Javascript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
];

export default function Skills({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section id="skills" className="w-full flex flex-col items-start z-10 relative">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col items-start mb-10 ${hideTitle ? "hidden" : "lg:w-1/3 lg:sticky lg:top-32"}`}
      >
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-left leading-none text-transparent bg-clip-text bg-linear-to-t from-white/20 via-white/80 to-white">
          SKILLS
        </h2>
        <p className="text-blue-400 mt-4 text-sm md:text-base italic font-semibold tracking-widest uppercase text-left">I use arch btw</p>
      </motion.div>
      
      <div className="flex flex-wrap justify-start gap-4 sm:gap-5 w-full">
        {skills.map((skill, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            key={index} 
            className="group relative flex flex-col items-center justify-center p-3 sm:p-4 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 hover:bg-[#0a0a0a]/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] overflow-hidden cursor-default"
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className={`relative z-10 text-3xl sm:text-4xl ${skill.color} mb-2 sm:mb-3 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 drop-shadow-lg flex items-center justify-center h-10`}>
              <skill.icon />
            </div>
            <span className="relative z-10 text-[10px] sm:text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide text-center uppercase">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
