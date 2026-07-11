"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/Counter";
import { STATS } from "@/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function StatsSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-0.5 bg-secondary mx-auto mb-2 group-hover:w-16 transition-all duration-300" />
              <div className="text-white/70 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
