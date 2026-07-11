"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  image: string;
}

export function PageHero({ title, subtitle, breadcrumbs, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[420px] md:min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10 pt-24 pb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-white/40" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-secondary text-sm font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
