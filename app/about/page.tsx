"use client";

import RetroBackground from "../components/RetroBackground";
import Navbar from "../components/Navbar";
import FloatingTech from "../components/FloatingTech";
import { Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <RetroBackground>
      <Navbar />

      <main className="container mx-auto px-6 pb-12 max-w-6xl h-screen overflow-hidden flex flex-col justify-center">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <header className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-accent-green font-mono text-[10px] md:text-sm tracking-widest uppercase">
                <Terminal size={14} />
                <span>&gt; IDENTITY_VERIFICATION: /ABOUT_ME</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
                MD. KAZI <span className="text-accent-green italic">NAIM</span>
              </h1>
            </header>
            <div className="p-8 border border-white/10 bg-white/2 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono opacity-20">
                #BIO_DATA
              </div>
              <p className="text-xl leading-relaxed font-medium">
                I am a passionate web developer with a strong foundation in
                full-stack development. My journey in programming started with
                solving complex problems, and now I channel that analytical
                mindset into creating elegant web solutions.
              </p>
              <p className="mt-4 text-foreground/60 leading-relaxed font-medium">
                I specialize in building scalable, high-performance web
                applications using modern technologies like React, Next.js, and
                Node.js. I believe in clean code, efficient architecture, and
                creating user-centric experiences that make a difference.
              </p>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-8">
                <div>
                  <span className="block text-[10px] font-mono text-accent-blue/60 uppercase">
                    Location
                  </span>
                  <span className="font-bold text-lg">Bangladesh</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-accent-pink/60 uppercase">
                    Role
                  </span>
                  <span className="font-bold text-lg">
                    Full Stack Developer
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-accent-orange/60 uppercase">
                    Exp
                  </span>
                  <span className="font-bold text-lg">Lvl 3+ Years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-32">
            {/* 3D Visual Decoration */}
            <div className="aspect-4/5 border-2 border-white/10 relative group overflow-hidden bg-white/1 flex items-center justify-center">
              <FloatingTech color="var(--accent-blue)" />

              {/* Terminal Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-sm border-t border-accent-blue/20 font-mono text-[10px] text-accent-blue/60">
                <div>SYS.SCAN(NAIM.ENTITY)</div>
                <div className="flex gap-2">
                  <span className="text-accent-blue">LOADING...</span>
                  <span>100%</span>
                </div>
                <div className="mt-1 opacity-40">
                  MD5: e99a18c428cb38d5f260853678922e03
                </div>
              </div>

              {/* Geometric Decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-accent-blue" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-accent-purple" />
            </div>
          </div>
        </section>
      </main>
    </RetroBackground>
  );
}
