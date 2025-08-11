export default function ProjectExecutionSection() {
  return (
    <section id="projects" className="py-24 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">
            Transform Your Organization Today
          </h2>
          <p className="text-lg text-arc-gray max-w-3xl mx-auto mb-12">
            Partner with us to unlock your team's full potential and drive sustainable business growth
            through our comprehensive training and consulting solutions.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-arc-blue text-white px-8 py-4 rounded hover:opacity-90 transition-opacity">
              Get Started Today
            </button>
            <button className="border border-arc-blue text-arc-blue px-8 py-4 rounded hover:bg-arc-blue hover:text-white transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-arc-blue mb-2">10+</div>
            <p className="text-arc-gray">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-arc-blue mb-2">5000+</div>
            <p className="text-arc-gray">Professionals Trained</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-arc-blue mb-2">95%</div>
            <p className="text-arc-gray">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
