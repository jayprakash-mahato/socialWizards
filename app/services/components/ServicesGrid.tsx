"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  UserCheck, Search, FileText, Briefcase, Zap, Users,
  GraduationCap, DollarSign, Factory, Settings, Flame, Wrench,
  HardHat, Building2, Mountain, CheckCircle2, ArrowRight, X
} from "lucide-react";
import { SERVICES } from "@/constants";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  UserCheck, Search, FileText, Briefcase, Zap, Users,
  GraduationCap, DollarSign, Factory, Settings, Flame, Wrench,
  HardHat, Building2, Mountain,
};

export function ServicesGrid() {
  const [selected, setSelected] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeader
          tag="All Services"
          title="What We Offer"
          subtitle="Click on any service to learn more about our specialized recruitment solutions."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(service)}
                className="bg-white rounded-2xl p-6 shadow-card-default hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-primary text-base mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{service.shortDesc}</p>
                <div className="mt-3 flex items-center gap-1 text-secondary text-xs font-semibold">
                  Learn More <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 rounded-t-3xl overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  sizes="672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-2xl font-black text-white">{selected.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-6">{selected.description}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Benefits */}
                  <div>
                    <h3 className="font-bold text-primary mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {selected.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-bold text-primary mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {selected.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0 mt-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex gap-3">
                  <Link href="/contact" className="btn-primary flex-1 justify-center text-sm py-3">
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-outline-primary text-sm py-3 px-5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
