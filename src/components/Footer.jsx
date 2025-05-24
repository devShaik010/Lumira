import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-6 text-gray-300 text-center text-sm relative z-10">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 LUMIRA. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="mailto:abrar@lumira.tech" className="hover:text-white transition duration-300">abrar@lumira.tech</a>
          <a href="mailto:aaqil@lumira.tech" className="hover:text-white transition duration-300">aaqil@lumira.tech</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
