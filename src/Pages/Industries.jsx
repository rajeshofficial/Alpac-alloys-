import React, { useEffect } from 'react';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpeg';
import b3 from '../assets/b3.jpeg';
import b4 from '../assets/b4.jpeg';
import b5 from '../assets/b5.jpeg';
import b6 from '../assets/b6.jpeg';

const Industries = () => {
  useEffect(() => {
    // Inject smooth scroll behavior to html tag
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const industries = [
    {
      title: "Transport",
      image: b1,
      description: "Lightweight, durable aluminum castings for automotive, rail, and commercial vehicle applications.",
      applications: [
        "Engine components and cylinder heads",
        "Transmission housings and gearboxes",
        "Suspension components",
        "Brake system parts",
        "Heat exchangers and cooling systems"
      ],
      benefits: [
        "Weight reduction for improved fuel efficiency",
        "Excellent heat dissipation properties",
        "Corrosion resistance for longevity",
        "High strength-to-weight ratio"
      ]
    },
    // other industry objects remain unchanged...
    {
      title: "Marine and Offshore",
      image: b2,
      description: "Corrosion-resistant aluminum castings designed to withstand harsh marine environments.",
      applications: [
        "Propeller housings and struts",
        "Engine blocks and cylinder heads",
        "Pump housings and impellers",
        "Navigation equipment housings",
        "Offshore platform components"
      ],
      benefits: [
        "Superior corrosion resistance",
        "Lightweight for better performance",
        "Excellent machinability",
        "Long-term durability in saltwater"
      ]
    },
    {
      title: "Architectural",
      image: b3,
      description: "Precision aluminum castings for architectural and construction applications requiring aesthetic appeal.",
      applications: [
        "Decorative façade elements",
        "Structural brackets and connectors",
        "Window and door hardware",
        "Lighting fixtures and housings",
        "Architectural trim and moldings"
      ],
      benefits: [
        "Excellent surface finish quality",
        "Weather resistance",
        "Design flexibility",
        "Low maintenance requirements"
      ]
    },
    {
      title: "Process Industries",
      image: b4,
      description: "High-performance aluminum castings for chemical processing, food production, and manufacturing.",
      applications: [
        "Pump and valve bodies",
        "Heat exchanger components",
        "Mixing vessel parts",
        "Filtration system housings",
        "Process equipment fittings"
      ],
      benefits: [
        "Chemical resistance",
        "Hygenic surface properties",
        "Thermal conductivity",
        "Easy cleaning and maintenance"
      ]
    },
    {
      title: "Energy",
      image: b5,
      description: "Reliable aluminum castings for renewable energy, oil & gas, and power generation applications.",
      applications: [
        "Wind turbine components",
        "Solar panel mounting systems",
        "Generator housings",
        "Transformer components",
        "Power distribution equipment"
      ],
      benefits: [
        "High electrical conductivity",
        "Thermal management properties",
        "Long service life",
        "Reduced maintenance costs"
      ]
    },
    {
      title: "Defence",
      image: b6,
      description: "Mission-critical aluminum castings meeting stringent military and defense specifications.",
      applications: [
        "Weapon system components",
        "Vehicle armor brackets",
        "Communication equipment housings",
        "Navigation system parts",
        "Aircraft structural components"
      ],
      benefits: [
        "Meets military specifications",
        "High strength and durability",
        "EMI/RFI shielding properties",
        "Strict quality control"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Industries We Serve</h1>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Alpac Alloys has over 40 years of experience serving diverse industries with precision aluminum castings.
            Our expertise spans multiple sectors, each with unique requirements and challenges that we meet with
            specialized solutions and industry-specific knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">6</div>
              <div className="text-gray-600">Key Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">40+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="space-y-8">
          {industries.map((industry, index) => {
            const id = industry.title.toLowerCase().replace(/\s+/g, '-'); // generate ID
            return (
              <div id={id} key={industry.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-20" />
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-2xl font-bold text-white">{industry.title}</h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Applications</h3>
                        <ul className="space-y-2">
                          {industry.applications.map((app, appIndex) => (
                            <li key={`${industry.title}-app-${appIndex}`} className="flex items-start text-gray-600">
                              <span className="text-red-600 mr-2 mt-1">•</span>
                              <span className="text-sm">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits</h3>
                        <ul className="space-y-2">
                          {industry.benefits.map((benefit, benefitIndex) => (
                            <li key={`${industry.title}-benefit-${benefitIndex}`} className="flex items-start text-gray-600">
                              <span className="text-green-600 mr-2 mt-1">✓</span>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Don't See Your Industry Listed?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We work with clients across many industries and are always ready to take on new challenges.
              Our engineering team can develop custom solutions for your specific application requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Contact Our Team
              </a>
              <a
                href="/processes"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Learn About Our Processes
              </a>
            </div>
          </div>
        </div>

        {/* Industry Standards */}
        <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Industry Standards & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-gray-800 mb-2">ISO 9001:2015</div>
              <div className="text-gray-600 text-sm">Quality Management</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-gray-800 mb-2">AS9100</div>
              <div className="text-gray-600 text-sm">Aerospace Quality</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-gray-800 mb-2">IATF 16949</div>
              <div className="text-gray-600 text-sm">Automotive Quality</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-gray-800 mb-2">MIL-STD</div>
              <div className="text-gray-600 text-sm">Military Standards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
