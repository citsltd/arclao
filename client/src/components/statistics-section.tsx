export default function StatisticsSection() {
  return (
    <section className="py-24 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-arc-dark mb-4">
              Our Approach to Leadership<br />
              Development
            </h2>
            <p className="text-sm text-arc-gray uppercase tracking-wide mb-8">
              OUR SERVICES HELPED THEM SECURE THE INVESTMENT OF A POSITIVE AT LEAST ONE CASE
            </p>
            
            <p className="text-arc-gray mb-6">
              Our unique approach to leadership development combines powerful content
              based on decades of research and development, expert facilitation, and
              online reinforcement tools to ensure new behaviors are applied on the job.
            </p>
            
            <p className="text-arc-gray mb-8">
              Our services help clients develop their leaders and teams to achieve
              exceptional results. We work with organizations of all sizes and industries.
            </p>

            <button className="text-arc-blue font-medium flex items-center hover:opacity-80 transition-opacity">
              See more <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-arc-dark mb-4">
              Leadership development expands a<br />
              leader's impact.
            </h2>
            <p className="text-sm text-arc-gray uppercase tracking-wide mb-8">
              WE FOUND THAT MORE THAN SEVERAL SUCCESSFUL PROJECTS
            </p>
            
            <p className="text-arc-gray mb-6">
              As leaders adopt and internalize principles of individual effectiveness, they:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-arc-blue mr-3">•</span>
                <span className="text-arc-gray">Build their character and competence</span>
              </li>
              <li className="flex items-start">
                <span className="text-arc-blue mr-3">•</span>
                <span className="text-arc-gray">See their purpose and connect it with two business goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-arc-blue mr-3">•</span>
                <span className="text-arc-gray">Develop trust and respect in every relationship</span>
              </li>
              <li className="flex items-start">
                <span className="text-arc-blue mr-3">•</span>
                <span className="text-arc-gray">Change team dynamics resulting in high levels of synergism and creativity</span>
              </li>
            </ul>

            <button className="text-arc-blue font-medium flex items-center hover:opacity-80 transition-opacity">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
