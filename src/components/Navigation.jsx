import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  const industries = [
       { name: 'Transport', path: '/industries#transport' },
    { name: 'Marine and Offshore', path: '/industries#marine-and-offshore' },
    { name: 'Architectural', path: '/industries#architectural' },
    { name: 'Process Industries', path: '/industries#process-industries' },
    { name: 'Energy', path: '/industries#energy' },
    { name: 'Defence', path: '/industries#defence' },
  ];

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <nav className="bg-gray-700 text-white text-sm relative z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 relative">
          <li data-aos="fade-up">
            <Link to="/processes" className="hover:text-gray-300 font-medium transition-colors">
              Processes
            </Link>
          </li>
          <li data-aos="fade-up" data-aos-delay="50">
            <Link to="/technical-data" className="hover:text-gray-300 font-medium transition-colors">
              Technical Data
            </Link>
          </li>

          
          <li className="relative group" data-aos="fade-up" data-aos-delay="100">
            <Link to="/industries" className="hover:text-gray-300 font-medium transition-colors">
              Industries
            </Link>
            <div className="absolute left-0 top-full bg-white text-gray-800 shadow-lg z-[9999] mt-2 rounded-md min-w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <ul className="py-2">
                {industries.map((industry, idx) => (
                  <li key={industry.path} data-aos="fade-up" data-aos-delay={150 + idx * 50}>
                    <a
                      href={industry.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>


          <li data-aos="fade-up" data-aos-delay="200">
            <Link to="/quality" className="hover:text-gray-300 font-medium transition-colors">
              Quality
            </Link>
          </li>
          <li data-aos="fade-up" data-aos-delay="250">
            {/* <Link to="/export" className="hover:text-gray-300 font-medium transition-colors">
              Export
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
