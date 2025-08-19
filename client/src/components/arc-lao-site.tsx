import React, { useState } from "react";

import Technological_Innovation from "@assets/Technological Innovation.jpg";
import Future_of_Technology from "@assets/Future of Technology_1754915928797.jpg";
import arcLaoLogo from "@assets/arclaoslogo_1754990674040.png";

// Solution/Service Images
import DefenseImage from "@assets/Defense_1754906822327.jpg";
import AgricultureImage from "@assets/Electric & Non-electric Motorbikes_1754906822323.jpg";
import ITImage from "@assets/Information Technology_1754906822325.jpg";
import InfrastructureImage from "@assets/Infrastructure_1754906822315.jpg";

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
import unLogo from "@assets/1653286163583_1755069792956.jfif";
import internationalArbitrationImage from "@assets/International-Arbitration_1755071475378.webp";

// Partner logos
import bcsGroupLogo from "@assets/BCS Two Wheel Tractors_1755074225201.png";
import mahindraLogo from "@assets/Mahindra & Mahindra_1755074225217.png";
import tvsMotorLogo from "@assets/TVS Motor Company_1755074225219.png";
import vallonLogo from "@assets/Vallon_1755074225223.png";

// New Service Images
import MotorbikesImage from "@assets/Motorbikes - TVS Motors_1755075726828.jpg";
import MahindraTractorsImage from "@assets/Agriculture Machinery - Mahindra Tractors_1755075726835.jpg";
import BCSTwoWheelTractorsImage from "@assets/Agriculture Machinery - BCS Two Wheel Tractors_1755075726841.jpg";
import DeminingEquipmentsImage from "@assets/Demining Equipments_1755075726842.jpg";
import ProjectConsultancyImage from "@assets/Project Consultancy_1755075726843.jpg";

import UNDP_logo_svg from "@assets/UNDP_logo.svg.png";

// --- Components ---
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Our Solutions", href: "#solutions" },
    { label: "Our Services", href: "#services" },
    { label: "Our Partners", href: "#partners" },
    { label: "Our Clients", href: "#clients" },
    { label: "Our Key Milestones", href: "#milestones" },
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
        <div className="max-w-4xl mx-auto text-center pt-[50px] pb-[25px]">
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
              <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-white/90">Your Trusted Partner for</span>
              <span className="block mb-2 text-white drop-shadow-lg">Global Innovation</span>
              
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/75 max-w-3xl mx-auto mt-6 leading-relaxed px-4">
              With 16+ years of excellence across demining, agriculture, technology, and automotive sectors, 
              we deliver innovative solutions that drive sustainable progress in Laos and beyond.
            </p>
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
              href="#solutions"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
            >
              <span>Our Solutions</span>
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
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-0 bg-white relative overflow-hidden" id="about">
      <Container className="relative px-0 max-w-full">
        <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Left Side - Image and Blue Background */}
          <div className="relative bg-[#00227c] flex items-center justify-center order-2 lg:order-1">
            {/* Background Geometric Elements */}
            <div className="absolute inset-0 bg-[#00227c]">
              <img 
                src={internationalArbitrationImage} 
                alt="Global Business Network" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[#00227c]/60"></div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl"></div>
            

          </div>
          
          {/* Right Side - Content */}
          <div className="bg-slate-50 flex items-center order-1 lg:order-2">
            <div className="w-full p-8 lg:p-16 xl:p-20">
              {/* Header */}
              <div className="space-y-6 mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold uppercase tracking-wide">
                  OUR PROFILE
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-[#000000]">Welcome To</h3>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#00227c]">
                    ARC LAO
                  </h2>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 text-slate-700">
                <p className="text-lg leading-relaxed">
                  We are an international trading company with over <span className="font-semibold text-[#00227c]">16 years</span> of dedicated operation in Laos. Throughout our extensive history, we have established a strong presence across diverse business sectors, including demining equipment, information technology, automotive, hospitality, energy, and farming equipment. Our commitment to quality and excellence has enabled us to build lasting relationships with clients and partners worldwide.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Driven by innovation and a customer-centric approach, we strive to deliver reliable solutions that meet the evolving needs of our clients in various industries.
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-[#00227c] mb-1">16+</div>
                  <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-[#00227c] mb-1">50+</div>
                  <div className="text-sm text-slate-600 font-medium">Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-[#00227c] mb-1">5+</div>
                  <div className="text-sm text-slate-600 font-medium">Industries</div>
                </div>
              </div>
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
      image: DeminingEquipmentsImage,
      gradient: "from-red-500/10 to-orange-500/10"
    },
    {
      title: "Agriculture Machinery",
      description: "Country distributor for BCS-Italy and Mahindra & Mahindra, specializing in agricultural machinery.",
      image: MahindraTractorsImage,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Information Technology",
      description: "Expertise in DevOps, cloud services, AI, and machine learning.",
      image: ProjectConsultancyImage,
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Automotive",
      description: "Country distributor for TVS Motors",
      image: MotorbikesImage,
      gradient: "from-purple-500/10 to-violet-500/10"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00227c]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            We Provide The <span className="text-[#00227c]">Best Solution</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across multiple domains to drive innovation and excellence
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div key={solution.title} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-[#00227c]">{index + 1}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00227c] transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {solution.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-2 text-[#00227c] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
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
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Proven Track Record of Excellence",
      description: "Over 16 years of delivering innovative solutions and exceeding client expectations.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Reliable and Consistent",
      description: "Consistently delivering on promises with a focus on transparency and integrity.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="why-choose">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-indigo-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00227c]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <Container className="relative px-4">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
              Why Choose Us
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
              Why Choose <span className="text-[#00227c]">ARC Lao</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              At ARC Lao, we are dedicated to providing quality products and services with a customer-centric approach.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="group relative">
                  <div className="flex gap-6 items-start">
                    {/* Modern Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                          <div className={`w-6 h-6 bg-gradient-to-br ${reason.gradient} rounded-lg flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      {index < reasons.length - 1 && (
                        <div className="absolute top-12 left-1/2 w-px h-6 bg-gradient-to-b from-slate-200 to-transparent transform -translate-x-1/2"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00227c] transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            

          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200/50 shadow-2xl shadow-slate-900/10 bg-white">
                <img 
                  src={Future_of_Technology} 
                  alt="Why choose ARC LAO" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00227c]/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00227c] mb-1">16+</div>
                  <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600 font-medium">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function KeyMilestones() {
  const milestones = [
    {
      number: "50+",
      label: "Active Work Force",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      number: "20+",
      sublabel: "Million",
      label: "Net Worth",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      number: "20+",
      label: "Years of work experience",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      number: "08",
      label: "Global Partnerships",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#00227c] relative overflow-hidden" id="milestones">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00227c] via-[#001a63] to-[#00227c]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl"></div>
      
      <Container className="relative px-4">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold uppercase tracking-wide mb-6 backdrop-blur-sm">
              Our Achievements
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Key <span className="text-amber-400">Milestones</span>
            </h2>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Over the span of more than two decades, ARC Lao has attained substantial achievements in the core business domains in which it operates.
            </p>
          </div>
          
          {/* Right Side - Milestones */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  {/* Number Box */}
                  <div className="flex-shrink-0 w-32 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <div className="text-3xl font-bold text-[#00227c]">
                      {milestone.number}
                    </div>
                    {milestone.sublabel && (
                      <div className="text-sm font-semibold text-[#00227c] -mt-1">
                        {milestone.sublabel}
                      </div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {milestone.label}
                    </h3>
                  </div>
                </div>
              ))}
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
      image: DeminingEquipmentsImage,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      title: "Information Technology", 
      subtitle: "Expertise in Development Ops, Cloud services, AI & Machine learning",
      description: "Innovating the landscape with data & tech oriented humanistic solutions!",
      image: ITImage,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Agriculture Machinery - BCS Two Wheel Tractors",
      subtitle: "BCS Two Wheel Tractors",
      description: "BCS is an Italian-based business group with over 40 years of expertise in two-wheel tractors. They offer a wide range of reversible and multifunctional two-wheel tractors suitable for professional soil preparation, greens maintenance, and snow removal.",
      image: BCSTwoWheelTractorsImage,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Agriculture Machinery - Mahindra Tractors", 
      subtitle: "Mahindra Tractors",
      description: "Mahindra Tractors, part of Mahindra & Mahindra, is an Indian agricultural machinery manufacturer. It became the world's top-selling tractor brand in 2010, mainly serving India, with growing markets in North America and Australia.",
      image: MahindraTractorsImage,
      gradient: "from-amber-500 to-yellow-600",
      bgGradient: "from-amber-50 to-yellow-50"
    },
    {
      title: "Motorbikes - TVS Motors",
      subtitle: "TVS Motors",
      description: "TVS Motor Company, headquartered in Chennai, India, is a major multinational motorcycle manufacturer, ranking third in India by revenue, with annual sales of three million units.",
      image: MotorbikesImage,
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      title: "Project Consultancy",
      subtitle: "Comprehensive Business Solutions",
      description: "We provide project consultancy focuses on aligning projects with overall business goals and long-term strategies which involves Technical Consulting, Management Consulting, Financial Consulting, Environmental and Sustainability Consulting & Risk Management",
      image: ProjectConsultancyImage,
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white to-indigo-50/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00227c]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/3 to-transparent rounded-full blur-3xl"></div>
      
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
            Detailed Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-[#00227c]">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries with proven expertise and reliable partnerships
          </p>
        </div>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div className={`grid gap-12 lg:gap-16 lg:grid-cols-2 items-center ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                  <div className="space-y-6">
                    {/* Service Number & Category */}
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                          <span className={`text-lg font-bold bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${service.bgGradient} border border-slate-200/50 rounded-full`}>
                        <span className={`text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                          {service.title.split(' ')[0]} Service
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                        {service.title}
                      </h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="pt-4">
                      <button className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                  <div className="relative group/image">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-10 transition-opacity duration-300 group-hover/image:opacity-20`}></div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/image:translate-y-0">
                      <div className={`w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full`}></div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover/image:translate-y-0">
                      <div className={`w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      category: "Demining Equipment",
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      established: "1965",
      logo: vallonLogo
    },
    {
      name: "Jarvis Consulting",
      tagline: "IT Services",
      description: "Development Ops, Cloud services, AI & Machine learning. Innovating the landscape with data & tech oriented humanistic solutions!",
      website: "www.jarvis.consulting",
      category: "Information Technology",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      established: "2020",
      logo: null // No logo provided for this partner
    },
    {
      name: "TVS Motor Company",
      tagline: "Transforming quality of life through mobility solutions",
      description: "TVS Motor Company - One of the largest 2-wheeler companies in the world.",
      website: "www.tvsmotor.com",
      category: "Motorbikes",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      established: "1978",
      logo: tvsMotorLogo
    },
    {
      name: "BCS Two Wheel Tractors",
      tagline: "Agriculture Machinery Excellence",
      description: "A complete range of reversible and multifunctional two-wheel tractors for professionally preparing the soil, greens maintenance and snow removal.",
      website: "www.bcsagri.com/en",
      category: "Agriculture Machinery",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      established: "1943",
      logo: bcsGroupLogo
    },
    {
      name: "Mahindra & Mahindra",
      tagline: "Agriculture Machines & Equipments", 
      description: "Mahindra Tractors offers a wide range of tractor models in India, with power options ranging from 15 HP to 74 HP. All Mahindra Tractors are designed to perform various agricultural tasks, catering to the diverse needs of farmers and landowners",
      website: "www.mahindratractor.com",
      category: "Agriculture Machinery",
      gradient: "from-amber-500 to-yellow-600",
      bgGradient: "from-amber-50 to-yellow-50",
      established: "1945",
      logo: mahindraLogo
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="partners">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00227c]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
            Strategic Partnerships
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-[#00227c]">Partners</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building strong relationships with global industry leaders to deliver exceptional solutions and services
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={partner.name} className="group relative h-full">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100/50 h-full flex flex-col">
                {/* Header with Category and Year */}
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 border border-slate-200 rounded-full bg-[#00227c]">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#ffffff]">
                      {partner.category}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Est. {partner.established}
                  </div>
                </div>
                
                {/* Company Logo */}
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-xl bg-white border border-slate-200 mx-auto flex items-center justify-center shadow-sm p-2 group-hover:shadow-md transition-shadow duration-300">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="w-full h-full object-contain transition-all duration-300"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
                        <span className="text-slate-400 text-lg font-bold">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00227c] transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#00227c]">
                    {partner.tagline}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {partner.description}
                  </p>
                </div>
                
                {/* Website Link */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <a 
                    href={`https://${partner.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#00227c] hover:text-[#001a63] hover:gap-3 transition-all duration-300"
                  >
                    <span>Visit Website</span>
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                

              </div>
              
              {/* Partner Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#00227c] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">{(index + 1).toString().padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
        
        
      </Container>
    </section>
  );
}

function Clients() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="clients">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white to-indigo-50/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00227c]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/3 to-transparent rounded-full blur-3xl"></div>
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
            Our Clients
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-[#00227c]">Clients</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by leading organizations worldwide to deliver exceptional results across multiple sectors
          </p>
        </div>
        
        {/* Client Logos Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Main Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center mb-12">
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={unLogo} alt="United Nations" className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={uxoLaoLogo} alt="UXO LAO" className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={adbLogo} alt="Asian Development Bank" className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={worldBankLogo} alt="The World Bank" className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={tetraTechLogo} alt="Tetra Tech" className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300" />
            </div>
          </div>
          
          {/* Additional Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-center justify-items-center">
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={magLogo} alt="Mines Advisory Group" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={norwegianPeoplesAidLogo} alt="Norwegian People's Aid" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={saveTheChildrenLogo} alt="Save the Children" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={seponLogo} alt="Chifeng Gold - Sepon" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={panAustLogo} alt="PanAust" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300" />
            </div>
            <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={UNDP_logo_svg} alt="UNDP" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300" />
            </div>
          </div>
        </div>
        
        
      </Container>
    </section>
  );
}



function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: "#001a63" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a63] via-[#001a63] to-[#001a63]"></div>
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
                  className="h-12 w-auto mb-4 brightness-0 invert"
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
                <div className="text-3xl font-bold mb-2 text-[#fafbff]">16+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-[#ffffff]">50+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-[#ffffff]">100+</div>
                <div className="text-slate-400 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-[#ffffff]">5+</div>
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
      <DetailedServices />
      <Partners />
      <Clients />
      <WhyChoose />
      <KeyMilestones />
      <Footer />
    </main>
  );
}