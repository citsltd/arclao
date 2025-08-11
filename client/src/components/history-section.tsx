export default function HistorySection() {
  const workflowSteps = [
    {
      title: "Participants",
      subtitle: "Sales & Business Development",
      description: "Our Sales & Business Development training programs are designed for individuals and teams that want to enhance their sales capabilities, strengthen client relationships, and drive sustainable business growth. Perfect for sales professionals at all levels.",
      icon: "fas fa-users"
    },
    {
      title: "Participants",
      subtitle: "Leadership & Sales Management",
      description: "Our Leadership & Sales Management Programs are designed to transform managers into inspirational leaders who can drive sales performance, build high-performing teams, and achieve exceptional results. Ideal for current and aspiring sales leaders looking to elevate their leadership capabilities.",
      icon: "fas fa-user-tie"
    },
    {
      title: "Participants",
      subtitle: "Compliance and Regulatory Training",
      description: "Our Compliance and Regulatory Training ensures your organization meets industry standards and legal requirements. We provide comprehensive training on relevant regulations, best practices, and ethical standards, helping you maintain compliance while fostering a culture of integrity.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Participants",
      subtitle: "Change Management Workshop",
      description: "Our Change Management Workshops equip leaders and teams with the tools and strategies needed to navigate organizational transformation successfully. Learn how to lead change initiatives, overcome resistance, and create a culture that embraces continuous improvement and innovation.",
      icon: "fas fa-sync-alt"
    }
  ];

  return (
    <section className="py-24 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">
            Programs to Elevate Your Workforce
          </h2>
          <p className="text-lg text-arc-gray max-w-3xl mx-auto">
            Our comprehensive training programs are tailored to address the unique challenges and opportunities facing your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-arc-light-gray rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${step.icon} text-arc-blue text-lg`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-arc-gray mb-2">{step.title}</p>
                  <h3 className="text-xl font-bold text-arc-dark mb-4">{step.subtitle}</h3>
                  <p className="text-arc-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <button className="mt-4 text-arc-blue font-medium text-sm flex items-center hover:opacity-80 transition-opacity">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
