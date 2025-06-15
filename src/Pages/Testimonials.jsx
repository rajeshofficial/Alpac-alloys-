import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {

    const testimonials = [
  {
    company: 'Catchpole and Rye',
    content:
      'We started working with Alpac Alloys 3 years ago to get a quicker delivery and improved quality of Aluminium Castings at competitive prices. We have asked for delivery of very bespoke castings in less than 3 days and have got delivery on time. This is paramount to our business and has ensured we can service our clients without long delays.',
    director: 'Managing Director: Bespoke Bathrooms and Sanitary Products',
  },
  {
    company: 'Nova Place',
    content:
      'Our first time of using an Aluminium Casting in a brand new project for our company and Alpac Alloys were able to advise on design, price and castability. The product has launched so well we have now developed a further associated product with the help of Alpac Alloys engineering staff with a very low cost tooling change, keeping our costs to a minimum.',
    director: 'Managing Director: Leisure Industry Specialist',
  },
];

return (
    <div className="bg-white  ">
      {/* Heading + Breadcrumb */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-600 mb-4 lg:mb-0">Testimonials</h1>
          <nav className="text-sm text-gray-600">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-red-600 hover:underline">Home</a>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-semibold">Testimonials</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="container mx-auto px-4 pb-10">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-gray-600 mb-4">
                <FaQuoteLeft className="inline-block text-red-500 mr-2" />
                {item.content}
                <FaQuoteRight className="inline-block text-red-500 ml-2" />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">{item.company}</p>
                <p className="text-sm text-gray-500">{item.director}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials
