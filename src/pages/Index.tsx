
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState('en');
  
  return (
    <div className={`min-h-screen ${language === 'ar' ? 'arabic' : 'english'}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="pt-20">
        <Hero language={language} />
        <Services language={language} />
        <Features language={language} />
        <CallToAction language={language} />
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Index;
