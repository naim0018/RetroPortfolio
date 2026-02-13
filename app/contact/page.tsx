"use client";

import RetroBackground from "../components/RetroBackground";
import Navbar from "../components/Navbar";
import {
  Terminal,
  Send,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "mdkazinaim.dev@gmail.com",
    href: "mailto:mdkazinaim.dev@gmail.com",
    color: "var(--accent-blue)",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "naim0018",
    href: "https://github.com/naim0018",
    color: "var(--accent-pink)",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "Md. Kazi Naim",
    href: "https://linkedin.com/in/naim0018",
    color: "var(--accent-orange)",
  },
];

export default function ContactPage() {
  return (
    <RetroBackground>
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-12 max-w-6xl h-screen overflow-hidden flex flex-col">
        <section className="flex-1 flex flex-col justify-center min-h-0">
          <header className="mb-8 space-y-2 shrink-0">
            <div className="flex items-center gap-2 text-accent-green font-mono text-[10px] md:text-sm tracking-widest uppercase">
              <Terminal size={14} />
              <span>&gt; COMMUNICATION_LINK: /CONTACT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              ESTABLISH <span className="text-accent-pink italic">CONNECT</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start overflow-hidden">
            {/* Left Side: Contact Form */}
            <div className="bg-white/2 border border-white/10 p-6 md:p-8 backdrop-blur-md relative overflow-hidden">
              <h2 className="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                <MessageSquare className="text-accent-pink" size={18} />
                UPLINK_MESSAGE
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-accent-pink/60 uppercase tracking-widest">Identify_Yourself</label>
                    <input
                      type="text"
                      placeholder="NAME // ENTITY_ID"
                      className="w-full bg-background/50 border border-white/10 p-3 font-mono text-xs text-accent-pink placeholder:text-accent-pink/20 focus:outline-none focus:border-accent-pink/60 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-accent-orange/60 uppercase tracking-widest">Return_Address</label>
                    <input
                      type="email"
                      placeholder="EMAIL@NETWORK.COM"
                      className="w-full bg-background/50 border border-white/10 p-3 font-mono text-xs text-accent-orange placeholder:text-accent-orange/20 focus:outline-none focus:border-accent-orange/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-accent-blue/60 uppercase tracking-widest">Broadcast_Data</label>
                  <textarea
                    rows={3}
                    placeholder="TYPE_YOUR_MESSAGE_HERE..."
                    className="w-full bg-background/50 border border-white/10 p-3 font-mono text-xs text-accent-blue placeholder:text-accent-blue/20 focus:outline-none focus:border-accent-blue/60 transition-colors resize-none"
                  />
                </div>

                <button className="w-full bg-accent-pink text-background p-3 font-black uppercase tracking-widest text-xs transition-all duration-300 hover:bg-accent-orange group">
                  <div className="flex items-center justify-center gap-2">
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    TRANSMIT_DATA
                  </div>
                </button>
              </form>
            </div>

            {/* Right Side: Access Points & Status */}
            <div className="space-y-6">
              <div className="grid gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 border border-white/5 bg-white/1 hover:bg-white/3 transition-all group"
                    style={{ borderColor: `${link.color}33` }}
                  >
                    <div className="p-2 border transition-colors" style={{ borderColor: `${link.color}33`, color: link.color }}>
                      <link.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[8px] font-mono opacity-40 uppercase tracking-[0.2em]" style={{ color: link.color }}>
                        {link.label}
                      </span>
                      <span className="text-sm font-black tracking-tight" style={{ color: link.color }}>
                        {link.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border border-dashed border-white/10 font-mono text-[9px] opacity-40 space-y-1.5">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </RetroBackground>
  );
}
