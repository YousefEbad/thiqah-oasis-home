
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      heading: "Premium Real Estate & Interior Design Services",
      subheading: "Your trusted partner for real estate marketing, interior design, and more in Cairo",
      cta: "Explore Our Services",
      contactBtn: "Contact Us"
    },
    ar: {
      heading: "خدمات عقارية وتصميم داخلي متميزة",
      subheading: "شريكك الموثوق في تسويق العقارات والتصميم الداخلي والمزيد في القاهرة",
      cta: "استكشف خدماتنا",
      contactBtn: "اتصل بنا"
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <div className="relative bg-thiqah-blue text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center hero-gradient"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center py-20">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.heading}
          </h1>
          
          <p className={`text-lg md:text-xl max-w-2xl mb-8 text-gray-100 animate-fade-in ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.subheading}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              className="bg-white text-thiqah-blue hover:bg-gray-100 transition-colors px-8 animate-fade-in"
            >
              {currentContent.cta}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-colors px-8 animate-fade-in"
            >
              {currentContent.contactBtn}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,202.7C672,192,768,160,864,128C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
