
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      about: {
        title: "About Thiqah",
        description: "Thiqah is a leading provider of real estate marketing, interior design finishing, cleaning, rental, and moving services in Cairo."
      },
      links: {
        title: "Quick Links",
        items: [
          { name: "Home", link: "/" },
          { name: "About Us", link: "/about" },
          { name: "Our Services", link: "/#services" },
          { name: "Contact Us", link: "/contact" },
          { name: "Track Shipment", link: "/track" }
        ]
      },
      services: {
        title: "Our Services",
        items: [
          { name: "Real Estate Marketing", link: "/services/real-estate" },
          { name: "Interior Design", link: "/services/interior-design" },
          { name: "Cleaning Services", link: "/services/cleaning" },
          { name: "Rental Services", link: "/services/rental" },
          { name: "Finishing Supplies", link: "/services/supplies" },
          { name: "Furniture Moving", link: "/services/moving" }
        ]
      },
      contact: {
        title: "Contact Us",
        address: "Cairo, Egypt",
        phone: "+20 01093237935",
        email: "ebadaelsayed3030@gmail.com",
        hours: "Sun - Thu: 9:00 AM - 5:00 PM"
      },
      copyright: "© 2022 Thiqah. All rights reserved."
    },
    ar: {
      about: {
        title: "عن الثقة",
        description: "الثقة هي شركة رائدة في مجال تسويق العقارات وتشطيبات التصميم الداخلي والتنظيف والإيجار وخدمات النقل في القاهرة."
      },
      links: {
        title: "روابط سريعة",
        items: [
          { name: "الرئيسية", link: "/" },
          { name: "من نحن", link: "/about" },
          { name: "خدماتنا", link: "/#services" },
          { name: "اتصل بنا", link: "/contact" },
          { name: "تتبع الشحنة", link: "/track" }
        ]
      },
      services: {
        title: "خدماتنا",
        items: [
          { name: "تسويق العقارات", link: "/services/real-estate" },
          { name: "التصميم الداخلي", link: "/services/interior-design" },
          { name: "خدمات التنظيف", link: "/services/cleaning" },
          { name: "خدمات التأجير", link: "/services/rental" },
          { name: "مستلزمات التشطيب", link: "/services/supplies" },
          { name: "نقل الأثاث", link: "/services/moving" }
        ]
      },
      contact: {
        title: "اتصل بنا",
        address: "القاهرة، مصر",
        phone: "+20 100 000 0000",
        email: "info@thiqah.com",
        hours: "الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً"
      },
      copyright: "© 2022 الثقة. جميع الحقوق محفوظة."
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <footer className={`bg-gray-900 text-white pt-16 ${language === 'ar' ? 'arabic' : 'english'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.about.title}
            </h3>
            <div className="flex items-center mb-2">
              <img 
                src="/public/logo.png" 
                className="w-[70px]" 
                alt="Thiqah Logo" 
              />
              <span className={`text-xl font-bold text-white ${language === 'ar' ? 'ml-0' : ''}`}>
                {language === 'ar' ? 'الثقة' : 'Thiqah'}
              </span>
            </div>
            <p className={`text-gray-400 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.about.description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.links.title}
            </h3>
            <ul className="space-y-2">
              {currentContent.links.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className={`text-gray-400 hover:text-white transition-colors ${language === 'ar' ? 'font-cairo' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.services.title}
            </h3>
            <ul className="space-y-2">
              {currentContent.services.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className={`text-gray-400 hover:text-white transition-colors ${language === 'ar' ? 'font-cairo' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.contact.title}
            </h3>
            <div className="space-y-3">
              <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="h-5 w-5 text-thiqah-lightblue" />
                <span className={`${language === 'ar' ? 'mr-2 font-cairo' : 'ml-2'} text-gray-400`}>
                  {currentContent.contact.address}
                </span>
              </div>
              
              <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Phone className="h-5 w-5 text-thiqah-lightblue" />
                <span className={`${language === 'ar' ? 'mr-2 font-cairo' : 'ml-2'} text-gray-400`}>
                  {currentContent.contact.phone}
                </span>
              </div>
              
              <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Mail className="h-5 w-5 text-thiqah-lightblue" />
                <span className={`${language === 'ar' ? 'mr-2 font-cairo' : 'ml-2'} text-gray-400`}>
                  {currentContent.contact.email}
                </span>
              </div>
              
              <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Clock className="h-5 w-5 text-thiqah-lightblue" />
                <span className={`${language === 'ar' ? 'mr-2 font-cairo' : 'ml-2'} text-gray-400`}>
                  {currentContent.contact.hours}
                </span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/yousefomar6464/?hl=en" target='blank' className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 pb-6 text-center">
          <p className={`text-gray-400 ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
