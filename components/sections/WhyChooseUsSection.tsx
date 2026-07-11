"use client";

import { motion } from "framer-motion";
import { Zap, Award, MapPin, BookOpen, Users, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { WHY_CHOOSE_US } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap, Award, MapPin, BookOpen, Users, TrendingUp,
};

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              tag="Why Choose Us"
              title="The Social Wizards Advantage"
              subtitle="We don't just fill positions — we build careers and transform organizations. Here's what makes us India's most trusted industrial recruitment partner."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
            >
              {WHY_CHOOSE_US.map((item) => {
                const Icon = iconMap[item.icon] || Zap;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="bg-light-gray rounded-2xl p-5 hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                      <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-primary">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Professional team meeting"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

              {/* Floating stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <div className="text-white font-bold text-lg mb-1">Trusted by 500+ Companies</div>
                  <div className="text-white/70 text-sm">From startups to Fortune 500 enterprises across India</div>
                  <div className="flex items-center gap-3 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-secondary/30 border-2 border-secondary/50 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{String.fromCharCode(64 + i)}</span>
                      </div>
                    ))}
                    <span className="text-white/70 text-xs">+495 more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
