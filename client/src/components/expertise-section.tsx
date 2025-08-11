export default function ExpertiseSection() {
  const programs = [
    {
      icon: "fas fa-user-tie",
      title: "Sales Training",
      available: true
    },
    {
      icon: "fas fa-users",
      title: "Private Training On-Site",
      available: true
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Leadership Training",
      available: true
    },
    {
      icon: "fas fa-chart-line",
      title: "Customer Service Training",
      available: true
    },
    {
      icon: "fas fa-building",
      title: "Corporate Training",
      available: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-arc-dark mb-8">
              Professional Development<br />
              Programs
            </h2>
            <p className="text-arc-gray mb-8">
              Our comprehensive training programs are designed to elevate your workforce and optimize business performance.
            </p>
            
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <i className={`${program.icon} text-arc-gray text-lg`}></i>
                    <span className="text-arc-dark font-medium">{program.title}</span>
                  </div>
                  <i className="fas fa-circle text-green-500 text-xs"></i>
                </div>
              ))}
            </div>

            <button className="mt-8 text-arc-blue font-medium flex items-center hover:opacity-80 transition-opacity">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>

          <div className="bg-arc-light-gray rounded-lg p-12">
            <h3 className="text-2xl font-bold text-arc-dark mb-8">Sales Training</h3>
            <p className="text-arc-gray mb-6">
              Our sales training program empowers your sales team with proven techniques,
              strategies, and skills to excel in the competitive market. Through interactive
              workshops and real-world scenarios, participants learn to build meaningful
              client relationships, overcome objections, and consistently exceed targets.
            </p>
            <p className="text-arc-gray mb-8">
              Our expert training methodology means confidence, strategic thinking and a
              customer-centric approach, enabling your sales team to drive revenue and
              contribute to sustainable business growth.
            </p>
            <div className="flex items-center space-x-6">
              <button className="bg-arc-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity">
                Learn more
              </button>
              <button className="text-arc-blue font-medium hover:opacity-80 transition-opacity">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
