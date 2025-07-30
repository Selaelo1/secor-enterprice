import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Healthcare', href: '#healthcare' },
    { name: 'Security', href: '#security' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable to go home */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Shield className="h-8 w-8 text-baby-blue" />
            <div>
              <span className="text-white font-bold text-xl">Secor</span>
              <span className="text-baby-blue font-bold text-xl"> Enterprises</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-baby-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-baby-blue transition-colors z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-navy-900 border-l border-navy-700 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-navy-700">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-baby-blue" />
                <div>
                  <span className="text-white font-bold text-lg">Secor</span>
                  <span className="text-baby-blue font-bold text-lg"> Enterprises</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Items */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-baby-blue transition-colors duration-200 font-medium text-lg py-3 border-b border-navy-800 hover:border-baby-blue"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
            
            {/* Footer */}
            <div className="p-6 border-t border-navy-700">
              <p className="text-gray-400 text-sm text-center">
                Cybersecurity & Infrastructure Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;