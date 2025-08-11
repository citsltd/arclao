export default function AboutSection() {
  const pillars = [
    {
      title: "PRINCIPLES",
      description: "Integrity, honesty, and ethics supported by strong leadership and uncompromising business standards.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "PERSEVERANCE", 
      description: "We offer comprehensive skill, competence, and experience which may lead to growth, profitability, and mutual success for everyone involved.",
      icon: "fas fa-mountain"
    },
    {
      title: "PERMANENCE",
      description: "More than two decades of tenure, stability and a client-centric approach under the core management.",
      icon: "fas fa-anchor"
    },
    {
      title: "PARTNERSHIPS",
      description: "Meaningful relationships among advisors, investors, & RMR leadership, collectively sharing responsibilities to achieve goals.",
      icon: "fas fa-handshake"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">About Company</h2>
          <p className="text-lg text-arc-gray max-w-4xl mx-auto leading-relaxed">
            ARC Lao Sole Company Ltd, a company which is founded upon strong pillars of Principals, Perseverance, Permanence and Partnership. ARC Lao strive to work for excellence. ARC Lao believes that combining people, technology and process is the way forward. ARC Lao empower sustainable progress for our clients and partners, the wider community and ourselves. It is our unique approach as business technologists that makes this possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-arc-light-gray rounded-lg p-8">
              <div className="w-12 h-12 bg-arc-blue rounded-lg flex items-center justify-center mb-6">
                <i className={`${pillar.icon} text-white text-lg`}></i>
              </div>
              <h3 className="text-lg font-bold text-arc-dark mb-4">{pillar.title}</h3>
              <p className="text-arc-gray text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
