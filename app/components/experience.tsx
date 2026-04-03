import React from "react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovators",
    date: "2023 - Present",
    location: "Remote",
    description: "Spearheaded the development of a highly scalable web application using Next.js and React.",
    bullets: [
      "Integrated advanced data handling patterns, reducing load times by 40%",
      "Led a team of 5 engineers to deliver product features ahead of schedule",
      "Architected reusable component libraries adopted across 3 products",
    ],
    tech: ["Next.js", "React", "TypeScript"]
  },
  {
    role: "Full Stack Developer",
    company: "Digital Dynamics",
    date: "2021 - 2023",
    location: "Hybrid",
    description: "Architected back-end solutions using Python and Supabase for robust real-time applications.",
    bullets: [
      "Built real-time synchronized dashboards for 10k+ concurrent users",
      "Worked with design teams to transition wireframes into code",
      "Reduced API response time by 60% through caching and query optimization",
    ],
    tech: ["Python", "Supabase", "Tailwind CSS"]
  },
  {
    role: "Software Developer",
    company: "Creative Solutions Ltd.",
    date: "2019 - 2021",
    location: "On-site",
    description: "Developed modular front-end components and automated deployment workflows.",
    bullets: [
      "Built and shipped 15+ reusable UI components in vanilla JS and HTML/CSS",
      "Automated CI/CD pipelines on Arch Linux servers cutting deploy time in half",
      "Improved cross-browser compatibility across all major browsers",
    ],
    tech: ["JavaScript", "HTML/CSS", "Arch Linux"]
  }
];

function Card({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/8 rounded-2xl p-5 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <h3 className="text-base font-bold text-white leading-tight">{exp.role}</h3>
          <p className="text-sm text-blue-400 font-medium mt-0.5">{exp.company}</p>
        </div>
        <div className="text-right shrink-0 text-xs text-gray-500">
          <div>{exp.date}</div>
          <div className="text-gray-600 mt-0.5">{exp.location}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mt-3 mb-3">
        {exp.description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-1.5 mb-4">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="mt-[7px] h-1 w-1 rounded-full bg-blue-400/50 shrink-0"></span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tech.map((techItem, idx) => (
          <span key={idx} className="px-2.5 py-0.5 bg-white/5 rounded-full text-xs text-gray-400 border border-white/8">
            {techItem}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="w-full py-20 px-4 md:px-12 flex flex-col items-center z-10 relative">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
          Experience
        </h2>
      </div>

      {/* Center Timeline */}
      <div className="relative w-full max-w-7xl">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="relative md:-mb-30 mb-2 flex md:items-start w-full last:mb-0">

              {/* LEFT SIDE */}
              <div className={`w-full md:w-[calc(50%-20px)] ${isLeft ? "md:pr-6" : "md:invisible"}`}>
                {isLeft && <Card exp={exp} />}
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex shrink-0 w-14 items-start justify-center pt-4">
                <span className="h-3 w-3 rounded-full bg-blue-500/60 ring-4 ring-[#0a0a0a] shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
              </div>

              {/* RIGHT SIDE */}
              <div className={`w-full md:w-[calc(50%-20px)] ${!isLeft ? "md:pl-6" : "md:invisible"}`}>
                {!isLeft && <Card exp={exp} />}
              </div>

              {/* Mobile: always full width */}
              <div className="md:hidden w-full">
                <Card exp={exp} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
