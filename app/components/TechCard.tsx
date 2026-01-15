"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface TechCardProps {
  name: string;
  icon: LucideIcon;
  level: number;
  color?: string;
}

export default function TechCard({ name, icon: Icon, level, color = "var(--accent-green)" }: TechCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      style={{ borderColor: `${color}33` } as React.CSSProperties}
      className="relative p-4 bg-background border group overflow-hidden"
    >
      {/* Corner Bracket Decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: `${color}99` }} />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: `${color}99` }} />
      
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div 
            className="p-2 border transition-colors duration-300"
            style={{ 
              borderColor: `${color}1A`, 
              backgroundColor: `${color}0D`,
              color: color
            }}
          >
            <Icon size={20} />
          </div>
          <span className="text-[10px] font-mono opacity-40 uppercase" style={{ color: color }}>LVL_{level}</span>
        </div>
        
        <div>
          <h3 className="text-sm font-bold tracking-wider uppercase">{name}</h3>
          <div className="mt-2 h-1 w-full overflow-hidden" style={{ backgroundColor: `${color}1A` }}>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              className="h-full"
              style={{ backgroundColor: color }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
