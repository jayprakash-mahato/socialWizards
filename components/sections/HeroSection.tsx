"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Users, Briefcase, Award } from "lucide-react";
import { fadeUp, fadeRight, staggerContainer } from "@/lib/animations";

const industries = [
  "Engineering & EPC",
  "Manufacturing",
  "Oil & Gas",
  "Chemical & Process Industries",
  "Construction & Infrastructure",
  "Power & Energy",
  "FMCG",
  "Industrial Automation",
  "Heavy Engineering",
  "Industrial Projects",
];

const whyUs = [
  "Industry-specific recruitment expertise",
  "Large database of pre-screened candidates",
  "Fast turnaround time",
  "Permanent, Contract & Project Hiring",
  "Executive Search & Leadership Hiring",
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050f2e 0%, #0B2C6F 40%, #0d3580 65%, #0a2560 100%)",
      }}
    >
      {/* Layered background effects — pure CSS, no external image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial glow top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.12) 0%, transparent 70%)" }} />
        {/* Radial glow bottom-left */}
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(11,44,111,0.6) 0%, transparent 70%)" }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dots opacity-10" />
        {/* Animated orbs */}
        <motion.div
          animate={{ y: [-24, 24, -24], x: [-10, 10, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(255,122,0,0.07)" }}
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,122,0,0.6), transparent)" }} />
        <div className="absolute top-0 left-1/2 w-px h-full opacity-5"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)" }} />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT CONTENT ── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 border text-sm font-semibold px-4 py-2 rounded-full mb-7 backdrop-blur-sm"
              style={{
                background: "rgba(255,122,0,0.12)",
                borderColor: "rgba(255,122,0,0.35)",
                color: "#ffb366",
              }}
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Trusted Recruitment & Manpower Consulting Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.08] mb-5"
            >
              Building Strong{" "}
              <span
                className="relative inline-block"
                style={{ color: "#FF7A00" }}
              >
                Teams.
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                  style={{ background: "#FF7A00" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                />
              </span>
              <br />
              Powering Business{" "}
              <span style={{ color: "#FF7A00" }}>Growth.</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-base md:text-lg leading-relaxed mb-3 max-w-xl" style={{ color: "rgba(255,255,255,0.82)" }}>
              Social Wizards is a leading recruitment and manpower consulting firm specializing in hiring skilled professionals across Engineering, Manufacturing, Construction, Oil & Gas, Chemical, Infrastructure, Power, Energy, EPC, and Industrial sectors.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed mb-9 max-w-xl" style={{ color: "rgba(255,255,255,0.58)" }}>
              With an extensive talent network and industry-focused expertise, we help organizations identify, attract, and hire the right talent quickly — whether a single critical resource or large-scale workforce deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary text-base px-8 py-4"
              >
                Hire Talent <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="btn-outline text-base px-8 py-4"
              >
                Our Services
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-7 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[
                { icon: Award, value: "10+", label: "Years Experience" },
                { icon: Users, value: "500+", label: "Clients Served" },
                { icon: Briefcase, value: "50K+", label: "Candidates Placed" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,122,0,0.15)" }}>
                    <Icon size={17} style={{ color: "#FF7A00" }} />
                  </div>
                  <div>
                    <div className="text-xl font-black" style={{ color: "#FF7A00" }}>{value}</div>
                    <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — IMAGE + FLOATING CARDS ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Professional image with overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: "320px" }}>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=85"
                alt="Professional recruitment team"
                className="w-full h-full object-cover"
              />
              {/* Dark blue overlay on top of image */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(5,15,46,0.75) 0%, rgba(11,44,111,0.55) 50%, rgba(5,15,46,0.35) 100%)",
                }}
              />
              {/* Orange accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #FF7A00, transparent)" }} />

              {/* Overlay text on image */}
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(5,15,46,0.95), transparent)" }}>
                <div className="text-white font-bold text-base mb-0.5">India's Trusted Recruitment Partner</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Connecting exceptional talent with leading industrial companies
                </div>
              </div>

              {/* Floating badge on image */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 rounded-xl px-3 py-2 text-xs font-bold backdrop-blur-md"
                style={{
                  background: "rgba(255,122,0,0.9)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(255,122,0,0.4)",
                }}
              >
                ✓ 15+ Industries
              </motion.div>
            </div>

            {/* Industries card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl p-5 backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="font-bold text-xs mb-3 uppercase tracking-widest" style={{ color: "#FF7A00" }}>
                Industries We Serve
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#FF7A00" }} />
                    {ind}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why us card */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="rounded-2xl p-5 backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="font-bold text-xs mb-3 uppercase tracking-widest" style={{ color: "#FF7A00" }}>
                Why Choose Social Wizards?
              </div>
              <div className="space-y-2">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <CheckCircle2 size={13} style={{ color: "#FF7A00", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo("about")}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
          Scroll
        </span>
        <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.4)" }} />
      </motion.button>
    </section>
  );
}
