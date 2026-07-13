import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Social Wizards - Recruitment & Manpower Consulting Partner",
  description:
    "Social Wizards is a leading recruitment and manpower consulting firm specializing in hiring skilled professionals across Engineering, Manufacturing, Oil & Gas, EPC, and Industrial sectors across India.",
  // path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
