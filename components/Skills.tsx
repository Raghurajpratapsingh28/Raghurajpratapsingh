import React from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  GitBranch,
  Dock,
  Layers,
  Feather,
  FileCode,
  Palette,
  Braces,
  Repeat,
  Sigma,
  Share2,
  Settings2,
  Globe,
  PenTool,
  TagsIcon,
} from "lucide-react";
import { IoLogoJavascript,IoCodeSlash, IoLogoElectron  } from "react-icons/io5";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
// import {  } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: IoCodeSlash },
  { name: "ReactJS", icon: Code },
  { name: "NextJS", icon: Code },
  { name: "Redux", icon: Repeat },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "ExpressJS", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Prisma", icon: Settings2 },
  { name: "GraphQL", icon: Share2 },
  { name: "REST API", icon: Globe },
  { name: "AWS", icon: Cloud },
  { name: "TailwindCSS", icon: Layers },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Dock },
  { name: "Python", icon: Sigma },
  { name: "React Native", icon: FaReact },
  { name: "Electronjs", icon: IoLogoElectron },
];

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative overflow-hidden py-16" style={{ minHeight: '100vh' }}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#a18cd1]/60 via-[#fbc2eb]/60 to-[#fad0c4]/60 blur-2xl opacity-80" />
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 font-extrabold text-[40px] md:text-5xl lg:text-6xl mb-8 drop-shadow-lg tracking-tight">
        Skills
      </h1>
      <section id="skills" className="w-full flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white drop-shadow-lg">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 w-full max-w-6xl px-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-8 shadow-xl transition-all duration-300 group hover:scale-105 hover:border-purple-400/60 hover:shadow-purple-400/30 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${(idx * 0.06 + 0.1).toFixed(2)}s both`,
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-blue-400/30 blur-lg" />
              <skill.icon className="w-10 h-10 object-contain mb-4 group-hover:scale-110 transition-transform duration-200 text-white drop-shadow-lg" />
              <span className="text-white text-sm font-semibold text-center opacity-90 group-hover:opacity-100 tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Keyframes for fadeInUp */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Skills; 