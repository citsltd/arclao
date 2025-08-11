export default function ProjectExecutionSection() {
  const executionPhases = [
    {
      title: "Engineering",
      items: [
        "Detailed engineering",
        "Concept development", 
        "Basic Engineering",
        "Financial Closeout"
      ]
    },
    {
      title: "Procurement", 
      items: [
        "Mobilization & Site Survey",
        "Material Handling",
        "Project Planning & Reporting",
        "Construction Management"
      ]
    },
    {
      title: "Quality Control",
      items: [
        "Quality Control",
        "Mechanical Completion",
        "Safety Management",
        "Construction"
      ]
    },
    {
      title: "Commissioning",
      items: [
        "Commissioning, Functional",
        "Tests & Start-up",
        "Pre-commissioning Checks",
        "Spares Handover & training"
      ]
    }
  ];

  const finalPhases = [
    {
      icon: "fas fa-clipboard-check",
      title: "Final Documentation",
      color: "bg-arc-blue"
    },
    {
      icon: "fas fa-handshake",
      title: "Plant Handover",
      color: "bg-green-500"
    },
    {
      icon: "fas fa-flag-checkered",
      title: "Project Closeout",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">Project Execution</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-arc-gray leading-relaxed">
              ARC Lao has consistently adhered to the "Prestige, Quality, Innovation, and Pragmatism" business philosophy, serving multiple sectors in the Southeast Asia region. The company has successfully completed over 30 turnkey projects, financed by public, private sectors, and development partners, resulting in a total investment exceeding $110 million.
            </p>
          </div>
        </div>

        <div className="bg-arc-light-gray rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-arc-blue mb-2">30+</div>
              <div className="text-arc-gray">Turnkey Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-arc-blue mb-2">$110M+</div>
              <div className="text-arc-gray">Total Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-arc-blue mb-2">100%</div>
              <div className="text-arc-gray">Quality Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-arc-blue mb-2">SEA</div>
              <div className="text-arc-gray">Regional Coverage</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionPhases.map((phase, index) => (
            <div key={index} className="bg-arc-light-gray rounded-lg p-6">
              <h3 className="text-lg font-bold text-arc-dark mb-4">{phase.title}</h3>
              <div className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-arc-gray text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {finalPhases.map((phase, index) => (
            <div key={index} className={`${phase.color} text-white rounded-lg p-6 text-center`}>
              <i className={`${phase.icon} text-3xl mb-4`}></i>
              <h4 className="text-lg font-semibold">{phase.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
