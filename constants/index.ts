export const SITE_CONFIG = {
  name: "Social Wizards",
  tagline: "Recruitment & Manpower Consulting Partner",
  description:
    "Social Wizards is a leading recruitment and manpower consulting firm specializing in hiring skilled professionals across Engineering, Manufacturing, Construction, Oil & Gas, Chemical, Infrastructure, Power, Energy, EPC, and Industrial sectors.",
  url: "https://www.socialwizards.co.in",
  email: "business@socialwizards.co.in",
  phone: "+91 79773 78159",
  phone2: "+91 79773 78159",
  address: "Digital Recruitment Partner",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  whatsapp: "917977378159",
  social: {
    linkedin: "https://linkedin.com/company/socialwizards",
    twitter: "https://twitter.com/socialwizards",
    facebook: "https://facebook.com/socialwizards",
    instagram: "https://instagram.com/socialwizards",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" },
];

export const STATS = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 50000, suffix: "+", label: "Candidates Placed" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

export const INDUSTRIES = [
  { name: "Engineering", icon: "FaCogs", color: "#0B2C6F" },
  { name: "Construction", icon: "FaHardHat", color: "#FF7A00" },
  { name: "Manufacturing", icon: "FaIndustry", color: "#0B2C6F" },
  { name: "Oil & Gas", icon: "FaOilCan", color: "#FF7A00" },
  { name: "Chemical", icon: "FaFlask", color: "#0B2C6F" },
  { name: "Infrastructure", icon: "FaBuilding", color: "#FF7A00" },
  { name: "Power", icon: "FaBolt", color: "#0B2C6F" },
  { name: "Mining", icon: "FaMountain", color: "#FF7A00" },
  { name: "Steel", icon: "FaTools", color: "#0B2C6F" },
  { name: "Renewable Energy", icon: "FaSolarPanel", color: "#FF7A00" },
  { name: "Logistics", icon: "FaTruck", color: "#0B2C6F" },
  { name: "FMCG", icon: "FaBoxes", color: "#FF7A00" },
];

export const SERVICES = [
  {
    id: "permanent-recruitment",
    title: "Permanent Recruitment",
    icon: "UserCheck",
    shortDesc: "End-to-end permanent hiring solutions for all levels across industries.",
    description:
      "Our permanent recruitment service delivers thoroughly vetted candidates who align with your company culture and long-term goals. We leverage deep industry networks and advanced screening methodologies to find the perfect fit.",
    benefits: [
      "Reduced time-to-hire by up to 60%",
      "Pre-screened, interview-ready candidates",
      "90-day replacement guarantee",
      "Dedicated account manager",
    ],
    features: [
      "Job analysis & role profiling",
      "Multi-channel talent sourcing",
      "Competency-based interviews",
      "Background & reference checks",
      "Offer negotiation support",
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    id: "executive-search",
    title: "Executive Search",
    icon: "Search",
    shortDesc: "Confidential C-suite and senior leadership talent acquisition.",
    description:
      "We identify and attract exceptional senior leaders who drive organizational transformation. Our executive search practice combines market intelligence with a discreet, relationship-driven approach.",
    benefits: [
      "Access to passive senior talent",
      "Confidential search process",
      "Market mapping & benchmarking",
      "Leadership assessment tools",
    ],
    features: [
      "Board & C-suite placements",
      "VP & Director level hiring",
      "Succession planning support",
      "Psychometric assessments",
      "Onboarding facilitation",
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing",
    icon: "FileText",
    shortDesc: "Flexible workforce solutions for project-based and seasonal needs.",
    description:
      "Scale your workforce up or down with our contract staffing solutions. We provide skilled professionals on flexible terms, managing all compliance, payroll, and HR administration.",
    benefits: [
      "Rapid deployment within 48 hours",
      "Full compliance management",
      "Flexible contract durations",
      "Cost-effective workforce scaling",
    ],
    features: [
      "Short & long-term contracts",
      "Payroll & statutory compliance",
      "On-site HR support",
      "Performance monitoring",
      "Contract-to-hire options",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    id: "project-hiring",
    title: "Project Hiring",
    icon: "Briefcase",
    shortDesc: "Specialized talent acquisition for time-bound industrial projects.",
    description:
      "We mobilize complete project teams for EPC, infrastructure, and industrial projects. Our project hiring expertise ensures you have the right talent at every phase of your project lifecycle.",
    benefits: [
      "Complete project team mobilization",
      "Industry-specific expertise",
      "Rapid large-scale deployment",
      "Project lifecycle support",
    ],
    features: [
      "EPC project staffing",
      "Multi-discipline teams",
      "Site mobilization support",
      "Demobilization planning",
      "Project HR management",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "shutdown-hiring",
    title: "Shutdown & Turnaround",
    icon: "Zap",
    shortDesc: "Rapid workforce mobilization for plant shutdowns and turnarounds.",
    description:
      "Minimize downtime with our specialized shutdown and turnaround staffing. We provide experienced maintenance, inspection, and technical professionals ready to deploy at short notice.",
    benefits: [
      "24/7 emergency mobilization",
      "Certified technical professionals",
      "Minimized shutdown duration",
      "Safety-first workforce",
    ],
    features: [
      "Maintenance technicians",
      "Inspection specialists",
      "Safety officers",
      "Mechanical & electrical teams",
      "Turnaround planning support",
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
  {
    id: "bulk-hiring",
    title: "Bulk Hiring",
    icon: "Users",
    shortDesc: "High-volume recruitment drives for large workforce requirements.",
    description:
      "When you need to hire hundreds or thousands of employees quickly, our bulk hiring solutions deliver. We run structured recruitment drives with assessment centers and streamlined onboarding.",
    benefits: [
      "Hire 100-5000+ candidates",
      "Structured assessment centers",
      "Rapid onboarding processes",
      "Quality at scale",
    ],
    features: [
      "Walk-in recruitment drives",
      "Campus hiring programs",
      "Online assessment platforms",
      "Batch onboarding",
      "Retention analytics",
    ],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  },
  {
    id: "campus-recruitment",
    title: "Campus Recruitment",
    icon: "GraduationCap",
    shortDesc: "Fresh talent acquisition from premier engineering and management institutes.",
    description:
      "Build your future workforce by tapping into India's top engineering and management colleges. Our campus recruitment programs are designed to attract, assess, and onboard the brightest graduates.",
    benefits: [
      "Access to top institute talent",
      "Structured campus programs",
      "Pre-placement talks & branding",
      "Fresher training support",
    ],
    features: [
      "IIT/NIT/BITS partnerships",
      "Pre-placement workshops",
      "Aptitude & technical tests",
      "Group discussions & interviews",
      "Offer letter management",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: "payroll-services",
    title: "Payroll Services",
    icon: "DollarSign",
    shortDesc: "End-to-end payroll management and statutory compliance solutions.",
    description:
      "Outsource your payroll complexities to us. We handle salary processing, statutory deductions, compliance filings, and employee queries with complete accuracy and confidentiality.",
    benefits: [
      "100% statutory compliance",
      "Timely salary disbursement",
      "Reduced administrative burden",
      "Expert compliance team",
    ],
    features: [
      "Monthly payroll processing",
      "PF, ESI, PT management",
      "TDS calculation & filing",
      "Payslip generation",
      "Annual returns filing",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: "manufacturing-recruitment",
    title: "Manufacturing Recruitment",
    icon: "Factory",
    shortDesc: "Specialized hiring for production, quality, and operations roles.",
    description:
      "We understand the unique demands of manufacturing environments. From shop floor operators to plant managers, we source professionals who drive production excellence and operational efficiency.",
    benefits: [
      "Deep manufacturing network",
      "Technical skills assessment",
      "Safety compliance screening",
      "Multi-shift workforce planning",
    ],
    features: [
      "Production & operations roles",
      "Quality control specialists",
      "Maintenance engineers",
      "Plant & factory managers",
      "Lean & Six Sigma experts",
    ],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
  },
  {
    id: "technical-recruitment",
    title: "Technical Recruitment",
    icon: "Settings",
    shortDesc: "Niche technical talent for specialized engineering and technology roles.",
    description:
      "Finding rare technical talent requires deep domain expertise. Our technical recruitment specialists understand complex job requirements and identify candidates with the precise skills your projects demand.",
    benefits: [
      "Niche technical expertise",
      "Skills-based assessments",
      "Certified professional network",
      "Fast turnaround on hard-to-fill roles",
    ],
    features: [
      "Mechanical & electrical engineers",
      "Instrumentation specialists",
      "Process & chemical engineers",
      "Civil & structural engineers",
      "HSE professionals",
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    id: "oil-gas-recruitment",
    title: "Oil & Gas Recruitment",
    icon: "Flame",
    shortDesc: "Upstream, midstream, and downstream talent for the energy sector.",
    description:
      "The oil and gas industry demands highly specialized professionals. We have an extensive network of certified upstream, midstream, and downstream professionals ready for onshore and offshore assignments.",
    benefits: [
      "OPITO/BOSIET certified candidates",
      "Onshore & offshore placements",
      "International mobility support",
      "Rapid mobilization capability",
    ],
    features: [
      "Drilling & completion engineers",
      "Reservoir & production engineers",
      "HSE & safety officers",
      "Offshore installation managers",
      "Pipeline & facilities engineers",
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  },
  {
    id: "engineering-recruitment",
    title: "Engineering Recruitment",
    icon: "Wrench",
    shortDesc: "Comprehensive engineering talent solutions across all disciplines.",
    description:
      "From graduate engineers to chief engineers, we cover the full spectrum of engineering recruitment. Our consultants have hands-on industry experience, enabling them to assess technical competence accurately.",
    benefits: [
      "All engineering disciplines",
      "Technical competency testing",
      "Project-specific expertise",
      "Nationwide talent network",
    ],
    features: [
      "Civil & structural engineering",
      "Mechanical & piping design",
      "Electrical & instrumentation",
      "Environmental engineering",
      "Project & site management",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    id: "construction-recruitment",
    title: "Construction Recruitment",
    icon: "HardHat",
    shortDesc: "Skilled workforce solutions for construction and infrastructure projects.",
    description:
      "We supply skilled and semi-skilled construction professionals for residential, commercial, and infrastructure projects. Our construction recruitment team understands site dynamics and safety requirements.",
    benefits: [
      "Skilled & semi-skilled workforce",
      "Safety-certified professionals",
      "Pan-India deployment",
      "Flexible engagement models",
    ],
    features: [
      "Site engineers & supervisors",
      "Project managers",
      "Quantity surveyors",
      "Safety officers",
      "Skilled tradespeople",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "infrastructure-recruitment",
    title: "Infrastructure Recruitment",
    icon: "Building2",
    shortDesc: "Talent solutions for roads, bridges, metro, and urban infrastructure.",
    description:
      "India's infrastructure boom demands specialized talent. We support government and private infrastructure projects with experienced professionals in roads, bridges, metro rail, ports, and urban development.",
    benefits: [
      "Government project expertise",
      "Large-scale mobilization",
      "Multi-discipline teams",
      "Compliance & documentation support",
    ],
    features: [
      "Roads & highways specialists",
      "Bridge & tunnel engineers",
      "Metro rail professionals",
      "Port & airport experts",
      "Urban planning consultants",
    ],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    id: "power-plant-recruitment",
    title: "Power Plant Recruitment",
    icon: "Zap",
    shortDesc: "Specialized staffing for thermal, hydro, and renewable power plants.",
    description:
      "Power generation requires highly specialized professionals. We recruit for thermal, hydro, nuclear, and renewable energy power plants, providing certified engineers and technicians who ensure reliable operations.",
    benefits: [
      "Power sector specialists",
      "Certified plant operators",
      "Regulatory compliance expertise",
      "24/7 operational support staffing",
    ],
    features: [
      "Plant operations engineers",
      "Turbine & boiler specialists",
      "Electrical & control engineers",
      "Maintenance technicians",
      "Environmental compliance officers",
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    id: "mining-recruitment",
    title: "Mining Recruitment",
    icon: "Mountain",
    shortDesc: "Expert talent acquisition for surface and underground mining operations.",
    description:
      "Mining operations demand professionals with specialized technical skills and a strong safety culture. We recruit for coal, metal, and mineral mining operations across India and internationally.",
    benefits: [
      "Mining-specific expertise",
      "Safety-first candidate screening",
      "Remote location deployment",
      "International mining network",
    ],
    features: [
      "Mine managers & engineers",
      "Geologists & surveyors",
      "Drilling & blasting specialists",
      "Mine safety officers",
      "Equipment operators",
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "BookOpen",
    title: "Industry-Specific Expertise",
    description: "Deep domain knowledge across Engineering, Manufacturing, Oil & Gas, EPC, and Industrial sectors.",
  },
  {
    icon: "Users",
    title: "Large Pre-Screened Database",
    description: "Access to a vast database of pre-screened, interview-ready candidates across all disciplines.",
  },
  {
    icon: "Zap",
    title: "Fast Turnaround Time",
    description: "We deliver qualified candidates quickly, minimizing downtime and keeping your projects on track.",
  },
  {
    icon: "Briefcase",
    title: "Permanent, Contract & Project Hiring",
    description: "Flexible engagement models — permanent placements, contract staffing, and project-based hiring.",
  },
  {
    icon: "Award",
    title: "Executive Search & Leadership",
    description: "Specialized leadership hiring for senior management, plant heads, and engineering managers.",
  },
  {
    icon: "MapPin",
    title: "PAN India Recruitment Support",
    description: "Nationwide talent network covering all major industrial hubs and cities across India.",
  },
  {
    icon: "Shield",
    title: "Shutdown & Bulk Recruitment",
    description: "Rapid mobilization for shutdown projects, turnarounds, and large-scale workforce deployments.",
  },
  {
    icon: "TrendingUp",
    title: "Dedicated Client Relationship",
    description: "A dedicated relationship manager ensures personalized service and consistent hiring outcomes.",
  },
];

export const HOW_WE_WORK = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "We conduct a deep-dive consultation to understand your exact hiring needs, culture, and timelines.",
  },
  {
    step: "02",
    title: "Candidate Sourcing",
    description: "Leveraging our vast database, job portals, social networks, and referrals to find the best talent.",
  },
  {
    step: "03",
    title: "Screening & Assessment",
    description: "Multi-stage screening including technical tests, competency interviews, and background verification.",
  },
  {
    step: "04",
    title: "Interview Coordination",
    description: "We manage the entire interview process, scheduling, feedback collection, and candidate communication.",
  },
  {
    step: "05",
    title: "Joining Support",
    description: "Post-offer support including offer negotiation, documentation, and smooth onboarding facilitation.",
  },
];

export const CLIENTS = [
  { name: "Meinhardt", logo: "/clients/meinhardt.png", industry: "Engineering Consultancy" },
  { name: "Privij Engineering", logo: "/clients/privij.png", industry: "Engineering Services" },
  { name: "Bergenia Engineering Consultancy", logo: "/clients/bergenia.png", industry: "Engineering Consultancy" },
  { name: "Gridbots Technologies", logo: "/clients/gridbots.png", industry: "Robotics & Automation" },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    designation: "HR Director",
    company: "Meinhardt India",
    content:
      "Social Wizards has been our go-to recruitment partner for over 5 years. Their understanding of engineering talent and quick turnaround has been exceptional. They consistently deliver quality candidates who fit our technical requirements perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Priya Sharma",
    designation: "Talent Acquisition Head",
    company: "Privij Engineering",
    content:
      "The team at Social Wizards truly understands the industrial recruitment landscape. Their bulk hiring capability helped us staff an entire project site within 3 weeks. Highly professional and reliable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
  },
  {
    name: "Amit Patel",
    designation: "Operations Manager",
    company: "Bergenia Engineering",
    content:
      "What sets Social Wizards apart is their deep industry knowledge. They don't just send resumes — they send the right people. Our hiring quality has improved dramatically since partnering with them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    name: "Sneha Reddy",
    designation: "CEO",
    company: "Gridbots Technologies",
    content:
      "Finding specialized robotics and automation talent is incredibly challenging. Social Wizards rose to the challenge and delivered exceptional candidates for our niche technical roles. Outstanding service!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export const COMPANY_VALUES = [
  {
    icon: "Shield",
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every interaction with clients and candidates.",
  },
  {
    icon: "Target",
    title: "Excellence",
    description: "We set the highest standards in recruitment quality, never settling for anything less than the best.",
  },
  {
    icon: "Heart",
    title: "Commitment",
    description: "We are deeply committed to the success of our clients and the career growth of our candidates.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation",
    description: "We continuously evolve our recruitment methodologies to stay ahead in a dynamic talent market.",
  },
];

export const TIMELINE = [
  { year: "2014", title: "Foundation", description: "Social Wizards was founded with a vision to transform industrial recruitment in India." },
  { year: "2016", title: "Pan India Expansion", description: "Expanded operations to 10 major industrial cities across India." },
  { year: "2018", title: "10,000 Placements", description: "Achieved the milestone of 10,000 successful candidate placements." },
  { year: "2020", title: "Digital Transformation", description: "Launched digital recruitment platform and AI-powered candidate screening." },
  { year: "2022", title: "500+ Clients", description: "Crossed 500 active client partnerships across 15+ industries." },
  { year: "2024", title: "50,000 Placements", description: "Celebrated 50,000 successful placements and expanded to international markets." },
];
