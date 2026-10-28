"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

// Screenshots live in public/projects/ — see public/projects/README.md.
// Set image to e.g. "/projects/zuix.jpg"; empty string shows a gradient placeholder.
const projects = [
  {
    title: "Fretnote",
    date: "Jul 2026 – Present",
    description:
      "A local-first songbook for guitarists, shipped from one codebase to Linux, Windows, macOS and Android. Chord sheets with auto-rendered diagrams, a fretboard tab editor, transposition with capo tracking, 8 tunings, a metronome and PDF export. No backend or account: everything lives in on-device SQLite, and a tag push builds every platform in CI.",
    image: "",
    tech: ["Svelte 5", "TypeScript", "Tauri 2", "Rust", "SQLite", "GitHub Actions"],
    gradient: "from-rose-500 to-pink-400",
    github: "https://github.com/qwzynx/fretnote",
    live: "https://fretnote-eight.vercel.app",
  },
  {
    title: "Clauto",
    date: "2026 – Present",
    description:
      "A self-hosted layer between me and AI coding CLIs. It estimates each prompt's cost against rolling usage limits with a regression fitted on my own runs, and runs an autopilot over a Kanban board: each card gets its own branch, must pass the test suite, and is committed as me, with no force-push. Every step is journaled to SQLite so interrupted sessions resume.",
    image: "",
    tech: ["Node.js", "TypeScript", "Hono", "Svelte 5", "SQLite", "Electron", "PWA"],
    gradient: "from-amber-500 to-orange-400",
    github: "",
    live: "",
  },
  {
    title: "GradeMatrix",
    date: "Mar 2026 – Present",
    description:
      "A full-stack grade tracker. Gemini parses a PDF syllabus into weighted assignments, and eClass Sync logs into York's portal with headless Playwright, streams Duo 2FA status live, and shows a diff of grade changes before anything is written. Dual-scale GPA (4.0 and 9.0), a target-grade planner, charts, row-level security, and built-in accessibility settings.",
    image: "",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Gemini API", "Playwright"],
    gradient: "from-purple-500 to-indigo-500",
    github: "https://github.com/qwzynx/GradeCalc",
    live: "https://grade-calc-nine.vercel.app",
  },
  {
    title: "Anti-FOMO",
    date: "Jun 2026 – Present",
    description:
      "Internships, tech news and events from 10 live sources (Hacker News, Simplify, Levels.fyi, Luma and more) in one ranked, offline-first feed. Rewritten from a Next.js + FastAPI service into a single Tauri app where scraping, ranking and storage all run on-device in Rust, with per-source caps and quiet degradation when a source breaks.",
    image: "",
    tech: ["Tauri 2", "Svelte 5", "Rust", "SQLite"],
    gradient: "from-sky-500 to-cyan-400",
    github: "https://github.com/qwzynx/anti-fomo",
    live: "",
  },
  {
    title: "Pico-Ducky 3.0",
    date: "May 2026",
    description:
      "A fork of pico-ducky that turns a Raspberry Pi Pico 2W into a USB Rubber Ducky-style HID device. I rewrote large parts of the DuckyScript 3.0 interpreter and its companion web app, reworked pin and board handling, and added my own payload extensions (~3,000 lines across ~28 files), then used it to study physical-access attacks and endpoint hardening in a lab.",
    image: "",
    tech: ["Python", "CircuitPython", "Raspberry Pi Pico 2W", "HID"],
    gradient: "from-red-500 to-orange-400",
    github: "https://github.com/qwzynx/pico-ducky3.0",
    live: "",
  },
  {
    title: "ZUIX INC.",
    date: "Sep 2024 – Jun 2026",
    description:
      "The first production website for a premium construction and renovation firm. A filterable project gallery with per-project pages, a site-wide estimate-request flow, and a password-protected admin dashboard with full CRUD, secured with HMAC-signed httpOnly session cookies. Runs on Edge API routes with continuous deployment.",
    image: "",
    tech: ["Next.js 16", "React 19", "Supabase", "Cloudflare Pages", "CSS"],
    gradient: "from-blue-600 to-indigo-500",
    github: "",
    live: "https://zuix.ca/",
  },
  {
    title: "Undercut",
    date: "Jan 2026 – Feb 2026",
    description:
      "An AI used-car deal finder for the GTA that scrapes listings, calculates fair market value, grades deals S to F, flags red flags in seller descriptions with Gemini, and writes negotiation scripts. I led the front-end team in a group of 5, owning a library of 20+ accessible UI components and the shared type contract with the FastAPI backend.",
    image: "",
    tech: ["Next.js 14", "TypeScript", "FastAPI", "PostgreSQL", "Go", "Gemini"],
    gradient: "from-blue-500 to-indigo-400",
    github: "https://github.com/SoroushRF/Undercut",
    live: "https://undercut-seven.vercel.app/",
  },
  {
    title: "Phone-As-Webcam",
    date: "Aug 2026",
    description:
      "Turns an iPhone into a Windows webcam with no app, cloud service or account. Safari streams peer-to-peer over WebRTC into OBS's Virtual Camera, with a WebSocket signaling relay, an auto-generated self-signed HTTPS cert for LAN camera access, and QR-code pairing in the terminal.",
    image: "",
    tech: ["Node.js", "WebRTC", "WebSockets", "OBS Studio"],
    gradient: "from-teal-500 to-cyan-400",
    github: "https://github.com/qwzynx/Phone-As-Webcam",
    live: "",
  },
  {
    title: "Trillium Pastry",
    date: "Oct 2026",
    description:
      "A showcase site for a handmade cake-topper business, reached through QR codes on event tables. Orders are emailed through Resend from a Cloudflare Function, with token-based theming, structured data, link previews and cookieless analytics. I also made the brand assets and set up the custom domain.",
    image: "",
    tech: ["Astro", "Cloudflare Pages", "Cloudflare Functions", "Resend"],
    gradient: "from-lime-500 to-emerald-400",
    github: "",
    live: "https://trilliumpastry.ca",
  },
  {
    title: "MG Studio",
    date: "2026",
    description:
      "My photo and video portfolio, built around a camera and cinema visual language: letterbox bars, a viewfinder HUD hero, film grain, photo collections as film canisters, and a video editing timeline. Includes a booking form, structured data and reduced-motion fallbacks.",
    image: "",
    tech: ["Next.js 16", "React 19", "TypeScript", "Framer Motion"],
    gradient: "from-zinc-400 to-slate-500",
    github: "https://github.com/qwzynx/studio",
    live: "https://studio.mahanghafarian.com",
  },
  {
    title: "Course Tutors",
    date: "Summer 2026",
    description:
      "Two study apps I built for my own courses. Circuits Tutor (EECS 2200) has 10 lesson tracks, a 57-problem bank with tolerance-checked phasor answers, 4 interactive circuit simulators and Leitner flashcards. Logic Tutor (MATH 1090) covers 23 lessons with truth-table and proof drills and a timed mock exam. Both run fully client-side.",
    image: "",
    tech: ["Next.js 16", "React 19", "TypeScript", "KaTeX"],
    gradient: "from-yellow-500 to-amber-400",
    github: "",
    live: "",
  },
  {
    title: "opencode for Journalling",
    date: "2026",
    description:
      "A local-LLM journalling companion for an Obsidian vault, built around a 4B model on a 6 GB GPU. Wherever code can do the job, it does: a plugin picks each turn's questions, scripts copy my own sentences into notes, and a check script verifies every write before it counts as done.",
    image: "",
    tech: ["opencode", "Ollama", "Bash", "JavaScript", "Obsidian"],
    gradient: "from-indigo-500 to-violet-400",
    github: "",
    live: "",
  },
  {
    title: "FOMO",
    date: "Apr 2026",
    description:
      "The terminal predecessor to Anti-FOMO. Scrapes five news and event sources, scores items with weighted keyword tiers and time-proximity boosts, deep-scans embedded event JSON, and prints a ranked dashboard, deduplicated across runs in SQLite.",
    image: "",
    tech: ["Python", "BeautifulSoup4", "cloudscraper", "SQLite"],
    gradient: "from-green-500 to-emerald-400",
    github: "https://github.com/qwzynx/FOMO",
    live: "",
  },
  {
    title: "FocusBox",
    date: "Mar 2026 – Jun 2026",
    description:
      "A physical study timer for ENG 1102 that detects when you pick your phone back up, using light and motion sensors in a 3D-printed enclosure.",
    image: "",
    tech: ["Java", "Arduino Uno", "Sensors", "3D Printing"],
    gradient: "from-orange-500 to-yellow-400",
    github: "https://github.com/qwzynx/ENG1102",
    live: "",
  },
  {
    title: "ENG 2003 Portfolio",
    date: "Aug 2026",
    description:
      "A communication portfolio for Effective Engineering Communication at Lassonde: a Zero Trust IoT firmware report, two audience-tailored handouts, a cover letter and FocusBox hardware documentation, alongside reflective writing.",
    image: "",
    tech: ["Vite", "HTML", "CSS", "JavaScript", "GitHub Pages"],
    gradient: "from-violet-500 to-fuchsia-400",
    github: "",
    live: "https://eng2003.mahanghafarian.com",
  },
];

// Project Card Component
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative overflow-hidden w-full group bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-[#0a0a0a]/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto h-full flex flex-col">
      {/* Gradient accent edge */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Image with gradient border, or gradient placeholder */}
      {project.image ? (
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
      ) : (
        <div className="relative rounded-xl overflow-hidden aspect-video mb-5 border border-white/10">
          <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white/30 group-hover:text-white/50 transition-colors duration-500 text-center leading-none">
              {project.title}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1">
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
                <FaGithub size={20} aria-hidden="true" />
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
                <HiExternalLink size={22} aria-hidden="true" />
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
