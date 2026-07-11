"use client";

import { motion } from "framer-motion";
import { Shield, Target, Heart, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { COMPANY_VALUES } from "@/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Target, Heart, Lightbulb };

export function CompanyValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          tag="Our Values"
          title="The Principles That Guide Us"
          subtitle="Our core values are not just words on a wall — they are the foundation of every decision we make and every relationship we build."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
        >
          {COMPANY_VALUES.map((value, i) => {
            const Icon = iconMap[value.icon] || Shield;
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <div className="bg-light-gray rounded-3xl p-8 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-primary text-xl mb-3">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
