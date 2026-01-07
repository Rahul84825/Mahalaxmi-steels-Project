import { NavLink } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              MahaLaxmi Steels & Home Appliances
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Your trusted partner for quality steel products and home appliances in Akurdi, Pimpri-Chinchwad, Maharashtra. 
              We provide premium products with exceptional service.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 9511289914</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Akurdi, Pimpri-Chinchwad, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>activegamer789@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-sm transition-all duration-200 ${
                      isActive 
                        ? 'text-cyan-400 font-semibold' 
                        : 'text-gray-300 hover:text-white hover:translate-x-1 inline-block'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    `text-sm transition-all duration-200 ${
                      isActive 
                        ? 'text-cyan-400 font-semibold' 
                        : 'text-gray-300 hover:text-white hover:translate-x-1 inline-block'
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `text-sm transition-all duration-200 ${
                      isActive 
                        ? 'text-cyan-400 font-semibold' 
                        : 'text-gray-300 hover:text-white hover:translate-x-1 inline-block'
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-sm transition-all duration-200 ${
                      isActive 
                        ? 'text-cyan-400 font-semibold' 
                        : 'text-gray-300 hover:text-white hover:translate-x-1 inline-block'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Products Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Steel Products</li>
              <li className="hover:text-white transition-colors cursor-pointer">TMT Bars</li>
              <li className="hover:text-white transition-colors cursor-pointer">Home Appliances</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kitchen Equipment</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hardware Tools</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Maha- Steels & Home Appliances. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-400">Powered by</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                Quality & Trust
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;