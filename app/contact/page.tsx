"use client";

import { useState, useEffect } from "react";
import RetroBackground from "../components/RetroBackground";
import Navbar from "../components/Navbar";
import {
  Terminal,
  Send,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Activity,
  Zap,
  Shield,
  Radio,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "mdkazinaim.dev@gmail.com",
    href: "mailto:mdkazinaim.dev@gmail.com",
    color: "var(--accent-blue)",
    status: "ACTIVE",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "naim0018",
    href: "https://github.com/naim0018",
    color: "var(--accent-pink)",
    status: "ONLINE",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "Md. Kazi Naim",
    href: "https://linkedin.com/in/naim0018",
    color: "var(--accent-orange)",
    status: "READY",
  },
];

const logMessages = [
  "[SYS] Initializing secure connection...",
  "[NET] Handshake protocol established",
  "[SEC] Encryption layer: AES-256 active",
  "[COM] Communication channels open",
  "[RDY] System ready for transmission",
];

export default function ContactPage() {
  const [currentLog, setCurrentLog] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLog((prev) => (prev + 1) % logMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <RetroBackground>
      <Navbar />

      <main className="container mx-auto px-6  pb-12 max-w-6xl h-screen overflow-hidden flex flex-col">
        <section className="flex-1 flex flex-col justify-center min-h-0 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 max-h-fit gap-8 items-start overflow-hidden flex-1 min-h-0">
            {/* Left Side: Contact Form - Takes 3 columns */}
            <div className="col-span-3">
              {/* Header with Glitch Effect */}
              <header className="mb-10 space-y-3 shrink-0">
                <motion.div
                  className="flex items-center gap-2 text-accent-green font-mono text-[10px] md:text-sm tracking-widest uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Terminal size={14} className="animate-pulse" />
                  <span>&gt; COMMUNICATION_LINK: /CONTACT</span>
                </motion.div>

                <div className="relative">
                  <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none relative">
                    <span className="relative inline-block">
                      ESTABLISH
                      <motion.span
                        className="absolute inset-0 text-accent-blue opacity-50"
                        animate={{
                          x: [0, -2, 2, 0],
                          opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        ESTABLISH
                      </motion.span>
                    </span>{" "}
                    <span className="text-accent-orange italic relative inline-block">
                      CONNECT
                      <motion.span
                        className="absolute inset-0 text-accent-orange opacity-50"
                        animate={{
                          x: [0, 2, -2, 0],
                          opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 0.1,
                        }}
                      >
                        CONNECT
                      </motion.span>
                    </span>
                  </h1>
                </div>

                <motion.p
                  className="text-foreground/60 font-mono text-sm max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Initiate secure transmission protocol. All channels encrypted
                  and monitored.
                </motion.p>
              </header>
              <motion.div
                className="lg:col-span-3 bg-white/[0.02] border border-white/10 p-8 backdrop-blur-md relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent-pink/30" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-blue/30" />

                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--accent-pink) 1px, transparent 1px), linear-gradient(90deg, var(--accent-pink) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                      <MessageSquare className="text-accent-pink" size={20} />
                      UPLINK_MESSAGE
                    </h2>
                    <div className="flex items-center gap-2 text-[8px] font-mono text-accent-green/60">
                      <Activity size={12} className="animate-pulse" />
                      SECURE_LINE
                    </div>
                  </div>

                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <motion.div
                        className="space-y-2 relative"
                        whileTap={{ scale: 0.99 }}
                      >
                        <label className="text-[10px] font-mono text-accent-pink/70 uppercase tracking-widest flex items-center gap-2">
                          <Zap size={10} />
                          Identify_Yourself
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="NAME // ENTITY_ID"
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-background/70 border border-white/10 p-4 font-mono text-sm text-accent-pink placeholder:text-accent-pink/20 focus:outline-none focus:border-accent-pink focus:shadow-[0_0_20px_rgba(255,0,122,0.3)] transition-all duration-300"
                          />
                          {focusedField === "name" && (
                            <motion.div
                              className="absolute -right-2 top-1/2 -translate-y-1/2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <ArrowRight
                                size={16}
                                className="text-accent-pink"
                              />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        className="space-y-2 relative"
                        whileTap={{ scale: 0.99 }}
                      >
                        <label className="text-[10px] font-mono text-accent-orange/70 uppercase tracking-widest flex items-center gap-2">
                          <Radio size={10} />
                          Return_Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="EMAIL@NETWORK.COM"
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-background/70 border border-white/10 p-4 font-mono text-sm text-accent-orange placeholder:text-accent-orange/20 focus:outline-none focus:border-accent-orange focus:shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-all duration-300"
                          />
                          {focusedField === "email" && (
                            <motion.div
                              className="absolute -right-2 top-1/2 -translate-y-1/2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <ArrowRight
                                size={16}
                                className="text-accent-orange"
                              />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-2 relative"
                      whileTap={{ scale: 0.99 }}
                    >
                      <label className="text-[10px] font-mono text-accent-blue/70 uppercase tracking-widest flex items-center gap-2">
                        <Shield size={10} />
                        Broadcast_Data
                      </label>
                      <div className="relative">
                        <textarea
                          rows={5}
                          placeholder="TYPE_YOUR_MESSAGE_HERE..."
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-background/70 border border-white/10 p-4 font-mono text-sm text-accent-blue placeholder:text-accent-blue/20 focus:outline-none focus:border-accent-blue focus:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 resize-none"
                        />
                        {focusedField === "message" && (
                          <motion.div
                            className="absolute -right-2 top-4"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <ArrowRight
                              size={16}
                              className="text-accent-blue"
                            />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    <motion.button
                      className="w-full bg-accent-pink text-background p-4 font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-accent-orange hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                        TRANSMIT_DATA
                        <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
                      </div>
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Access Points & Status - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6 flex flex-col h-full">
              {/* Social Links */}
              <motion.div
                className="grid gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all group relative overflow-hidden"
                    style={{
                      borderLeftWidth: "3px",
                      borderLeftColor: link.color,
                    }}
                  >
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10"
                      style={{ backgroundColor: link.color }}
                    />

                    <div
                      className="p-3 border transition-all group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        borderColor: `${link.color}66`,
                        color: link.color,
                        backgroundColor: `${link.color}11`,
                      }}
                    >
                      <link.icon size={20} />
                    </div>

                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="block text-[9px] font-mono uppercase tracking-[0.2em] opacity-60"
                          style={{ color: link.color }}
                        >
                          {link.label}
                        </span>
                        <div className="flex items-center gap-1">
                          <div
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: link.color }}
                          />
                          <span className="text-[7px] font-mono opacity-40">
                            {link.status}
                          </span>
                        </div>
                      </div>
                      <span
                        className="text-sm font-bold tracking-tight block"
                        style={{ color: link.color }}
                      >
                        {link.value}
                      </span>
                    </div>

                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: link.color }}
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Live System Status */}
              <motion.div
                className="flex-1 bg-white/[0.02] border border-white/10 p-6 backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent-green/20" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-accent-green flex items-center gap-2">
                      <Activity size={14} className="animate-pulse" />
                      SYSTEM_STATUS
                    </h3>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                      <div
                        className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-accent-pink rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>

                  {/* Live Log Feed */}
                  <div className="bg-background/50 border border-white/5 p-4 mb-4 font-mono text-[10px] flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentLog}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-accent-green/80"
                      >
                        {logMessages[currentLog]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Status Metrics */}
                  <div className="space-y-3 font-mono text-[9px]">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/40 uppercase">
                        Network_Status:
                      </span>
                      <span className="text-accent-green flex items-center gap-2">
                        <span className="animate-pulse">●</span>
                        ENCRYPTED_UPLINK_READY
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/40 uppercase">
                        Encryption:
                      </span>
                      <span className="text-accent-blue">AES-256-RETRO</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/40 uppercase">
                        Avg_Response:
                      </span>
                      <span className="text-accent-orange">&lt; 24_HOURS</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-white/5">
                      <span className="text-foreground/40 uppercase">
                        Uptime:
                      </span>
                      <span className="text-accent-pink">99.9%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </RetroBackground>
  );
}
