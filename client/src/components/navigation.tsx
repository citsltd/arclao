import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm border-b border-gray-100' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-arc-blue rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-medium text-lg text-arc-dark">ARC Lao</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-arc-gray hover:text-arc-dark transition-colors text-sm">
              Solution
            </button>
            <button onClick={() => scrollToSection('about')} className="text-arc-gray hover:text-arc-dark transition-colors text-sm">
              Courses
            </button>
            <button onClick={() => scrollToSection('services')} className="text-arc-gray hover:text-arc-dark transition-colors text-sm">
              Consultant
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-arc-gray hover:text-arc-dark transition-colors text-sm">
              Resources
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-arc-gray hover:text-arc-dark transition-colors text-sm">
              Events
            </button>
            <button onClick={() => scrollToSection('about')} className="text-arc-gray hover:text-arc-dark transition-colors text-sm">
              About us
            </button>
            <button className="bg-arc-blue text-white px-5 py-2.5 rounded text-sm hover:opacity-90 transition-opacity">
              Log in
            </button>
            <button className="border border-arc-blue text-arc-blue px-5 py-2.5 rounded text-sm hover:bg-arc-blue hover:text-white transition-colors">
              Register
            </button>
          </div>

          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden text-arc-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-dark text-sm">
              Solution
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-dark text-sm">
              Courses
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-dark text-sm">
              Consultant
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-dark text-sm">
              Resources
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-arc-gray hover:text-arc-dark text-sm">
              Events
            </button>
            <button className="block w-full text-left px-3 py-2 bg-arc-blue text-white rounded text-sm mt-4">
              Log in
            </button>
            <button className="block w-full text-left px-3 py-2 border border-arc-blue text-arc-blue rounded text-sm">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
