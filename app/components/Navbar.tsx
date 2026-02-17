"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Code, User, MessageSquare, Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "HOME", href: "/", color: "text-accent-green", decoration: "bg-accent-green" },
  { icon: Code, label: "PROJECTS", href: "/projects", color: "text-accent-blue", decoration: "bg-accent-blue" },
  { icon: User, label: "ABOUT", href: "/about", color: "text-accent-pink", decoration: "bg-accent-pink" },
  { icon: Code, label: "SKILLS", href: "/skills", color: "text-accent-purple", decoration: "bg-accent-purple" },
  { icon: MessageSquare, label: "CONTACT", href: "/contact", color: "text-accent-orange", decoration: "bg-accent-orange" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 pointer-events-none ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent"
        }`}
      >
        <div className="pointer-events-auto">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="p-1.5 bg-accent-green text-background rounded-sm">
              <Terminal size={18} />
            </div>
            <span className="font-bold tracking-tighter text-xl group-hover:text-accent-green transition-colors">
              NAIM<span className="text-accent-green">/DEV</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 pointer-events-auto bg-background/80 backdrop-blur-md px-8 py-4 border border-white/5 rounded-full">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <div key={i} className="relative group">
                <Link href={item.href}>
                  <motion.button
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-2 text-xs font-bold tracking-widest transition-colors uppercase cursor-pointer ${
                      isActive ? item.color : "text-foreground/60"
                    } hover:${item.color}`}
                  >
                    <item.icon
                      size={14}
                      className={`transition-transform ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    {item.label}
                  </motion.button>
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${item.decoration}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-bold text-accent-green leading-none">SYSTEM ACTIVE</span>
            <span className="text-[8px] font-mono text-foreground/40 uppercase">Load: 0.24ms</span>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 border border-accent-green/30 flex items-center justify-center bg-accent-green/5 hover:bg-accent-green/20 transition-colors cursor-pointer z-50 relative"
          >
            {isOpen ? <X size={20} className="text-accent-green" /> : <Menu size={20} className="text-accent-green" />}
          </button>

          {/* Status Indicator (Desktop Only) */}
          <div className="hidden md:flex w-10 h-10 border border-accent-green/30 items-center justify-center bg-accent-green/5 hover:bg-accent-green/20 transition-colors cursor-pointer">
            <div className="w-2 h-2 bg-accent-green animate-pulse" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 w-full max-w-xs">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 text-2xl font-black uppercase tracking-tighter ${
                        isActive ? item.color : "text-foreground/40"
                      }`}
                    >
                      <item.icon size={24} />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="w-2 h-2 rounded-full bg-current ml-auto"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Stats */}
            <div className="absolute bottom-12 left-0 w-full px-8">
              <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-accent-green leading-none mb-1">SYSTEM STATUS</span>
                  <span className="text-xs font-mono text-foreground/60">ONLINE</span>
                </div>
                <div className="w-2 h-2 bg-accent-green animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
