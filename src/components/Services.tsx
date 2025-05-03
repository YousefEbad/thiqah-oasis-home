
import React from 'react';
import { Home, Package, MapPin, Phone, List, Globe } from 'lucide-react';

interface ServicesProps {
  language: string;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = {
    en: {
      heading: "Our Services",
      subheading: "Comprehensive solutions for all your real estate needs",
      services: [
        {
          title: "Real Estate Marketing",
          description: "Professional marketing solutions for property owners and developers.",
          icon: Home
        },
        {
          title: "Interior Design Finishing",
          description: "Expert interior design services to transform your spaces.",
          icon: Package
        },
        {
          title: "Post-Finishing Cleaning",
          description: "Thorough cleaning services after construction and renovation work.",
          icon: List
        },
        {
          title: "Rental Services",
          description: "Furnished rooms and apartments in various compounds across Cairo.",
          icon: MapPin
        },
        {
          title: "Finishing Supplies",
          description: "General supplies for all your finishing needs.",
          icon: Package
        },
        {
          title: "Furniture Moving",
          description: "Safe and reliable furniture moving services within Cairo.",
          icon: Globe
        }
      ]
    },
    ar: {
      heading: "خدماتنا",
      subheading: "حلول شاملة لجميع احتياجاتك العقارية",
      services: [
        {
          title: "تسويق العقارات",
          description: "حلول تسويق احترافية لملاك العقارات والمطورين.",
          icon: Home
        },
        {
          title: "تشطيبات التصميم الداخلي",
          description: "خدمات تصميم داخلي احترافية لتحويل مساحاتك.",
          icon: Package
        },
        {
          title: "خدمات التنظيف بعد التشطيب",
          description: "خدمات تنظيف شاملة بعد أعمال البناء والتجديد.",
          icon: List
        },
        {
          title: "خدمات التأجير",
          description: "غرف وشقق مفروشة في مجمعات متنوعة في القاهرة.",
          icon: MapPin
        },
        {
          title: "مستلزمات التشطيبات",
          description: "مستلزمات عامة لجميع احتياجات التشطيب الخاصة بك.",
          icon: Package
        },
        {
          title: "نقل الأثاث",
          description: "خدمات نقل أثاث آمنة وموثوقة داخل القاهرة.",
          icon: Globe
        }
      ]
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <section className={`py-20 bg-white ${language === 'ar' ? 'arabic' : 'english'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.heading}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.subheading}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`flex items-center mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="bg-thiqah-blue/10 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-thiqah-blue" />
                </div>
                <h3 className={`text-xl font-semibold ml-3 ${language === 'ar' ? 'mr-3 ml-0 font-cairo' : ''}`}>
                  {service.title}
                </h3>
              </div>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
