import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageSlider from '../components/ImageSlider';
import sample1 from '../assets/sample1.png'
import sample2 from '../assets/a1.jpeg'
import sample3s from '../assets/sample3.png'
import sample4s from '../assets/slide4img.jpeg'
import sample5s from '../assets/slide4i.jpeg'
import t1 from '../assets/t1.jpeg';
import t2 from '../assets/t2.jpeg';
import t3 from '../assets/t3.jpeg'


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const slides = [
    {
      image: sample1,
      title: 'Advanced Aluminum Casting Solutions',
      caption: 'Precision engineering meets innovative manufacturing - transforming your designs into reality',
    },
    {
      image: sample4s ,
      title: 'State-of-the-Art Foundry Technology',
      caption: 'Over 40 years of expertise in sand casting and gravity die casting processes',
    },
    {
      image:  sample3s,
      title: 'Global Manufacturing Partner',
      caption: 'Serving industries worldwide with precision aluminum castings and exceptional service',
    },
    {
      image: sample5s,
      title: 'Quality Without Compromise',
      caption: 'ISO 9001:2015 certified quality management ensuring excellence in every casting',
    },
    {
      image: sample2,
      title: 'Innovation in Every Casting',
      caption: 'From prototype to production - we turn your complex designs into cost-effective solutions',
    },
  ];

  return (
    <div>
      {/* Full-Screen Hero Slider */}
      <div className="relative">
        <div className="h-screen">
          <ImageSlider slides={slides} fullScreen={true} />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl" data-aos="fade-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Alpac Alloys Ltd</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              The Art of Aluminum Casting - Precision, Quality, Innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/processes"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-red-700 transition-colors"
              >
                Explore Our Processes
              </Link>
              <Link
                to="/contact-us"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Company Overview */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Precision Aluminum Casting Excellence
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Alpac Alloys Ltd has been at the forefront of aluminum casting technology for over four decades.
                We specialize in sand casting and gravity die casting, delivering precision components that meet
                the most demanding specifications across multiple industries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">500kg</div>
                  <div className="text-gray-600">Maximum Casting Weight</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">99.5%</div>
                  <div className="text-gray-600">Quality Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Processes */}
              <Link
                to="/processes"
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={t1}
                    alt="Casting Processes"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">Casting Processes</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Advanced sand casting and gravity die casting techniques for precision components.
                  From prototyping to high-volume production with exceptional quality control.
                </p>
                <div className="mt-4 text-red-600 font-medium group-hover:text-red-700">Learn More →</div>
              </Link>

              {/* Technical Data */}
              <Link
                to="/technical-data"
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={t2}
                    alt="Technical Specifications"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">Technical Excellence</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive technical specifications, material properties, and design guidelines.
                  Access detailed tolerance data and quality standards for optimal casting performance.
                </p>
                <div className="mt-4 text-red-600 font-medium group-hover:text-red-700">View Specifications →</div>
              </Link>

              {/* Industries */}
              <Link
                to="/industries"
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={t3}
                    alt="Industry Applications"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">Industry Solutions</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Serving diverse industries from aerospace and automotive to marine and architectural.
                  Specialized solutions tailored to meet sector-specific requirements and standards.
                </p>
                <div className="mt-4 text-red-600 font-medium group-hover:text-red-700">Explore Industries →</div>
              </Link>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-12 rounded-lg shadow-sm mb-16" data-aos="fade-up" data-aos-delay="700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Alpac Alloys?</h2>
                <div className="space-y-6">
                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="600">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 text-xl">🏭</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Foundry Technology</h3>
                      <p className="text-gray-600">
                        State-of-the-art equipment and processes ensure consistent quality and precision in every casting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="900">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Rapid Prototyping</h3>
                      <p className="text-gray-600">Quick turnaround on prototypes and design iterations to accelerate your product development.</p>
                    </div>
                  </div>

                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="1000">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Design Optimization</h3>
                      <p className="text-gray-600">Expert consultation to optimize your designs for casting, reducing costs and improving performance.</p>
                    </div>
                  </div>

                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="1100">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 text-xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Reach</h3>
                      <p className="text-gray-600">Comprehensive export services and logistics support for customers worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="1200">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Capabilities</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">0.5kg - 500kg</div>
                    <div className="text-gray-600 text-sm">Casting Weight Range</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">±0.5mm</div>
                    <div className="text-gray-600 text-sm">Gravity Die Tolerance</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">2-4 weeks</div>
                    <div className="text-gray-600 text-sm">Sand Casting Lead Time</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">24 hours</div>
                    <div className="text-gray-600 text-sm">Quote Response Time</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported CAD Formats</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">STEP</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">IGES</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SolidWorks</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AutoCAD</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CATIA</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Pro-Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Casting Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert consultation and a detailed quote for your aluminum casting requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+441283567737"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                Call +44 (0) 1283 567737
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;