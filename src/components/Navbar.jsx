import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Site Title */}
        <div className="text-white text-xl font-bold font-aicon-bold">
          LUMIRA
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-black/50 md:bg-transparent p-4 md:p-0`}>
          <li>
            <a href="#hero" className="text-gray-300 hover:text-white transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
          </li>
          {/* Dropdown Example */}
          <li className="relative group">
            <button className="text-gray-300 hover:text-white transition duration-300 flex items-center">
              Services <span className="ml-1">&#9660;</span> {/* Down arrow */}
            </button>
            <ul className="absolute hidden group-hover:block bg-black/70 text-white mt-2 space-y-2 p-3 rounded shadow-lg">
              <li><a href="#service1" className="block hover:text-gray-300">Service 1</a></li>
              <li><a href="#service2" className="block hover:text-gray-300">Service 2</a></li>
              <li><a href="#service3" className="block hover:text-gray-300">Service 3</a></li>
            </ul>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
