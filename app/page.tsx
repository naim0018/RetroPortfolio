"use client";

import Link from "next/link";
import RetroBackground from "./components/RetroBackground";
import Navbar from "./components/Navbar";

import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <RetroBackground>
      <Navbar />

      <main className="container mx-auto px-6  pb-12 max-w-6xl h-screen overflow-hidden flex flex-col justify-center">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-16 items-center flex-1">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-accent-green font-mono text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase animate-pulse">
                &gt; INITIALIZING_DEVELOPER_SESSION...
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                MD. KAZI
                <span className="text-accent-blue retro-glow italic"> NAIM</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 max-w-xl font-medium leading-relaxed">
              I am a passionate web developer with a strong foundation in{" "}
              <span className="text-accent-pink">full-stack development</span>.
              My journey in programming started with solving complex problems,
              and now I channel that analytical mindset into creating{" "}
              <span className="text-accent-orange">elegant web solutions</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/1S2dnVLAzqSrf_jC-eue_UeCqzges5Dtd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-white/5 bg-white/1 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-[9px] text-accent-green/60 font-mono uppercase tracking-widest">Repositories</span>
                <span className="text-xl font-black text-accent-green">50+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-accent-blue/60 font-mono uppercase tracking-widest">Commits_Last_Year</span>
                <span className="text-xl font-black text-accent-blue">1.2k+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-accent-pink/60 font-mono uppercase tracking-widest">APIs_Integrated</span>
                <span className="text-xl font-black text-accent-pink">200+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-accent-orange/60 font-mono uppercase tracking-widest">Performance_Score</span>
                <span className="text-xl font-black text-accent-orange">90+</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-md aspect-square relative group">
            <div className="absolute inset-0 border-2 border-dashed border-accent-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-accent-pink/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <Hero3D />
          </div>
        </section>

      </main>
    </RetroBackground>
  );
}
