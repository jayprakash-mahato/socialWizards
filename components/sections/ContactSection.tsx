"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/constants";
import { fadeLeft, fadeRight } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const socials = [
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter" },
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const onSubmit = async (data: FormData) => {
  //   await new Promise((r) => setTimeout(r, 1500));
  //   console.log(data);
  //   setSubmitted(true);
  //   reset();
  //   setTimeout(() => setSubmitted(false), 5000);
  // };

  const onSubmit = async (data: FormData) => {

    // console.log("Form submitted!");
  // console.log(data);
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error("Failed");
    }

    setSubmitted(true);
    reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
};


  return (
    <section id="contact" className="section-padding bg-light-gray">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <span className="section-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Contact Us
              </span>
              <h2 className="section-title mt-2">Let's Build Your Team Together</h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Whether you're looking to hire top talent or need complete recruitment support for your upcoming projects, Social Wizards is ready to help.
              </p>
            </div>

            {/* Company info card */}
            <div className="bg-primary rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="font-black text-white text-xl mb-1">Social Wizards</div>
                <div className="text-secondary text-sm font-medium mb-6">Digital Recruitment Partner</div>

                <div className="space-y-4">
                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-200">
                      <Mail size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Email</div>
                      <div className="text-white text-sm font-medium group-hover:text-secondary transition-colors">{SITE_CONFIG.email}</div>
                    </div>
                  </a>

                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-200">
                      <Phone size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Phone</div>
                      <div className="text-white text-sm font-medium group-hover:text-secondary transition-colors">{SITE_CONFIG.phone}</div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/15">
                  <p className="text-white/60 text-xs mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-white rounded-2xl p-6 shadow-card-default text-center">
              <p className="text-primary font-bold text-base">"Finding the Right Talent.</p>
              <p className="text-secondary font-bold text-base">Building Long-Term Partnerships."</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-card-default">
              <h3 className="text-2xl font-black text-primary mb-2">Send Us a Message</h3>
              <p className="text-slate-500 text-sm mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">Message Sent!</h4>
                  <p className="text-slate-500 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name <span className="text-secondary">*</span></label>
                      <input {...register("name")} placeholder="John Doe"
                        className={`input-base ${errors.name ? "border-red-400" : ""}`} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-secondary">*</span></label>
                      <input {...register("email")} type="email" placeholder="john@company.com"
                        className={`input-base ${errors.email ? "border-red-400" : ""}`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number <span className="text-secondary">*</span></label>
                      <input {...register("phone")} type="tel" placeholder="+91 79773 78159"
                        className={`input-base ${errors.phone ? "border-red-400" : ""}`} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name <span className="text-secondary">*</span></label>
                      <input {...register("company")} placeholder="Your Company Ltd."
                        className={`input-base ${errors.company ? "border-red-400" : ""}`} />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required <span className="text-secondary">*</span></label>
                    <select {...register("service")} className={`input-base ${errors.service ? "border-red-400" : ""}`}>
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message <span className="text-secondary">*</span></label>
                    <textarea {...register("message")} rows={4} placeholder="Tell us about your hiring requirements, number of positions, timeline, etc."
                      className={`input-base resize-none ${errors.message ? "border-red-400" : ""}`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
