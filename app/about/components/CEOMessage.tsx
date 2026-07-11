"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { fadeLeft, fadeRight } from "@/lib/animations";

export function CEOMessage() {
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
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="CEO of Social Wizards"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-lg">Rahul Sharma</div>
                <div className="text-secondary text-sm">Founder & CEO, Social Wizards</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
          </motion.div>

          {/* Message */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              CEO Message
            </span>
            <h2 className="section-title mt-2 mb-6">A Message From Our Founder</h2>

            <div className="relative">
              <Quote size={48} className="text-primary/10 absolute -top-4 -left-4" />
              <div className="space-y-4 text-slate-500 leading-relaxed relative z-10">
                <p>
                  "When I founded Social Wizards in 2014, I had a simple but powerful vision: to create a recruitment company that truly understood the industrial sector and delivered genuine value to both clients and candidates.
                </p>
                <p>
                  Over the past decade, we have grown from a small team of passionate recruiters to a company that has transformed the careers of over 50,000 professionals and helped hundreds of organizations build world-class teams.
                </p>
                <p>
                  Our success is built on three pillars: deep industry expertise, unwavering integrity, and a genuine commitment to the success of everyone we work with. We don't just fill positions — we build partnerships that last.
                </p>
                <p>
                  As India's industrial sector continues to grow and evolve, Social Wizards is committed to being at the forefront of talent innovation, helping our clients stay ahead in an increasingly competitive landscape."
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="font-black text-primary text-lg">Rahul Sharma</div>
              <div className="text-secondary text-sm font-medium">Founder & CEO</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
