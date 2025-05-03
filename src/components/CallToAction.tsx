
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTAProps {
  language: string;
}

const CallToAction: React.FC<CTAProps> = ({ language }) => {
  const content = {
    en: {
      heading: "Ready to Transform Your Space?",
      description: "Contact us today to discuss your real estate and interior design needs.",
      buttonText: "Get in Touch",
      trackText: "Track Your Shipment"
    },
    ar: {
      heading: "هل أنت جاهز لتحويل مساحتك؟",
      description: "اتصل بنا اليوم لمناقشة احتياجاتك العقارية والتصميم الداخلي.",
      buttonText: "تواصل معنا",
      trackText: "تتبع شحنتك"
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <section className="bg-thiqah-blue py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.heading}
          </h2>
          
          <p className={`text-lg text-gray-200 mb-8 ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.description}
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              className="bg-white text-thiqah-blue hover:bg-gray-100 transition-colors"
            >
              {currentContent.buttonText}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-colors"
            >
              {currentContent.trackText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
