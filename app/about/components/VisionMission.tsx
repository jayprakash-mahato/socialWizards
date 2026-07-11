"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function VisionMission() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="bg-primary rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={26} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-white/75 leading-relaxed text-base">
                To be India's most respected and innovative industrial recruitment company, recognized for transforming careers and building world-class workforces that power the nation's industrial growth.
              </p>
              <div className="mt-6 pt-6 border-t border-white/15">
                <p className="text-secondary font-semibold text-sm">
                  "Empowering India's Industrial Future, One Placement at a Time"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card-default relative overflow-hidden group hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={26} className="text-primary" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed text-base">
                To deliver exceptional recruitment solutions that create lasting value for our clients and candidates. We achieve this through deep industry expertise, rigorous screening processes, and an unwavering commitment to quality and integrity.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-secondary font-semibold text-sm">
                  "Quality Talent. Trusted Partnerships. Lasting Impact."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
