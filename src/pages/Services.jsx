import React from 'react';

function Services() {
  const services = [
    {
      title: "Petroleum Distribution",
      description: "We ensure efficient distribution of petroleum products across Nepal through our extensive network.",
      items: ["Petrol", "Diesel", "Kerosene", "Aviation Fuel"],
      icon: "M12 8V4m0 16v-4m6-6h4m-16 0H4m15.364 6.364l-2.828-2.828M4.636 4.636l2.828 2.828M15.364 4.636l-2.828 2.828M4.636 15.364l2.828-2.828",
    },
    {
      title: "Storage Facilities",
      description: "Modern storage infrastructure ensuring constant supply and maintaining quality standards.",
      items: ["Strategic Storage Locations", "Quality Control Systems", "Safety Measures", "Regular Maintenance"],
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <svg
                  className="w-10 h-10 text-indigo-600 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Optional CSS for subtle animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .bg-white {
          animation-delay: ${0.1}s;
        }
      `}</style>
    </div>
  );
}

export default Services;