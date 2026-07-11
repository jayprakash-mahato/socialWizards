"use client";

import { motion } from "framer-motion";
import {
  Settings, HardHat, Factory, Flame, FlaskConical, Building2,
  Zap, Mountain, Wrench, Sun, Truck, Package
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";

const industries = [
  { name: "Engineering", icon: Settings },
  { name: "Construction", icon: HardHat },
  { name: "Manufacturing", icon: Factory },
  { name: "Oil & Gas", icon: Flame },
  { name: "Chemical", icon: FlaskConical },
  { name: "Infrastructure", icon: Building2 },
  { name: "Power", icon: Zap },
  { name: "Mining", icon: Mountain },
  { name: "Steel", icon: Wrench },
  { name: "Renewable Energy", icon: Sun },
  { name: "Logistics", icon: Truck },
  { name: "FMCG", icon: Package },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeader
          tag="Industries We Serve"
          title="Expertise Across Every Industrial Sector"
          subtitle="From heavy engineering to fast-moving consumer goods, we have deep domain expertise and talent networks across India's most critical industries."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-14"
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const isOrange = i % 2 === 1;
            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-card-default hover:shadow-card-hover transition-all duration-300 cursor-default group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isOrange ? "bg-secondary/10 group-hover:bg-secondary" : "bg-primary/10 group-hover:bg-primary"}`}>
                  <Icon size={22} className={`transition-colors duration-300 ${isOrange ? "text-secondary group-hover:text-white" : "text-primary group-hover:text-white"}`} />
                </div>
                <span className="text-sm font-semibold text-slate-700 text-center leading-tight">{industry.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
