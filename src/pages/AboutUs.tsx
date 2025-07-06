import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, CheckCircle, Building, Heart } from 'lucide-react';

const AboutUs = () => {
  const [language, setLanguage] = useState('en');
  
  const content = {
    en: {
      hero: {
        title: "About Thiqah",
        subtitle: "Your Trusted Partner in Real Estate Solutions",
        description: "We are a leading real estate company dedicated to providing comprehensive solutions for all your property needs. With years of experience and a commitment to excellence, we help clients achieve their real estate goals."
      },
      mission: {
        title: "Our Mission",
        description: "To provide exceptional real estate services that exceed client expectations while maintaining the highest standards of professionalism and integrity."
      },
      vision: {
        title: "Our Vision",
        description: "To become the most trusted and preferred real estate partner in Egypt, known for innovation, reliability, and customer satisfaction."
      },
      values: {
        title: "Our Values",
        items: [
          { title: "Integrity", description: "We conduct business with honesty and transparency" },
          { title: "Excellence", description: "We strive for the highest quality in everything we do" },
          { title: "Innovation", description: "We embrace new ideas and technologies" },
          { title: "Customer Focus", description: "Our clients' success is our priority" }
        ]
      },
      stats: {
        title: "Why Choose Us",
        items: [
          { number: "500+", label: "Happy Clients" },
          { number: "1000+", label: "Properties Sold" },
          { number: "50+", label: "Team Members" },
          { number: "10+", label: "Years Experience" }
        ]
      },
      team: {
        title: "Our Team",
        subtitle: "Meet the experts behind our success",
        members: [
          {
            name: "Ebada Elsayed",
            position: "CEO & Founder",
            description: "Over 15 years of experience in real estate development and management."
          },
          {
            name: "Walaa Mohamed",
            position: "Head of Marketing",
            description: "Expert in digital marketing and property promotion strategies."
          },
          {
            name: "Yousef Ebada",
            position: "Interior Design Director",
            description: "Specialized in creating beautiful and functional living spaces."
          }
        ]
      }
    },
    ar: {
      hero: {
        title: "عن الثقة",
        subtitle: "شريكك الموثوق في حلول العقارات",
        description: "نحن شركة عقارية رائدة متخصصة في تقديم حلول شاملة لجميع احتياجاتك العقارية. مع سنوات من الخبرة والتزام بالتميز، نساعد العملاء في تحقيق أهدافهم العقارية."
      },
      mission: {
        title: "مهمتنا",
        description: "تقديم خدمات عقارية استثنائية تتجاوز توقعات العملاء مع الحفاظ على أعلى معايير الاحترافية والنزاهة."
      },
      vision: {
        title: "رؤيتنا",
        description: "أن نصبح الشريك العقاري الأكثر ثقة والأولوية في مصر، معروفين بالابتكار والموثوقية ورضا العملاء."
      },
      values: {
        title: "قيمنا",
        items: [
          { title: "النزاهة", description: "نمارس الأعمال بأمانة وشفافية" },
          { title: "التميز", description: "نسعى لأعلى جودة في كل ما نقوم به" },
          { title: "الابتكار", description: "نتبنى الأفكار والتقنيات الجديدة" },
          { title: "تركيز العملاء", description: "نجاح عملائنا هو أولويتنا" }
        ]
      },
      stats: {
        title: "لماذا تختارنا",
        items: [
          { number: "+500", label: "عميل سعيد" },
          { number: "+1000", label: "عقار مباع" },
          { number: "+50", label: "عضو فريق" },
          { number: "+10", label: "سنوات خبرة" }
        ]
      },
      team: {
        title: "فريقنا",
        subtitle: "تعرف على الخبراء وراء نجاحنا",
        members: [
          {
            name: "عباده السيد",
            position: "الرئيس التنفيذي والمؤسس",
            description: "أكثر من 15 عاماً من الخبرة في تطوير وإدارة العقارات."
          },
          {
            name: "ولاء محمد",
            position: "رئيسة التسويق",
            description: "خبيرة في التسويق الرقمي واستراتيجيات الترويج العقاري."
          },
          {
            name: "يوسف عباده",
            position: "مدير التصميم الداخلي",
            description: "متخصص في إنشاء مساحات معيشية جميلة وعملية."
          }
        ]
      }
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'arabic' : 'english'}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-thiqah-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.hero.title}
            </h1>
            <h2 className={`text-xl md:text-2xl mb-6 opacity-90 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.hero.subtitle}
            </h2>
            <p className={`text-lg opacity-80 max-w-3xl mx-auto ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`text-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="bg-thiqah-blue/10 p-8 rounded-lg">
                <Target className="h-12 w-12 text-thiqah-blue mx-auto mb-4" />
                <h3 className={`text-2xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {currentContent.mission.title}
                </h3>
                <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {currentContent.mission.description}
                </p>
              </div>
            </div>
            <div className={`text-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="bg-thiqah-blue/10 p-8 rounded-lg">
                <Award className="h-12 w-12 text-thiqah-blue mx-auto mb-4" />
                <h3 className={`text-2xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {currentContent.vision.title}
                </h3>
                <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {currentContent.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="bg-thiqah-blue/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-thiqah-blue" />
                  </div>
                  <h3 className={`text-xl font-semibold text-thiqah-blue mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {value.title}
                  </h3>
                  <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-thiqah-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.stats.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentContent.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className={`text-lg opacity-90 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.team.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.team.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.team.members.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="bg-thiqah-blue/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-thiqah-blue" />
                  </div>
                  <h3 className={`text-xl font-semibold text-thiqah-blue mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {member.name}
                  </h3>
                  <p className={`text-gray-600 mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {member.position}
                  </p>
                  <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default AboutUs; 