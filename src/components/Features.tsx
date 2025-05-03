
import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesProps {
  language: string;
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const content = {
    en: {
      heading: "Why Choose Thiqah?",
      description: "We're dedicated to providing exceptional services with a focus on quality, reliability, and customer satisfaction.",
      features: [
        "Professional expertise in real estate marketing",
        "Comprehensive interior design solutions",
        "High-quality cleaning services",
        "Wide range of rental options",
        "Extensive finishing supplies catalog",
        "Safe and reliable furniture moving"
      ],
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Learn more about us"
    },
    ar: {
      heading: "لماذا تختار الثقة؟",
      description: "نحن ملتزمون بتقديم خدمات استثنائية مع التركيز على الجودة والموثوقية ورضا العملاء.",
      features: [
        "خبرة احترافية في تسويق العقارات",
        "حلول شاملة للتصميم الداخلي",
        "خدمات تنظيف عالية الجودة",
        "مجموعة واسعة من خيارات الإيجار",
        "كتالوج واسع من مستلزمات التشطيب",
        "نقل آمن وموثوق للأثاث"
      ],
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "تعرف على المزيد عنا"
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <section className={`py-20 bg-gray-50 ${language === 'ar' ? 'arabic' : 'english'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={currentContent.image} 
                alt="Thiqah Services" 
                className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-6 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.heading}
            </h2>
            
            <p className={`text-lg text-gray-600 mb-8 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {currentContent.features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 bg-thiqah-blue rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className={`${language === 'ar' ? 'mr-3 font-cairo' : 'ml-3'} text-gray-700`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
            <a 
              href="/about" 
              className={`inline-block bg-thiqah-blue text-white py-3 px-6 rounded-md font-medium hover:bg-thiqah-darkblue transition-colors ${language === 'ar' ? 'font-cairo' : ''}`}
            >
              {currentContent.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
