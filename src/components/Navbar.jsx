import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className="bg-black/50 backdrop-blur-lg border border-gray-400 fixed top-4 left-0 right-0 z-50 mx-auto max-w-screen-lg rounded-xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Site Title */}
        <div className="text-white text-xl font-bold font-aicon-bold">
          LUMIRA
        </div>

        {/* Navigation Links */}
        <ul className={`flex space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-black/50 md:bg-transparent p-4 md:p-0 rounded-b-xl md:rounded-none mx-auto max-w-sm md:mx-0 md:max-w-none`}>
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

        {/* Dark Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-white focus:outline-none">
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
