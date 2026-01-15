"use client";

import RetroBackground from "../components/RetroBackground";
import Navbar from "../components/Navbar";
import { Terminal, Send, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Mail, label: "EMAIL", value: "mdkazinaim.dev@gmail.com", href: "mailto:mdkazinaim.dev@gmail.com", color: "var(--accent-blue)" },
  { icon: Github, label: "GITHUB", value: "naim0018", href: "https://github.com/naim0018", color: "var(--accent-pink)" },
  { icon: Linkedin, label: "LINKEDIN", value: "Md. Kazi Naim", href: "https://linkedin.com/in/naim0018", color: "var(--accent-orange)" },
];

export default function ContactPage() {
  return (
    <RetroBackground>
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-7xl min-h-screen">
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-2 text-accent-green font-mono text-sm tracking-widest uppercase">
            <Terminal size={14} />
            <span>&gt; COMMUNICATION_LINK: /CONTACT</span>
          </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                ESTABLISH <span className="text-accent-pink italic">CONNECT</span>
              </h1>
          <p className="text-foreground/50 max-w-2xl font-medium">
                Ready to bring your ideas to life? Drop a message into the encrypted uplink and let&apos;s create something amazing together.
              </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="border border-white/10 p-8 bg-white/2 relative group backdrop-blur-sm">
               <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                  <MessageSquare className="text-accent-pink" size={24} />
                  UPLINK_MESSAGE
               </h2>
               
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-accent-pink/60 uppercase tracking-widest">Identify_Yourself</label>
                    <input 
                      type="text" 
                      placeholder="NAME // ENTITY_ID"
                      className="w-full bg-background border border-white/10 p-4 font-mono text-sm text-accent-pink placeholder:text-accent-pink/20 focus:outline-none focus:border-accent-pink/60 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-accent-orange/60 uppercase tracking-widest">Return_Address</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL@NETWORK.COM"
                      className="w-full bg-background border border-white/10 p-4 font-mono text-sm text-accent-orange placeholder:text-accent-orange/20 focus:outline-none focus:border-accent-orange/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-accent-blue/60 uppercase tracking-widest">Broadcast_Data</label>
                    <textarea 
                      rows={4}
                      placeholder="TYPE_YOUR_MESSAGE_HERE..."
                      className="w-full bg-background border border-white/10 p-4 font-mono text-sm text-accent-blue placeholder:text-accent-blue/20 focus:outline-none focus:border-accent-blue/60 transition-colors resize-none"
                    />
                  </div>

                  <button className="w-full relative bg-accent-pink text-background p-4 font-black uppercase tracking-widest transition-all duration-300 hover:bg-accent-orange group overflow-hidden">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      TRANSMIT_DATA
                    </div>
                  </button>
               </form>

               {/* Grid Decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-pink)_1px,transparent_1px)] bg-size-[10px_10px]" />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                  <div className="w-8 h-1 bg-accent-orange" />
                  ACCESS_POINTS
               </h2>
               
               <div className="grid gap-4">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-6 p-6 border border-white/5 hover:bg-white/2 transition-all group"
                      style={{ borderColor: `${link.color}33` }}
                    >
                      <div 
                        className="p-3 border transition-colors"
                        style={{ borderColor: `${link.color}33`, color: link.color }}
                      >
                        <link.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <span className="block text-[10px] font-mono opacity-40 uppercase tracking-[0.2em]" style={{ color: link.color }}>{link.label}</span>
                        <span className="text-lg font-black tracking-tight transition-colors group-hover:text-white" style={{ color: link.color }}>{link.value}</span>
                      </div>
                    </motion.a>
                  ))}
               </div>
            </div>

            {/* Retro Status Card */}
            <div className="p-8 border-2 border-dashed border-white/10 font-mono text-[11px] opacity-40 space-y-2">
               <div className="flex justify-between">
                  <span>NETWORK_STATUS:</span>
                  <span className="text-accent-green animate-pulse">ENCRYPTED_UPLINK_READY</span>
               </div>
               <div className="flex justify-between">
                  <span>ENCRYPTION:</span>
                  <span>AES-256-RETRO</span>
               </div>
               <div className="flex justify-between">
                  <span>AVERAGE_RESPONSE:</span>
                  <span className="text-accent-orange">&lt; 24_HOURS</span>
               </div>
               <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  © 2025 MD KAZI NAIM // ALL RIGHTS RESERVED
               </div>
            </div>
          </div>
        </section>
      </main>
    </RetroBackground>
  );
}
