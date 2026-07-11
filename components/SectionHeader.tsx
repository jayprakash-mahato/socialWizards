"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ tag, title, subtitle, center = false, light = false, className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(center && "text-center", className)}
    >
      {tag && (
        <span className={cn("section-tag", light && "bg-white/20 text-white")}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {tag}
        </span>
      )}
      <h2 className={cn("section-title", light && "text-white")}>{title}</h2>
      {subtitle && (
        <p className={cn("section-subtitle mt-4", light ? "text-white/70" : "text-slate-500", center && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
