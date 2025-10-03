import React, { useState, useEffect } from "react";

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
import arcLaoAboutImage from "@assets/arclao image (1)_1756105129208.jpg";

// Partner logos
import bcsGroupLogo from "@assets/BCS Two Wheel Tractors_1755074225201.png";
import vallonLogo from "@assets/Vallon_1755074225223.png";

// New Service Images
import LuyuanImage from "@assets/Two wheel tractor_1756265490994.png";
import BCSTwoWheelTractorsImage from "@assets/Agriculture Machinery - BCS Two Wheel Tractors_1755075726841.jpg";
import DeminingEquipmentsImage from "@assets/Demining Equipments_1755075726842.jpg";
import ProjectConsultancyImage from "@assets/Project Consultancy_1755075726843.jpg";

// Desktop Slider Images
import DesktopSlider2 from "@assets/second_1758960670441.png";
import DesktopSlider3 from "@assets/third_1758960670443.png";
import DesktopSlider4 from "@assets/fourth_1758960670440.png";
import DesktopSlider5 from "@assets/fifth_1758960670438.png";
import DesktopSlider6 from "@assets/sixth_1758960670442.png";

// Mobile Slider Images
import MobileSlider1 from "@assets/1_1758956696079.png";
import MobileSlider2 from "@assets/2_1758956696080.png";
import MobileSlider3 from "@assets/3_1758956696081.png";
import MobileSlider4 from "@assets/4_1758956696082.png";

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
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-md">
      
      <Container className="relative flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={arcLaoLogo} 
            alt="ARC LAO" 
            className="h-10 w-auto transition-all duration-300 group-hover:brightness-110"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="relative px-5 py-3 text-[15px] font-medium text-slate-700 hover:text-[#00227c] transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00227c] transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></div>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 rounded-lg bg-slate-50/0 group-hover:bg-slate-50/70 transition-all duration-300"></div>
                
                {/* Right separator */}
                {index < navItems.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-4 bg-slate-300/60"></div>
                )}
              </a>
            ))}
          </div>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <svg 
            viewBox="0 0 24 24" 
            className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-sm shadow-lg">
          <Container className="py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="flex items-center px-4 py-3 text-[15px] font-medium text-slate-700 hover:text-[#00227c] hover:bg-slate-50 rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const desktopSliderImages = [
    { src: DesktopSlider2, alt: "BCS 4 Season Solution" },
    { src: DesktopSlider3, alt: "Luyuan Electric Motorcycle" },
    { src: DesktopSlider4, alt: "Luyuan S90 Electric Scooter - Reaching Perfection" },
    { src: DesktopSlider5, alt: "Vallon Detection Technology" },
    { src: DesktopSlider6, alt: "Vallon Demining Operations - Searching with Excellence" }
  ];

  const mobileSliderImages = [
    { src: MobileSlider1, alt: "Luyuan Electric Scooter" },
    { src: MobileSlider2, alt: "Vallon Detection Equipment" },
    { src: MobileSlider3, alt: "Vallon Demining Operations" },
    { src: MobileSlider4, alt: "ARC Lao Key Milestones" }
  ];

  // Mobile gets mobile-specific images, desktop gets desktop images
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sliderImages = isMobile ? mobileSliderImages : desktopSliderImages;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/swipe functionality for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds (longer for mobile)

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="slider-full-width relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden w-screen max-w-none -mx-4 sm:mx-0 sm:w-full mt-[72px]">
      {/* Image Slider */}
      <div 
        className="absolute inset-0 w-full h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover object-center block"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on very small screens, visible on sm+ */}
      <button
        onClick={prevSlide}
        className="hidden xs:flex absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm border border-white/40 rounded-full items-center justify-center hover:bg-black/50 active:bg-black/60 transition-all duration-300 touch-manipulation"
        aria-label="Previous slide"
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden xs:flex absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm border border-white/40 rounded-full items-center justify-center hover:bg-black/50 active:bg-black/60 transition-all duration-300 touch-manipulation"
        aria-label="Next slide"
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70 active:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-0 bg-white relative overflow-hidden" id="about">
      <Container className="relative px-0 max-w-full">
        <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Image Container */}
            <div className="absolute inset-0">
              <img 
                src={arcLaoAboutImage} 
                alt="ARC Lao Business Partnership" 
                className="w-full h-full object-cover"
              />
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
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-[#000000]">WELCOME TO</h3>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#00227c]">
                    ARC LAO
                  </h2>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 text-slate-700">
                <p className="text-lg leading-relaxed text-justify">
                  We are an international trading company with over <span className="font-semibold text-[#00227c]">20+ years</span> of dedicated operation in Laos. Throughout our extensive history, we have established a strong presence across diverse business sectors, including demining equipment, information technology, automotive, hospitality, energy, and farming equipment. Our commitment to quality and excellence has enabled us to build lasting relationships with clients and partners worldwide.
                </p>
                
                <p className="text-lg leading-relaxed text-justify">
                  Driven by innovation and a customer-centric approach, we strive to deliver reliable solutions that meet the evolving needs of our clients in various industries.
                </p>
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
      description: "Country distributor for BCS-Italy, specializing in agricultural machinery and two-wheel tractors.",
      image: BCSTwoWheelTractorsImage,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Information Technology",
      description: "Expertise in DevOps, cloud services, AI, and machine learning.",
      image: ITImage,
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Electric Vehicles",
      description: "Country distributor for Luyuan electric motorcycles, specializing in professional electric motorcycles, electric bicycles, scooters, and mopeds.",
      image: LuyuanImage,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Project Consultancy",
      description: "Comprehensive business solutions including technical, management, financial, and environmental consulting",
      image: ProjectConsultancyImage,
      gradient: "from-teal-500/10 to-cyan-500/10"
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
            OUR SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            WE PROVIDE THE <span className="text-[#00227c]">BEST SOLUTION</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across multiple domains to drive innovation and excellence
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {solutions.map((solution, index) => (
            <div key={solution.title} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00227c] transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {solution.description}
                </p>
                

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
      description: "Over 20+ years of delivering innovative solutions and exceeding client expectations.",
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
              WHY CHOOSE US
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
              WHY CHOOSE <span className="text-[#00227c]">ARC LAO</span>
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
                  <div className="text-2xl font-bold text-[#00227c] mb-1">20+</div>
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
              KEY <span className="text-amber-400">MILESTONES</span>
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
      title: "Luyuan Electric Motorcycles",
      subtitle: "Luyuan Motorbikes",
      description: "Luyuan stands among the top manufacturers of electric motorcycles, specializing in professional electric motorcycles, electric bicycles, scooters, and mopeds. We strive to provide you with convenience and comfort.",
      image: LuyuanImage,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
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
            DETAILED SERVICES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            OUR <span className="text-[#00227c]">SERVICES</span>
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
                    {/* Service Category */}
                    <div className="flex items-center">
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
      name: "Luyuan",
      tagline: "Electric Vehicle Innovation",
      description: "Leading manufacturer of electric motorcycles and scooters, providing eco-friendly transportation solutions with advanced technology and reliable performance.",
      website: "www.luyuan.com",
      category: "Electric Vehicles",
      gradient: "from-emerald-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-cyan-50",
      established: "1997",
      logo: LuyuanImage
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden" id="partners">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00227c]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      <Container className="relative px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
            STRATEGIC PARTNERSHIPS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            OUR <span className="text-[#00227c]">PARTNERS</span>
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
            OUR CLIENTS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            OUR <span className="text-[#00227c]">CLIENTS</span>
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
          <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <p className="text-slate-400 text-sm leading-relaxed mt-4 text-justify">
                  ARC Lao Sole Company Ltd is committed to delivering innovative technology solutions across multiple sectors, empowering sustainable progress for our clients and communities.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-3">
                <a href="#about" className="block text-slate-400 hover:text-white transition-colors text-sm">About Us</a>
                <a href="#services" className="block text-slate-400 hover:text-white transition-colors text-sm">Our Sectors</a>
                <a href="/contact" className="block text-slate-400 hover:text-white transition-colors text-sm">Contact Us</a>
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
                  <a href="tel:+85620526299292" className="text-slate-400 hover:text-white transition-colors text-sm">
                    +856 20 5262 9292
                  </a>
                </div>
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