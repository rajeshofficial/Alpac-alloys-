import React from 'react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';

const services = [
  {
    image: s1,
    title: 'Processing',
    delay: 100,
  },
  {
    image: s2,
    title: 'Technical Data',
    delay: 200,
  },
  {
    image: s3,
    title: 'Industries',
    delay: 300,
  },
];

const Service = () => {
  return (
    <section id="services" className="section py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
          {services.map(({ image, title, delay }, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={delay}
              className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer h-80"
            >
              {/* Image wrapper with border on hover */}
              <div className="w-full h-full border-3 border-transparent rounded-lg overflow-hidden transition-border duration-300 ease-in-out group-hover:border-red-600">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div
                className="
                  absolute bottom-0 left-0 right-0
                  bg-black/50
                  text-white
                  px-6 py-4
                  transform
                  translate-y-0
                  sm:translate-y-full
                  sm:group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out
                  flex flex-col justify-center items-center
                  cursor-pointer
                "
                style={{ height: '30%' }}
              >
                <h4 className="text-2xl font-semibold text-center">
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
