import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, content } = useLanguage();

  const NAV_ITEMS = [
    { label: content.ui.nav.profile, href: '#about' },
    { label: content.ui.nav.stack, href: '#skills' },
    { label: content.ui.nav.work, href: '#projects' },
  ];

  // Track active section for highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection('#' + section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [NAV_ITEMS]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 inset-x-0 mx-auto z-50 w-full max-w-3xl px-6"
      >
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-2 py-2 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            className="pl-4 pr-2 text-sm font-bold tracking-tight text-gray-900 hover:text-pink-600 transition-colors"
          >
            Soyeon<span className="text-pink-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-gray-100/50 rounded-full p-1 border border-white/50">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  activeSection === item.href 
                    ? 'text-gray-900 bg-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-xs font-bold text-gray-700"
              aria-label="Toggle Language"
            >
              <span className={language === 'ko' ? 'text-pink-600' : 'text-gray-400'}>KO</span>
              <span className="mx-1 text-gray-300">/</span>
              <span className={language === 'en' ? 'text-pink-600' : 'text-gray-400'}>EN</span>
            </button>

            {/* Contact Button */}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden md:flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-gray-900 rounded-full hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {content.ui.nav.contact}
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-800 transition-colors mr-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 inset-x-6 z-40 md:hidden"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 flex flex-col items-center space-y-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xl font-bold text-gray-900 hover:text-pink-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')} 
                className="w-full text-center px-6 py-4 font-bold text-white bg-gray-900 rounded-2xl shadow-lg"
              >
                {content.ui.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;