"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const experiences = [
  {
    role: "Digital Marketing & Web Lead",
    company: "ZUIX INC.",
    date: "Sep 2024 - Present",
    location: "Ontario, Canada · Hybrid",
    description: "Designed, developed, and launched the company's first official website (www.zuix.ca) , establishing its digital footprint by utilizing modern web frameworks like Next.js and React.",
    bullets: [
      "Directed end-to-end content creation by shooting, editing, and publishing high-quality photo and video assets to establish the brand's foundational social media presence.",
      "Advised company leadership on social media strategy, providing constructive feedback on content creation to improve overall quality and brand consistency."
    ],
    tech: ["Next.js", "React"]
  },
  {
    role: "Visual Content Creator",
    company: "F.O.R.M. Basketball Academy",
    date: "Nov 2025 - Jan 2026",
    location: "Toronto, Ontario, Canada · On-site",
    description: "Directed end-to-end media production for FORM Basketball Academy during their high-stakes matchup against the University of Toronto and team training sessions at the OVO Athletic Centre.",
    bullets: [
      "Captured and edited dynamic, high-quality photography and videography, tailoring the final assets to the client's brand and vision.",
      "Delivered highly engaging sports content that was successfully leveraged across the academy's official social media channels to drive audience engagement."
    ],
    tech: ["Photography", "Videography", "Media Production"]
  },
  {
    role: "Computer Science Tutor",
    company: "Bayview Secondary School",
    date: "Sep 2023 - Jul 2025",
    location: "Richmond Hill, Ontario, Canada · On-site",
    description: "Conducted one-on-one tutoring sessions, identifying student knowledge gaps to provide targeted solutions and improve comprehension.",
    bullets: [
      "Developed connections with peers through active listening, patience, and empathetic communication.",
      "Tracked student progress over time, adapting lesson plans to overcome learning challenges and drive positive academic outcomes."
    ],
    tech: ["Teaching", "Mentoring"]
  },
  {
    role: "STEM Instructor",
    company: "Envision Robotics STEM Education Inc.",
    date: "Dec 2024 - Mar 2025",
    location: "Markham, Ontario, Canada · On-site",
    description: "Facilitated interactive STEM workshops for youth, translating complex robotics, 3D printing, and coding concepts into accessible lessons.",
    bullets: [
      "Assessed individual learning styles and adjusted teaching methods dynamically to deliver tailored educational solutions.",
      "Maintained and troubleshot technical equipment in real-time, preventing classroom disruptions.",
      "Built rapport with students and parents through clear communication, fostering a supportive learning environment."
    ],
    tech: ["Robotics", "3D Printing", "Python", "Coding"]
  }
];

type ExperienceData = (typeof experiences)[0];

function ExperienceCard({ exp, onClick }: { exp: ExperienceData; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start p-4 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-left w-full group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 leading-tight">{exp.role}</h3>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-blue-400/90 font-semibold">{exp.company}</span>
        <span className="text-xs text-gray-400 font-medium">{exp.date}</span>
      </div>
    </button>
  );
}

function ExperienceModal({ exp, onClose }: { exp: ExperienceData; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-[#0f0f0f] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">{exp.role}</h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-blue-400 font-medium">{exp.company}</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-400 text-sm">{exp.date}</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Overview</h4>
            <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Key Contributions</h4>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="mt-2 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceData | null>(null);

  return (
    <section id="experience" className="w-full py-24 px-4 md:px-12 flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-lg text-sm">
            Professional journey and technical contributions across diverse industries.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-4 md:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex md:items-center w-full min-h-[50px] md:py-1">
                  {/* Desktop View */}
                  <div className="hidden md:flex flex-1 justify-end">
                    {isLeft ? (
                      <div className="w-full max-w-md pr-12">
                        <ExperienceCard exp={exp} onClick={() => setSelectedExp(exp)} />
                      </div>
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>

                  {/* Center Dot - Desktop Only */}
                  <div className="hidden md:flex shrink-0 w-12 items-center justify-center relative z-20">
                    <span className="h-3 w-3 rounded-full bg-blue-500/60 ring-4 ring-[#0a0a0a] shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  <div className="hidden md:flex flex-1 justify-start">
                    {!isLeft ? (
                      <div className="w-full max-w-md pl-12">
                        <ExperienceCard exp={exp} onClick={() => setSelectedExp(exp)} />
                      </div>
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden flex-1 relative pl-10 border-l border-white/10 ml-4 mb-4">
                    <span className="absolute left-[-6.5px] top-8 h-3 w-3 rounded-full bg-blue-500/60 ring-4 ring-[#0a0a0a]" />
                    <div className="max-w-full">
                      <ExperienceCard exp={exp} onClick={() => setSelectedExp(exp)} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedExp && (
          <ExperienceModal
            exp={selectedExp}
            onClose={() => setSelectedExp(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
