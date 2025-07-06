import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Package, MapPin, Phone, List, Globe, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OurServices = () => {
  const [language, setLanguage] = useState('en');
  
  const content = {
    en: {
      hero: {
        title: "Our Services",
        subtitle: "Comprehensive Real Estate Solutions",
        description: "Discover our complete range of professional services designed to meet all your real estate needs. From marketing to finishing, we've got you covered."
      },
      services: [
        {
          id: "real-estate",
          title: "Real Estate Marketing",
          subtitle: "Professional Property Promotion",
          description: "Comprehensive marketing solutions for property owners and developers. We help you reach the right audience and maximize your property's potential.",
          features: [
            "Digital Marketing Campaigns",
            "Property Photography & Videography",
            "Social Media Management",
            "Lead Generation & Management",
            "Market Analysis & Pricing",
            "Virtual Tours & 3D Walkthroughs"
          ],
          icon: Home,
          color: "from-blue-500 to-blue-600"
        },
        {
          id: "interior-design",
          title: "Interior Design Finishing",
          subtitle: "Transform Your Spaces",
          description: "Expert interior design and finishing services to create beautiful, functional, and modern living spaces that reflect your style and needs.",
          features: [
            "Custom Interior Design",
            "Space Planning & Layout",
            "Material Selection & Sourcing",
            "Furniture & Decor Selection",
            "Lighting Design & Installation",
            "Project Management & Supervision"
          ],
          icon: Package,
          color: "from-purple-500 to-purple-600"
        },
        {
          id: "cleaning",
          title: "Post-Finishing Cleaning",
          subtitle: "Professional Cleaning Services",
          description: "Thorough cleaning services after construction and renovation work. We ensure your space is spotless and ready for occupancy.",
          features: [
            "Construction Debris Removal",
            "Deep Cleaning Services",
            "Window & Glass Cleaning",
            "Floor & Carpet Cleaning",
            "Kitchen & Bathroom Sanitization",
            "Final Inspection & Quality Check"
          ],
          icon: List,
          color: "from-green-500 to-green-600"
        },
        {
          id: "rental",
          title: "Rental Services",
          subtitle: "Furnished Accommodations",
          description: "Premium furnished rooms and apartments in various compounds across Cairo. Comfortable, well-maintained spaces for short and long-term stays.",
          features: [
            "Furnished Apartments & Rooms",
            "Short & Long-term Rentals",
            "Prime Locations Across Cairo",
            "24/7 Maintenance Support",
            "Flexible Payment Options",
            "Utilities & Amenities Included"
          ],
          icon: MapPin,
          color: "from-orange-500 to-orange-600"
        },
        {
          id: "supplies",
          title: "General Finishing Supplies",
          subtitle: "Quality Materials & Tools",
          description: "Comprehensive supply of finishing materials, tools, and equipment for all your construction and renovation projects.",
          features: [
            "Paint & Coatings",
            "Flooring Materials",
            "Plumbing & Electrical Supplies",
            "Tools & Equipment Rental",
            "Safety Equipment",
            "Bulk Material Supply"
          ],
          icon: Package,
          color: "from-red-500 to-red-600"
        },
        {
          id: "moving",
          title: "Furniture Moving",
          subtitle: "Safe & Reliable Moving",
          description: "Professional furniture moving services within Cairo. We handle your belongings with care and ensure safe, timely delivery.",
          features: [
            "Residential & Commercial Moving",
            "Furniture Assembly & Disassembly",
            "Packing & Unpacking Services",
            "Insurance Coverage",
            "Same-day & Scheduled Moving",
            "Storage Solutions"
          ],
          icon: Globe,
          color: "from-indigo-500 to-indigo-600"
        }
      ],
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Contact us today to discuss your project requirements",
        button: "Get Free Consultation"
      }
    },
    ar: {
      hero: {
        title: "خدماتنا",
        subtitle: "حلول عقارية شاملة",
        description: "اكتشف مجموعة خدماتنا المهنية الكاملة المصممة لتلبية جميع احتياجاتك العقارية. من التسويق إلى التشطيبات، نحن نغطي كل شيء."
      },
      services: [
        {
          id: "real-estate",
          title: "تسويق العقارات",
          subtitle: "ترويج احترافي للعقارات",
          description: "حلول تسويق شاملة لملاك العقارات والمطورين. نساعدك في الوصول للجمهور المناسب وتعظيم إمكانات عقارك.",
          features: [
            "حملات التسويق الرقمي",
            "التصوير الفوتوغرافي والفيديو للعقارات",
            "إدارة وسائل التواصل الاجتماعي",
            "توليد وإدارة العملاء المحتملين",
            "تحليل السوق والتسعير",
            "الجولات الافتراضية والجولات ثلاثية الأبعاد"
          ],
          icon: Home,
          color: "from-blue-500 to-blue-600"
        },
        {
          id: "interior-design",
          title: "تشطيبات التصميم الداخلي",
          subtitle: "حول مساحاتك",
          description: "خدمات تصميم داخلي وتشطيبات احترافية لإنشاء مساحات معيشية جميلة وعملية وحديثة تعكس أسلوبك واحتياجاتك.",
          features: [
            "تصميم داخلي مخصص",
            "تخطيط المساحة والتخطيط",
            "اختيار وتوريد المواد",
            "اختيار الأثاث والديكور",
            "تصميم وتركيب الإضاءة",
            "إدارة ومتابعة المشروع"
          ],
          icon: Package,
          color: "from-purple-500 to-purple-600"
        },
        {
          id: "cleaning",
          title: "خدمات التنظيف بعد التشطيب",
          subtitle: "خدمات تنظيف احترافية",
          description: "خدمات تنظيف شاملة بعد أعمال البناء والتجديد. نضمن أن مساحتك نظيفة وجاهزة للسكن.",
          features: [
            "إزالة مخلفات البناء",
            "خدمات التنظيف العميق",
            "تنظيف النوافذ والزجاج",
            "تنظيف الأرضيات والسجاد",
            "تعقيم المطبخ والحمام",
            "الفحص النهائي ومراقبة الجودة"
          ],
          icon: List,
          color: "from-green-500 to-green-600"
        },
        {
          id: "rental",
          title: "خدمات التأجير",
          subtitle: "إقامات مفروشة",
          description: "شقق وغرف مفروشة فاخرة في مجمعات متنوعة في القاهرة. مساحات مريحة ومحفوظة جيداً للإقامات القصيرة والطويلة.",
          features: [
            "شقق وغرف مفروشة",
            "تأجير قصير وطويل المدى",
            "مواقع مميزة في القاهرة",
            "دعم صيانة 24/7",
            "خيارات دفع مرنة",
            "المرافق والخدمات مشمولة"
          ],
          icon: MapPin,
          color: "from-orange-500 to-orange-600"
        },
        {
          id: "supplies",
          title: "مستلزمات التشطيبات العامة",
          subtitle: "مواد وأدوات عالية الجودة",
          description: "توريد شامل لمواد التشطيبات والأدوات والمعدات لجميع مشاريع البناء والتجديد الخاصة بك.",
          features: [
            "الدهانات والطلاءات",
            "مواد الأرضيات",
            "مستلزمات السباكة والكهرباء",
            "تأجير الأدوات والمعدات",
            "معدات السلامة",
            "توريد المواد بالجملة"
          ],
          icon: Package,
          color: "from-red-500 to-red-600"
        },
        {
          id: "moving",
          title: "نقل الأثاث",
          subtitle: "نقل آمن وموثوق",
          description: "خدمات نقل أثاث احترافية داخل القاهرة. نتعامل مع متعلقاتك بعناية وضمان التسليم الآمن في الوقت المحدد.",
          features: [
            "نقل سكني وتجاري",
            "تجميع وفك الأثاث",
            "خدمات التعبئة والتفريغ",
            "تغطية التأمين",
            "نقل في نفس اليوم ومجدول",
            "حلول التخزين"
          ],
          icon: Globe,
          color: "from-indigo-500 to-indigo-600"
        }
      ],
      cta: {
        title: "هل أنت مستعد للبدء؟",
        subtitle: "اتصل بنا اليوم لمناقشة متطلبات مشروعك",
        button: "احصل على استشارة مجانية"
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {currentContent.services.map((service, index) => (
              <div key={service.id} className={`${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-12`}>
                {/* Service Content */}
                <div className={`flex-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className="mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${service.color} text-white mb-4`}>
                      <service.icon className="h-4 w-4 mr-2" />
                      {service.subtitle}
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {service.title}
                    </h2>
                    <p className={`text-lg text-gray-600 mb-6 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className={`text-gray-700 ${language === 'ar' ? 'font-cairo' : ''}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-thiqah-blue hover:bg-thiqah-blue/90">
                    {language === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                
                {/* Service Image/Icon */}
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${service.color} p-12 rounded-2xl text-white text-center`}>
                    <service.icon className="h-24 w-24 mx-auto mb-6" />
                    <h3 className={`text-2xl font-bold mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {service.title}
                    </h3>
                    <p className={`opacity-90 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'ar' ? 'font-cairo' : ''}`}>
              {language === 'ar' 
                ? 'نحن نقدم خدمات عالية الجودة مع التركيز على رضا العملاء والنتائج الممتازة'
                : 'We provide high-quality services with a focus on customer satisfaction and excellent results'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-thiqah-blue/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-10 w-10 text-thiqah-blue" />
              </div>
              <h3 className={`text-xl font-semibold text-thiqah-blue mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' ? 'جودة عالية' : 'High Quality'}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' 
                  ? 'نحن نلتزم بأعلى معايير الجودة في جميع خدماتنا'
                  : 'We are committed to the highest quality standards in all our services'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-thiqah-blue/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-thiqah-blue" />
              </div>
              <h3 className={`text-xl font-semibold text-thiqah-blue mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience'}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' 
                  ? 'سنوات من الخبرة في مجال العقارات والخدمات المرتبطة'
                  : 'Years of experience in real estate and related services'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-thiqah-blue/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-10 w-10 text-thiqah-blue" />
              </div>
              <h3 className={`text-xl font-semibold text-thiqah-blue mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' ? 'دعم 24/7' : '24/7 Support'}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' 
                  ? 'دعم العملاء على مدار الساعة لجميع استفساراتك'
                  : 'Round-the-clock customer support for all your queries'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-thiqah-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.cta.title}
            </h2>
            <p className={`text-xl mb-8 opacity-90 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.cta.subtitle}
            </p>
            <Button size="lg" className="bg-white text-thiqah-blue hover:bg-gray-100">
              {currentContent.cta.button}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default OurServices; 