"use client";

import RetroBackground from "../components/RetroBackground";
import Navbar from "../components/Navbar";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BestBuy4uBD",
    description:
      "A modern e-commerce platform built with React and Next.js, featuring secure user authentication, product management, and integrated Bkash payment system.",
    tech: ["React", "Tailwind CSS", "Node.js", "Bkash", "MongoDB"],
    live: "https://bestbuy4ubd.com",
    github: "https://github.com/naim0018/SparkTech",
    status: "STABLE",
    color: "var(--accent-blue)",
  },
  {
    title: "Macrame Crafts",
    description:
      "A specialized e-commerce platform for handcrafted textile products. Features include user authentication and a seamless shopping experience.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "https://macrame-crafts-bd.vercel.app",
    github: "https://github.com/naim0018/Macrame-Crafts-BD",
    status: "STABLE",
    color: "var(--accent-pink)",
  },
  {
    title: "Component UI",
    description:
      "A collection of reusable UI components built with React and TailwindCSS, designed for efficiency in web development projects.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://component-collection-mu.vercel.app",
    github: "https://github.com/naim0018/component-collection",
    status: "LEGACY",
    color: "var(--accent-orange)",
  },
];

export default function ProjectsPage() {
  return (
    <RetroBackground>
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-12 max-w-6xl h-screen overflow-hidden flex flex-col">
        <section className="flex-1 flex flex-col justify-center min-h-0 container mx-auto">
          <header className="mb-4 space-y-2 shrink-0">
            <div className="flex items-center gap-2 text-accent-green font-mono text-[10px] md:text-sm tracking-widest uppercase">
              <Terminal size={14} />
              <span>&gt; DIRECTORY: /PROJECTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
              ARCHIVED <span className="text-accent-green italic">SESSIONS</span>
            </h1>
            <p className="text-foreground/50 max-w-2xl font-medium">
              A curated list of tactical web deployments and technical research
              projects. All sessions are encrypted and stored in the decentralized
              neural network.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-background border p-6 flex flex-col gap-6 hover:bg-white/2 transition-all"
              style={{ borderColor: `${project.color}33` }}
            >
              {/* Retro CRT Scanline Overlay inside card */}
              <div
                className="absolute inset-0 bg-linear-to-b from-transparent pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${project.color}05, transparent)`,
                }}
              />

              <div className="flex justify-between items-start">
                <span
                  className="text-[10px] font-mono px-2 py-0.5 border"
                  style={{ borderColor: project.color, color: project.color }}
                >
                  {project.status}
                </span>
                <span className="text-[10px] font-mono opacity-30">
                  ID_00{i + 1}
                </span>
              </div>

              <div className="space-y-3 flex-1">
                <h3
                  className="text-2xl font-black uppercase tracking-tight transition-colors"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1"
                    style={{
                      backgroundColor: `${project.color}1A`,
                      color: project.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
                  style={{ color: project.color }}
                >
                  <ExternalLink size={14} />
                  LIVE_DEMO
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-foreground/40 hover:text-foreground transition-colors"
                >
                  <Github size={14} />
                  REPOSITORY
                </a>
              </div>

              {/* Corner Brackets */}
              <div
                className="absolute top-0 left-0 w-2 h-2 border-t border-l"
                style={{ borderColor: `${project.color}66` }}
              />
              <div
                className="absolute top-0 right-0 w-2 h-2 border-t border-r"
                style={{ borderColor: `${project.color}66` }}
              />
              <div
                className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"
                style={{ borderColor: `${project.color}66` }}
              />
              <div
                className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"
                style={{ borderColor: `${project.color}66` }}
              />
            </motion.div>
          ))}
        </div>
        </section>
      </main>
    </RetroBackground>
  );
}
