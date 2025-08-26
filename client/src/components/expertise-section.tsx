export default function ExpertiseSection() {
  const sectors = [
    {
      title: "EV Infrastructure",
      description: "Lithium Ion Battery, Charging Stations, EV Testing Equipments.",
      icon: "fas fa-car-battery"
    },
    {
      title: "Defence",
      description: "Demining Equipments, Metal Detectors, Body Armor, EOD/IED Equipments.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Information Technology",
      description: "Internet Of Thing, Energy Software, Software Development & Testing.",
      icon: "fas fa-laptop-code"
    },
    {
      title: "Energy",
      description: "Hydrogen Fuel Cell, Energy From Waste, Solar Energy.",
      icon: "fas fa-solar-panel"
    },
    {
      title: "Automotive",
      description: "Electric & Non-electric Motorbikes, Agricultural & Construction Machines.",
      icon: "fas fa-car"
    },
    {
      title: "Infrastructure",
      description: "Feasibility & Consultancy, Roads & Bridges, Buildings & Factories.",
      icon: "fas fa-building"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">SECTOR OF EXPERTISE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-arc-light-gray rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-arc-blue rounded-lg flex items-center justify-center mb-6">
                <i className={`${sector.icon} text-white text-lg`}></i>
              </div>
              <h3 className="text-xl font-bold text-arc-dark mb-4">{sector.title}</h3>
              <p className="text-arc-gray text-sm leading-relaxed mb-6 text-justify">{sector.description}</p>
              <button className="text-arc-blue font-medium text-sm flex items-center hover:opacity-80 transition-opacity">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
