import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
  const fullDescription = description || SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    keywords: [
      "industrial recruitment",
      "engineering recruitment India",
      "manufacturing staffing",
      "oil gas recruitment",
      "construction recruitment",
      "technical recruitment",
      "Social Wizards",
      "HR solutions India",
      "bulk hiring",
      "executive search India",
    ],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phone,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Haryana",
    addressLocality: "Gurugram",
  },
  sameAs: Object.values(SITE_CONFIG.social),
};
