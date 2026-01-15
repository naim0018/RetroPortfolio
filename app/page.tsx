"use client";

import Link from "next/link";
import RetroBackground from "./components/RetroBackground";
import Navbar from "./components/Navbar";
import TechCard from "./components/TechCard";
import { Cpu, Globe, Layout, Code2, Rocket } from "lucide-react";

const techStack = [
  { name: "React / Next.js", icon: Rocket, level: 95, color: "var(--accent-blue)" },
  { name: "TypeScript", icon: Code2, level: 88, color: "var(--accent-blue)" },
  { name: "Node.js", icon: Cpu, level: 75, color: "var(--accent-pink)" },
  { name: "Tailwind CSS", icon: Layout, level: 92, color: "var(--accent-orange)" },
  { name: "Git", icon: Globe, level: 85, color: "var(--accent-green)" },
];

import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <RetroBackground>
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-7xl min-h-screen flex flex-col justify-center">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-16 items-center flex-1">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <span className="text-accent-green font-mono text-sm tracking-[0.3em] font-bold uppercase animate-pulse">
                &gt; INITIALIZING_DEVELOPER_SESSION...
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                MD. KAZI <br />
                <span className="text-accent-blue retro-glow italic">NAIM</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 max-w-xl font-medium leading-relaxed">
              I am a passionate web developer with a strong foundation in <span className="text-accent-pink">full-stack development</span>. 
              My journey in programming started with solving complex problems, and now I channel that analytical mindset into creating <span className="text-accent-orange">elegant web solutions</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://drive.google.com/file/d/1S2dnVLAzqSrf_jC-eue_UeCqzges5Dtd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="retro-button-3d cursor-pointer">
                  VIEW_RESUME
                </button>
              </a>
              <Link href="/contact">
                <button className="px-6 py-3 border border-white/10 hover:border-accent-pink hover:text-accent-pink transition-all font-bold tracking-widest text-sm uppercase cursor-pointer">
                  GET_IN_TOUCH
                </button>
              </Link>
            </div>
            
            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-white/5 bg-white/1 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-[10px] text-accent-green/60 font-mono uppercase tracking-widest">Level</span>
                <span className="text-2xl font-black text-accent-green">24_SNR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-accent-blue/60 font-mono uppercase tracking-widest">HP Status</span>
                <span className="text-2xl font-black text-accent-blue">STABLE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-accent-pink/60 font-mono uppercase tracking-widest">PRs Merged</span>
                <span className="text-2xl font-black text-accent-pink">842+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-accent-orange/60 font-mono uppercase tracking-widest">Coffee/Day</span>
                <span className="text-2xl font-black text-accent-orange">0x3A</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-md aspect-square relative group">
            <div className="absolute inset-0 border-2 border-dashed border-accent-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-accent-pink/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <Hero3D />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-32 space-y-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight uppercase">Modules_<span className="text-accent-pink">Loaded</span></h2>
              <div className="h-1 w-24 bg-accent-pink" />
            </div>
            <p className="text-foreground/50 max-w-sm text-sm font-mono leading-relaxed">
              Optimized toolsets for creating robust, scalable, and visually stunning digital artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <TechCard key={i} {...tech} />
            ))}
          </div>
        </section>
      </main>
    </RetroBackground>
  );
}
