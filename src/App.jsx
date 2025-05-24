import { useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LumiraLogo from '@assets/Lumira.svg';
import '@assets/Fonts/fonts.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

// Text for technologies
const techItems = ["AI", "Cloud Computing", "Security"];

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    // integrate GSAP ScrollTrigger with Locomotive Scroll
    scroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    // GSAP Animations for Hero Section
    /*
    gsap.from("#hero h1", {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: "#hero h1",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    });

    gsap.from("#hero p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#hero p",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    });

    gsap.from("#hero .flex-wrap", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: "#hero .flex-wrap",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    });

    gsap.from("#hero .w-full", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: "#hero .w-full",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    });
    */


    return () => {
      scroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => scroll.update());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    console.log("Rendering App component"),
    <div className="bg-black text-white overflow-hidden relative min-h-screen flex flex-col" data-scroll-container>
      {/* Animated gradient background removed */}

      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-4 py-20 min-h-screen relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black" data-scroll-section>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-2 md:mb-4 font-aicon-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 drop-shadow-lg relative z-10" data-scroll data-scroll-speed="0.5">
            LUMIRA
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8" data-scroll data-scroll-speed="0.2">
            The future of technology training
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8" data-scroll data-scroll-speed="0.3">
            {techItems.map((tech) => (
              <span
                key={tech}
                className="text-sm md:text-base px-3 py-1 md:px-4 md:py-2 bg-black/40 backdrop-blur-sm rounded-full text-gray-200 border border-gray-600 hover:bg-black/60 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="w-full max-w-sm md:max-w-md" data-scroll data-scroll-speed="0.4">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-black/30 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-l-md w-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm md:text-base border border-gray-600 border-r-0"
              />
              <button
                className="bg-gradient-to-r from-gray-200 to-white text-black px-4 py-2 md:px-6 md:py-3 rounded-r-md font-medium whitespace-nowrap text-sm md:text-base border border-gray-600 hover:translate-y-[-1px] hover:shadow-lg transition duration-200"
              >
                Notify Me
          </button>
        </div>
      </div>
    </section>

        {/* Add other sections here (About, Services, Contact) */}
        {/* Example About Section */}
        <section id="about" className="py-20 px-4 text-center min-h-screen flex flex-col items-center justify-center" data-scroll-section>
          <h2 className="text-4xl font-bold mb-8 font-aicon-bold" data-scroll data-scroll-speed="0.5">About Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" data-scroll data-scroll-speed="0.2">
            LUMIRA is dedicated to providing cutting-edge training in the most in-demand technology fields. Our mission is to empower individuals with the skills needed to thrive in the future of technology.
          </p>
        </section>

        {/* Example Services Section */}
        <section id="services" className="py-20 px-4 text-center bg-black/30 min-h-screen flex flex-col items-center justify-center" data-scroll-section>
          <h2 className="text-4xl font-bold mb-8 font-aicon-bold" data-scroll data-scroll-speed="0.5">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8" data-scroll data-scroll-speed="0.3">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg max-w-sm border border-gray-600" data-scroll data-scroll-speed="0.2">
              <h3 className="text-2xl font-bold mb-4">AI Training</h3>
              <p className="text-gray-300">Comprehensive courses covering machine learning, deep learning, and AI applications.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg max-w-sm border border-gray-600" data-scroll data-scroll-speed="0.3">
              <h3 className="text-2xl font-bold mb-4">Cloud Computing</h3>
              <p className="text-gray-300">Hands-on training with major cloud platforms like AWS, Azure, and Google Cloud.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg max-w-sm border border-gray-600" data-scroll data-scroll-speed="0.4">
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-500">Learn to protect digital assets and systems from cyber threats.</p>
            </div>
          </div>
        </section>

        {/* Example Contact Section */}
        <section id="contact" className="py-20 px-4 text-center min-h-screen flex flex-col items-center justify-center" data-scroll-section>
           <h2 className="text-4xl font-bold mb-8 font-aicon-bold" data-scroll data-scroll-speed="0.5">Get in Touch</h2>
           <p className="text-lg text-gray-300 mb-8" data-scroll data-scroll-speed="0.2">
             Have questions? Reach out to us!
           </p>
           <div className="flex flex-col md:flex-row gap-6 justify-center text-lg" data-scroll data-scroll-speed="0.3">
             <a
               href="mailto:abrar@lumira.tech"
               className="text-gray-400 hover:text-white transition duration-300"
             >
               abrar@lumira.tech
             </a>
             <a
               href="mailto:aaqil@lumira.tech"
               className="text-gray-400 hover:text-white transition duration-300"
             >
               aaqil@lumira.tech
             </a>
           </div>
         </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
