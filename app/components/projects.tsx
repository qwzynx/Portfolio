"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "ZUIX INC.",
    date: "Sep 2024 – Present",
    description:
      "Designed and developed the official website for ZUIX INC., establishing its digital footprint with a high-performance, SEO-optimized platform. Features custom animations, secure media storage, and a serverless backend architecture.",
    image: "", 
    tech: ["Next.js", "React", "Supabase", "Vanilla CSS", "Cloudflare"],
    gradient: "from-blue-600 to-indigo-500",
    github: "",
    live: "https://zuix.ca/",
  },
  {
    title: "ENG1102",
    date: "March 2026 - June 2026",
    description:
      "A Java-based engineering project developed as part of the ENG1102 curriculum, focusing on object-oriented programming and engineering principles.",
    image: "", 
    tech: ["Java", "Arduino Uno"],
    gradient: "from-orange-500 to-yellow-400",
    github: "https://github.com/qwzynx/ENG1102",
    live: "",
  },
  {
    title: "Pico-Ducky3.0",
    date: "May 2026",
    description:
      "A project that transforms a Raspberry Pi Pico into a USB Rubber Ducky-like device, enabling the execution of automated keystroke payloads for security testing and automation tasks.",
    image: "", 
    tech: ["Python", "Raspberry Pi Pico", "Hardware"],
    gradient: "from-red-500 to-orange-400",
    github: "https://github.com/qwzynx/Pico-Ducky3.0",
    live: "",
  },
  {
    title: "FOMO",
    date: "April 2026",
    description:
      "A Python-based project developed to explore specific concepts or solve a problem. It leverages Python's extensive ecosystem to deliver its functionality.",
    image: "", 
    tech: ["Python"],
    gradient: "from-green-500 to-emerald-400",
    github: "https://github.com/qwzynx/FOMO",
    live: "",
  },
  {
    title: "GradeMatrix",
    date: "March 2026",
    description:
      "A modern, intuitive grade calculator designed to help students track their academic progress. It allows users to easily input assignments, manage course weights, and calculate their current standing or target grades.",
    image: "",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    gradient: "from-purple-500 to-indigo-500",
    github: "https://github.com/qwzynx/GradeCalc",
    live: "https://grade-calc-nine.vercel.app",
  },
  {
    title: "Undercut",
    date: "Jan 2026 – Feb 2026",
    description:
      "Undercut is a full-stack AI platform designed to identify underpriced vehicle listings in real-time. Built during a hackathon, it leverages high-performance data scrapers to rapidly collect market data, which is then analyzed using advanced AI to spot the best deals instantly.",
    image: "",
    tech: ["Next.js", "React", "AI", "Python", "Data Scraping"],
    gradient: "from-blue-500 to-indigo-400",
    github: "", 
    live: "https://undercut-seven.vercel.app/",
  }
];

// Project Card Component
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="w-full group bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-[#0a0a0a]/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto h-full flex flex-col">
      {/* Image with gradient border - Only if image exists */}
      {project.image && (
        <div
          className={`relative p-[3px] rounded-xl bg-linear-to-br ${project.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-500 mb-5`}
        >
          <div className="rounded-[9px] overflow-hidden bg-[#0a0a0a] aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-1 transition-all duration-700 opacity-90 group-hover:opacity-100"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col flex-1 ${project.image ? "" : "mt-2"}`}>
        {/* Title row with icons */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={`${project.title} GitHub`}
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label={`${project.title} Live Demo`}
              >
                <HiExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
        
        {/* Date */}
        <p className="text-xs text-blue-400/80 font-semibold tracking-wide mb-3">{project.date}</p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((techItem, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-semibold tracking-wider uppercase text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section id="projects" className="w-full flex flex-col items-start z-10 relative">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col items-start mb-10 ${hideTitle ? "hidden" : "lg:w-1/3 lg:sticky lg:top-32"}`}
      >
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-left leading-none text-transparent bg-clip-text bg-linear-to-t from-white/20 via-white/80 to-white uppercase">
          Projects
        </h2>
        <p className="text-blue-400 mt-4 text-sm md:text-base uppercase tracking-[0.3em] font-bold text-left">Recent work</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
