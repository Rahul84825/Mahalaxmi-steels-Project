import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+91 9511289914</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Akurdi, Pimpri-Chinchwad, Maharashtra</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm">
              Quality Products | Trusted Service
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink 
                to="/"
                className="flex items-center space-x-2 group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                    MahaLaxmi Steels
                  </h1>
                  <p className="text-xs text-blue-600 font-medium">& Home Appliances</p>
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-b from-blue-50 to-white rounded-lg mb-2">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `w-full text-left block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `w-full text-left block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `w-full text-left block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `w-full text-left block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;