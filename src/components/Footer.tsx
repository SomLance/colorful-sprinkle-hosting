
import React from 'react';
import { ChevronRight, Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-6 mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/8105d31c-c9bf-4d5f-b778-1d0139a8143c.png" 
                alt="Logo" 
                className="h-8 w-auto" 
              />
              <span className="ml-2 text-xl font-semibold text-brand-purple">Prodomain</span>
            </div>
            <p className="text-gray-600">
              Providing customized digital solutions for businesses of all sizes. 
              From hosting to development, we help you succeed online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Services
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Hosting Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Security Solutions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates on our services and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple flex-grow"
              />
              <button 
                type="submit" 
                className="bg-brand-purple text-white px-4 py-2 rounded-r-md hover:bg-brand-purple/90 transition-colors"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; {currentYear} Prodomain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
