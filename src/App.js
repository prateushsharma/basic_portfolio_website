import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import Skillsection from './Skills';
import ContactSection from './ContactSection';
import Footer from './Footer';


const App = () => {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skillsection />
      <button onClick={toggleServices}>
        {showServices ? 'Hide Services' : 'Show Services'}
      </button>
      {showServices && <ServicesSection />}
      
            <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
