"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { CLIENTS } from "@/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Building2 } from "lucide-react";

const placeholders = [
  "Future Partner", "Future Partner", "Future Partner", "Future Partner",
];

export function ClientsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          tag="Our Clients"
          title="Trusted by Industry Leaders"
          subtitle="We are proud to partner with some of India's most respected industrial companies. Our client relationships are built on trust, quality, and consistent results."
          center
        />

        {/* Active Clients */}
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

        {/* Placeholder clients */}
        <div className="mt-6">
          <p className="text-center text-slate-400 text-sm mb-6 font-medium">+ Many More Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placeholders.map((_, i) => (
              <div
                key={i}
                className="bg-light-gray/50 border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-2"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Building2 size={20} className="text-slate-300" />
                </div>
                <div className="text-slate-300 text-xs font-medium">Your Company</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-primary rounded-3xl p-8 md:p-12"
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
        </motion.div>
      </div>
    </section>
  );
}
