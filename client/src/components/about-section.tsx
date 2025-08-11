export default function AboutSection() {
  const pillars = [
    {
      icon: "fas fa-shield-alt",
      title: "PRINCIPLES",
      description: "Integrity, honesty, and ethics supported by strong leadership and uncompromising business standards.",
      color: "bg-arc-blue"
    },
    {
      icon: "fas fa-mountain",
      title: "PERSEVERANCE", 
      description: "We offer comprehensive skill, competence, and experience which may lead to growth, profitability, and mutual success for everyone involved.",
      color: "bg-arc-light-blue"
    },
    {
      icon: "fas fa-anchor",
      title: "PERMANENCE",
      description: "More than two decades of tenure, stability and a client-centric approach under the core management.",
      color: "bg-arc-accent"
    },
    {
      icon: "fas fa-handshake",
      title: "PARTNERSHIPS",
      description: "Meaningful relationships among advisors, investors, & RMR leadership, collectively sharing responsibilities to achieve goals.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arc-blue mb-6">About Company</h2>
          <div className="w-24 h-1 bg-arc-accent mx-auto mb-8"></div>
          <p className="text-lg text-arc-gray max-w-4xl mx-auto leading-relaxed">
            ARC Lao Sole Company Ltd, a company which is founded upon strong pillars of Principals, Perseverance, Permanence and Partnership. ARC Lao strive to work for excellence. ARC Lao believes that combining people, technology and process is the way forward. ARC Lao empower sustainable progress for our clients and partners, the wider community and ourselves. It is our unique approach as business technologists that makes this possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover-lift">
              <div className={`w-16 h-16 ${pillar.color} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`${pillar.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-arc-blue mb-4">{pillar.title}</h3>
              <p className="text-arc-gray">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
