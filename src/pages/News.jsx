import React, { useState } from 'react';

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    {
      title: "New Storage Facility Opened",
      date: "March 15, 2024",
      content: "Nepal Oil Corporation has inaugurated a new storage facility to enhance petroleum storage capacity.",
      image: "https://picsum.photos/seed/storage/400/300",
      fullContent: "Nepal Oil Corporation has recently inaugurated a state-of-the-art storage facility aimed at bolstering the nation's petroleum reserves. This new facility features advanced safety measures and increased capacity to meet growing demand."
    },
    {
      title: "Price Update Announcement",
      date: "March 10, 2024",
      content: "Latest petroleum price adjustments based on international market trends.",
      image: "https://picsum.photos/seed/price/400/300",
      fullContent: "Due to recent fluctuations in the international petroleum market, Nepal Oil Corporation has announced updated pricing for various fuel types. These changes reflect global trends and aim to maintain market stability."
    },
    {
      title: "Eco-Friendly Fuel Initiative Launched",
      date: "February 20, 2025",
      content: "A new initiative to introduce sustainable fuel options across the country.",
      image: "https://picsum.photos/seed/eco/400/300",
      fullContent: "Nepal Oil Corporation has launched an ambitious eco-friendly fuel initiative, introducing biofuels and low-emission alternatives to reduce the carbon footprint of transportation in the region."
    },
    {
      title: "Pipeline Expansion Project Approved",
      date: "January 12, 2025",
      content: "Government greenlights a major pipeline expansion to improve fuel distribution.",
      image: "https://picsum.photos/seed/pipeline/400/300",
      fullContent: "The government has approved a multi-million dollar pipeline expansion project by Nepal Oil Corporation, aimed at enhancing fuel distribution efficiency and reducing transportation costs across rural and urban areas."
    },
    {
      title: "Annual Safety Training Completed",
      date: "December 5, 2024",
      content: "Staff undergo rigorous safety training to ensure operational excellence.",
      image: "https://picsum.photos/seed/safety/400/300",
      fullContent: "Nepal Oil Corporation successfully completed its annual safety training program for all employees, focusing on emergency response, equipment handling, and environmental protection protocols."
    },
    {
      title: "Partnership with Global Energy Firm",
      date: "November 18, 2024",
      content: "New collaboration to bring advanced technology to local refineries.",
      image: "https://picsum.photos/seed/energy/400/300",
      fullContent: "Nepal Oil Corporation has entered into a strategic partnership with a leading global energy firm to upgrade refinery technology, aiming to boost production efficiency and meet international quality standards."
    },
    {
      title: "Community Outreach Program",
      date: "October 25, 2024",
      content: "Fuel donation and education drive for rural communities.",
      image: "https://picsum.photos/seed/community/400/300",
      fullContent: "As part of its corporate social responsibility, Nepal Oil Corporation launched a community outreach program, donating fuel to rural schools and providing educational workshops on energy conservation."
    }
  ];

  const openModal = (item) => setSelectedNews(item);
  const closeModal = () => setSelectedNews(null);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
          Latest News
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover transition-transform duration-300 hover:scale-110"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                    {item.date}
                  </div>
                  <h2 className="mt-2 text-xl md:text-2xl font-bold text-gray-900 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {item.content}
                  </p>
                  <button
                    onClick={() => openModal(item)}
                    className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl animate-fade-in">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900">{selectedNews.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="mt-2 text-sm text-indigo-600">{selectedNews.date}</div>
            <img
              className="mt-4 w-full h-64 object-cover rounded-lg"
              src={selectedNews.image}
              alt={selectedNews.title}
            />
            <p className="mt-4 text-gray-700 leading-relaxed">{selectedNews.fullContent}</p>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Add this CSS animation in your stylesheet or <style> tag
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
`;

export default News;