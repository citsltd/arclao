export default function SuccessSection() {
  const successFactors = [
    {
      icon: "fas fa-gem",
      text: "Boutique-style service with market presence and resources of a major global firm.",
      color: "bg-arc-blue"
    },
    {
      icon: "fas fa-users",
      text: "Extensive knowledge of the leadership talent pool across the region.",
      color: "bg-arc-light-blue"
    },
    {
      icon: "fas fa-rocket",
      text: "Pro-active approach.",
      color: "bg-arc-accent"
    },
    {
      icon: "fas fa-handshake",
      text: "Strong Coordination with stake holders for future opportunities.",
      color: "bg-green-500"
    },
    {
      icon: "fas fa-heart",
      text: "Strong approach for building and maintaining client relationship.",
      color: "bg-purple-500"
    },
    {
      icon: "fas fa-search",
      text: "Customized research for each assignment.",
      color: "bg-red-500"
    },
    {
      icon: "fas fa-cogs",
      text: "Tailored Solutions for client requirements.",
      color: "bg-yellow-500"
    },
    {
      icon: "fas fa-star",
      text: "Utmost focus on quality deliverables.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arc-blue mb-6">How We Create SUCCESS?</h2>
          <div className="w-24 h-1 bg-arc-accent mx-auto mb-8"></div>
          <p className="text-xl text-arc-gray max-w-3xl mx-auto">
            To help achieving sustainable and inclusive solutions through innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successFactors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow hover-lift">
              <div className={`w-12 h-12 ${factor.color} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${factor.icon} text-white`}></i>
              </div>
              <p className="text-arc-gray">{factor.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
