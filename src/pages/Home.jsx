import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { ArrowRight, Clock, Calendar, X, MapPin, Phone, Mail, ChevronRight, Award, Users, Shield, TrendingUp, Droplet, Truck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import image from '../assets/nic.jpeg';
import image1 from '../assets/oildabba.jpeg';

function Home() {
  const [activePopup, setActivePopup] = useState(null);

  // Close popup when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setActivePopup(null);
    }
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
      title: "Fueling Nepal's Progress",
      description: "Providing quality petroleum products across the nation"
    },
    {
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece",
      title: "Sustainable Energy",
      description: "Committed to environmental responsibility"
    }
  ];

  const services = [
    {
      title: "Petroleum Distribution",
      description: "Efficient distribution of quality petroleum products across Nepal with nationwide coverage and timely delivery.",
      icon: <Droplet className="w-12 h-12" />,
      details: "Our petroleum distribution network spans the entire country, ensuring reliable access to essential fuels. We maintain a fleet of modern tankers and have strategically located depots to minimize delivery times and maximize efficiency. Our tracking systems allow real-time monitoring of shipments, ensuring transparency and reliability."
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control measures for all our products ensuring industry-leading standards.",
      icon: <Shield className="w-12 h-12" />,
      details: "Our quality assurance processes involve multiple testing stages throughout the supply chain. We employ international standard testing methodologies and have state-of-the-art laboratories at all major facilities. Our team of qualified engineers and chemists continuously monitor product quality, ensuring that every drop of fuel meets our stringent specifications."
    },
    {
      title: "Storage Facilities",
      description: "Modern storage infrastructure ensuring constant supply even during challenging conditions.",
      icon: <Truck className="w-12 h-12" />,
      details: "Our storage facilities feature cutting-edge technology for safety, efficiency, and environmental protection. With a combined capacity of over 70,000 kiloliters, we can maintain adequate reserves to handle supply disruptions. All facilities are equipped with advanced fire protection systems, environmental monitoring, and are regularly inspected to ensure compliance with international safety standards."
    }
  ];

  const newsItems = [
    {
      image: image,
      title: "New Storage Facility Opened",
      date: "Feb 20, 2025",
      readTime: "5 min read",
      summary: "Our new state-of-the-art storage facility is now operational, increasing our capacity by 40% and improving nationwide distribution capabilities.",
      content: "We are proud to announce the inauguration of our newest storage facility in the eastern region of Nepal. This state-of-the-art complex represents an investment of over NPR 1.2 billion and increases our total storage capacity by 40%. The facility includes 12 new storage tanks with a combined capacity of 28,000 kiloliters, modern firefighting systems, and advanced environmental protection measures.\n\nThe strategic location will significantly improve our distribution capabilities in the eastern provinces, reducing delivery times by up to 60% and allowing us to better serve remote communities. The facility also creates 120 new direct jobs and approximately 300 indirect employment opportunities in the region.\n\nThe project was completed two months ahead of schedule and incorporates the latest safety technologies, including automated leak detection, advanced firefighting systems, and real-time monitoring capabilities. Environmental considerations were paramount in the design, with zero-discharge water management systems and vapor recovery units to minimize emissions."
    },
    {
      image: image1,
      title: "Price Update",
      date: "Feb 18, 2025",
      readTime: "4 min read",
      summary: "Review our latest petroleum price adjustments and comprehensive market analysis reflecting global trends and local economic factors.",
      content: "Effective February 20, 2025, the following price adjustments will be implemented for petroleum products nationwide:\n\n- Petrol: NPR 125.50 per liter (decrease of NPR 2.00)\n- Diesel: NPR 103.00 per liter (decrease of NPR 2.50)\n- Kerosene: NPR 93.50 per liter (decrease of NPR 1.50)\n- Aviation Fuel (Domestic): NPR 90.00 per liter (unchanged)\n- LPG: NPR 1,350 per cylinder (decrease of NPR 50)\n\nThese adjustments reflect recent changes in international oil prices, which have seen a modest decline over the past month. The strengthening of the Nepalese Rupee against the US Dollar has also contributed to this price reduction.\n\nOur pricing committee reviews petroleum prices on a bi-weekly basis, taking into account international market rates, exchange rate fluctuations, and operational costs. We remain committed to transparent pricing mechanisms and strive to pass on benefits to consumers whenever market conditions permit."
    }
  ];

  const stats = [
    { number: "40+", label: "Years of Service", icon: <Award className="w-6 h-6" /> },
    { number: "1,200+", label: "Employees Nationwide", icon: <Users className="w-6 h-6" /> },
    { number: "550+", label: "Distribution Points", icon: <MapPin className="w-6 h-6" /> },
    { number: "10M+", label: "Satisfied Customers", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "CEO, Nepal Transport Association",
      quote: "The consistent quality and reliable supply chain has been crucial for our nationwide operations. We've partnered for over 15 years with excellent results."
    },
    {
      name: "Sunita Gurung",
      position: "Director, Himalayan Industries",
      quote: "Their commitment to quality and timely delivery has made them our trusted energy partner. The customer service is exceptional and responsive."
    },
    {
      name: "Nabin Thapa",
      position: "Chairperson, Eastern Nepal Business Council",
      quote: "The new storage facility has transformed fuel availability in our region. Businesses now enjoy constant supply regardless of seasonal challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-screen max-h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 animate-slide-up">{slide.description}</p>
                    <Link to="/about">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center shadow-lg animate-pulse">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Statistics Section */}
      <section className="py-10 relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{stat.number}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              We provide comprehensive petroleum services to meet the energy needs of Nepal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button 
                  onClick={() => setActivePopup(`service-${index}`)} 
                  className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-xl mb-6">
                For over four decades, we've been at the forefront of Nepal's energy sector, providing reliable petroleum products and services to power the nation's growth.
              </p>
              <p className="mb-8">
                Our commitment to quality, innovation, and sustainability has established us as the trusted energy partner for millions of Nepalese citizens and businesses. Through strategic infrastructure development and a customer-centric approach, we continue to expand our reach while maintaining our core values of integrity, excellence, and environmental responsibility.
              </p>
              <Link to="/about">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center">
                  Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-blue-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Mission</h3>
                <p>To ensure reliable and affordable energy access for all Nepalese while promoting sustainable practices.</p>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Vision</h3>
                <p>To be the leading energy provider in South Asia, recognized for excellence and innovation.</p>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg col-span-2">
                <h3 className="text-2xl font-bold mb-3">Values</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Integrity</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Excellence</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Innovation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span>Sustainability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest News</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Stay updated with the latest developments and announcements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {newsItems.map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-2 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.summary}</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setActivePopup(`news-${index}`)} 
                      className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                    >
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <div className="flex items-center text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/news">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300">
                View All News
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Partners Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Popups */}
      {services.map((service, index) => (
        activePopup === `service-${index}` && (
          <div 
            key={`service-popup-${index}`}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" 
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
              <button 
                onClick={() => setActivePopup(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{service.details}</p>
              <button 
                onClick={() => setActivePopup(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )
      ))}

      {/* News Popups */}
      {newsItems.map((item, index) => (
        activePopup === `news-${index}` && (
          <div 
            key={`news-popup-${index}`}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" 
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
              <div className="h-64 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setActivePopup(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-2 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <div className="flex items-center text-gray-500 mb-6">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{item.readTime}</span>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
                </div>
                <button 
                  onClick={() => setActivePopup(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300 mt-8"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default Home;