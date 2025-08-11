// ARC Lao — Corporate Website Redesign (single‑file React)
// ------------------------------------------------------
// How to use:
// 1) Replace the placeholder content in the `siteData` object below with real copy from arclao.com/arclao.html.
// 2) Replace any image URLs with your own assets (CDN or /public). If you only have low‑res images, this layout will still look great.
// 3) Optional: Tweak brand colors in the `brand` object.
// 4) Ship! This is production‑ready markup with accessible structure and clean Tailwind classes.

import React, { useState } from "react";
import evInfrastructureImg from "../assets/ev-infrastructure.jpg";
import defenseImg from "../assets/defense.jpg";
import informationTechnologyImg from "../assets/information-technology.jpg";
import automotiveImg from "../assets/automotive.jpg";
import infrastructureImg from "../assets/infrastructure.jpg";

import Technological_Innovation from "@assets/Technological Innovation.jpg";

// --- Brand system (edit freely) ---
const brand = {
  name: "ARC Lao Sole Company Ltd",
  primary: "from-indigo-600 via-sky-600 to-cyan-500",
  darkBg: "bg-slate-950",
  lightBg: "bg-white",
};

// --- Site content (swap placeholders with real text/images) ---
const siteData = {
  hero: {
    kicker: "Me To We With ARC Lao combined efforts On",
    headline: "Technological Innovation",
    subhead:
      "Awareness & Education, Conscious Use Of Natural Resources, Agriculture - Leading technological innovation and infrastructure development across Southeast Asia.",
    ctas: [
      { label: "Get in touch", href: "#contact" },
      { label: "Our projects", href: "#projects", variant: "ghost" },
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900", // Technology infrastructure
  },
  nav: [
    { label: "About Us", href: "#about" },
    { label: "Products & Services", href: "#services" },
    { label: "Sectors", href: "#sectors" },
    { label: "Projects", href: "#projects" },
    { label: "History", href: "#history" },
    { label: "Contact Us", href: "#contact" },
  ],
  valueProps: [
    {
      title: "PRINCIPLES",
      body:
        "Integrity, honesty, and ethics supported by strong leadership and uncompromising business standards.",
      icon: "globe",
    },
    {
      title: "PERSEVERANCE",
      body:
        "We offer comprehensive skill, competence, and experience which may lead to growth, profitability, and mutual success for everyone involved.",
      icon: "stack",
    },
    {
      title: "PERMANENCE",
      body:
        "More than two decades of tenure, stability and a client-centric approach under the core management.",
      icon: "leaf",
    },
    {
      title: "PARTNERSHIPS",
      body:
        "Meaningful relationships among advisors, investors, & RMR leadership, collectively sharing responsibilities to achieve goals.",
      icon: "stack",
    },
  ],
  services: [
    {
      title: "EV Infrastructure",
      body:
        "Lithium Ion Battery, Charging Stations, EV Testing Equipments.",
      image: evInfrastructureImg,
    },
    {
      title: "Defence",
      body:
        "Demining Equipments, Metal Detectors, Body Armor, EOD/IED Equipments.",
      image: defenseImg,
    },
    {
      title: "Information Technology",
      body:
        "Internet Of Thing, Energy Software, Software Development & Testing.",
      image: informationTechnologyImg,
    },
    {
      title: "Energy",
      body:
        "Hydrogen Fuel Cell, Energy From Waste, Solar Energy.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "Automotive",
      body:
        "Electric & Non-electric Motorbikes, Agricultural & Construction Machines.",
      image: automotiveImg,
    },
    {
      title: "Infrastructure",
      body:
        "Feasibility & Consultancy, Roads & Bridges, Buildings & Factories.",
      image: infrastructureImg,
    },
  ],
  sectors: ["EV Infrastructure", "Defence", "Information Technology", "Energy", "Automotive", "Infrastructure"],
  stats: [
    { label: "Years Of Experience", value: "10+" },
    { label: "Annual Turn Over", value: "$5M" },
    { label: "Repeat Business", value: "85%" },
    { label: "Employees Strength", value: "100+" },
    { label: "Happy Customers", value: "1800+" },
    { label: "Countries We Have Worked In", value: "3+" },
  ],
  projects: [
    {
      title: "Infrastructure Development",
      summary:
        "Established and debut into infrastructure development - building the foundation for Southeast Asia's growth.",
      image: infrastructureImg,
    },
    {
      title: "Automotive Solutions",
      summary:
        "Foray into automotives with electric and non-electric vehicles, agricultural and construction machines.",
      image: automotiveImg,
    },
    {
      title: "IT Solutions",
      summary:
        "Entered into IT and related solutions including IoT, energy software, and comprehensive development services.",
      image: informationTechnologyImg,
    },
  ],
  history: [
    {
      year: "2013",
      title: "ESTABLISHED AND DEBUT INTO INFRASTRUCTURE DEVELOPMENT",
    },
    {
      year: "2015",
      title: "FORAY INTO AUTOMOTIVES",
    },
    {
      year: "2018",
      title: "ENTERED INTO IT AND RELATED SOLUTIONS",
    },
    {
      year: "2020",
      title: "ENTERED INTO RENEWABLES",
    },
    {
      year: "2020",
      title: "EXPANDED INTO ASEAN AND OTHER REGIONS",
    },
    {
      year: "2021",
      title: "ENTERED INTO ENERGY SECTOR",
    },
    {
      year: "2022",
      title: "ENTERED INTO AI & EVS",
    },
  ],
  successFactors: [
    "Boutique-style service with market presence and resources of a major global firm.",
    "Extensive knowledge of the leadership talent pool across the region.",
    "Pro-active approach.",
    "Strong Coordination with stake holders for future opportunities.",
    "Strong approach for building and maintaining client relationship.",
    "Customized research for each assignment.",
    "Tailored Solutions for client requirements.",
    "Utmost focus on quality deliverables.",
  ],
  contact: {
    address: "BAN PHONETHAN, SAYSETHA, VIENTIANE, LAO PDR",
    phone: "+856 20 7619 8200",
    email: "info@arclao.com",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=102.6%2C17.9%2C103.1%2C18.2&layer=mapnik&marker=17.966%2C102.6",
  },
  footer: {
    legal: "© 2019 ARC Lao. All Rights Reserved",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Careers", href: "#careers" },
    ],
  },
};

// --- Simple icon set (inline SVG to avoid external deps) ---
const Icon = ({ name, className = "w-6 h-6" }: { name: string; className?: string }) => {
  const common = {
    className: `${className} flex-none`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "globe":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M21 12l-9 5-9-5" />
          <path d="M21 17l-9 5-9-5" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 21s6-2 9-5 9-10 9-13C10 3 3 10 3 19c0 1 .3 1.5 0 2z" />
        </svg>
      );
    default:
      return null;
  }
};

// --- Components ---
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <Container className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500" />
          <span className="font-semibold tracking-tight">ARC Lao</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteData.nav.map((n) => (
            <a key={n.label} href={n.href} className="text-slate-700 hover:text-slate-900 transition">
              {n.label}
            </a>
          ))}
          <a href="tel:+8562076198200" className="inline-flex items-center rounded-xl px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700">
            +856 20 7619 8200
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <Container className="py-4 grid gap-3">
            {siteData.nav.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-700 hover:text-slate-900">
                {n.label}
              </a>
            ))}
            <a href="tel:+8562076198200" className="inline-flex items-center rounded-xl px-3 py-2 bg-indigo-600 text-white w-max">
              +856 20 7619 8200
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
      
      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-300 uppercase tracking-wider text-xs">
                {siteData.hero.kicker}
              </span>
            </div>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Me To We With <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">ARC Lao</span> combined efforts On <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Technological Innovation</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {siteData.hero.subhead}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {siteData.hero.ctas.map((c, index) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    c.variant === "ghost"
                      ? "border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 backdrop-blur-sm"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500"
                  }`}
                >
                  <span>{c.label}</span>
                  {index === 0 ? (
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m0 0l4-4m-4 4l4 4" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white/20"></div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white/20"></div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white/20"></div>
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">1,800+</span> satisfied clients
                </div>
              </div>
              <div className="text-sm text-slate-300">
                <span className="font-semibold text-white">10+</span> years experience
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative lg:pl-8">
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-xl animate-bounce delay-500"></div>
            
            {/* Main image container */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                <img 
                  src={Technological_Innovation} 
                  alt="Technological Innovation and Infrastructure Development" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white">$110M+</div>
                <div className="text-xs text-slate-300">Total Investment</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-xs text-slate-300">Projects</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  const pillarIcons = ["🎯", "🚀", "🏛️", "🤝"];
  
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            About Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Built on <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Strong Foundations</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              ARC Lao Sole Company Ltd is founded upon the four strong pillars of <strong>Principles, Perseverance, Permanence and Partnership</strong>. We strive for excellence by combining people, technology and process as our path forward. We empower sustainable progress for our clients, partners, and the wider community through our unique approach as business technologists.
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.valueProps.map((v, index) => (
            <div 
              key={v.title} 
              className="group relative p-8 rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              
              {/* Icon and title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pillarIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
                <p className="text-sm text-slate-600 leading-relaxed text-center">
                  {v.body}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating dots decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-white rounded-3xl shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-lg">
                🌟
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900">Excellence Through Innovation</div>
                <div className="text-xs text-slate-600">Combining people, technology & process</div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg">
                🚀
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900">Sustainable Progress</div>
                <div className="text-xs text-slate-600">For clients, partners & community</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Overview() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">OVERVIEW</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              ARC LAO is a leader in next-generation technology and related services. We enable clients in many countries to navigate their success through INNOVATION. With over 10+ years of experience in managing various projects and workings of global enterprises, we expertly steer our clients through their progressive journey.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We do it by enabling our clients with a highly experienced team coupled with latest technologies. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring skills, expertise, and ideas from our innovation ecosystem.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
              <img 
                src={Technological_Innovation} 
                alt="Technology infrastructure and innovation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Sector Of Expertise</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((s) => (
            <article key={s.title} className="h-full group rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white hover:shadow-lg transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-14 bg-slate-900 text-white">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {siteData.stats.map((s) => (
          <div key={s.label} className="p-6 rounded-2xl ring-1 ring-white/15 bg-white/5 text-center">
            <div className="text-3xl font-semibold">{s.value}</div>
            <div className="mt-1 text-sm text-white/80">{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}

function History() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50" id="history">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center mb-12">Brief History</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-300"></div>
            <div className="space-y-8">
              {siteData.history.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="font-medium text-slate-900">{milestone.title}</h3>
                  </div>
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {milestone.year}
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Success() {
  const icons = ["🎯", "🌐", "⚡", "🤝", "💼", "🔍", "📊", "💡"];
  
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Our Success Formula
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How We Create <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">SUCCESS</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Delivering sustainable and inclusive solutions through innovation, expertise, and strategic partnerships across Southeast Asia.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.successFactors.map((factor, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[index] || "💡"}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
                <p className="text-sm leading-relaxed text-slate-700 font-medium">
                  {factor}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
                👨‍💼
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs font-medium">
                👩‍💻
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xs font-medium">
                👨‍🔬
              </div>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-900">Ready to experience our approach?</div>
              <div className="text-xs text-slate-600">Join 1,800+ satisfied clients across SEA</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50" id="projects">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">Project Execution</h2>
          <p className="text-slate-600 max-w-4xl mx-auto">
            ARC Lao has consistently adhered to the "Prestige, Quality, Innovation, and Pragmatism" business philosophy, serving multiple sectors in the Southeast Asia region. The company has successfully completed over 30 turnkey projects, financed by public, private sectors, and development partners, resulting in a total investment exceeding $110 million.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white hover:shadow-lg transition">
              <div className="aspect-[16/11] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-slate-900">30+</div>
              <div className="text-slate-600">Turnkey Projects</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900">$110M+</div>
              <div className="text-slate-600">Total Investment</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900">100%</div>
              <div className="text-slate-600">Quality Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900">SEA</div>
              <div className="text-slate-600">Regional Coverage</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  
  const contactItems = [
    {
      icon: "📍",
      label: "Address",
      value: siteData.contact.address,
      link: null
    },
    {
      icon: "📞",
      label: "Phone",
      value: siteData.contact.phone,
      link: `tel:${siteData.contact.phone}`
    },
    {
      icon: "✉️",
      label: "Email",
      value: siteData.contact.email,
      link: `mailto:${siteData.contact.email}`
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <Container className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's build the future together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">{item.label}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-slate-600 hover:text-indigo-600 transition-colors break-words">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
              <iframe
                title="ARC Lao Location"
                src={siteData.contact.mapEmbed}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:pl-8">
            <form onSubmit={onSubmit} className="p-8 rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 space-y-6">
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input 
                    id="subject" 
                    name="subject" 
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required
                    className="w-full p-4 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 text-white font-semibold hover:from-indigo-700 hover:via-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {sent ? (
                  <span className="flex items-center justify-center gap-2">
                    <span>✓</span>
                    Message sent successfully!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <span>→</span>
                  </span>
                )}
              </button>
              
              {sent && (
                <div className="text-center text-sm text-slate-600 bg-green-50 p-3 rounded-lg border border-green-200">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-slate-900 text-white">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">{siteData.footer.legal}</div>
        <nav className="flex items-center gap-4 text-sm">
          {siteData.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="text-slate-400 hover:text-white">{l.label}</a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}

export default function CorporateSite() {
  return (
    <main className="min-h-screen text-slate-900">
      <Nav />
      <Hero />
      <About />
      <Overview />
      <Services />
      <Stats />
      <History />
      <Success />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}