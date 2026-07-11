export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Industry {
  name: string;
  icon: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  features: string[];
  image: string;
}

export interface WhyChooseUs {
  icon: string;
  title: string;
  description: string;
}

export interface HowWeWork {
  step: string;
  title: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
  industry: string;
}

export interface Testimonial {
  name: string;
  designation: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
