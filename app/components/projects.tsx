import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and TailwindCSS to showcase my AI/ML projects, qualifications, and technical skills. Features modern design with smooth animations, GitHub API integration, and responsive layout.",
    image: "/project1.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "GraphQL"],
    gradient: "from-pink-500 to-pink-300",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, data visualizations, and live metrics tracking. Features responsive design with glassmorphism UI elements and WebSocket-powered real-time updates.",
    image: "/project2.png",
    tech: ["React", "Python", "Supabase", "D3.js", "WebSocket"],
    gradient: "from-blue-500 to-cyan-400",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Manager Pro",
    description:
      "A full-stack task management application featuring a drag-and-drop Kanban board, real-time collaboration, user authentication, and automated deployment pipelines. Built with a focus on performance and accessibility.",
    image: "/project3.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    gradient: "from-purple-500 to-violet-400",
    github: "https://github.com",
    live: "https://example.com",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="w-full max-w-md group bg-white/[0.03] backdrop-blur-md border border-white/8 rounded-2xl p-4 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300">
      {/* Image with gradient border */}
      <div
        className={`relative p-[3px] rounded-xl bg-linear-to-br ${project.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
      >
        <div className="rounded-[9px] overflow-hidden bg-[#0a0a0a] aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={450}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Title row with icons */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl font-bold text-white leading-tight">
            {project.title}
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={`${project.title} GitHub`}
            >
              <FaGithub size={22} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={`${project.title} Live Demo`}
            >
              <HiExternalLink size={24} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((techItem, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/8 hover:bg-white/10 hover:text-gray-300 transition-colors duration-200"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-4 md:px-12 flex flex-col items-center z-10 relative">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
