import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap -mx-4">

          {/* About */}
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0"
            data-aos="fade-up"
          >
            <a href="/" className="text-3xl font-bold text-red-600 inline-block mb-4">
              ALPAC ALLOYS
            </a>
            <div className="space-y-1 text-gray-400">
              <p>Dale Street</p>
              <p>Burton on Trent</p>
              <p>Staffordshire, DE14 3TE</p>
              <p>
                <strong>Phone:</strong> <span>+44 (0) 1283 567737</span>
              </p>
              <p>
                <strong>Email:</strong> <span>sales@alpacgroup.com</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-6 text-gray-400">
              {/* Social Icons */}
              <a href="#" className="hover:text-red-600 transition" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..." /></svg>
              </a>
              <a href="#" className="hover:text-red-600 transition" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..." /></svg>
              </a>
              <a href="#" className="hover:text-red-600 transition" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..." /></svg>
              </a>
              <a href="#" className="hover:text-red-600 transition" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..." /></svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div
            className="w-1/2 sm:w-1/3 md:w-1/6 px-4 mb-10 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Useful Links</h4>
            <ul className="space-y-3">
              {['Home', 'About us', 'Testimonials', 'Contact US', 'Export'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-red-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div
            className="w-1/2 sm:w-1/3 md:w-1/6 px-4 mb-10 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Other Information</h4>
            <ul className="space-y-3">
              {['Processes', 'Technical Data', 'Industries', 'Quality', 'Sitemap'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-red-600 transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="w-full md:w-1/3 px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Our Newsletter</h4>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter and receive the latest news about our products and services!
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright (no AOS animation here) */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>
            2025 © Copyright <strong className="text-red-600">Abhinav</strong>. All Rights Reserved
          </p>
          <p className="mt-1">
            Designed by{' '}
            <a
              href="https://bootstrapmade.com/"
              className="hover:text-red-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhinav Co.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
