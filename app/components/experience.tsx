"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const experiences = [
  {
    role: "Application Support Associate Intern",
    company: "HomeEquity Bank",
    date: "Sep 2026 - Present",
    location: "Toronto, Ontario, Canada · Hybrid",
    description: "Fixing defects and shipping features in the bank's C#/ASP.NET MVC web applications and REST API, which serve customers, internal staff and partner firms.",
    bullets: [
      "Resolve production defects and deliver user stories by tracing issues through controllers, view models, validators and Razor views, then demoing fixes to business stakeholders.",
      "Reworked referral-program eligibility logic so referrals are validated against every linked customer file, and adjusted the UI so the option only appears where it applies.",
      "Added layered duplicate-contact validation to the customer portal: clear form-level messages plus a business-layer check that only runs when contact details change.",
      "Extended a shared reporting method so payout statements correctly include borrower estates, verifying that dependent reports were unaffected.",
      "Ship in Azure DevOps sprints (Boards, Pipelines, TFVC) with daily standups and code review on every change, ramping up from almost no prior C# or SQL experience."
    ],
    tech: ["C#", "ASP.NET MVC", "Razor", "REST APIs", "SQL Server", "Entity Framework", "Postman", "Azure DevOps", "TFVC"]
  },
  {
    role: "Brand & Content Manager",
    company: "GDG on Campus York University",
    date: "May 2026 - Present",
    location: "Toronto, Ontario, Canada",
    description: "Leading brand and content for York's student developer community, from event graphics to photo and video coverage.",
    bullets: [
      "Shot and edited photo and video coverage of the chapter's first flagship event at Google's Canadian headquarters, used for promotion and recruitment.",
      "Design posters, event graphics and post-event recaps, keeping the visual identity consistent across platforms.",
      "Coordinate the publishing schedule with the executive team and use engagement metrics to tune posting strategy."
    ],
    tech: ["Brand Design", "Content Creation", "Photography", "Videography", "Social Media"]
  },
  {
    role: "Digital Marketing & Web Lead",
    company: "ZUIX INC.",
    date: "Sep 2024 - Jun 2026",
    location: "Ontario, Canada · Hybrid",
    description: "Designed, built and shipped the first production website (zuix.ca) for a premium construction and renovation firm, owning it from requirements through deployment, and led the brand's content.",
    bullets: [
      "Built the site end to end with Next.js 16, React 19 and Supabase on Cloudflare Pages, with continuous deployment and a documented handoff.",
      "Built a password-protected admin dashboard with full CRUD for portfolio projects, authenticated with HMAC-signed httpOnly session cookies and no third-party auth provider.",
      "Replaced a manual intake process with a validated, site-wide estimate-request flow, plus a filterable project gallery, per-project pages and generated SEO routes.",
      "Directed end-to-end photo and video content that launched the brand's social media, and advised leadership on social strategy."
    ],
    tech: ["Next.js", "React", "Supabase", "Cloudflare Pages", "Web Crypto", "SEO", "Photography"]
  },
  {
    role: "Freelance Photographer & Videographer",
    company: "F.O.R.M. Basketball Academy",
    date: "Nov 2025 - Jan 2026",
    location: "Toronto, Ontario, Canada · On-site",
    description: "Shot and delivered event photo and video for F.O.R.M. Basketball Academy at the OVO Athletic Centre.",
    bullets: [
      "Captured brand-consistent visuals of high-energy team events in fast-changing, high-pressure conditions.",
      "Coordinated media goals with coaches and staff, and handled equipment setup and on-the-spot troubleshooting for uninterrupted coverage."
    ],
    tech: ["Photography", "Videography", "Editing"]
  },
  {
    role: "Computer Science Tutor",
    company: "Bayview Secondary School",
    date: "Sep 2023 - Jun 2025",
    location: "Richmond Hill, Ontario, Canada · On-site",
    description: "Volunteer one-on-one computer science tutoring through the school's Computer Science Department.",
    bullets: [
      "Diagnosed knowledge gaps and tailored lessons to each student.",
      "Tracked progress over time and adjusted plans to improve comprehension and academic outcomes."
    ],
    tech: ["Teaching", "Mentoring", "Computer Science"]
  },
  {
    role: "STEM Instructor",
    company: "Envision Robotics STEM Education Inc.",
    date: "Dec 2024 - Mar 2025",
    location: "Markham, Ontario, Canada · On-site",
    description: "Volunteer instructor leading robotics, 3D-printing and intro coding workshops for youth groups of up to 20 students per session.",
    bullets: [
      "Translated technical concepts into accessible lessons and adapted teaching methods to individual learners.",
      "Maintained and troubleshot equipment in real time during live sessions to prevent disruptions.",
      "Built rapport with students and parents through clear communication."
    ],
    tech: ["Robotics", "3D Printing", "Coding", "Teaching"]
  }
];

type ExperienceData = (typeof experiences)[0];

function ExperienceCard({ exp, onClick }: { exp: ExperienceData; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start p-6 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-[#0a0a0a]/80 hover:border-white/20 transition-all duration-500 text-left w-full group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300 leading-tight">{exp.role}</h3>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-purple-400/90 font-semibold">{exp.company}</span>
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
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-purple-400 font-medium">{exp.company}</span>
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
                  <span className="mt-2 h-1 w-1 rounded-full bg-purple-500 shrink-0" />
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

export default function Experience({ hideTitle = false }: { hideTitle?: boolean }) {
  const [selectedExp, setSelectedExp] = useState<ExperienceData | null>(null);

  return (
    <section id="experience" className="scroll-mt-6 w-full flex flex-col items-start relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-tr from-blue-600/10 to-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-glow-pulse" />

      {hideTitle ? (
        <h2 className="sr-only">Experience</h2>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-10 lg:w-1/3 lg:sticky lg:top-32"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-left leading-none text-transparent bg-clip-text bg-linear-to-t from-white/20 via-white/80 to-white uppercase">
            Experience
          </h2>
          <p className="text-blue-400 mt-4 text-sm md:text-base uppercase tracking-[0.3em] font-bold text-left">
            Professional journey
          </p>
        </motion.div>
      )}

      <div className="w-full">
        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500/0 via-blue-500/20 to-purple-500/0 -translate-x-1/2 hidden md:block" />

          <div className="space-y-4 md:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={index}
                  className="group/row relative flex md:items-center w-full min-h-[50px] md:py-2"
                >
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
                    <span className="h-4 w-4 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 ring-4 ring-[#0a0a0a] shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-transform duration-500 group-hover/row:scale-150" />
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
                  <div className="md:hidden flex-1 relative pl-10 border-l-2 border-blue-500/20 ml-4 mb-6">
                    <span className="absolute left-[-9px] top-8 h-4 w-4 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 ring-4 ring-[#0a0a0a] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    <div className="max-w-full">
                      <ExperienceCard exp={exp} onClick={() => setSelectedExp(exp)} />
                    </div>
                  </div>
                </motion.div>
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
