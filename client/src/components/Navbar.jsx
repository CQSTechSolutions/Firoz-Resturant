import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Changed FaHamburger to FaBars

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-52">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-46" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300
                      relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#7b1315] 
                      after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300
                      relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#7b1315] 
                      after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link to="/menu" className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300
                      relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#7b1315] 
                      after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Menu
            </Link>
            <Link to="/contact" className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300
                      relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#7b1315] 
                      after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4 ">
            {/* Contact Button
            <Link 
              to="https://wa.link/ywuse1" 
              className="bg-[#7b1315] text-white p-2 rounded-[10px] text-sm font-medium hover:bg-[#641012] transition-colors duration-300"
            >
              Contact Us
            </Link> */}

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className={`md:hidden p-2 font-bold text-2xl rounded-[10px] ${isOpen ? 'text-[#641012]' : 'text-[#7b1315]'} hover:bg-gray-100`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 flex justify-center animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300 transform hover:scale-105"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300 transform hover:scale-105"
              >
                About
              </Link>
              <Link 
                to="/menu" 
                className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300 transform hover:scale-105"
              >
                Menu
              </Link>
              <Link 
                to="/contact" 
                className="text-black hover:text-[#7b1315] px-3 py-2 text-sm font-medium transition-colors duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
