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
      color: "bg-green-500"
    },
    {
      icon: "fas fa-rocket",
      text: "Pro-active approach.",
      color: "bg-purple-500"
    },
    {
      icon: "fas fa-handshake",
      text: "Strong Coordination with stake holders for future opportunities.",
      color: "bg-orange-500"
    },
    {
      icon: "fas fa-heart",
      text: "Strong approach for building and maintaining client relationship.",
      color: "bg-red-500"
    },
    {
      icon: "fas fa-search",
      text: "Customized research for each assignment.",
      color: "bg-indigo-500"
    },
    {
      icon: "fas fa-cogs",
      text: "Tailored Solutions for client requirements.",
      color: "bg-yellow-500"
    },
    {
      icon: "fas fa-star",
      text: "Utmost focus on quality deliverables.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">HOW WE CREATE SUCCESS?</h2>
          <p className="text-lg text-arc-gray max-w-3xl mx-auto text-justify">
            To help achieving sustainable and inclusive solutions through innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successFactors.map((factor, index) => (
            <div key={index} className="bg-arc-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${factor.color} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${factor.icon} text-white text-lg`}></i>
              </div>
              <p className="text-arc-gray text-sm leading-relaxed text-justify">{factor.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
