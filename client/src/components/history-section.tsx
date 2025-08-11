export default function HistorySection() {
  const milestones = [
    {
      year: "2013",
      title: "ESTABLISHED AND DEBUT INTO INFRASTRUCTURE DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Infrastructure development and construction",
      position: "left"
    },
    {
      year: "2015",
      title: "FORAY INTO AUTOMOTIVES",
      image: "https://images.unsplash.com/photo-1562141961-4a1a6539d1d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Automotive industry and vehicle manufacturing",
      position: "right"
    },
    {
      year: "2018",
      title: "ENTERED INTO IT AND RELATED SOLUTIONS",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "IT solutions and modern office environment",
      position: "left"
    },
    {
      year: "2020",
      title: "ENTERED INTO RENEWABLES",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Renewable energy wind turbines and solar panels",
      position: "right"
    },
    {
      year: "2020",
      title: "EXPANDED INTO ASEAN AND OTHER REGIONS",
      position: "left",
      noImage: true
    },
    {
      year: "2021",
      title: "ENTERED INTO ENERGY SECTOR",
      position: "right",
      noImage: true
    },
    {
      year: "2022",
      title: "ENTERED INTO AI & EVS",
      position: "left",
      noImage: true
    }
  ];

  const getColorByYear = (year: string) => {
    const colors = {
      "2013": "bg-arc-blue",
      "2015": "bg-arc-light-blue", 
      "2018": "bg-arc-accent",
      "2020": "bg-green-500",
      "2021": "bg-red-500",
      "2022": "bg-orange-500"
    };
    return colors[year as keyof typeof colors] || "bg-arc-blue";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arc-blue mb-6">Brief History</h2>
          <div className="w-24 h-1 bg-arc-accent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-arc-accent"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center justify-between">
                {milestone.position === "left" ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      {!milestone.noImage && (
                        <img 
                          src={milestone.image} 
                          alt={milestone.alt}
                          className="rounded-lg shadow-lg ml-auto mb-4 w-80 h-48 object-cover"
                        />
                      )}
                      <h3 className="text-xl font-semibold text-arc-blue mb-2">{milestone.title}</h3>
                    </div>
                    <div className={`w-16 h-16 ${getColorByYear(milestone.year)} rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10`}>
                      {milestone.year}
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className={`w-16 h-16 ${getColorByYear(milestone.year)} rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10`}>
                      {milestone.year}
                    </div>
                    <div className="w-5/12 text-left pl-8">
                      <h3 className="text-xl font-semibold text-arc-blue mb-4">{milestone.title}</h3>
                      {!milestone.noImage && (
                        <img 
                          src={milestone.image} 
                          alt={milestone.alt}
                          className="rounded-lg shadow-lg w-80 h-48 object-cover"
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
