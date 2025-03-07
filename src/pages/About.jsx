import React from 'react';

function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Nepal Oil Corporation</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce"
              alt="Nepal Oil Corporation"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To ensure reliable and efficient distribution of quality petroleum products across Nepal,
              contributing to the nation's economic development while maintaining environmental responsibility.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading petroleum company in Nepal, recognized for excellence in service,
              sustainability, and innovation in the energy sector.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in our products and services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Operating with transparency and ethical business practices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Our History</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Nepal Oil Corporation (NOC) was established in 2027 B.S. (1970 A.D.) under the Company Act
              2021 (1964 A.D.). Since its inception, NOC has been the sole state-owned trading enterprise
              of Nepal undertaking the responsibility of importing, storing and distributing various
              petroleum products in the country.
            </p>
            <p>
              Over the years, NOC has grown significantly, expanding its infrastructure and improving
              its services to meet the growing energy demands of Nepal. Today, we continue to evolve
              and adapt to new challenges while maintaining our commitment to serving the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;