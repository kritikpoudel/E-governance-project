import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

function Footer() {
  return (
    <footer className="bg-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nepal Oil Corporation</h3>
            <p className="text-gray-200 mb-4">
              Providing quality petroleum products and services across Nepal since 1970.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <BiLogoFacebook size={28} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <BiLogoTwitter size={28} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <BiLogoLinkedin size={28} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
            <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-200 hover:text-white transition-colors flex items-center">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors flex items-center">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-200">
                <HiOutlineLocationMarker className="mr-3 text-2xl" />
                <span>Babarmahal, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center text-gray-200">
                <HiOutlinePhone className="mr-3 text-2xl" />
                <span>+977-1-4262780</span>
              </li>
              <li className="flex items-center text-gray-200">
                <HiOutlineMail className="mr-3 text-2xl" />
                <span>info@noc.org.np</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Nepal Oil Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;