"use client";

import ThreeBackground from "./ThreeBackground";

export default function RetroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-accent-green selection:text-background">
      <ThreeBackground />
      <div className="scanlines" />
      <div className="absolute inset-0 retro-grid pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="relative z-10 w-full h-full text-foreground selection:bg-accent-green selection:text-background flex flex-col">
        {children}
      </div>

      <div className="fixed bottom-4 left-4 flex gap-2 text-[10px] font-mono text-accent-green/40 pointer-events-none uppercase tracking-widest">
        <span>V0.1.2-ALPHA</span>
        <span>{`//`}</span>
        <span>LATENCY: 12MS</span>
      </div>
      
      <div className="fixed bottom-4 right-4 flex gap-2 text-[10px] font-mono text-accent-green/40 pointer-events-none uppercase tracking-widest">
        <span>{`PORT: 3000`}</span>
        <span>{`//`}</span>
        <span>{`STATUS: SYNCED`}</span>
      </div>

      <div className="fixed top-[-10%] right-[-10%] w-125 h-125 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none -z-1" />
      <div className="fixed bottom-[-10%] left-[-10%] w-125 h-125 bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none -z-1" />
      <div className="fixed top-[30%] left-[-15%] w-96 h-96 bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none -z-1" />
    </div>
  );
}
