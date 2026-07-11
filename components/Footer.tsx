"use client";

import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SERVICES } from "@/constants";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Footer() {
  const serviceLinks = SERVICES.slice(0, 8);

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">SW</span>
              </div>
              <div>
                <div className="font-black text-lg leading-none">Social Wizards</div>
                <div className="text-secondary text-xs font-medium mt-0.5">Recruitment & Manpower Consulting</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted recruitment and manpower consulting partner for Engineering, Manufacturing, Oil & Gas, EPC, and Industrial sectors across India.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter" },
                { icon: Facebook, href: SITE_CONFIG.social.facebook, label: "Facebook" },
                { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/70 hover:text-secondary text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/70 hover:text-secondary text-sm flex items-center gap-2 transition-colors group text-left"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-white/70 hover:text-secondary text-sm transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/70 hover:text-secondary text-sm transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Stay Updated</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-secondary"
                />
                <button type="submit" className="px-3 py-2 bg-secondary rounded-lg hover:bg-secondary-600 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Social Wizards. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">Finding the Right Talent. Building Long-Term Partnerships.</p>
        </div>
      </div>
    </footer>
  );
}
