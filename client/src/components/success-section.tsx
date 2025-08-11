export default function SuccessSection() {
  const services = [
    { icon: "fas fa-bullseye", title: "Quotient" },
    { icon: "fas fa-chart-pie", title: "Sisyphus" },
    { icon: "fas fa-clock", title: "Hourglass" },
    { icon: "fas fa-box", title: "Capsule" },
    { icon: "fas fa-calendar-check", title: "Schedule" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-16 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-3 text-arc-gray">
              <i className={`${service.icon} text-lg`}></i>
              <span className="font-medium">{service.title}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">
            Comprehensive Training and Consulting<br />
            Solutions Tailored to Your Needs
          </h2>
          <p className="text-lg text-arc-gray max-w-3xl mx-auto">
            With a focus on individuals and teams, we are committed to delivering customized strategies, empowering your
            workforce, and guiding your business to sustainable growth and excellence.
          </p>
        </div>

        <div className="bg-arc-light-gray rounded-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-arc-dark mb-8">
                Our Approach to Leadership<br />
                Development
              </h3>
              <p className="text-arc-gray mb-6">
                FrankcCroxy is the world's most trusted provider of leadership
                development solutions that unleash the full potential of leaders and their
                teams.
              </p>
              <p className="text-arc-gray mb-8">
                Our unique approach to leadership development combines powerful
                content based on decades of research and development, expert
                facilitation, and online reinforcement tools to ensure new behaviors
                are applied on the job.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Team collaboration"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
