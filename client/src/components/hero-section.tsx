export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow animate-fade-in-up">
              Me To We
              <span className="block text-2xl md:text-4xl font-normal mt-4 text-arc-accent">
                With ARC Lao combined efforts On
              </span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover-lift">
                <i className="fas fa-microchip text-3xl mb-4 text-arc-accent"></i>
                <h3 className="text-xl font-semibold mb-2">Technological Innovation</h3>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover-lift">
                <i className="fas fa-lightbulb text-3xl mb-4 text-arc-accent"></i>
                <h3 className="text-xl font-semibold mb-2">Awareness & Education</h3>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover-lift">
                <i className="fas fa-leaf text-3xl mb-4 text-arc-accent"></i>
                <h3 className="text-xl font-semibold mb-2">Conscious Use Of Natural Resources</h3>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover-lift">
                <i className="fas fa-seedling text-3xl mb-4 text-arc-accent"></i>
                <h3 className="text-xl font-semibold mb-2">Agriculture</h3>
              </div>
            </div>

            <div className="mt-12">
              <button 
                onClick={scrollToAbout}
                className="inline-block bg-white text-arc-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More <i className="fas fa-arrow-down ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
