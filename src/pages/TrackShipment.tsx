import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Package, Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TrackShipment = () => {
  const [language, setLanguage] = useState('en');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    en: {
      hero: {
        title: "Track Your Shipment",
        subtitle: "Real-time tracking for your deliveries",
        description: "Enter your tracking number to get real-time updates on your shipment status and location."
      },
      form: {
        title: "Enter Tracking Number",
        placeholder: "Enter your tracking number",
        button: "Track Shipment",
        example: "Example: THQ123456789"
      },
      status: {
        title: "Shipment Status",
        notFound: "No shipment found with this tracking number",
        details: "Shipment Details",
        timeline: "Delivery Timeline"
      },
      features: {
        title: "Why Track with Us",
        items: [
          {
            title: "Real-time Updates",
            description: "Get instant updates on your shipment status"
          },
          {
            title: "Secure Tracking",
            description: "Your shipment information is protected and secure"
          },
          {
            title: "24/7 Support",
            description: "Round-the-clock customer support for all your queries"
          }
        ]
      }
    },
    ar: {
      hero: {
        title: "تتبع شحنتك",
        subtitle: "تتبع فوري لشحناتك",
        description: "أدخل رقم التتبع للحصول على تحديثات فورية حول حالة شحنتك وموقعها."
      },
      form: {
        title: "أدخل رقم التتبع",
        placeholder: "أدخل رقم التتبع الخاص بك",
        button: "تتبع الشحنة",
        example: "مثال: THQ123456789"
      },
      status: {
        title: "حالة الشحنة",
        notFound: "لم يتم العثور على شحنة بهذا الرقم",
        details: "تفاصيل الشحنة",
        timeline: "جدول التسليم"
      },
      features: {
        title: "لماذا تتتبع معنا",
        items: [
          {
            title: "تحديثات فورية",
            description: "احصل على تحديثات فورية حول حالة شحنتك"
          },
          {
            title: "تتبع آمن",
            description: "معلومات شحنتك محمية وآمنة"
          },
          {
            title: "دعم 24/7",
            description: "دعم العملاء على مدار الساعة لجميع استفساراتك"
          }
        ]
      }
    }
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  // Mock shipment data for demonstration
  const mockShipmentData = {
    trackingNumber: "THQ123456789",
    status: "In Transit",
    estimatedDelivery: "2024-01-15",
    currentLocation: "Cairo Distribution Center",
    timeline: [
      {
        status: "Order Confirmed",
        date: "2024-01-10",
        time: "09:00 AM",
        completed: true
      },
      {
        status: "Package Picked Up",
        date: "2024-01-11",
        time: "02:30 PM",
        completed: true
      },
      {
        status: "In Transit",
        date: "2024-01-12",
        time: "08:15 AM",
        completed: true
      },
      {
        status: "Out for Delivery",
        date: "2024-01-15",
        time: "07:00 AM",
        completed: false
      },
      {
        status: "Delivered",
        date: "2024-01-15",
        time: "02:00 PM",
        completed: false
      }
    ]
  };

  const handleTrackShipment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (trackingNumber === mockShipmentData.trackingNumber) {
        setShipmentStatus(mockShipmentData);
      } else {
        setShipmentStatus(null);
      }
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Order Confirmed':
      case 'Package Picked Up':
      case 'In Transit':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Out for Delivery':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
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

      {/* Tracking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className={`text-center mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className={`text-3xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {currentContent.form.title}
              </h2>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {currentContent.form.example}
              </p>
            </div>
            
            <form onSubmit={handleTrackShipment} className="space-y-6">
              <div className="flex gap-4">
                <Input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={currentContent.form.placeholder}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-thiqah-blue hover:bg-thiqah-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      {currentContent.form.button}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Shipment Status */}
      {shipmentStatus && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h2 className={`text-3xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {currentContent.status.title}
                </h2>
              </div>

              {/* Status Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-semibold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.status.details}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                          Tracking Number:
                        </span>
                        <span className="font-semibold">{shipmentStatus.trackingNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                          Status:
                        </span>
                        <span className="font-semibold text-thiqah-blue">{shipmentStatus.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                          Estimated Delivery:
                        </span>
                        <span className="font-semibold">{shipmentStatus.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                          Current Location:
                        </span>
                        <span className="font-semibold">{shipmentStatus.currentLocation}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                      {currentContent.status.timeline}
                    </h3>
                    <div className="space-y-4">
                      {shipmentStatus.timeline.map((item: any, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {getStatusIcon(item.status)}
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold ${language === 'ar' ? 'font-cairo' : ''}`}>
                              {item.status}
                            </div>
                            <div className={`text-sm text-gray-500 ${language === 'ar' ? 'font-cairo' : ''}`}>
                              {item.date} at {item.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Not Found Message */}
      {shipmentStatus === null && trackingNumber && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold text-gray-700 mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                {currentContent.status.notFound}
              </h3>
              <p className={`text-gray-500 ${language === 'ar' ? 'font-cairo' : ''}`}>
                Please check your tracking number and try again.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-thiqah-blue mb-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {currentContent.features.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-thiqah-blue/10 p-6 rounded-lg">
                  <Package className="h-12 w-12 text-thiqah-blue mx-auto mb-4" />
                  <h3 className={`text-xl font-semibold text-thiqah-blue mb-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    {feature.description}
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

export default TrackShipment; 