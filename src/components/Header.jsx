import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // import useLocation for active link detection
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // get current path

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 bg-white shadow z-50" data-aos="fade-down">
      <div
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        data-aos="zoom-in"
      >
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Alpac Alloys Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold text-red-600">ALPAC ALLOYS</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-col lg:flex-row lg:flex gap-6 items-start lg:items-center absolute lg:static top-18 left-0 w-full lg:w-auto bg-white px-6 lg:px-0 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`
                  relative py-2 transition duration-300
                  ${isActive ? 'text-red-600 after:w-full' : 'text-gray-700 hover:text-red-600'}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:bg-red-600 after:transition-all after:duration-300
                  ${isActive ? '' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
