"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Eye, Target, Shield, Lightbulb, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  "Shutdown & Bulk Recruitment",
  "PAN India Recruitment Support",
  "Dedicated Client Relationship Management",
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Complete transparency and honesty in every interaction with clients and candidates." },
  { icon: Target, title: "Excellence", desc: "Highest standards in recruitment quality, never settling for anything less than the best." },
  { icon: Heart, title: "Commitment", desc: "Deeply committed to the success of our clients and the career growth of our candidates." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our recruitment methodologies to stay ahead in a dynamic talent market." },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">

        {/* Intro */}
     <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

  {/* Left Image */}
  <motion.div
    variants={fadeLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative"
  >
    <div className="relative h-[580px] rounded-[32px] overflow-hidden shadow-2xl">

   <Image
  src="/images/about-us.png"
  alt="About Social Wizards"
  fill
  priority
  className="object-contain"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

      {/* Floating Card */}
      {/* <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"> */}

        {/* <h3 className="text-4xl font-black text-primary">
          500+
        </h3> */}

        {/* <p className="text-slate-600 font-medium">
          Companies trust Social Wizards
          for their recruitment needs.
        </p> */}

      {/* </div> */}

    </div>
  </motion.div>

  {/* Right Content */}

  <motion.div
    variants={fadeRight}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >

    <SectionHeader
      tag="About Social Wizards"
      title="Building Strong Teams. Powering Industrial Growth."
      subtitle="Trusted Recruitment & Manpower Consulting Partner Across India"
    />

    <p className="mt-6 text-lg leading-8 text-slate-600">

      Social Wizards is a leading recruitment and manpower consulting company helping organizations hire highly skilled professionals across Engineering, Manufacturing, Oil & Gas, Construction, Infrastructure, Power, Chemical, EPC, and Industrial sectors.

    </p>

    <p className="mt-5 text-lg leading-8 text-slate-600">

      Our experienced recruitment specialists combine industry expertise with an extensive talent network to deliver faster hiring, quality candidates, and customized workforce solutions that help businesses grow with confidence.

    </p>

    {/* Features */}

    <div className="grid sm:grid-cols-2 gap-4 mt-8">

      {[
        "Industry Recruitment Experts",
        "PAN India Hiring",
        "Pre-Screened Talent Pool",
        "Fast Turnaround Time",
        "Executive Search",
        "Bulk & Project Hiring",
      ].map((item) => (

        <div
          key={item}
          className="flex items-center gap-3"
        >
          <CheckCircle2
            className="text-secondary"
            size={20}
          />

          <span className="text-slate-700 font-medium">
            {item}
          </span>

        </div>

      ))}

    </div>

    {/* Quote */}

    <div className="mt-10 border-l-4 border-secondary pl-5">

      <p className="italic text-lg font-semibold text-primary">

        "Finding the Right Talent. Building Long-Term Partnerships."

      </p>

    </div>

    {/* Button */}

    <button
      className="btn-primary mt-10 px-8 py-4"
      onClick={() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Contact Us

      <ArrowRight size={18} />

    </button>

  </motion.div>

</div>

        {/* Industries + Why Us */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Industries */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-black text-white mb-6">Industries We Serve</h3>
              <ul className="space-y-2.5">
                {industries.map((ind) => (
                  <li key={ind} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Why Us */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-light-gray rounded-3xl p-8"
          >
            <h3 className="text-xl font-black text-primary mb-6">Why Choose Social Wizards?</h3>
            <ul className="space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <CheckCircle2 size={17} className="text-secondary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-5">
                <Eye size={22} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Our Vision</h3>
              <p className="text-white/75 leading-relaxed">
                To be India's most respected industrial recruitment company, recognized for transforming careers and building world-class workforces that power the nation's industrial growth.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-card-default hover:shadow-card-hover transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
              <Target size={22} className="text-primary" />
            </div>
            <h3 className="text-2xl font-black text-primary mb-3">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed">
              To deliver exceptional recruitment solutions that create lasting value for our clients and candidates through deep industry expertise, rigorous screening processes, and an unwavering commitment to quality and integrity.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <SectionHeader tag="Our Values" title="The Principles That Guide Us" center />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {values.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }}
              className="bg-light-gray rounded-3xl p-7 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-black text-primary text-lg mb-2">{title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
