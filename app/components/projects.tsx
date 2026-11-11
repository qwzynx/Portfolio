"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

// Project icons live in public/projects/icons/ — see public/projects/README.md.
const projects = [
  {
    title: "Clauto",
    date: "2026 – Present",
    description:
      "A self-hosted layer between me and AI coding CLIs. It estimates each prompt's cost against rolling usage limits with a regression fitted on my own runs, and runs an autopilot over a Kanban board: each card gets its own branch, must pass the test suite, and is committed as me, with no force-push. Every step is journaled to SQLite so interrupted sessions resume.",
    icon: "/projects/icons/clauto.svg",
    tech: ["Node.js", "TypeScript", "Hono", "Svelte 5", "SQLite", "Electron", "PWA"],
    gradient: "from-amber-500 to-orange-400",
    github: "",
    live: "",
  },
  {
    title: "Trillium Pastry",
    date: "Oct 2026",
    description:
      "A showcase site for a handmade cake-topper business, reached through QR codes on event tables. Orders are emailed through Resend from a Cloudflare Function, with token-based theming, structured data, link previews and cookieless analytics. I also made the brand assets and set up the custom domain.",
    icon: "/projects/icons/trillium-pastry.svg",
    tech: ["Astro", "Cloudflare Pages", "Cloudflare Functions", "Resend"],
    gradient: "from-lime-500 to-emerald-400",
    github: "",
    live: "https://trilliumpastry.ca",
  },
  {
    title: "ZUIX INC.",
    date: "Sep 2024 – Jun 2026",
    description:
      "The first production website for a premium construction and renovation firm. A filterable project gallery with per-project pages, a site-wide estimate-request flow, and a password-protected admin dashboard with full CRUD, secured with HMAC-signed httpOnly session cookies. Runs on Edge API routes with continuous deployment.",
    icon: "/projects/icons/zuix.svg",
    tech: ["Next.js 16", "React 19", "Supabase", "Cloudflare Pages", "CSS"],
    gradient: "from-blue-600 to-indigo-500",
    github: "",
    live: "https://zuix.ca/",
  },
  {
    title: "Anti-FOMO",
    date: "Jun 2026 – Present",
    description:
      "Internships, tech news and events from 10 live sources (Hacker News, Simplify, Levels.fyi, Luma and more) in one ranked, offline-first feed. Rewritten from a Next.js + FastAPI service into a single Tauri app where scraping, ranking and storage all run on-device in Rust, with per-source caps and quiet degradation when a source breaks.",
    icon: "/projects/icons/anti-fomo.svg",
    tech: ["Tauri 2", "Svelte 5", "Rust", "SQLite"],
    gradient: "from-sky-500 to-cyan-400",
    github: "https://github.com/qwzynx/anti-fomo",
    live: "",
  },
  {
    title: "GradeMatrix",
    date: "Mar 2026 – Present",
    description:
      "A full-stack grade tracker. Gemini parses a PDF syllabus into weighted assignments, and eClass Sync logs into York's portal with headless Playwright, streams Duo 2FA status live, and shows a diff of grade changes before anything is written. Dual-scale GPA (4.0 and 9.0), a target-grade planner, charts, row-level security, and built-in accessibility settings.",
    icon: "/projects/icons/grade-matrix.svg",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Gemini API", "Playwright"],
    gradient: "from-purple-500 to-indigo-500",
    github: "https://github.com/qwzynx/GradeCalc",
    live: "https://grade-calc-nine.vercel.app",
  },
  {
    title: "Pico-Ducky 3.0",
    date: "May 2026",
    description:
      "A fork of pico-ducky that turns a Raspberry Pi Pico 2W into a USB Rubber Ducky-style HID device. I rewrote large parts of the DuckyScript 3.0 interpreter and its companion web app, reworked pin and board handling, and added my own payload extensions (~3,000 lines across ~28 files), then used it to study physical-access attacks and endpoint hardening in a lab.",
    icon: "/projects/icons/pico-ducky.svg",
    tech: ["Python", "CircuitPython", "Raspberry Pi Pico 2W", "HID"],
    gradient: "from-red-500 to-orange-400",
    github: "https://github.com/qwzynx/pico-ducky3.0",
    live: "",
  },
  {
    title: "Fretnote",
    date: "Jul 2026 – Present",
    description:
      "A local-first songbook for guitarists, shipped from one codebase to Linux, Windows, macOS and Android. Chord sheets with auto-rendered diagrams, a fretboard tab editor, transposition with capo tracking, 8 tunings, a metronome and PDF export. No backend or account: everything lives in on-device SQLite, and a tag push builds every platform in CI.",
    icon: "/projects/icons/fretnote.svg",
    tech: ["Svelte 5", "TypeScript", "Tauri 2", "Rust", "SQLite", "GitHub Actions"],
    gradient: "from-rose-500 to-pink-400",
    github: "https://github.com/qwzynx/fretnote",
    live: "https://fretnote-eight.vercel.app",
  },
  {
    title: "opencode for Journalling",
    date: "2026",
    description:
      "A local-LLM journalling companion for an Obsidian vault, built around a 4B model on a 6 GB GPU. Wherever code can do the job, it does: a plugin picks each turn's questions, scripts copy my own sentences into notes, and a check script verifies every write before it counts as done.",
    icon: "/projects/icons/opencode-journal.svg",
    tech: ["opencode", "Ollama", "Bash", "JavaScript", "Obsidian"],
    gradient: "from-indigo-500 to-violet-400",
    github: "",
    live: "",
  },
  {
    title: "Undercut",
    date: "Jan 2026 – Feb 2026",
    description:
      "An AI used-car deal finder for the GTA that scrapes listings, calculates fair market value, grades deals S to F, flags red flags in seller descriptions with Gemini, and writes negotiation scripts. I led the front-end team in a group of 5, owning a library of 20+ accessible UI components and the shared type contract with the FastAPI backend.",
    icon: "/projects/icons/undercut.svg",
    tech: ["Next.js 14", "TypeScript", "FastAPI", "PostgreSQL", "Go", "Gemini"],
    gradient: "from-blue-500 to-indigo-400",
    github: "https://github.com/SoroushRF/Undercut",
    live: "https://undercut-seven.vercel.app/",
  },
  {
    title: "FocusBox",
    date: "Mar 2026 – Jun 2026",
    description:
      "A physical study timer for ENG 1102 that detects when you pick your phone back up, using light and motion sensors in a 3D-printed enclosure.",
    icon: "/projects/icons/focusbox.svg",
    tech: ["Java", "Arduino Uno", "Sensors", "3D Printing"],
    gradient: "from-orange-500 to-yellow-400",
    github: "https://github.com/qwzynx/ENG1102",
    live: "",
  },
];

// Project Card Component
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative overflow-hidden w-full group bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-[#0a0a0a]/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto h-full flex flex-col">
      {/* Gradient accent top edge */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Header: Project Icon & External Action Links */}
      <div className="flex items-center justify-between gap-4 mb-5">
        {project.icon ? (
          <div
            className={`relative p-[1.5px] rounded-xl bg-linear-to-br ${project.gradient} shadow-md group-hover:shadow-lg transition-all duration-300`}
          >
            <div className="w-12 h-12 rounded-[10px] bg-[#0c0c0e] flex items-center justify-center p-2 border border-white/5 overflow-hidden">
              <Image
                src={project.icon}
                alt={`${project.title} icon`}
                width={36}
                height={36}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded-xl bg-linear-to-br ${project.gradient} flex items-center justify-center text-white font-bold text-lg shadow-md`}
          >
            {project.title.charAt(0)}
          </div>
        )}

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label={`${project.title} GitHub`}
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-200"
              aria-label={`${project.title} Live Demo`}
            >
              <HiExternalLink size={22} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300 mb-1">
          {project.title}
        </h3>
        
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
    <section id="projects" className="scroll-mt-6 w-full flex flex-col items-start z-10 relative">
      {hideTitle ? (
        <h2 className="sr-only">Projects</h2>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-10 lg:w-1/3 lg:sticky lg:top-32"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-left leading-none text-transparent bg-clip-text bg-linear-to-t from-white/20 via-white/80 to-white uppercase">
            Projects
          </h2>
          <p className="text-blue-400 mt-4 text-sm md:text-base uppercase tracking-[0.3em] font-bold text-left">Recent work</p>
        </motion.div>
      )}

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
