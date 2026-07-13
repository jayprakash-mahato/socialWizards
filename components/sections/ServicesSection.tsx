"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck, Search, FileText, Briefcase, Zap, Users,
  Settings, Flame, HardHat, Building2, Factory, X, ArrowRight, CheckCircle2
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Image from "next/image";

const coreServices = [
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    desc: "We identify and recruit highly qualified professionals for permanent positions across technical, engineering, manufacturing, and corporate functions.",
    color: "primary",
  },
  // {
  //   icon: FileText,
  //   title: "Contract Staffing",
  //   desc: "Flexible staffing solutions for short-term, long-term, and project-based workforce requirements.",
  //   color: "secondary",
  // },
  {
    icon: Zap,
    title: "Project & Shutdown Hiring",
    desc: "Specialized recruitment support for shutdown projects, commissioning activities, maintenance projects, and EPC assignments.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Bulk Hiring",
    desc: "Efficient recruitment solutions for organizations requiring large-scale workforce deployment within strict timelines.",
    color: "secondary",
  },
  {
    icon: Search,
    title: "Executive Search",
    desc: "Leadership hiring for senior management, department heads, project managers, plant heads, engineering managers, and technical experts.",
    color: "primary",
  },
];

const industryServices = [
  {
    icon: Settings,
    title: "Engineering & EPC",
    desc: "Recruitment for design engineering, project execution, commissioning, maintenance, and technical support.",
    image: "/images/engineering.png",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    desc: "Onshore and offshore recruitment for refinery, petrochemical, pipeline, shutdown, and maintenance projects.",
    image: "/images/oil-gas.png",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Production, maintenance, quality, utilities, operations, and plant management professionals.",
    image: "/images/manufacturing.png",
  },
  {
    icon: Settings,
    title: "Chemical Industry",
    desc: "Recruitment for specialty chemicals, process plants, pharmaceuticals, and industrial chemical manufacturing.",
    image: "/images/chemical.png",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    desc: "Civil, MEP, structural, industrial construction, commercial projects, and infrastructure development.",
    image: "/images/construction.png",
  },
  {
    icon: Zap,
    title: "Power & Energy",
    desc: "Thermal, renewable, transmission, distribution, and industrial power plant recruitment.",
    image: "/images/power-energy.png",
  },
  // {
  //   icon: Users,
  //   title: "FMCG & Industrial Production",
  //   desc: "Production planning, operations, packaging, quality assurance, maintenance, and warehouse management.",
  //   image: "/images/epic.png",
  // },
];

export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeader
          tag="Our Services"
          title="Our Recruitment Solutions"
          subtitle="We provide comprehensive recruitment and manpower solutions tailored to meet the workforce requirements of organizations across multiple industries."
          center
        />

        {/* Core Services */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {coreServices.map((svc, i) => {
            const Icon = svc.icon;
            const isPrimary = svc.color === "primary";
            return (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-7 transition-all duration-300 group ${
                  isPrimary ? "bg-primary text-white" : "bg-white shadow-card-default hover:shadow-card-hover"
                } ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  isPrimary ? "bg-white/15 group-hover:bg-secondary" : "bg-primary/10 group-hover:bg-primary"
                }`}>
                  <Icon size={22} className={isPrimary ? "text-white" : "text-primary group-hover:text-white transition-colors duration-300"} />
                </div>
                <h3 className={`font-bold text-lg mb-3 ${isPrimary ? "text-white" : "text-primary"}`}>{svc.title}</h3>
                <p className={`text-sm leading-relaxed ${isPrimary ? "text-white/75" : "text-slate-500"}`}>{svc.desc}</p>
                <button
                  onClick={scrollToContact}
                  className={`mt-5 flex items-center gap-1 text-xs font-semibold ${isPrimary ? "text-secondary" : "text-secondary"}`}
                >
                  Get Started <ArrowRight size={12} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="mt-20 mb-14">
          <SectionHeader
            tag="Industry Expertise"
            title="Industries We Serve"
            subtitle="Specialized recruitment teams dedicated to each industry vertical, with deep domain knowledge and extensive talent networks."
            center
          />
        </div>

        {/* Industry Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {industryServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card-default hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
                onClick={() => setExpanded(expanded === svc.title ? null : svc.title)}
              >
                <div className="relative h-36 overflow-hidden">
               <Image
  src={svc.image}
  alt={svc.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon size={17} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary text-sm mb-2 group-hover:text-secondary transition-colors">{svc.title}</h3>
                  <AnimatePresence>
                    {expanded === svc.title && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-500 text-xs leading-relaxed overflow-hidden"
                      >
                        {svc.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  {expanded !== svc.title && (
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{svc.desc}</p>
                  )}
                  <div className="mt-3 flex items-center gap-1 text-secondary text-xs font-semibold">
                    {expanded === svc.title ? "Show Less" : "Learn More"} <ArrowRight size={11} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
