export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-arc-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-arc-blue font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-2xl">ARC LAO</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Leading the way in technological innovation, infrastructure development, and sustainable solutions across Southeast Asia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-arc-accent mt-1"></i>
                <span className="text-blue-200">BAN PHONETHAN, SAYSETHA, VIENTIANE, LAO PDR</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-arc-accent"></i>
                <a href="mailto:info@arclao.com" className="text-blue-200 hover:text-white transition-colors">info@arclao.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-arc-accent"></i>
                <a href="tel:+8562076198200" className="text-blue-200 hover:text-white transition-colors">+856 20 7619 8200</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-blue-200 hover:text-white transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-blue-200 hover:text-white transition-colors text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-blue-200 hover:text-white transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block text-blue-200 hover:text-white transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-blue-200 hover:text-white transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200">© 2019 ARC Lao. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
