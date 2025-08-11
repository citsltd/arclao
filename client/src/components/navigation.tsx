import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-arc-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold text-xl text-arc-blue">ARC Lao</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-arc-gray hover:text-arc-blue transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-arc-gray hover:text-arc-blue transition-colors">
              ABOUT US
            </button>
            <button onClick={() => scrollToSection('services')} className="text-arc-gray hover:text-arc-blue transition-colors">
              SERVICES
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-arc-gray hover:text-arc-blue transition-colors">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-arc-gray hover:text-arc-blue transition-colors">
              CONTACT US
            </button>
            <a href="tel:+8562076198200" className="bg-arc-blue text-white px-4 py-2 rounded-lg hover:bg-arc-light-blue transition-colors">
              <i className="fas fa-phone mr-2"></i>+856 20 7619 8200
            </a>
          </div>

          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden text-arc-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-blue">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-blue">
              ABOUT US
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-blue">
              SERVICES
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-blue">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-blue">
              CONTACT US
            </button>
            <a href="tel:+8562076198200" className="block px-3 py-2 bg-arc-blue text-white rounded-lg mx-3 text-center">
              <i className="fas fa-phone mr-2"></i>+856 20 7619 8200
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
