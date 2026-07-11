"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TIMELINE } from "@/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function CompanyTimeline() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeader
          tag="Our Journey"
          title="A Decade of Growth & Excellence"
          subtitle="From a small recruitment firm to India's trusted industrial staffing partner — our journey has been defined by relentless commitment to quality."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 relative"
        >
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className="flex-1 md:max-w-[calc(50%-3rem)]">
                  <div className={`bg-white rounded-2xl p-6 shadow-card-default hover:shadow-card-hover transition-all duration-300 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="text-secondary font-black text-2xl mb-1">{item.year}</div>
                    <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-12 h-12 bg-primary rounded-full items-center justify-center shrink-0 shadow-md z-10">
                  <div className="w-4 h-4 bg-secondary rounded-full" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
