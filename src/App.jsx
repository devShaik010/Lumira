import { useState } from 'react';
import LumiraLogo from '@assets/Lumira.svg';
import '@assets/Fonts/fonts.css';
import './App.css';

// Text for technologies
const techItems = ["AI", "Cloud Computing", "Security"];

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-black h-screen w-screen flex flex-col text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="gradient-bg-animation">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
      
      <div className="px-4 md:px-6 py-4 md:py-6 flex flex-col h-full relative z-10">
        {/* Logo/Branding */}
        <div className="flex justify-center mb-2 md:mb-4">
          {/* <img src={LumiraLogo} alt="Lumira" className="h-8 md:h-10" /> */}
        </div>
      
        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
          {/* Headline section */}
          <div className="text-center mb-4 md:mb-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-2 md:mb-4 font-aicon-bold main-title">
              LUMIRA
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300">
              The future of technology training
            </p>
          </div>
          
          {/* Launch info */}
          <div className="text-center mb-4 md:mb-6 w-full">
            <div className="text-xl md:text-2xl mb-3 md:mb-4 tracking-wide text-white">Launching Soon</div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {techItems.map((tech) => (
                <span
                  key={tech}
                  className="tech-pill text-sm md:text-base px-3 py-1 md:px-4 md:py-2 bg-black/40 backdrop-blur-sm rounded-full text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Notify form */}
          <div className="w-full max-w-sm md:max-w-md mb-4">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-black/30 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-l-md w-full text-white placeholder:text-gray-500 focus:outline-none text-sm md:text-base"
              />
              <button
                className="bg-gradient-to-r from-gray-200 to-white text-black px-4 py-2 md:px-6 md:py-3 rounded-r-md font-medium whitespace-nowrap text-sm md:text-base"
              >
                Notify Me
              </button>
            </div>
          </div>
        </main>
        
        {/* Contact section */}
        <div className="text-center w-full py-3 md:py-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center text-sm md:text-base">
            <a 
              href="mailto:abrar@lumira.tech"
              className="text-gray-400 hover:text-white"
            >
              abrar@lumira.tech
            </a>
            <a 
              href="mailto:aaqil@lumira.tech"
              className="text-gray-400 hover:text-white"
            >
              aaqil@lumira.tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
