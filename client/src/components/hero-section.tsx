export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-arc-light-gray flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-arc-gray text-sm mb-4">Employee training and consultant</p>
            <h1 className="text-5xl font-bold text-arc-dark mb-8 leading-tight">
              Empowering Excellence<br />
              through Training and<br />
              Consulting
            </h1>
            <p className="text-arc-gray text-lg mb-8 leading-relaxed">
              Our expert training and consulting solutions pave the way for your organization's success
              by driving continuous improvement, innovation and exceptional performance.
            </p>
            <button className="bg-arc-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity">
              Start the transformation <i className="fas fa-arrow-right ml-2"></i>
            </button>
            
            <div className="flex items-center space-x-12 mt-12">
              <div className="flex items-center space-x-2">
                <i className="fas fa-user-tie text-arc-gray"></i>
                <span className="text-sm text-arc-gray">Individuals</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-graduation-cap text-arc-gray"></i>
                <span className="text-sm text-arc-gray">Scaling Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-building text-arc-gray"></i>
                <span className="text-sm text-arc-gray">Enterprise</span>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
                  alt="Professional woman working"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <i className="fas fa-lightbulb text-arc-blue text-2xl mb-2"></i>
                  <p className="text-sm text-arc-gray">Contact us</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
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
