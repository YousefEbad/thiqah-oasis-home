
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const content = {
    en: {
      title: "404 - Page Not Found",
      message: "Sorry, the page you are looking for does not exist.",
      button: "Return to Home"
    },
    ar: {
      title: "404 - الصفحة غير موجودة",
      message: "عذرًا، الصفحة التي تبحث عنها غير موجودة.",
      button: "العودة إلى الصفحة الرئيسية"
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'arabic' : 'english'}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className={`text-6xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.title}
          </h1>
          <p className={`text-xl text-gray-600 mb-8 ${language === 'ar' ? 'font-cairo' : ''}`}>
            {currentContent.message}
          </p>
          <Button asChild>
            <a href="/" className={language === 'ar' ? 'font-cairo' : ''}>
              {currentContent.button}
            </a>
          </Button>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default NotFound;
