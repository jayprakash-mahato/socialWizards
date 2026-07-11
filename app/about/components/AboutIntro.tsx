"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from "@/lib/animations";

const highlights = [
  "10+ years of industrial recruitment expertise",
  "Pan India presence with 500+ active clients",
  "50,000+ successful candidate placements",
  "Specialized teams for 15+ industry verticals",
  "ISO-certified recruitment processes",
  "24/7 dedicated client support",
];

export function AboutIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Social Wizards team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover"
            >
              <div className="text-3xl font-black text-primary">10+</div>
              <div className="text-slate-500 text-sm font-medium">Years of Excellence</div>
            </motion.div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              tag="Who We Are"
              title="India's Most Trusted Industrial Recruitment Partner"
              subtitle="Founded in 2014, Social Wizards has grown from a boutique recruitment firm to one of India's leading industrial staffing companies."
            />
            <p className="text-slate-500 leading-relaxed mt-4 mb-6">
              We specialize in connecting exceptional talent with India's most respected industrial companies. Our deep domain expertise, extensive talent networks, and commitment to quality have made us the preferred recruitment partner for organizations ranging from ambitious startups to Fortune 500 enterprises.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              With a team of experienced recruitment consultants who have hands-on industry backgrounds, we understand the technical nuances of every role we fill. This expertise enables us to assess candidates with precision and deliver hiring outcomes that drive real business results.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
