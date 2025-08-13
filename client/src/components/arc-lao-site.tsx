import React, { useState } from "react";

import Technological_Innovation from "@assets/Technological Innovation.jpg";
import Future_of_Technology from "@assets/Future of Technology_1754915928797.jpg";
import arcLaoLogo from "@assets/arclaoslogo_1754990674040.png";

// Client logos
import panAustLogo from "@assets/logoHeader_1755069792950.webp";
import seponLogo from "@assets/sepon-transparent-background_1755069792955.png";
import saveTheChildrenLogo from "@assets/Logo_SavetheChildren_1755069792956.png";
import magLogo from "@assets/Mines_Advisory_Group_logo_1755069792957.jpg";
import tetraTechLogo from "@assets/images (1)_1755069792958.png";
import worldBankLogo from "@assets/The_World_Bank_logo.svg_1755069792959.png";
import adbLogo from "@assets/Asian_Development_Bank_logo.svg_1755069792960.png";
import uxoLaoLogo from "@assets/images_1755069792961.png";
import norwegianPeoplesAidLogo from "@assets/f5ce5da6-dab5-40b7-b8a7-213182e3d55b_1755069860515.png";

// --- Components ---
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Products & Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 supports-[backdrop-filter]:bg-white/80 border-b border-white/20 shadow-lg shadow-slate-900/5">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-white/50 to-cyan-50/50"></div>
      
      <Container className="relative flex items-center justify-between h-18 py-4">
        <a href="#" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img 
            src={arcLaoLogo} 
            alt="ARC LAO" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-slate-50/80 rounded-2xl p-1 shadow-inner">
            {navItems.map((n) => (
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
          
          <a 
            href="tel:+8562076198200" 
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#00227c] text-white font-semibold rounded-2xl shadow-lg shadow-[#00227c]/25 hover:shadow-xl hover:shadow-[#00227c]/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[#001a63] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <svg className="w-4 h-4 transition-transform group-hover:scale-110 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline relative z-10">+856 20 7619 8200</span>
            <span className="sm:hidden relative z-10">Call</span>
          </a>
        </nav>

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

      {open && (
        <div className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-xl shadow-xl">
          <Container className="py-6">
            <div className="grid gap-4">
              {navItems.map((n) => (
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
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#00227c] text-white font-semibold rounded-xl shadow-lg shadow-[#00227c]/25 transition-transform hover:scale-105 hover:bg-[#001a63]"
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
      <div className="absolute inset-0">
        <img 
          src={Technological_Innovation} 
          alt="Technological Innovation Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-indigo-900/40 to-slate-900/60"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#00227c]/20 via-[#00227c]/10 to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-[#00227c]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-tr from-[#00227c]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
      <Container className="relative z-10 py-16 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center pt-[25px] pb-[25px]">
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-2">
              Leading Innovation in <span className="text-[#00227c]">Technology Solutions</span>
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00227c] text-white font-semibold rounded-xl shadow-lg hover:shadow-[#00227c]/25 hover:bg-[#001a63] transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
            >
              <span>Our Services</span>
              <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
        
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
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="about">
      <Container className="relative px-4">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-4xl font-bold text-[#00227c] mb-2">Welcome To</div>
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8">ARC LAO</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                We are an international trading company with over <strong>16 years</strong> of dedicated operation in Laos. Throughout our extensive history, we have established a strong presence across diverse business sectors, including demining equipment, information technology, automotive, hospitality, energy, and farming equipment.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Our commitment to quality and excellence has enabled us to build lasting relationships with clients and partners worldwide.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Driven by innovation and a customer-centric approach, we strive to deliver reliable solutions that meet the evolving needs of our clients in various industries.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200/50 shadow-2xl shadow-slate-900/10 bg-white">
              <img 
                src={Future_of_Technology} 
                alt="ARC LAO operations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Solutions() {
  const solutions = [
    {
      title: "Demining Equipments",
      description: "Metal detectors and a range of other equipment for demining",
      icon: "🛡️"
    },
    {
      title: "Agriculture Machinery",
      description: "Country distributor for BCS-Italy and Mahindra & Mahindra, specializing in agricultural machinery.",
      icon: "🚜"
    },
    {
      title: "Information Technology",
      description: "Expertise in DevOps, cloud services, AI, and machine learning.",
      icon: "💻"
    },
    {
      title: "Automotive",
      description: "Country distributor for TVS Motors",
      icon: "🏍️"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="services">
      <Container className="relative px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            We Provide The <span className="text-[#00227c]">Best Solution</span>
          </h2>
          <p className="text-lg text-slate-600">in below domains</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-slate-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyChoose() {
  const reasons = [
    {
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs, ensuring tailored services that drive success.",
      icon: "👥"
    },
    {
      title: "Proven Track Record of Excellence",
      description: "Over 16 years of delivering innovative solutions and exceeding client expectations.",
      icon: "🏆"
    },
    {
      title: "Reliable and Consistent",
      description: "Consistently delivering on promises with a focus on transparency and integrity.",
      icon: "✅"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <Container className="relative px-4">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
              Why Choose <span className="text-[#00227c]">ARC Lao</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At ARC Lao, we are dedicated to providing quality products and services with a customer-centric approach.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="text-2xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200/50 shadow-2xl shadow-slate-900/10 bg-white">
              <img 
                src={Future_of_Technology} 
                alt="Why choose ARC LAO" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DetailedServices() {
  const services = [
    {
      title: "Demining Equipments",
      subtitle: "Country Distributor for De-Mining Equipments from Germany",
      description: "We are a national distributor for all types of demining equipment used in humanitarian efforts.",
      icon: "🛡️"
    },
    {
      title: "Information Technology", 
      subtitle: "Expertise in Development Ops, Cloud services, AI & Machine learning",
      description: "Innovating the landscape with data & tech oriented humanistic solutions!",
      icon: "💻"
    },
    {
      title: "Agriculture Machinery - BCS Two Wheel Tractors",
      subtitle: "BCS Two Wheel Tractors",
      description: "BCS is an Italian-based business group with over 40 years of expertise in two-wheel tractors. They offer a wide range of reversible and multifunctional two-wheel tractors suitable for professional soil preparation, greens maintenance, and snow removal.",
      icon: "🚜"
    },
    {
      title: "Agriculture Machinery - Mahindra Tractors", 
      subtitle: "Mahindra Tractors",
      description: "Mahindra Tractors, part of Mahindra & Mahindra, is an Indian agricultural machinery manufacturer. It became the world's top-selling tractor brand in 2010, mainly serving India, with growing markets in North America and Australia.",
      icon: "🚜"
    },
    {
      title: "Motorbikes - TVS Motors",
      subtitle: "TVS Motors",
      description: "TVS Motor Company, headquartered in Chennai, India, is a major multinational motorcycle manufacturer, ranking third in India by revenue, with annual sales of three million units.",
      icon: "🏍️"
    },
    {
      title: "Project Consultancy",
      subtitle: "Comprehensive Business Solutions",
      description: "We provide project consultancy focuses on aligning projects with overall business goals and long-term strategies which involves Technical Consulting, Management Consulting, Financial Consulting, Environmental and Sustainability Consulting & Risk Management",
      icon: "📋"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-[#00227c]">Services</span>
          </h2>
          <p className="text-lg text-slate-600">Comprehensive solutions across multiple industries</p>
        </div>
        
        <div className="grid gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={service.title} className={`grid gap-8 lg:gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <h4 className="text-lg font-semibold text-[#00227c] mb-4">{service.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-lg">
                  <img 
                    src={Future_of_Technology} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Company <span className="text-[#00227c]">Vision & Mission</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            To be a globally recognized leader committed to delivering excellence in all our endeavors, inspiring trust and setting the standard for quality and innovation.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Become a leader</h3>
            <p className="text-slate-600">recognized for excellence</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Inspire trust among</h3>
            <p className="text-slate-600">customers, partners, and stakeholders</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Deliver outstanding</h3>
            <p className="text-slate-600">products and services that meet the highest standards</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Prioritize customer</h3>
            <p className="text-slate-600">satisfaction in every interaction</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Partners() {
  const partners = [
    {
      name: "Vallon",
      tagline: "Searching with Excellence",
      description: "Pioneering Spirit since 1965",
      website: "www.vallon.de",
      category: "Demining Equipment"
    },
    {
      name: "Jarvis Consulting",
      tagline: "IT Services",
      description: "Development Ops, Cloud services, AI & Machine learning. Innovating the landscape with data & tech oriented humanistic solutions!",
      website: "www.jarvis.consulting",
      category: "Information Technology"
    },
    {
      name: "TVS Motor Company",
      tagline: "Transforming quality of life through mobility solutions",
      description: "TVS Motor Company - One of the largest 2-wheeler companies in the world.",
      website: "www.tvsmotor.com",
      category: "Motorbikes"
    },
    {
      name: "BCS Two Wheel Tractors",
      tagline: "Agriculture Machinery Excellence",
      description: "A complete range of reversible and multifunctional two-wheel tractors for professionally preparing the soil, greens maintenance and snow removal.",
      website: "www.bcsagri.com/en",
      category: "Agriculture Machinery"
    },
    {
      name: "Mahindra & Mahindra",
      tagline: "Agriculture Machines & Equipments", 
      description: "Mahindra Tractors offers a wide range of tractor models in India, with power options ranging from 15 HP to 74 HP. All Mahindra Tractors are designed to perform various agricultural tasks, catering to the diverse needs of farmers and landowners",
      website: "www.mahindratractor.com",
      category: "Agriculture Machinery"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-[#00227c]">Partners</span>
          </h2>
          <p className="text-lg text-slate-600">Trusted partnerships with global industry leaders</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#00227c] text-white text-xs font-medium rounded-full mb-3">
                  {partner.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                <h4 className="text-lg font-semibold text-[#00227c] mb-3">{partner.tagline}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{partner.description}</p>
              <a 
                href={`https://${partner.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00227c] hover:text-[#001a63] font-medium text-sm transition-colors"
              >
                {partner.website} →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Clients() {
  const clients = [
    { name: "PanAust", logo: panAustLogo, category: "Mining" },
    { name: "Sepon Gold", logo: seponLogo, category: "Mining" },
    { name: "Save the Children", logo: saveTheChildrenLogo, category: "Humanitarian" },
    { name: "Mines Advisory Group", logo: magLogo, category: "Demining" },
    { name: "Tetra Tech", logo: tetraTechLogo, category: "Engineering" },
    { name: "The World Bank", logo: worldBankLogo, category: "Development" },
    { name: "Asian Development Bank", logo: adbLogo, category: "Development" },
    { name: "UXO LAO", logo: uxoLaoLogo, category: "Demining" },
    { name: "Norwegian People's Aid", logo: norwegianPeoplesAidLogo, category: "Humanitarian" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-[#00227c]">Clients</span>
          </h2>
          <p className="text-lg text-slate-600">Trusted by leading organizations worldwide</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {clients.map((client) => (
              <div 
                key={client.name} 
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-slate-100"
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-2 py-1 bg-[#00227c]/10 text-[#00227c] text-xs font-medium rounded-full">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
              <div className="w-2 h-2 bg-[#00227c] rounded-full animate-pulse"></div>
              <span className="text-slate-600 font-medium">Serving 9+ prestigious organizations across multiple sectors</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00227c]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00227c]/10 to-transparent rounded-full blur-3xl"></div>
      
      <Container className="relative">
        <div className="py-16">
          <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div>
                <img 
                  src={arcLaoLogo} 
                  alt="ARC LAO" 
                  className="h-12 w-auto mb-4"
                />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Leading Technology Solutions Provider
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  ARC Lao Sole Company Ltd is committed to delivering innovative technology solutions across multiple sectors, empowering sustainable progress for our clients and communities.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-3">
                <a href="#about" className="block text-slate-400 hover:text-white transition-colors text-sm">About Us</a>
                <a href="#services" className="block text-slate-400 hover:text-white transition-colors text-sm">Our Sectors</a>
                <a href="#contact" className="block text-slate-400 hover:text-white transition-colors text-sm">Contact</a>
              </nav>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Our Sectors</h4>
              <nav className="space-y-3">
                <span className="block text-slate-400 text-sm">Demining Equipment</span>
                <span className="block text-slate-400 text-sm">Agriculture Machinery</span>
                <span className="block text-slate-400 text-sm">Information Technology</span>
                <span className="block text-slate-400 text-sm">Automotive</span>
              </nav>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-slate-400 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div className="text-slate-400 text-sm">
                    <div>Ban Phonexay District</div>
                    <div>Sysetha, Vientiane, Lao PDR</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-slate-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <a href="mailto:info@arclao.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                    info@arclao.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-slate-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <a href="tel:+8562052629292" className="text-slate-400 hover:text-white transition-colors text-sm">
                    +856-20-5262 9292
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00227c] mb-2">16+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00227c] mb-2">50+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00227c] mb-2">100+</div>
                <div className="text-slate-400 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00227c] mb-2">5+</div>
                <div className="text-slate-400 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              © 2025 ARC Lao Sole Company Ltd. All rights reserved.
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </nav>
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
      <Solutions />
      <WhyChoose />
      <DetailedServices />
      <VisionMission />
      <Partners />
      <Clients />
      <Footer />
    </main>
  );
}