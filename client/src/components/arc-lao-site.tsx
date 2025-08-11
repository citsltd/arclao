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
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=900",
    },
    {
      title: "Automotive Solutions",
      summary:
        "Foray into automotives with electric and non-electric vehicles, agricultural and construction machines.",
      image:
        "https://images.unsplash.com/photo-1562141961-4a1a6539d1d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=900",
    },
    {
      title: "IT Solutions",
      summary:
        "Entered into IT and related solutions including IoT, energy software, and comprehensive development services.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=900",
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
    <section className={`${brand.darkBg} text-white relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${brand.primary} opacity-20`} />
      <Container className="relative py-20 lg:py-28 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-cyan-300">{siteData.hero.kicker}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            {siteData.hero.headline}
          </h1>
          <p className="mt-4 text-slate-300 text-base lg:text-lg max-w-xl">{siteData.hero.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {siteData.hero.ctas.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={`inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border transition ${
                  c.variant === "ghost"
                    ? "border-white/30 hover:border-white/50"
                    : "bg-white text-slate-900 border-white hover:bg-slate-100"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
            <img src={siteData.hero.image} alt="Hero visual" className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="about">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">About Company</h2>
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
            ARC Lao Sole Company Ltd, a company which is founded upon strong pillars of Principals, Perseverance, Permanence and Partnership. ARC Lao strive to work for excellence. ARC Lao believes that combining people, technology and process is the way forward. ARC Lao empower sustainable progress for our clients and partners, the wider community and ourselves. It is our unique approach as business technologists that makes this possible.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4">
          {siteData.valueProps.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <Icon name={v.icon} />
                <h3 className="font-medium text-slate-900">{v.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{v.body}</p>
            </div>
          ))}
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
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
  return (
    <section className="py-16 lg:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">How We Create SUCCESS?</h2>
          <p className="text-slate-600">To help achieving sustainable and inclusive solutions through innovation.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.successFactors.map((factor, index) => (
            <div key={index} className="p-5 rounded-xl ring-1 ring-slate-200 bg-slate-50">
              <p className="text-sm text-slate-700">{factor}</p>
            </div>
          ))}
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
  return (
    <section className="py-16 lg:py-20 bg-white" id="contact">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Let's build together</h2>
            <p className="mt-2 text-slate-600">Tell us about your project, timeline, and budget. We'll get back within 1–2 business days.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li><strong>Address:</strong> {siteData.contact.address}</li>
              <li><strong>Phone:</strong> <a href={`tel:${siteData.contact.phone}`} className="underline">{siteData.contact.phone}</a></li>
              <li>
                <strong>Email:</strong> <a className="underline" href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
              </li>
            </ul>
            <div className="mt-6 aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <iframe
                title="Map"
                src={siteData.contact.mapEmbed}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200 grid gap-4">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm text-slate-700">Your name</label>
              <input id="name" name="name" required className="h-11 px-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm text-slate-700">Email</label>
              <input id="email" name="email" type="email" required className="h-11 px-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="subject" className="text-sm text-slate-700">Subject</label>
              <input id="subject" name="subject" className="h-11 px-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm text-slate-700">Message</label>
              <textarea id="message" name="message" rows={5} className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <button type="submit" className="h-11 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 text-white font-medium">
              {sent ? "Thanks! We'll be in touch." : "Send message"}
            </button>
          </form>
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