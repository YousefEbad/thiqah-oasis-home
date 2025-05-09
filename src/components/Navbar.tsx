
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = {
    en: [
      { name: 'Home', link: '/' },
      { name: 'About Us', link: '/about' },
      { 
        name: 'Our Services', 
        link: '#',
        isDropdown: true,
        dropdownItems: [
          { name: 'Real Estate Marketing', link: '/services/real-estate' },
          { name: 'Interior Design Finishing', link: '/services/interior-design' },
          { name: 'Cleaning Services', link: '/services/cleaning' },
          { name: 'Rental Services', link: '/services/rental' },
          { name: 'General Finishing Supplies', link: '/services/supplies' },
          { name: 'Furniture Moving', link: '/services/moving' },
        ]
      },
      { name: 'Contact Us', link: '/contact' },
      { name: 'Track Shipment', link: '/track' },
    ],
    ar: [
      { name: 'الرئيسية', link: '/' },
      { name: 'من نحن', link: '/about' },
      { 
        name: 'خدماتنا', 
        link: '#',
        isDropdown: true,
        dropdownItems: [
          { name: 'تسويق العقارات', link: '/services/real-estate' },
          { name: 'تشطيبات التصميم الداخلي', link: '/services/interior-design' },
          { name: 'خدمات التنظيف', link: '/services/cleaning' },
          { name: 'خدمات التأجير', link: '/services/rental' },
          { name: 'مستلزمات التشطيبات العامة', link: '/services/supplies' },
          { name: 'نقل الأثاث', link: '/services/moving' },
        ]
      },
      { name: 'اتصل بنا', link: '/contact' },
      { name: 'تتبع الشحنة', link: '/track' },
    ]
  };

  return (
    <nav className={`fixed w-full z-50 bg-white shadow-md ${language === 'ar' ? 'arabic' : 'english'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/public/lovable-uploads/064e0a6f-ab11-467b-913e-c5a44cb4ef3f.png" 
                className="w-[70px] w-sm-[50px] w-xs-[30px]" 
                alt="Thiqah Logo" 
              />
              <span className={`ml-2 text-xl font-bold text-thiqah-blue ${language === 'ar' ? 'mr-2 ml-0' : ''}`}>
                {language === 'ar' ? 'الثقة' : 'Thiqah'}
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`${language === 'ar' ? 'flex flex-row-reverse' : 'flex'} space-x-4 items-center ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              {navItems[language === 'ar' ? 'ar' : 'en'].map((item, index) => (
                <div key={index} className={`${item.isDropdown ? 'dropdown relative' : ''}`}>
                  <a 
                    href={item.link}
                    className="navbar-link px-3 py-2 rounded-md text-sm md:text-base flex items-center"
                  >
                    {item.name}
                    {item.isDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  
                  {item.isDropdown && (
                    <div className={`dropdown-menu min-w-[200px] ${language === 'ar' ? 'right-0' : 'left-0'}`}>
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-thiqah-blue"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Language Toggle */}
              <div className="dropdown relative ml-6">
                <button className="navbar-link px-3 py-2 rounded-md text-sm flex items-center">
                  <Globe className="mr-1 h-4 w-4" />
                  {language === 'ar' ? 'العربية' : 'English'}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={`dropdown-menu min-w-[120px] ${language === 'ar' ? 'right-0' : 'left-0'}`}>
                  <button
                    onClick={() => setLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-thiqah-blue"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ar')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-thiqah-blue"
                  >
                    العربية
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <div className="dropdown relative ml-2 mr-4">
              <button className="navbar-link px-2 py-1 rounded-md text-sm flex items-center">
                <Globe className="mr-1 h-4 w-4" />
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`dropdown-menu min-w-[120px] ${language === 'ar' ? 'right-0' : 'left-0'}`}>
                <button
                  onClick={() => setLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-thiqah-blue"
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-thiqah-blue"
                >
                  العربية
                </button>
              </div>
            </div>
            <Button
              onClick={toggleMenu}
              variant="outline"
              size="icon"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden bg-white shadow-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems[language === 'ar' ? 'ar' : 'en'].map((item, index) => (
              <div key={index}>
                {item.isDropdown ? (
                  <>
                    <button
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-thiqah-blue hover:bg-gray-50 flex justify-between items-center"
                      onClick={(e) => {
                        e.currentTarget.nextElementSibling?.classList.toggle('hidden');
                      }}
                    >
                      {item.name}
                      <ChevronDown className={`${language === 'ar' ? 'ml-0 mr-auto' : 'mr-0 ml-auto'} h-4 w-4`} />
                    </button>
                    <div className="hidden ml-4 pl-4 border-l-2 border-gray-200">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-thiqah-blue hover:bg-gray-50"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.link}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-thiqah-blue hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
