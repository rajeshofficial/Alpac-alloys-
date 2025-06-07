import React, { useState, useEffect } from 'react';
import image1 from '../assets/i1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import About from '../components/About';
import Service from '../components/Service';
import Footer from '../components/Footer';

const slides = [
  {
    img: image1,
    title: 'Welcome to Sailor',
  },
  {
    img: image2,
    title: 'Understanding your design requirements',
  },
  {
    img: image3,
    title: 'Complicated fabrication into simple casting, saving money',
  },
  {
    img: image4,
    title: 'Complicated fabrication into simple casting, saving money',
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
   <>
    <section className="relative bg-gray-900 text-white">
      <div className="relative overflow-hidden h-[70vh] md:h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-32 h-full">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="max-w-xl text-sm md:text-lg mb-6">{slide.desc}</p>
              <a
                href="#featured-services"
                className="inline-block bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded text-white font-semibold"
              >
                Get Started
              </a>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 md:p-4 z-30"
          aria-label="Previous Slide"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 md:p-4 z-30"
          aria-label="Next Slide"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-red-600 w-12'
                  : 'bg-gray-400 w-6 hover:bg-red-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    <About/>
    <Service/>
   </>
  );
};

export default Home;
