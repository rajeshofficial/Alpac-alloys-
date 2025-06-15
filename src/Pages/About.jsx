
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
      useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
     <main>
      {/* Page Title */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-600 mb-4 lg:mb-0">About Us</h1>
          <nav className="text-sm text-gray-600">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-red-600 hover:underline">Home</a>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-semibold">About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-500 mb-6">Alpac Alloys Ltd</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alpac Alloys Ltd was established in 1989, in Burton on Trent, when the business partners first came together with a broad knowledge and experience of the casting industry, with the idea of creating an Aluminium Foundry capable of producing high-quality castings. Initially, it began as a prototyping development business to assist the already established tool-making business.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Very quickly, we discovered a growing demand for high-quality Aluminium Castings that other foundries found difficult to produce or were unable to deliver on time. Our ability to meet tight deadlines and deliver bespoke solutions set us apart early on.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By 1996, due to increased demand and growth, the business moved to larger premises at our current location on Dale Street, Burton on Trent. We invested in new plant and equipment to support larger and more complex castings using both Sand Casting and Gravity Die Casting processes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since then, we have continued to invest in advanced machinery and workforce training to serve our existing customers better, and to expand our capacity for new projects and partnerships.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
