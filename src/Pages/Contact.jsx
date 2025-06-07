import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      {/* Page Title */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-600 mb-4 lg:mb-0">Contact</h1>
          <nav className="text-sm text-gray-600">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-red-600 hover:underline">Home</a>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-semibold">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12" id="contact">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          {/* Google Map */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <iframe
              className="w-full h-[270px] rounded-lg border-0"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.87739270549!2d-1.6411951999999999!3d52.801488899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a02497c4ef74d%3A0xe889995f19b8c999!2sAlpac%20Alloys%20Ltd!5e1!3m2!1sen!2sin!4v1749287139370!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt text-red-600 text-xl"></i>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-sm text-gray-700">Dale Street, Burton on Trent, Staffordshire, DE14 3TE</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone text-red-600 text-xl"></i>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-sm text-gray-700">+44 (0) 1283 567737</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-envelope text-red-600 text-xl"></i>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-sm text-gray-700">sales@alpacgroup.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="col-span-1 md:col-span-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  className="col-span-1 md:col-span-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
                <div className="col-span-1 md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
