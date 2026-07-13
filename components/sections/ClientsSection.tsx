"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CLIENTS, TESTIMONIALS } from "@/constants";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

const placeholders = ["Your Company", "Your Company", "Your Company", "Your Company"];

export function ClientsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));
  const t = TESTIMONIALS[active];

  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <SectionHeader
          tag="Our Clients"
          title="Trusted by Industry Leaders"
          subtitle="We are proud to support leading organizations with their recruitment and manpower requirements across engineering, manufacturing, industrial, EPC, and infrastructure sectors."
          center
        />

        {/* Client logos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
        >
          {CLIENTS.map((client) => (
            <motion.div
              key={client.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-light-gray rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Building2 size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-center">
                <div className="font-bold text-primary text-sm">{client.name}</div>
                <div className="text-slate-400 text-xs mt-1">{client.industry}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder slots */}
        {/* <div className="mt-6">
          <p className="text-center text-slate-400 text-sm mb-5 font-medium">We continue to grow our client partnerships</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placeholders.map((_, i) => (
              <div key={i} className="bg-light-gray/50 border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Building2 size={20} className="text-slate-300" />
                </div>
                <div className="text-slate-300 text-xs font-medium">Your Company</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Stats bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-primary rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Active Clients" },
              { value: "15+", label: "Industries" },
              { value: "50K+", label: "Placements" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-secondary mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Testimonials */}
        {/* <div className="mt-20">
          <SectionHeader tag="Testimonials" title="What Our Clients Say" center />
          <div className="mt-12 max-w-3xl mx-auto">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-light-gray rounded-3xl p-8 md:p-10 relative"
            >
              <Quote size={48} className="text-primary/10 absolute top-6 left-6" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.designation}</div>
                  <div className="text-secondary text-sm font-semibold">{t.company}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-primary" : "w-2 bg-slate-300"}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
