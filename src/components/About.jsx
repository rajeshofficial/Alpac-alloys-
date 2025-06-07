import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      {/* Section Header */}
      <div
        className="text-center mb-12 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-sm text-red-600 font-semibold tracking-wider uppercase mb-2">About</h3>
        <h2 className="text-4xl font-bold text-gray-900 uppercase">About Us</h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div data-aos="fade-right" data-aos-delay="100">
          <p className="mb-6 text-gray-700">
            Alpac Alloys Ltd makes Aluminium castings by two main processes, Aluminium Sand Casting and Aluminium Gravity Die Casting. Prototype Aluminium Casting, taking your design at an early stage of design to help you get the best from the Aluminium Casting process.
          </p>
          <ul className="space-y-4">
            {[
              "Bring us your 2D, prof drawings, 3D cad files, (iges, step, dwg, catia, Solidworks, pro-engineer cad file).",
              "We will help and advise you to achieve the optimum from your Aluminium Casting Design for the best and cheapest tooling cost.",
              "Produced economically in our specialist Aluminium Foundry with care and attention to your design criteria."
            ].map((point, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-red-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div data-aos="fade-left" data-aos-delay="200">
          <p className="mb-6 text-gray-700">
            Alpac Alloys Ltd is committed to producing high-quality Aluminium castings economically with precision and care. Whether you require sand casting or gravity die casting, we ensure your project is handled with expert craftsmanship and attention to detail.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded transition"
          >
            Read More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
