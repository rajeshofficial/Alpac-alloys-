import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Alpac Alloys Ltd</h3>
            <address className="not-italic text-gray-300 leading-relaxed">
              Dale Street<br />
              Burton on Trent<br />
              Staffordshire<br />
              DE14 3TE
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com/alpacalloys" className="text-gray-400 hover:text-white">
                <img
                  src="https://ext.same-assets.com/2966790152/1566186746.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://twitter.com/alpacalloys" className="text-gray-400 hover:text-white">
                <img
                  src="https://ext.same-assets.com/2966790152/1745832144.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <img
                  src="https://ext.same-assets.com/2966790152/1987378176.png"
                  alt="Phone"
                  className="w-4 h-4 mr-2"
                />
                <a href="tel:+441283567737" className="hover:text-white">
                  +44 (0) 1283 567737
                </a>
              </div>
              <div className="flex items-center">
                <img
                  src="https://ext.same-assets.com/2966790152/1884383774.png"
                  alt="Fax"
                  className="w-4 h-4 mr-2"
                />
                <span>+44 (0) 1283 512359</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://ext.same-assets.com/2966790152/3338816041.png"
                  alt="Email"
                  className="w-4 h-4 mr-2"
                />
                <a href="mailto:sales@alpacgroup.com" className="hover:text-white">
                  sales@alpacgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/processes" className="hover:text-white">Processes</Link>
              <Link to="/about-us" className="hover:text-white">About Us</Link>
              <Link to="/technical-data" className="hover:text-white">Technical Data</Link>
              <Link to="/testimonials" className="hover:text-white">Testimonials</Link>
              <Link to="/industries" className="hover:text-white">Industries</Link>
              <Link to="/contact-us" className="hover:text-white">Contact Us</Link>
              <Link to="/quality" className="hover:text-white">Quality</Link>
              <Link to="/export" className="hover:text-white">Export</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
           © {currentYear} Alpac Alloys Ltd. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-2 md:mt-0">
            <a href="https://indiantechsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Web Design By Indian Tech Solution
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
