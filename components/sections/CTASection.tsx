"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Build your dream workforce"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-110"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C6F]/75 via-[#0B2C6F]/60 to-[#0B2C6F]/45" />

      {/* Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5" />

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-20">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}

          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Ready To Build Your Team?
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-4xl font-black leading-tight text-white drop-shadow-2xl md:text-6xl"
          >
            Let's Build Your{" "}
            <span className="text-orange-400">
              Dream Workforce
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl"
          >
            Partner with <strong>Social Wizards</strong> and gain access to
            India's trusted industrial recruitment network. We help businesses
            hire skilled professionals faster, smarter, and more efficiently
            across Engineering, Manufacturing, Construction, Infrastructure,
            Oil & Gas, Power, and Industrial sectors.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Contact Us
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#0B2C6F]"
            >
              <Phone size={20} />
              Hire Now
            </button>
          </motion.div>

          {/* Features */}

          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 gap-5 border-t border-white/20 pt-10 md:grid-cols-4"
          >
            {[
              "No Placement Fee",
              "48 Hour Hiring",
              "90-Day Replacement",
              "Pan India Network",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 text-sm font-medium text-white"
              >
                <CheckCircle2
                  size={18}
                  className="text-orange-400"
                />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}