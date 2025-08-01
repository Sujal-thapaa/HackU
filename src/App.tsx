import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalaxySection from './components/GalaxySection';
import About from './components/About';

import WhyParticipate from './components/WhyParticipate';
import Explore from './components/Explore';
import Judges from './components/Judges';
import Requirements from './components/Requirements';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      <About />
      <GalaxySection />
      <WhyParticipate />
      <Judges />
      <Requirements />
      <Prizes />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;