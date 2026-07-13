"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Determine active section
      const sections = ["home", "about", "services", "clients", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    // Close menu first, then scroll after animation settles
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300);
  };

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
    : "bg-transparent";

  const linkColor = scrolled ? "text-slate-700 hover:text-primary" : "text-white/90 hover:text-white";
  const activeColor = scrolled ? "text-primary font-semibold" : "text-white font-semibold";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
  <Image
    src="/images/Social-Wizards-Logo.jpeg"
    alt="Social Wizards Logo"
    fill
    priority
    className="object-contain "
  />
</div>
            <div className="hidden sm:block text-left">
              <div className={cn("font-black text-lg leading-none transition-colors", scrolled ? "text-primary" : "text-white")}>
                Social Wizards
              </div>
              <div className={cn("text-xs font-medium leading-none mt-0.5 transition-colors", scrolled ? "text-secondary" : "text-secondary-300")}>
                Recruitment & Manpower Consulting
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive ? activeColor : linkColor
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => scrollTo("#contact")} className="btn-primary text-sm py-2.5 px-5">
              Hire Talent
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("md:hidden p-2 rounded-lg transition-colors", scrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10")}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="container-custom py-3 flex flex-col">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onPointerDown={() => scrollTo(link.href)}
                    className={cn(
                      "w-full px-4 py-4 rounded-xl text-sm font-medium transition-colors text-left active:scale-[0.98] touch-manipulation select-none",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-slate-700 active:bg-slate-100"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onPointerDown={() => scrollTo("#contact")}
                className="btn-primary mt-3 justify-center text-sm touch-manipulation"
              >
                Hire Talent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
