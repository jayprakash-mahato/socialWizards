"use client";

import { motion } from "framer-motion";
import {
  Settings, HardHat, Factory, Flame, FlaskConical, Building2,
  Zap, Mountain, Wrench, Sun, Truck, Package
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";

const industries = [
  { name: "Engineering", icon: Settings, placements: "8,500+" },
  { name: "Construction", icon: HardHat, placements: "6,200+" },
  { name: "Manufacturing", icon: Factory, placements: "9,800+" },
  { name: "Oil & Gas", icon: Flame, placements: "4,300+" },
  { name: "Chemical", icon: FlaskConical, placements: "2,100+" },
  { name: "Infrastructure", icon: Building2, placements: "5,600+" },
  { name: "Power", icon: Zap, placements: "3,400+" },
  { name: "Mining", icon: Mountain, placements: "1,800+" },
  { name: "Steel", icon: Wrench, placements: "2,900+" },
  { name: "Renewable Energy", icon: Sun, placements: "1,500+" },
  { name: "Logistics", icon: Truck, placements: "3,200+" },
  { name: "FMCG", icon: Package, placements: "2,700+" },
];

export function IndustryCoverage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          tag="Industry Coverage"
          title="Placements Across Every Sector"
          subtitle="Our deep industry expertise spans 15+ sectors, with specialized recruitment teams dedicated to each vertical."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-14"
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-light-gray rounded-2xl p-4 text-center hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-semibold text-primary text-xs mb-1">{industry.name}</div>
                <div className="text-secondary font-bold text-sm">{industry.placements}</div>
                <div className="text-slate-400 text-xs">placed</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
