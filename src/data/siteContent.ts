export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: "Home" | "Building2" | "Compass" | "TrendingUp";
  badge: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: "ShieldCheck" | "Award" | "CheckCircle2" | "TrendingUp" | "FileCheck" | "Users";
  tag: string;
}

export interface PropertyItem {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Land & Plots" | "Investment";
  location: string;
  price: string;
  priceSub?: string;
  specs: {
    type: string;
    size: string;
    status: string;
  };
  tag: string;
  image: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  propertyType: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteContent = {
  brand: {
    name: "Gaurav Estates",
    shortName: "Gaurav Estates",
    tagline: "Buy | Sell | Invest",
    logo: "/logo.png",
    favicon: "/favicon.png",
    slogans: {
      primary: "Good People Build Great Places",
      secondary: "Properties Today | Prosperity Tomorrow",
      action: "Let's Build Your Next Chapter",
    },
    foundedYear: 2012,
  },

  consultant: {
    name: "Pranav Bansal",
    title: "Senior Real Estate Consultant & Wealth Advisor",
    designation: "Founder & Principal Advisor, Gaurav Estates",
    experienceYears: 12,
    phone: "9988885889",
    phoneDisplay: "+91 99888 85889",
    phoneTel: "tel:9988885889",
    whatsappUrl: "https://wa.me/919988885889?text=Hello%20Pranav,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20prime%20real%20estate%20opportunities%20at%20Gaurav%20Estates.",
    email: "pranavbansal.estates@gmail.com",
    address: {
      street: "SCO 42-43, Ground Floor, Inner Market, Sector 9-D",
      city: "Chandigarh / Tricity Region",
      state: "Punjab & Haryana Capital Region",
      pincode: "160009",
      country: "India",
      googleMapsQuery: "Sector+9-D+Chandigarh",
    },
    hours: "Monday – Saturday: 9:30 AM – 7:30 PM | Sunday by VIP Appointment",
    portraitImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85", // High-end professional consultant portrait placeholder
    bio: [
      "With over a decade of dedicated market mastery, Pranav Bansal has established Gaurav Estates as the pinnacle of bespoke real estate advisory. Grounded in the enduring ethos that 'Good People Build Great Places', Pranav curates high-value residential homes, iconic commercial assets, and strategic land portfolios for discerning business leaders, NRIs, and forward-thinking families.",
      "Beyond mere brokerage, Pranav operates as a private wealth strategist. Every acquisition undergoes exhaustive title verification, market momentum audits, and cash-flow stress testing — turning real estate from an ordinary purchase into generational prosperity.",
    ],
    reraNumber: "HRERA / PRERA Reg. Verified Advisory",
  },

  stats: [
    {
      value: 12,
      suffix: "+",
      label: "Years of Trust",
      desc: "Deep market leadership & expertise",
    },
    {
      value: 500,
      suffix: "+",
      label: "High-Net-Worth Clients",
      desc: "Delighted families & institutional buyers",
    },
    {
      value: 350,
      suffix: "+",
      label: "Prime Assets Transacted",
      desc: "Luxury residential & commercial closures",
    },
    {
      value: 280,
      suffix: "Cr+",
      prefix: "₹",
      label: "Asset Volume Consulted",
      desc: "Consistent value delivered to investors",
    },
  ] as StatItem[],

  services: [
    {
      id: "residential",
      title: "Residential Properties",
      subtitle: "Sanctuaries of Elegance & Comfort",
      description:
        "Bespoke penthouses, ultra-luxury high-rise condominiums, independent villas, and designer builder floors chosen for unmatched craftsmanship, elite privacy, and prime connectivity.",
      highlights: [
        "Ultra-luxury penthouses & panoramic duplexes",
        "Independent custom-designed luxury villas",
        "Gated residential communities with resort amenities",
        "RERA-approved developer handpicked launches",
      ],
      icon: "Home",
      badge: "Signature Living",
    },
    {
      id: "commercial",
      title: "Commercial Spaces",
      subtitle: "Grade-A High Footfall Real Estate",
      description:
        "High-visibility retail hubs, modern corporate office suites, SCO (Shop-cum-Office) commercial plots, and anchor tenant spaces engineered for maximum business velocity.",
      highlights: [
        "Grade-A IT & corporate glass facades",
        "High-street pedestrian retail avenues",
        "Shop-cum-Office (SCO) investment plots",
        "Strategic multi-brand showroom spaces",
      ],
      icon: "Building2",
      badge: "High Growth",
    },
    {
      id: "land-plots",
      title: "Land & Plots",
      subtitle: "Freehold Scarcity & Generational Value",
      description:
        "Clear-title freehold residential plots, industrial development land parcels, and institutional plots in rapid-growth corridors with complete legal transparency.",
      highlights: [
        "Prime residential township plots with registry",
        "Commercial & mixed-use zoning parcels",
        "Institutional & warehouse logistics acreage",
        "100% legal title diligence & zero encumbrance",
      ],
      icon: "Compass",
      badge: "Tangible Equity",
    },
    {
      id: "investment",
      title: "Investment Consultancy",
      subtitle: "Capital Preservation & Alpha Yields",
      description:
        "Data-driven wealth management through pre-leased commercial assets (8–10% net yields), early-stage institutional entry, and tactical exit strategies for exponential IRR.",
      highlights: [
        "Pre-leased assets with Fortune 500 & Bank tenants",
        "High rental yields with long-term lock-in leases",
        "Corridor trend mapping & smart entry timing",
        "NRI asset management & private client advisory",
      ],
      icon: "TrendingUp",
      badge: "High Yield 8-10%",
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      title: "Transparent, Zero-Surprise Dealings",
      description:
        "Every transaction is executed with total honesty. No hidden margins, no inflated paperwork — clear escrow milestones and open communication at every step.",
      icon: "ShieldCheck",
      tag: "100% Integrity",
    },
    {
      title: "Decade-Long Hyper-Local Expertise",
      description:
        "In-depth command of upcoming infrastructure projects, expressways, metro expansion lines, and regional master plans that directly impact capital appreciation.",
      icon: "Award",
      tag: "Market Master",
    },
    {
      title: "End-to-End White Glove Support",
      description:
        "From private property walkthroughs and high-stakes price negotiation to bank financing, legal drafting, and sub-registrar deed execution, we handle everything.",
      icon: "CheckCircle2",
      tag: "Zero Hassle",
    },
    {
      title: "High-Yield Investment Advisory",
      description:
        "Specialized focus on pre-leased commercial units and pre-launch pricing advantages that guarantee superior rental cash flows and inflation-beating returns.",
      icon: "TrendingUp",
      tag: "Alpha Returns",
    },
    {
      title: "Rigorous Legal Title Audits",
      description:
        "Multi-layer due diligence including revenue record searches, mutation certificates, non-encumbrance reports, and authority approvals before a single rupee changes hands.",
      icon: "FileCheck",
      tag: "Ironclad Safety",
    },
    {
      title: "Bespoke HNI & NRI Advisory",
      description:
        "Discreet, personalized representation for high-net-worth families and overseas investors seeking frictionless remote acquisition, leasing, and portfolio management.",
      icon: "Users",
      tag: "Private Client",
    },
  ] as TrustPillar[],

  featuredProperties: [
    {
      id: "prop-1",
      title: "The Grand Bel-Air Penthouse",
      category: "Residential",
      location: "Golf Course Extension Corridor",
      price: "₹4.85 Cr",
      priceSub: "Flexible payment plans available",
      specs: {
        type: "4 BHK + Servant + Private Terrace",
        size: "4,350 Sq. Ft.",
        status: "Ready for Fit-outs",
      },
      tag: "Exclusive Mandate",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "prop-2",
      title: "Apex Signature Corporate Tower",
      category: "Commercial",
      location: "Central Business District / IT Hub",
      price: "₹2.45 Cr Onwards",
      priceSub: "Pre-leased options with 8.4% Net ROI",
      specs: {
        type: "Grade-A Office Suite",
        size: "1,950 - 4,800 Sq. Ft.",
        status: "Immediate Possession",
      },
      tag: "Pre-Leased MNC Tenant",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "prop-3",
      title: "The Royal Meadow Estate Villa",
      category: "Residential",
      location: "VIP Residential Enclave",
      price: "₹6.75 Cr",
      priceSub: "Customizable Italian marble interiors",
      specs: {
        type: "5 BHK Luxury Villa with Private Pool",
        size: "500 Sq. Yds. (5,800 Sq. Ft.)",
        status: "Ready to Move",
      },
      tag: "Ultra Luxury",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "prop-4",
      title: "Boulevard High-Street Retail SCO",
      category: "Commercial",
      location: "Main 100-Ft Express Sector Boulevard",
      price: "₹3.80 Cr",
      priceSub: "Triple-height ground floor frontage",
      specs: {
        type: "Basement + Ground + 3 Floors",
        size: "3,200 Sq. Ft. Built-up",
        status: "Under Construction (Possession Soon)",
      },
      tag: "High Footfall Hub",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "prop-5",
      title: "Emerald Greens Freehold Residential Plot",
      category: "Land & Plots",
      location: "Airport Ring Road Integrated Township",
      price: "₹1.65 Cr",
      priceSub: "Direct registry with clear demarcation",
      specs: {
        type: "Corner Plot, 60-Ft Wide Road",
        size: "250 Sq. Yds.",
        status: "Immediate Registry",
      },
      tag: "Clear Freehold Title",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "prop-6",
      title: "Horizon Sovereign Pre-Leased Banking Hub",
      category: "Investment",
      location: "Prime Financial Commercial Corridor",
      price: "₹5.90 Cr",
      priceSub: "Leased to Tier-1 Bank (9-Yr Lock-in)",
      specs: {
        type: "Commercial Ground Floor Anchor",
        size: "3,850 Sq. Ft.",
        status: "Active Rental Income (₹4.4L/mo)",
      },
      tag: "9.1% Assured ROI",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
  ] as PropertyItem[],

  testimonials: [
    {
      id: "test-1",
      name: "Rajeev Singhania",
      role: "Managing Director, Singhania Logistics",
      location: "Chandigarh",
      content:
        "Pranav Bansal is unlike any real estate agent we've worked with. He didn't just show us properties; he analyzed local master plan zoning, capital appreciation metrics, and negotiated a remarkable purchase price for our corporate headquarters. True professional.",
      rating: 5,
      propertyType: "Commercial Office Tower",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "test-2",
      name: "Dr. Ananya & Dr. Vikram Mehta",
      role: "Senior Orthopedic Surgeon & Radiologist",
      location: "Panchkula",
      content:
        "Finding our dream family villa seemed exhausting until we met Pranav. His calm demeanor, deep legal verification of the builder's title, and complete absence of sales pressure made us feel completely secure. Gaurav Estates truly lives up to its motto.",
      rating: 5,
      propertyType: "5 BHK Luxury Villa",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "test-3",
      name: "Harpreet Singh Dhillon",
      role: "NRI Tech Entrepreneur",
      location: "Vancouver / Mohali",
      content:
        "Managing property transactions in India from Canada is fraught with trust issues. Pranav handled our multi-crore plot investments and commercial leasing with crystal-clear video walkthroughs, digital paperwork, and timely escrow closures. Highly recommended for any NRI.",
      rating: 5,
      propertyType: "High-Yield Commercial & Plots",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "test-4",
      name: "Pooja & Sameer Malhotra",
      role: "Founders, Atelier Couture",
      location: "Tricity",
      content:
        "Pranav's guidance on pre-leased retail spaces yielded an immediate 8.8% return for our wealth portfolio. His insight into future retail corridors is unmatched. He treats your investment as if it were his own.",
      rating: 5,
      propertyType: "Pre-Leased High Street Retail",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: "Why consult with Pranav Bansal instead of browsing online portals?",
      answer:
        "Public online portals are filled with outdated prices, fake listings, and unvetted intermediaries. Pranav Bansal brings verified off-market inventories, confidential direct developer mandates, unbiased micro-market valuation audits, and ironclad legal protection tailored to your best financial interests.",
    },
    {
      question: "How do you ensure the legal safety and title clearance of properties?",
      answer:
        "Every single asset recommended by Gaurav Estates undergoes multi-tiered verification: 30-year revenue department search, RERA registration status, sanctioned master plans, occupancy certificate (OC) checks, and mortgage non-encumbrance certificates vetted by qualified legal counsels.",
    },
    {
      question: "What rental yield can I expect from pre-leased commercial investments?",
      answer:
        "Prime commercial assets curated by Pranav currently yield between 8% to 10% net annual rental income, backed by long-term leases (typically 9 to 15 years with 3-year escalation clauses) from reputed national banks, IT firms, and retail brands.",
    },
    {
      question: "Do you assist NRI clients with remote transactions and power of attorney?",
      answer:
        "Yes, absolutely. A significant portion of our portfolio serves NRI families across North America, Europe, Australia, and the Middle East. We provide video inspections, legal POA drafting, NRE/NRO compliance guidance, taxation advisory handholding, and end-to-end leasing management.",
    },
    {
      question: "Are there any consultation charges for initial property discussions?",
      answer:
        "No. Your initial strategic consultation with Pranav Bansal — whether over phone, video call, or at our office — is completely complimentary. We prioritize building a long-term advisory relationship first.",
    },
  ] as FAQItem[],

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Pranav", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Properties", href: "#properties" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

