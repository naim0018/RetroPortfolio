"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Code, User, MessageSquare, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "HOME", href: "/", color: "text-accent-green" },
  { icon: Code, label: "PROJECTS", href: "/projects", color: "text-accent-blue" },
  { icon: User, label: "ABOUT", href: "/about", color: "text-accent-pink" },
  { icon: Code, label: "SKILLS", href: "/skills", color: "text-accent-purple" },
  { icon: MessageSquare, label: "CONTACT", href: "/contact", color: "text-accent-orange" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent">
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="p-1.5 bg-accent-green text-background rounded-sm">
          <Terminal size={18} />
        </div>
        <span className="font-bold tracking-tighter text-xl group-hover:text-accent-green transition-colors">
          NAIM<span className="text-accent-green">/DEV</span>
        </span>
      </Link>

      <div className="hidden md:flex gap-8">
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link key={i} href={item.href}>
              <motion.button
                whileHover={{ y: -2 }}
                className={`flex items-center gap-2 text-xs font-bold tracking-widest transition-colors group uppercase cursor-pointer ${
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
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className={`h-0.5 w-full mt-1 ${item.color.replace(
                    "text-",
                    "bg-"
                  )}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-accent-green leading-none">SYSTEM ACTIVE</span>
          <span className="text-[8px] font-mono text-foreground/40 uppercase">Load: 0.24ms</span>
        </div>
        <div className="w-10 h-10 border border-accent-green/30 flex items-center justify-center bg-accent-green/5 hover:bg-accent-green/20 transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-accent-green animate-pulse" />
        </div>
      </div>
    </nav>
  );
}
