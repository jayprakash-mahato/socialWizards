"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { HOW_WE_WORK } from "@/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ArrowDown } from "lucide-react";

export function HowWeWorkSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          tag="Our Process"
          title="How We Deliver Results"
          subtitle="A proven 5-step recruitment methodology that ensures quality, speed, and the perfect fit every time."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 max-w-3xl mx-auto"
        >
          {HOW_WE_WORK.map((step, i) => (
            <div key={step.step}>
              <motion.div
                variants={fadeUp}
                className="flex gap-6 group"
              >
                {/* Step Number */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-md group-hover:bg-secondary transition-colors duration-300">
                    <span className="text-white font-black text-lg">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="bg-light-gray rounded-2xl p-5 group-hover:shadow-card-hover transition-all duration-300">
                    <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Connector */}
              {i < HOW_WE_WORK.length - 1 && (
                <motion.div
                  variants={fadeUp}
                  className="flex items-center ml-7 my-2"
                >
                  <ArrowDown size={20} className="text-secondary" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
