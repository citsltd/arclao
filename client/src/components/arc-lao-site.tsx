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
import Future_of_Technology from "@assets/Future of Technology_1754915928797.jpg";
import principlesIcon from "@assets/principles_1754916579666.png";
import perseveranceIcon from "@assets/perservence_1754916579664.png";
import permanenceIcon from "@assets/permanence_1754916579663.png";
import partnershipIcon from "@assets/partnership_1754916579659.png";
import innovationIcon from "@assets/innovation_1754916674198.png";
import sustainableProgressIcon from "@assets/sustainable progress_1754916674196.png";
import oldManPortrait from "@assets/Old Man_1754976401606.jpg";
import womanPortrait from "@assets/Woman_1754976401621.jpg";
import manPortrait from "@assets/Man_1754976401623.jpg";

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
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 supports-[backdrop-filter]:bg-white/80 border-b border-white/20 shadow-lg shadow-slate-900/5">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-white/50 to-cyan-50/50"></div>
      
      <Container className="relative flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 shadow-lg shadow-indigo-500/25" />
            <div className="absolute inset-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              ARC Lao
            </span>
            <span className="text-xs text-slate-500 font-medium tracking-wider">
              INNOVATION
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-slate-50/80 rounded-2xl p-1 shadow-inner">
            {siteData.nav.map((n, index) => (
              <a 
                key={n.label} 
                href={n.href} 
                className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm group"
              >
                <span className="relative z-10">{n.label}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <a 
            href="tel:+8562076198200" 
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <svg className="w-4 h-4 transition-transform group-hover:scale-110 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline relative z-10">+856 20 7619 8200</span>
            <span className="sm:hidden relative z-10">Call</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/50 transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Toggle menu"
        >
          <svg 
            viewBox="0 0 24 24" 
            className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-xl shadow-xl">
          <Container className="py-6">
            <div className="grid gap-4">
              {siteData.nav.map((n) => (
                <a 
                  key={n.label} 
                  href={n.href} 
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 group"
                  onClick={() => setOpen(false)}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium">{n.label}</span>
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <a 
                  href="tel:+8562076198200" 
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +856 20 7619 8200
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={Technological_Innovation} 
          alt="Technological Innovation Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-indigo-900/40 to-slate-900/60"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
      <Container className="relative z-10 py-16 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center pt-[25px] pb-[25px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-300 uppercase tracking-wider text-xs">
              {siteData.hero.kicker}
            </span>
          </div>
          
          {/* Main headline */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 pl-[0px] pr-[0px]">
              Me To We With <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">ARC Lao</span> combined efforts On <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Technological Innovation</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed px-4">
              {siteData.hero.subhead}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            {siteData.hero.ctas.map((c, index) => (
              <a
                key={c.label}
                href={c.href}
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
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
          
          {/* Trust indicators and stats */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 col-span-1 xs:col-span-2 lg:col-span-1">
              <div className="flex -space-x-1">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-white/20 overflow-hidden">
                  <img 
                    src={oldManPortrait} 
                    alt="Satisfied client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-white/20 overflow-hidden">
                  <img 
                    src={womanPortrait} 
                    alt="Satisfied client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-white/20 overflow-hidden">
                  <img 
                    src={manPortrait} 
                    alt="Satisfied client" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 text-center lg:text-left">
                <span className="font-semibold text-white">1,800+</span> satisfied clients
              </div>
            </div>
            <div className="flex items-center justify-center text-xs sm:text-sm text-slate-200">
              <span className="font-semibold text-white">10+</span> years experience
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 py-2 text-center">
              <div className="text-base sm:text-lg font-bold text-white">$110M+</div>
              <div className="text-xs text-slate-200">Total Investment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 py-2 text-center">
              <div className="text-base sm:text-lg font-bold text-white">30+</div>
              <div className="text-xs text-slate-200">Projects</div>
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
  const pillarIcons = [principlesIcon, perseveranceIcon, permanenceIcon, partnershipIcon];
  
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-20 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            About Our Company
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 px-2">
            Built on <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Strong Foundations</span>
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ARC Lao Sole Company Ltd is founded upon the four strong pillars of <strong>Principles, Perseverance, Permanence and Partnership</strong>. We strive for excellence by combining people, technology and process as our path forward. We empower sustainable progress for our clients, partners, and the wider community through our unique approach as business technologists.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.valueProps.map((v, index) => (
            <div 
              key={v.title} 
              className="group relative p-6 sm:p-8 rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-6 sm:left-8 w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              
              {/* Icon and title */}
              <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 p-3">
                  <img 
                    src={pillarIcons[index]} 
                    alt={v.title} 
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
              </div>
              
              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
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
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-6 bg-white rounded-3xl shadow-lg ring-1 ring-slate-200 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-2">
                <img 
                  src={innovationIcon} 
                  alt="Innovation" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm font-bold text-slate-900">Excellence Through Innovation</div>
                <div className="text-xs text-slate-600">Combining people, technology & process</div>
              </div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-2">
                <img 
                  src={sustainableProgressIcon} 
                  alt="Sustainable Progress" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-center sm:text-left">
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-indigo-100/30 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative px-4">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Company Overview
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Leading the Future of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Technology</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                ARC LAO is a leader in next-generation technology and related services. We enable clients in many countries to navigate their success through <strong className="text-slate-900">INNOVATION</strong>. With over 10+ years of experience in managing various projects and workings of global enterprises, we expertly steer our clients through their progressive journey.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We do it by enabling our clients with a highly experienced team coupled with latest technologies. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring skills, expertise, and ideas from our innovation ecosystem.
              </p>
            </div>
            
            
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
            
            {/* Main image container */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200/50 shadow-2xl shadow-slate-900/10 bg-white">
                <img 
                  src={Future_of_Technology} 
                  alt="Future of technology and digital transformation" 
                  className="w-full h-full object-cover"
                />
                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">1,800+</div>
                    <div className="text-sm text-slate-600">Satisfied Clients</div>
                  </div>
                </div>
              </div>
              
              {/* Floating innovation badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-4 shadow-xl text-white">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="font-bold text-sm">Innovation</div>
                    <div className="text-xs opacity-90">Leading Edge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden" id="services">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative px-4">
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Our Expertise
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 px-2">
            Sectors Of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Leading technological innovation across multiple industry sectors with comprehensive solutions and expertise.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((s, index) => (
            <article key={s.title} className="group relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                
                {/* Sector number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Category badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-900">
                  Sector
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Expertise</div>
                </div>
                
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {s.body}
                </p>
                
                {/* Skills list indicator */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-500 font-medium">Industry Leader</span>
                  </div>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-10 sm:py-14 text-white bg-[#f4f7fc]">
      <Container className="px-4">
        <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-[#00000000]">
          {siteData.stats.map((s) => (
            <div key={s.label} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl ring-1 ring-white/15 text-center text-[#ffffff] bg-[#4b49e6]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function History() {
  const milestoneIcons = ["🏗️", "🚗", "💻", "🌱", "🌏", "⚡", "🤖"];
  
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-indigo-50 relative overflow-hidden" id="history">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Our Journey
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 px-2">
            A Legacy of <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            From infrastructure pioneers to technology innovators, discover how ARC Lao has evolved to become a leader in multiple sectors across Southeast Asia.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Mobile Timeline */}
          <div className="block lg:hidden space-y-6">
            {siteData.history.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-lg shadow-lg">
                    {milestoneIcons[index] || "📈"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full">
                        {milestone.year}
                      </span>
                      <div className="h-px bg-gradient-to-r from-indigo-200 to-transparent flex-1"></div>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                      {milestone.title}
                    </h3>
                  </div>
                </div>
                {index < siteData.history.length - 1 && (
                  <div className="w-px h-4 bg-gradient-to-b from-indigo-200 to-transparent ml-7 mt-2"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-500 rounded-full"></div>
            <div className="space-y-12">
              {siteData.history.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="p-6 bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:shadow-indigo-500/10 transition-all duration-500 group-hover:-translate-y-2">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm font-bold rounded-full">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg leading-tight">
                        {milestone.title}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full ${index % 2 === 0 ? 'ml-auto' : ''}`}></div>
                    </div>
                  </div>
                  
                  {/* Central node */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-white rounded-full border-4 border-indigo-500 shadow-lg group-hover:scale-125 group-hover:border-blue-500 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full animate-pulse opacity-50"></div>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Summary stats */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              7
            </div>
            <div className="text-sm text-slate-600 font-medium">Major Expansions</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              6
            </div>
            <div className="text-sm text-slate-600 font-medium">Industry Sectors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              SEA
            </div>
            <div className="text-sm text-slate-600 font-medium">Regional Presence</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Success() {
  const icons = [
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v7h2v7h3v-7h1zm-6.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M3 3h18v4H3V3zm0 6h18v4H3V9zm0 6h18v4H3v-4z"/>
    </svg>,
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  ];
  
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Our Success Formula
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
            How We Create <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">SUCCESS</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Delivering sustainable and inclusive solutions through innovation, expertise, and strategic partnerships across Southeast Asia.
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.successFactors.map((factor, index) => (
            <div 
              key={index} 
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[index] || icons[7]}
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-3">
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                  {factor}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 bg-white rounded-xl sm:rounded-2xl shadow-sm ring-1 ring-slate-200 max-w-md sm:max-w-none mx-auto">
            <div className="flex -space-x-2">
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                <img 
                  src={oldManPortrait} 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                <img 
                  src={womanPortrait} 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                <img 
                  src={manPortrait} 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
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
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden" id="projects">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-indigo-100/30 to-transparent rounded-full blur-3xl" />
      
      <Container className="relative px-4">
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Our Portfolio
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 px-2">
            Project <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Execution</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            ARC Lao has consistently adhered to the "Prestige, Quality, Innovation, and Pragmatism" business philosophy, serving multiple sectors in the Southeast Asia region. The company has successfully completed over 30 turnkey projects, financed by public, private sectors, and development partners, resulting in a total investment exceeding $110 million.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          {siteData.projects.map((p, index) => (
            <article key={p.title} className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <div className="aspect-[16/11] overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Project number badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Project</div>
                </div>
                
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {p.summary}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </article>
          ))}
        </div>
        
        {/* Enhanced statistics section */}
        <div className="relative">
          {/* Background decoration for stats */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform -skew-y-1"></div>
          
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl ring-1 ring-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Track Record</span>
              </h3>
              <p className="text-slate-600">Delivering excellence across Southeast Asia</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    30+
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">Turnkey Projects</div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    $110M+
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">Total Investment</div>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-2"></div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">Quality Delivery</div>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-2"></div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    SEA
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">Regional Coverage</div>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mt-2"></div>
              </div>
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Ultra-modern background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/15 via-indigo-500/10 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-400 rotate-45 opacity-30 animate-bounce"></div>
      
      <Container className="relative">
        <div className="py-20 lg:py-24">
          {/* Main content grid */}
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-12">
            
            {/* Brand section - spans more columns */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
                      ARC LAO
                    </span>
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-32 transition-all duration-300"></div>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                  Pioneering the future of technology across Southeast Asia through innovative solutions in infrastructure, defense, and digital transformation.
                </p>
              </div>
              
              {/* Modern contact cards */}
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Address</div>
                    <div className="text-slate-200 font-medium">{siteData.contact.address}</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Phone</div>
                    <a href={`tel:${siteData.contact.phone}`} className="text-slate-200 font-medium hover:text-white transition-colors">
                      {siteData.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Email</div>
                    <a href={`mailto:${siteData.contact.email}`} className="text-slate-200 font-medium hover:text-white transition-colors">
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation sections */}
            <div className="lg:col-span-7 grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2">
              
              {/* Company links */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-white relative">
                  Company
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </h4>
                <nav className="space-y-3">
                  {[
                    { label: "About Us", href: "#about" },
                    { label: "Our Services", href: "#services" },
                    { label: "Portfolio", href: "#projects" },
                    { label: "Our Journey", href: "#history" },
                    { label: "Contact", href: "#contact" }
                  ].map((link) => (
                    <a 
                      key={link.label}
                      href={link.href} 
                      className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                    >
                      <div className="w-1 h-1 rounded-full bg-slate-500 group-hover:bg-blue-400 group-hover:w-2 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Expertise */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-white relative">
                  Expertise
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </h4>
                <nav className="space-y-3">
                  {[
                    "EV Infrastructure",
                    "Defense Systems", 
                    "Information Technology",
                    "Energy Solutions",
                    "Automotive",
                    "Infrastructure"
                  ].map((item) => (
                    <div key={item} className="group flex items-center gap-2 text-slate-300">
                      <div className="w-1 h-1 rounded-full bg-slate-500 group-hover:bg-indigo-400 transition-colors duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ultra-modern bottom section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px"></div>
          <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-slate-400 text-sm">
              {siteData.footer.legal}
            </div>
            
            <div className="flex items-center gap-8">
              {siteData.footer.links.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="relative text-slate-400 hover:text-white text-sm transition-colors duration-300 group"
                >
                  {link.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
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