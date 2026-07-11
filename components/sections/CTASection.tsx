"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Build your dream workforce"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/90 to-primary/75" />
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Ready to Get Started?
          </motion.span>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Let's Build Your{" "}
            <span className="text-secondary">Dream Workforce</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Partner with Social Wizards and gain access to India's largest industrial talent network. Your next great hire is just a conversation away.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo("contact")} className="btn-primary text-base px-8 py-4">
              Contact Us <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-outline text-base px-8 py-4">
              <Phone size={18} /> Hire Now
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/15">
            {["No Placement Fee", "48hr Turnaround", "90-Day Guarantee", "Pan India Network"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-4 h-4 bg-secondary/30 rounded-full flex items-center justify-center">
                  <span className="text-secondary text-xs">✓</span>
                </span>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
