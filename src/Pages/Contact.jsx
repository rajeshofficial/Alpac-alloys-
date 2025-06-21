import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Phone, Mail } from 'lucide-react';
import image from '../assets/sample1.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    castingType: '',
    quantity: ''
  })

  useEffect(() => {
    AOS.init({
      duration: 800,  
      easing: 'ease-in-out',
      once: true,     
      mirror: false,
    })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [result, setResult] = useState("");

  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const [isSubmitted, setIsSubmitted] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();
  setResult("Sending...");
    setIsSubmitted(false);

  const formDataToSend = new FormData();


  for (const key in formData) {
    formDataToSend.append(key, formData[key]);
  }

  
  formDataToSend.append("access_key", accessKey);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully.");
       setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        castingType: '',
        quantity: ''
      });
         setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      console.error("Submission error:", data);
      setResult(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setResult("Something went wrong. Please try again.");
  }
};


  return (
    <div className="bg-gray-50 min-h-screen">
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
      <div className="max-w-7xl mx-auto px-6 py-8">
       <div
          className="bg-white p-8 rounded-lg shadow-sm mb-8"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ready to discuss your aluminum casting project? Our experienced team is here to help you
                find the best solution for your requirements. From initial design consultation to final
                delivery, we're with you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">Free design consultation and quotation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">CAD file review and optimization recommendations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">Material selection guidance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">Production planning and timeline estimation</span>
                </div>
              </div>
            </div>

            
            <div className="flex justify-center items-center">
              <img
                src= {image}
                alt="Contact Illustration"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div
            className="bg-white p-8 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="castingType" className="block text-sm font-medium text-gray-700 mb-2">
                    Casting Type
                  </label>
                  <select
                    id="castingType"
                    name="castingType"
                    value={formData.castingType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select casting type</option>
                    <option value="sand-casting">Sand Casting</option>
                    <option value="gravity-die">Gravity Die Casting</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select quantity range</option>
                    <option value="1-10">1-10 parts</option>
                    <option value="10-100">10-100 parts</option>
                    <option value="100-1000">100-1,000 parts</option>
                    <option value="1000+">1,000+ parts</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Brief description of your project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Please describe your casting requirements, including dimensions, materials, quantities, and any special requirements..."
                ></textarea>
              </div>

              <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                    isSubmitted
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  {isSubmitted ? "Message Sent" : "Send Enquiry"}
                </button>


              <p className="text-sm text-gray-600 text-center">
                * Required fields. We typically respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            {/* Company Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Company Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Alpac Alloys Ltd</h3>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    Dale Street<br />
                    Burton on Trent<br />
                    Staffordshire<br />
                    DE14 3TE<br />
                    United Kingdom
                  </address>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <div className="space-y-3">
                      {/* Phone */}
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-red-600" />
                        <div>
                          <div className="font-medium text-gray-800">Phone</div>
                          <a href="tel:+441283567737" className="text-red-600 hover:text-red-700">
                            +44 (0) 1283 567737
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-red-600" />
                        <div>
                          <div className="font-medium text-gray-800">Email</div>
                          <a href="mailto:sales@alpacgroup.com" className="text-red-600 hover:text-red-700">
                            sales@alpacgroup.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Thursday:</span>
                  <span className="font-medium">5:00 AM - 4:00 PM</span>
                </div>
              
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday - Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Emergency contact available for urgent requirements.
              </p>
            </div>

            {/* File Upload Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">CAD Files & Documentation</h3>
              <p className="text-gray-600 mb-4">
                For accurate quotations, please email your CAD files and drawings to our sales team.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Supported formats:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• STEP (.stp, .step)</li>
                  <li>• IGES (.igs, .iges)</li>
                  <li>• AutoCAD (.dwg, .dxf)</li>
                  {/* <li>• SolidWorks (.sldprt, .sldasm)</li> */}
                  <li>• PDF technical drawings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div
          className="bg-white p-8 rounded-lg shadow-sm mt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Directions</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our foundry is conveniently located in Burton on Trent, Staffordshire,
                  with excellent transport links throughout the UK and Europe.
                </p>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">By Road:</h4>
                  <ul className="space-y-1">
                    <li>• 10 minutes from A38 (Burton upon Trent)</li>
                    <li>• 30 minutes from M42 motorway</li>
                    <li>• Free customer parking available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">By Rail:</h4>
                  <ul className="space-y-1">
                    <li>• Burton-on-Trent railway station (2 miles)</li>
                    <li>• Direct services from Birmingham and Derby</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                title="Alpac Alloys Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.87739270549!2d-1.6411951999999999!3d52.801488899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a02497c4ef74d%3A0xe889995f19b8c999!2sAlpac%20Alloys%20Ltd!5e1!3m2!1sen!2sin!4v1749298153061!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
