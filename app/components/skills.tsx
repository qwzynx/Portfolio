import React from "react";
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

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-4 md:px-12 flex flex-col items-center justify-center z-10 relative">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
          Skills
        </h2>
        <p className="text-gray-400 mt-1 text-sm italic">I use arch btw</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 bg-[#1e2029]/80 backdrop-blur-sm border border-white/5 rounded-2xl w-28 h-28 hover:-translate-y-2 hover:bg-[#252836] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/10 transition-all duration-300 group cursor-default"
          >
            <div className={`text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-10`}>
              <skill.icon />
            </div>
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
