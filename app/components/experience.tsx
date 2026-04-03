import React from "react";

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
    <section id="experience" className="w-full py-20 px-4 md:px-12 flex flex-col items-center z-10 relative">
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
