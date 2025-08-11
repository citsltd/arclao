export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-arc-dark mb-8">Our Approach to Leadership Development</h3>
            <p className="text-arc-gray mb-4">
              FranCoY is the world's most trusted provider of leadership
              development solutions that unleash the full potential of leaders and their
              teams.
            </p>
            <p className="text-arc-gray mb-8">
              Our unique approach to leadership development combines powerful
              content based on decades of research and development, expert
              facilitation, and online reinforcement tools to ensure new behaviors
              are applied on the job.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-arc-blue mr-3 mt-1"></i>
                <span className="text-arc-gray">Build their character and competence</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-arc-blue mr-3 mt-1"></i>
                <span className="text-arc-gray">See their purpose and connect it with key business goals</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-arc-dark mb-8">Leadership development expands a leader's impact.</h3>
            <p className="text-arc-gray mb-4">
              As leaders adopt and internalize principles of individual
              effectiveness, they:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <i className="fas fa-check text-arc-blue mr-3 mt-1"></i>
                <span className="text-arc-gray">Build their character and competence</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-arc-blue mr-3 mt-1"></i>
                <span className="text-arc-gray">See their purpose and connect it with key business goals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
