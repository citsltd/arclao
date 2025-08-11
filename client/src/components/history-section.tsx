export default function HistorySection() {
  const milestones = [
    {
      year: "2013",
      title: "ESTABLISHED AND DEBUT INTO INFRASTRUCTURE DEVELOPMENT",
      position: "left"
    },
    {
      year: "2015", 
      title: "FORAY INTO AUTOMOTIVES",
      position: "right"
    },
    {
      year: "2018",
      title: "ENTERED INTO IT AND RELATED SOLUTIONS", 
      position: "left"
    },
    {
      year: "2020",
      title: "ENTERED INTO RENEWABLES",
      position: "right"
    },
    {
      year: "2020",
      title: "EXPANDED INTO ASEAN AND OTHER REGIONS",
      position: "left"
    },
    {
      year: "2021",
      title: "ENTERED INTO ENERGY SECTOR",
      position: "right"
    },
    {
      year: "2022",
      title: "ENTERED INTO AI & EVS",
      position: "left"
    }
  ];

  const getColorByYear = (year: string) => {
    const colors = {
      "2013": "bg-arc-blue",
      "2015": "bg-green-500",
      "2018": "bg-purple-500",
      "2020": "bg-orange-500",
      "2021": "bg-red-500",
      "2022": "bg-indigo-500"
    };
    return colors[year as keyof typeof colors] || "bg-arc-blue";
  };

  return (
    <section className="py-24 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arc-dark mb-6">Brief History</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center justify-between">
                {milestone.position === "left" ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <h3 className="text-lg font-semibold text-arc-dark mb-2">{milestone.title}</h3>
                    </div>
                    <div className={`w-16 h-16 ${getColorByYear(milestone.year)} rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10`}>
                      {milestone.year}
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className={`w-16 h-16 ${getColorByYear(milestone.year)} rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10`}>
                      {milestone.year}
                    </div>
                    <div className="w-5/12 text-left pl-8">
                      <h3 className="text-lg font-semibold text-arc-dark mb-2">{milestone.title}</h3>
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
