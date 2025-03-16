
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui-custom/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/8105d31c-c9bf-4d5f-b778-1d0139a8143c.png" 
              alt="Logo" 
              className="h-10 w-auto" 
            />
            <span className="ml-2 text-xl font-semibold text-brand-purple">Prodomain</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover-underline transition-colors">Services</a>
            <a href="#features" className="text-gray-700 hover-underline transition-colors">Features</a>
            <a href="#contact" className="text-gray-700 hover-underline transition-colors">Contact</a>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container px-6 mx-auto py-4 space-y-4">
          <a href="#services" className="block text-gray-700 hover:text-brand-purple py-2">Services</a>
          <a href="#features" className="block text-gray-700 hover:text-brand-purple py-2">Features</a>
          <a href="#contact" className="block text-gray-700 hover:text-brand-purple py-2">Contact</a>
          <Button variant="primary" size="sm" className="w-full">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
