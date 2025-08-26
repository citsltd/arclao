import { useState } from 'react';

// Import assets
import arcLaoLogo from '@assets/arclaoslogo_1754990674040.png';

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { label: "About Us", href: "/#about" },
    { label: "Our Solutions", href: "/#solutions" },
    { label: "Our Services", href: "/#services" },
    { label: "Our Partners", href: "/#partners" },
    { label: "Our Clients", href: "/#clients" },
    { label: "Our Key Milestones", href: "/#milestones" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-md">
      <Container className="relative flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
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
                <a href="/#about" className="block text-slate-400 hover:text-white transition-colors text-sm">About Us</a>
                <a href="/#services" className="block text-slate-400 hover:text-white transition-colors text-sm">Our Sectors</a>
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
        
        <div className="border-t border-slate-700/50 py-8">
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      {/* Main Content */}
      <main className="pt-24">
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white to-indigo-50/20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00227c]/3 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/3 to-transparent rounded-full blur-3xl"></div>
          
          <Container className="relative px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00227c]/10 text-[#00227c] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                GET IN TOUCH
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                CONTACT <span className="text-[#00227c]">US</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto text-justify">
                Ready to discuss your next project? Get in touch with our team of experts and discover how we can help drive your business forward.
              </p>
            </div>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#00227c] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                          <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
                        <p className="text-slate-600 text-justify">
                          Ban Phonexay District<br/>
                          Sysetha, Vientiane, Lao PDR
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#00227c] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Email Address</h3>
                        <a href="mailto:info@arclao.com" className="text-[#00227c] hover:underline">
                          info@arclao.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#00227c] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Phone Number</h3>
                        <a href="tel:+85620526299292" className="text-[#00227c] hover:underline">
                          +856 20 5262 9292
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00227c] focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00227c] focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00227c] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00227c] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00227c] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00227c] focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00227c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#001a63] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}