"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserCheck, Search, FileText, Briefcase, Zap, Users,
  GraduationCap, DollarSign, Factory, Settings, Flame, Wrench
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SERVICES } from "@/constants";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UserCheck, Search, FileText, Briefcase, Zap, Users,
  GraduationCap, DollarSign, Factory, Settings, Flame, Wrench,
};

const previewServices = SERVICES.slice(0, 8);

export function ServicesPreviewSection() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            tag="Our Services"
            title="Comprehensive Recruitment Solutions"
            subtitle="End-to-end talent acquisition services tailored for India's industrial sector."
          />
          <Link href="/services" className="btn-outline-primary shrink-0 self-start md:self-auto">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {previewServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Settings;
            const isHighlighted = i === 0 || i === 5;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 transition-all duration-300 group cursor-pointer ${
                  isHighlighted
                    ? "bg-primary text-white shadow-card-hover"
                    : "bg-white shadow-card-default hover:shadow-card-hover"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  isHighlighted
                    ? "bg-white/20 group-hover:bg-secondary"
                    : "bg-primary/10 group-hover:bg-primary"
                }`}>
                  <Icon size={22} className={`transition-colors duration-300 ${
                    isHighlighted ? "text-white" : "text-primary group-hover:text-white"
                  }`} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${isHighlighted ? "text-white" : "text-primary"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isHighlighted ? "text-white/70" : "text-slate-500"}`}>
                  {service.shortDesc}
                </p>
                <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${isHighlighted ? "text-secondary" : "text-secondary"}`}>
                  Learn More <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
