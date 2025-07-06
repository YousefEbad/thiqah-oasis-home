import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const content = {
    en: {
      hero: {
        title: "Contact Us",
        subtitle: "Get in touch with our team",
        description: "We're here to help and answer any questions you might have. We look forward to hearing from you."
      },
      contactInfo: {
        title: "Contact Information",
        address: "123 Real Estate Street, Cairo, Egypt",
        phone: "+20 123 456 7890",
        email: "info@thiqah.com",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM"
      },
      form: {
        title: "Send us a Message",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        placeholder: {
          name: "Enter your full name",
          email: "Enter your email address",
          phone: "Enter your phone number",
          subject: "Enter subject",
          message: "Enter your message here..."
        }
      },
      locations: {
        title: "Our Locations",
        items: [
          {
            name: "Cairo Office",
            address: "123 Real Estate Street, Cairo, Egypt",
            phone: "+20 123 456 7890"
          },
          {
            name: "Alexandria Office",
            address: "456 Business District, Alexandria, Egypt",
            phone: "+20 123 456 7891"
          }
        ]
      }
    },
    ar: {
      hero: {
        title: "اتصل بنا",
        subtitle: "تواصل مع فريقنا",
        description: "نحن هنا للمساعدة والإجابة على أي أسئلة قد تكون لديك. نتطلع لسماع منك."
      },
      contactInfo: {
        title: "معلومات الاتصال",
        address: "123 شارع العقارات، القاهرة، مصر",
        phone: "+20 123 456 7890",
        email: "info@thiqah.com",
        hours: "الاثنين - الجمعة: 9:00 ص - 6:00 م"
      },
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "رسالتك",
        submit: "إرسال الرسالة",
        placeholder: {
          name: "أدخل اسمك الكامل",
          email: "أدخل بريدك الإلكتروني",
          phone: "أدخل رقم هاتفك",
          subject: "أدخل الموضوع",
          message: "أدخل رسالتك هنا..."
        }
      },
      locations: {
        title: "مواقعنا",
        items: [
          {
            name: "مكتب القاهرة",
            address: "123 شارع العقارات، القاهرة، مصر",
            phone: "+20 123 456 7890"
          },
          {
            name: "مكتب الإسكندرية",
            address: "456 منطقة الأعمال، الإسكندرية، مصر",
            phone: "+20 123 456 7891"
          }
        ]
      }
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className={`text-3xl font-bold text-thiqah-blue mb-8 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {currentContent.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.form.name}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.placeholder.name}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.form.email}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.placeholder.email}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.form.phone}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.placeholder.phone}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.form.subject}
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.placeholder.subject}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {currentContent.form.message}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={currentContent.form.placeholder.message}
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-thiqah-blue hover:bg-thiqah-blue/90">
                  <Send className="h-4 w-4 mr-2" />
                  {currentContent.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className={`text-3xl font-bold text-thiqah-blue mb-8 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {currentContent.contactInfo.title}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-thiqah-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-thiqah-blue" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      Address
                    </h3>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.contactInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-thiqah-blue/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-thiqah-blue" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      Phone
                    </h3>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.contactInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-thiqah-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-thiqah-blue" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      Email
                    </h3>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.contactInfo.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-thiqah-blue/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-thiqah-blue" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-900 mb-1 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      Business Hours
                    </h3>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.locations.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.locations.items.map((location, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className={`text-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-xl font-semibold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-thiqah-blue mr-3" />
                      <span className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                        {location.address}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-thiqah-blue mr-3" />
                      <span className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                        {location.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className={`text-gray-500 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {language === 'ar' ? 'خريطة تفاعلية قريباً' : 'Interactive Map Coming Soon'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default ContactUs; 