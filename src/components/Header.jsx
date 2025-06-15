import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo1 from '../assets/logo1.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="bg-white border-b">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo1}
                alt="Alpac Alloys Ltd"
                className="h-14 sm:h-16"
              />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                data-aos="fade-up"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                data-aos="fade-up"
              >
                About Us
              </Link>
              <Link
                to="/testimonials"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                data-aos="fade-up"
              >
                Testimonials
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                data-aos="fade-up"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info (hidden on small) */}
          <div className="hidden lg:flex flex-col text-right text-sm text-gray-600 space-y-1">
            <div>
              <span className="font-medium">T:</span>{' '}
              <a href="tel:+441283567737" className="hover:text-gray-900">
                +44 (0) 1283 567737
              </a>
            </div>
            <div>
              <span className="font-medium">F:</span>{' '}
              <span>+44 (0) 1283 512359</span>
            </div>
            <div>
              <span className="font-medium">E:</span>{' '}
              <a href="mailto:sales@alpacgroup.com" className="hover:text-gray-900">
                sales@alpacgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
             <nav className="flex flex-col items-center text-center space-y-2">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                onClick={toggleMenu}
                data-aos="fade-up"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                onClick={toggleMenu}
                data-aos="fade-up"
              >
                About Us
              </Link>
              <Link
                to="/testimonials"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                onClick={toggleMenu}
                data-aos="fade-up"
              >
                Testimonials
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                onClick={toggleMenu}
                data-aos="fade-up"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
