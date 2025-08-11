export default function ExpertiseSection() {
  const sectors = [
    {
      title: "EV Infrastructure",
      description: "Lithium Ion Battery, Charging Stations, EV Testing Equipments.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Electric vehicle charging station"
    },
    {
      title: "Defence",
      description: "Demining Equipments, Metal Detectors, Body Armor, EOD/IED Equipments.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Defense and security equipment"
    },
    {
      title: "Information Technology",
      description: "Internet Of Thing, Energy Software, Software Development & Testing.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Information technology server infrastructure"
    },
    {
      title: "Energy",
      description: "Hydrogen Fuel Cell, Energy From Waste, Solar Energy.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Renewable energy solar panels"
    },
    {
      title: "Automotive",
      description: "Electric & Non-electric Motorbikes, Agricultural & Construction Machines.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Automotive manufacturing and machinery"
    },
    {
      title: "Infrastructure",
      description: "Feasibility & Consultancy, Roads & Bridges, Buildings & Factories.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Construction and infrastructure development"
    }
  ];

  return (
    <section id="services" className="py-20 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arc-blue mb-6">Sector Of Expertise</h2>
          <div className="w-24 h-1 bg-arc-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-lift">
              <img 
                src={sector.image} 
                alt={sector.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-arc-blue mb-3">{sector.title}</h3>
                <p className="text-arc-gray mb-4">{sector.description}</p>
                <button className="text-arc-blue hover:text-arc-light-blue font-medium transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
