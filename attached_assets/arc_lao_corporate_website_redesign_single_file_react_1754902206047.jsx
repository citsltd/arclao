// ARC Lao — Corporate Website Redesign (single‑file React)
// ------------------------------------------------------
// How to use:
// 1) Replace the placeholder content in the `siteData` object below with real copy from arclao.com/arclao.html.
// 2) Replace any image URLs with your own assets (CDN or /public). If you only have low‑res images, this layout will still look great.
// 3) Optional: Tweak brand colors in the `brand` object.
// 4) Ship! This is production‑ready markup with accessible structure and clean Tailwind classes.

import React, { useState } from "react";

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
    kicker: "Next‑generation solutions",
    headline: "Innovating for Laos and beyond",
    subhead:
      "We help organizations modernize operations and accelerate sustainable growth across mobility, energy, infrastructure and technology.",
    ctas: [
      { label: "Get in touch", href: "#contact" },
      { label: "Our work", href: "#projects", variant: "ghost" },
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", // Replace with real header image
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Sectors", href: "#sectors" },
    { label: "Projects", href: "#projects" },
    { label: "News", href: "#news" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  valueProps: [
    {
      title: "Local insight, global standards",
      body:
        "Headquartered in Vientiane with regional partners, we combine Lao market expertise with international quality, safety and compliance.",
      icon: "globe",
    },
    {
      title: "Full‑stack delivery",
      body:
        "From feasibility and design to procurement and after‑sales support, we manage the entire lifecycle with measurable KPIs.",
      icon: "stack",
    },
    {
      title: "Sustainable impact",
      body:
        "We prioritize energy‑efficient systems, circular procurement, and durable assets that reduce total cost of ownership.",
      icon: "leaf",
    },
  ],
  services: [
    {
      title: "Mobility & EV Solutions",
      body:
        "E‑pedicabs, e‑bikes and light EV fleets, charging systems, fleet software, and financing advisory.",
    },
    {
      title: "Infrastructure & Public Works",
      body:
        "Procurement support, implementation, QA/QC, and O&M training for municipalities and ministries.",
    },
    {
      title: "Technology & Systems Integration",
      body:
        "IoT telemetry, asset tracking, dashboards, and cloud platforms tailored for government and enterprise.",
    },
    {
      title: "After‑Sales & Support",
      body:
        "Warranty management, spare‑parts logistics, and field service coverage across key provinces.",
    },
  ],
  sectors: ["Public Sector", "Transportation", "Energy", "Tourism", "Real Estate", "Retail & Services"],
  stats: [
    { label: "Projects delivered", value: "150+" },
    { label: "Years operating", value: "10+" },
    { label: "Provinces covered", value: "12" },
    { label: "Partners", value: "30+" },
  ],
  projects: [
    {
      title: "Electric Pedicab Program",
      summary:
        "Procurement and rollout of 150 e‑pedicabs, driver training, and maintenance program.",
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Smart Charging Pilot",
      summary:
        "Solar‑assisted charging hubs integrated with usage analytics for efficient fleet ops.",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Municipal Asset Tracking",
      summary:
        "GPS/IoT retrofit for public vehicles, uptime monitoring and dispatch optimization.",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1400&auto=format&fit=crop",
    },
  ],
  news: [
    {
      date: "Sep 15, 2023",
      title: "Ministry of Public Works and Transport procures e‑pedicabs",
      blurb:
        "ARC Lao supports cleaner first/last‑mile mobility with 150 electric pedicabs for Vientiane.",
      href: "#",
    },
  ],
  careers: {
    intro:
      "We’re always looking for builders, analysts, and field technicians who care about long‑term impact.",
    roles: [
      { title: "Project Manager — Mobility", location: "Vientiane", type: "Full‑time" },
      { title: "Field Service Technician", location: "Vientiane & Provincial", type: "Full‑time" },
    ],
    email: "[email protected]",
  },
  contact: {
    address: "Ban Phonethan, Saysettha District, Vientiane Capital, Lao PDR",
    phone: "+856 XX XXX XXXX",
    email: "[email protected]",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=102.6%2C17.9%2C103.1%2C18.2&layer=mapnik&marker=17.966%2C102.6",
  },
  footer: {
    legal: "© " + new Date().getFullYear() + " ARC Lao Sole Company Ltd. All rights reserved.",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Supplier portal", href: "#" },
    ],
  },
};

// --- Simple icon set (inline SVG to avoid external deps) ---
const Icon = ({ name, className = "w-6 h-6" }) => {
  const common = {
    className: `${className} flex-none`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
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
function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <Container className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500" />
          <span className="font-semibold tracking-tight">{brand.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteData.nav.map((n) => (
            <a key={n.label} href={n.href} className="text-slate-700 hover:text-slate-900 transition">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-xl px-3 py-2 border border-slate-300 hover:border-slate-400">Contact</a>
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
            <a href="#contact" className="inline-flex items-center rounded-xl px-3 py-2 border border-slate-300 w-max">Contact</a>
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

function Values() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3">
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

function Services() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50" id="services">
      <Container>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Services</h2>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-slate-600 hover:text-slate-900">Talk to an expert →</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.services.map((s) => (
            <article key={s.title} className="h-full p-6 rounded-2xl bg-white ring-1 ring-slate-200 hover:shadow-md transition">
              <h3 className="font-medium text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Sectors() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="sectors">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Sectors we serve</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.sectors.map((sec) => (
            <li key={sec} className="p-4 rounded-xl ring-1 ring-slate-200 bg-slate-50 text-slate-700">{sec}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-14 bg-slate-900 text-white">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

function Projects() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="projects">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Selected projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </section>
  );
}

function News() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50" id="news">
      <Container>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">News & updates</h2>
          <a href="#" className="hidden sm:inline-flex text-sm text-slate-600 hover:text-slate-900">All news →</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.news.map((n) => (
            <article key={n.title} className="p-6 rounded-2xl ring-1 ring-slate-200 bg-white">
              <div className="text-xs uppercase tracking-wider text-slate-500">{n.date}</div>
              <h3 className="mt-2 font-medium text-slate-900">{n.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{n.blurb}</p>
              <a href={n.href} className="mt-3 inline-flex text-sm text-slate-700 hover:text-slate-900">Read more →</a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="careers">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Careers</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">{siteData.careers.intro}</p>
        <div className="mt-6 grid gap-4">
          {siteData.careers.roles.map((r) => (
            <div key={r.title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{r.title}</div>
                <div className="text-sm text-slate-600">{r.location} · {r.type}</div>
              </div>
              <a href="#contact" className="inline-flex rounded-xl px-3 py-2 border border-slate-300 text-sm">Apply</a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">Don’t see a role? Send your CV to <a className="underline" href={`mailto:${siteData.careers.email}`}>{siteData.careers.email}</a>.</p>
      </Container>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="py-16 lg:py-20 bg-slate-50" id="contact">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Let’s build together</h2>
            <p className="mt-2 text-slate-600">Tell us about your project, timeline, and budget. We’ll get back within 1–2 business days.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li><strong>Address:</strong> {siteData.contact.address}</li>
              <li><strong>Phone:</strong> {siteData.contact.phone}</li>
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
          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 grid gap-4">
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
              {sent ? "Thanks! We’ll be in touch." : "Send message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">{siteData.footer.legal}</div>
        <nav className="flex items-center gap-4 text-sm">
          {siteData.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="text-slate-600 hover:text-slate-900">{l.label}</a>
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
      <Values />
      <Services />
      <Sectors />
      <Stats />
      <Projects />
      <News />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
