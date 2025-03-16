
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Button from './ui-custom/Button';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-purple-50 to-white relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or ready to start your project? 
            Contact us today and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="hosting">Hosting Solutions</option>
                  <option value="website">Website Development</option>
                  <option value="app">Mobile App Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message <Send className="ml-2" size={16} />
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Our team is ready to answer any questions you may have about our services
                and how we can help you achieve your digital goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg text-brand-purple">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contact@prodomain.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg text-brand-purple">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg text-brand-purple">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Office</h4>
                    <p className="text-gray-600">123 Tech Street, Suite 100<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours/Availability */}
            <div className="mt-10 p-6 bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
              <p className="text-gray-600 mb-2">Monday - Friday: 9AM - 6PM EST</p>
              <p className="text-gray-600">Weekend: By appointment only</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-brand-yellow/10 opacity-50 animate-float" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-10 left-40 w-16 h-16 rounded-full bg-brand-green/10 opacity-50 animate-float" style={{ animationDelay: '1.4s' }} />
    </section>
  );
};

export default ContactSection;
