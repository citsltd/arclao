import React from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe, Star, Users, Award, Target } from 'lucide-react';

// Import assets
import arcLaoLogo from '@assets/arclaoslogo_1754990674040.png';

// Sample images for services
import deMiningImg from '@assets/Defense_1754906822327.jpg';
import agriImg from '@assets/Electric & Non-electric Motorbikes_1754906822323.jpg';
import itImg from '@assets/Information Technology_1754906822325.jpg';
import autoImg from '@assets/Electric & Non-electric Motorbikes_1754906822323.jpg';

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const siteData = {
  services: [
    {
      title: "Demining Equipments",
      description: "Country distributor for De-Mining Equipments from Germany. We are a national distributor for all types of demining equipment used in humanitarian efforts.",
      details: "Metal detectors and a range of other equipment for demining",
      image: deMiningImg,
      icon: "🛡️"
    },
    {
      title: "Information Technology", 
      description: "Expertise in Development Ops, Cloud services, AI & Machine learning.",
      details: "Expertise in DevOps, cloud services, AI, and machine learning.",
      image: itImg,
      icon: "💻"
    },
    {
      title: "Agriculture Machinery",
      description: "Country distributor for BCS-Italy and Mahindra & Mahindra, specializing in agricultural machinery.",
      details: "BCS Two Wheel Tractors and Mahindra Tractors",
      image: agriImg,
      icon: "🚜"
    },
    {
      title: "Automotive",
      description: "Country distributor for TVS Motors. TVS Motor Company, headquartered in Chennai, India, is a major multinational motorcycle manufacturer.",
      details: "Country distributor for TVS Motors",
      image: autoImg,
      icon: "🏍️"
    }
  ],
  
  whyChooseUs: [
    {
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs, ensuring tailored services that drive success."
    },
    {
      title: "Proven Track Record of Excellence", 
      description: "Over 16 years of delivering innovative solutions and exceeding client expectations."
    },
    {
      title: "Reliable and Consistent",
      description: "Consistently delivering on promises with a focus on transparency and integrity."
    }
  ],

  partners: [
    { name: "Vallon", tagline: "Searching with Excellence", subtitle: "Pioneering Spirit since 1965", website: "www.vallon.de" },
    { name: "Jarvis Consulting", tagline: "IT Services", subtitle: "Development Ops, Cloud services, AI & Machine learning", website: "www.jarvis.consulting" },
    { name: "TVS Motors", tagline: "TVS Motorbikes", subtitle: "Transforming quality of life through mobility solutions", website: "www.tvsmotor.com" },
    { name: "BCS", tagline: "BCS Two Wheel Tractors", subtitle: "Complete range of reversible and multifunctional two-wheel tractors", website: "www.bcsagri.com/en" },
    { name: "Mahindra", tagline: "Mahindra & Mahindra", subtitle: "Agriculture Machines & Equipments", website: "www.mahindratractor.com" }
  ]
};

function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={arcLaoLogo} alt="ARC Lao" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-[#00227c] font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-[#00227c] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#001a5c] transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-[#00227c] font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#00227c] text-white px-6 py-2 rounded-lg font-medium text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#00227c] to-[#003399] text-white py-20 lg:py-32">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Website URL */}
          <p className="text-blue-200 mb-4 text-lg">www.arclao.com</p>
          
          {/* Main Logo/Title */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-wide">
            ARC LAO
          </h1>
          
          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 italic">
            "Dedicated to Delivering Excellence"
          </p>
          
          {/* Page indicator */}
          <div className="text-blue-200 text-sm">
            PAGE 01
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Page Header */}
          <div className="mb-12">
            <p className="text-[#00227c] text-lg mb-2">www.arclao.com</p>
            <p className="text-slate-600 italic mb-8">"Dedicated to Delivering Excellence"</p>
          </div>

          {/* Our Profile Badge */}
          <div className="inline-block bg-[#00227c] text-white px-6 py-2 rounded-lg font-bold text-lg mb-12 uppercase tracking-wider">
            OUR PROFILE
          </div>

          {/* Main Content */}
          <div className="text-left max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Welcome To<br />
              <span className="text-[#00227c]">ARC LAO</span>
            </h2>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                We are an international trading company with over 16 years of dedicated operation in Laos. Throughout our extensive history, we have established a strong presence across diverse business sectors, including demining equipment, information technology, automotive, hospitality, energy, and farming equipment. Our commitment to quality and excellence has enabled us to build lasting relationships with clients and partners worldwide.
              </p>
              
              <p>
                Driven by innovation and a customer-centric approach, we strive to deliver reliable solutions that meet the evolving needs of our clients in various industries.
              </p>
            </div>
          </div>

          {/* Page indicator */}
          <div className="text-slate-400 text-sm mt-16">
            PAGE 02
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              We Provide The<br />
              <span className="text-[#00227c]">Best Solution</span> in below domains
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-2">
            {siteData.services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00227c] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 font-medium mb-3">
                      {service.details}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Page indicator */}
          <div className="text-center text-slate-400 text-sm mt-16">
            PAGE 03
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                Why Choose<br />
                <span className="text-[#00227c]">ARC Lao</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                At ARC Lao, we are dedicated to providing quality products and services with a customer-centric approach.
              </p>
            </div>

            {/* Right side - Benefits */}
            <div className="space-y-8">
              {siteData.whyChooseUs.map((item, index) => (
                <div key={index} className="border-l-4 border-[#00227c] pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Page indicator */}
          <div className="text-center text-slate-400 text-sm mt-16">
            PAGE 04
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceDetails() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-[#00227c]">Services</span>
            </h2>
          </div>

          {/* Detailed Services Grid */}
          <div className="grid gap-12 lg:gap-16">
            {/* Row 1 */}
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00227c] mb-4">Demining Equipments</h3>
                <p className="text-lg font-semibold text-slate-800 mb-3">
                  Country Distributor for De-Mining Equipments from Germany
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We are a national distributor for all types of demining equipment used in humanitarian efforts.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00227c] mb-4">Information Technology</h3>
                <p className="text-slate-700 leading-relaxed">
                  Expertise in Development Ops, Cloud services, AI & Machine learning.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00227c] mb-4">Agriculture Machinery</h3>
                <p className="text-lg font-semibold text-slate-800 mb-3">BCS Two Wheel Tractors</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  BCS is an Italian-based business group with over 40 years of expertise in two-wheel tractors. They offer a wide range of reversible and multifunctional two-wheel tractors suitable for professional soil preparation, greens maintenance, and snow removal.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00227c] mb-4">Agriculture Machinery</h3>
                <p className="text-lg font-semibold text-slate-800 mb-3">Mahindra Tractors</p>
                <p className="text-slate-700 leading-relaxed">
                  Mahindra Tractors, part of Mahindra & Mahindra, is an Indian agricultural machinery manufacturer. It became the world's top-selling tractor brand in 2010, mainly serving India, with growing markets in North America and Australia.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00227c] mb-4">Motorbikes</h3>
                <p className="text-lg font-semibold text-slate-800 mb-3">TVS Motors</p>
                <p className="text-slate-700 leading-relaxed">
                  TVS Motor Company, headquartered in Chennai, India, is a major multinational motorcycle manufacturer, ranking third in India by revenue, with annual sales of three million units.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00227c] mb-4">Project Consultancy</h3>
                <p className="text-slate-700 leading-relaxed">
                  We provide project consultancy focuses on aligning projects with overall business goals and long-term strategies which involves Technical Consulting, Management Consulting, Financial Consulting, Environmental and Sustainability Consulting & Risk Management.
                </p>
              </div>
            </div>
          </div>

          {/* Page indicator */}
          <div className="text-center text-slate-400 text-sm mt-16">
            PAGE 05
          </div>
        </div>
      </Container>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Our Company<br />
              <span className="text-[#00227c]">Vision & Mission</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              To be a globally recognized leader committed to delivering excellence in all our endeavors, inspiring trust and setting the standard for quality and innovation.
            </p>
          </div>

          {/* Mission Points Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mt-16">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Become a leader recognized for excellence
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Inspire trust among customers, partners, and stakeholders
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Deliver outstanding products and services that meet the highest standards
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Prioritize customer satisfaction in every interaction
              </h3>
            </div>
          </div>

          {/* Page indicator */}
          <div className="text-slate-400 text-sm mt-16">
            PAGE 06
          </div>
        </div>
      </Container>
    </section>
  );
}

function Partners() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Partner Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteData.partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#00227c] mb-2">{partner.name}</h3>
                <p className="text-lg font-semibold text-slate-800 mb-3">{partner.tagline}</p>
                <p className="text-slate-700 mb-4 leading-relaxed">{partner.subtitle}</p>
                <p className="text-sm text-[#00227c] font-medium">{partner.website}</p>
              </div>
            ))}
          </div>

          {/* Page indicator */}
          <div className="text-center text-slate-400 text-sm mt-16">
            PAGE 07
          </div>
        </div>
      </Container>
    </section>
  );
}

function Clients() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Our <span className="text-[#00227c]">Clients</span>
          </h2>
          
          <div className="bg-slate-50 rounded-xl p-12">
            <h3 className="text-2xl font-bold text-[#00227c] mb-4">MINING COMPANIES</h3>
            <p className="text-lg text-slate-700">Studio Shodwe</p>
          </div>

          {/* Page indicator */}
          <div className="text-slate-400 text-sm mt-16">
            PAGE 08
          </div>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-16">
            Contact <span className="text-[#00227c]">Information</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Location */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Location :</h3>
              <p className="text-slate-700">
                Ban Phonexay District<br />
                Sysetha, Vientiane, Lao PDR
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Phone :</h3>
              <p className="text-slate-700">+856-20-5262 9292</p>
            </div>

            {/* Website */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Websites :</h3>
              <p className="text-slate-700">www.arclao.com</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#00227c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Email :</h3>
              <p className="text-slate-700">info@arclao.com</p>
            </div>
          </div>

          {/* Page indicator */}
          <div className="text-slate-400 text-sm mt-16">
            PAGE 09
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#00227c] text-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            THANK YOU
          </h2>
          <p className="text-blue-200 text-lg mb-4">www.arclao.com</p>
          <p className="text-blue-300 text-sm">END SLIDE</p>
        </div>
      </Container>
    </footer>
  );
}

export default function ArcLaoSite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ServiceDetails />
      <VisionMission />
      <Partners />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}