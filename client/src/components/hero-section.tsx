export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-arc-light-gray flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-arc-gray text-sm mb-4">ARC Lao combined efforts</p>
            <h1 className="text-5xl font-bold text-arc-dark mb-8 leading-tight">
              Me To We<br />
              With ARC Lao combined efforts On
            </h1>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <i className="fas fa-microchip text-arc-blue text-xl mb-2"></i>
                <h3 className="font-medium text-arc-dark mb-1">Technological Innovation</h3>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <i className="fas fa-graduation-cap text-arc-blue text-xl mb-2"></i>
                <h3 className="font-medium text-arc-dark mb-1">Awareness & Education</h3>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <i className="fas fa-leaf text-arc-blue text-xl mb-2"></i>
                <h3 className="font-medium text-arc-dark mb-1">Conscious Use Of Natural Resources</h3>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <i className="fas fa-seedling text-arc-blue text-xl mb-2"></i>
                <h3 className="font-medium text-arc-dark mb-1">Agriculture</h3>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
                  alt="Technology infrastructure"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <i className="fas fa-lightbulb text-arc-blue text-2xl mb-2"></i>
                  <p className="text-sm text-arc-gray">Innovation</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
                  alt="Team collaboration"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
