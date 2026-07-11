"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TESTIMONIALS } from "@/constants";
import { fadeUp } from "@/lib/animations";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  const t = TESTIMONIALS[active];

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what industry leaders say about partnering with Social Wizards."
          center
        />

        <div className="mt-14 max-w-3xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card-default relative"
          >
            <Quote size={48} className="text-primary/10 absolute top-6 left-6" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-secondary fill-secondary" />
              ))}
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
              "{t.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image src={t.image} alt={t.name} fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-slate-500 text-sm">{t.designation}</div>
                <div className="text-secondary text-sm font-semibold">{t.company}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-primary" : "w-2 bg-slate-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
