
import React, { useEffect, useRef } from 'react';
import { Check, Zap, Clock, Shield, RefreshCw, HeartHandshake } from 'lucide-react';
import Button from './ui-custom/Button';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1 bg-brand-purple/10 p-2 rounded-lg text-brand-purple flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-purple-50 relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image/Visual */}
          <div 
            ref={imageRef}
            className="w-full lg:w-1/2 opacity-0 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 right-6 bottom-6 bg-brand-purple/10 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl border border-gray-100">
                <img
                  src="/lovable-uploads/b5d823df-27ce-4762-8072-7a312e6eab34.png"
                  alt="Product Dashboard"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <div className="absolute -bottom-4 -right-4 bg-brand-purple text-white p-3 rounded-lg shadow-lg">
                  <Zap size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Features Content */}
          <div 
            ref={sectionRef}
            className="w-full lg:w-1/2 opacity-0 order-1 lg:order-2"
          >
            <div className="inline-block py-1 px-3 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Features designed for your success</h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer a comprehensive suite of features designed to elevate your online presence
              and provide you with a competitive edge in the digital landscape.
            </p>

            <div className="space-y-8">
              <Feature 
                icon={<Zap size={20} />}
                title="Lightning Fast Performance"
                description="Our optimized infrastructure ensures your websites and applications load quickly and efficiently."
              />
              <Feature 
                icon={<Shield size={20} />}
                title="Advanced Security"
                description="Industry-leading security measures to protect your data and applications from threats."
              />
              <Feature 
                icon={<Clock size={20} />}
                title="24/7 Support"
                description="Our dedicated support team is available round-the-clock to assist you with any issues."
              />
              <Feature 
                icon={<RefreshCw size={20} />}
                title="Regular Updates"
                description="We continuously update our systems to ensure optimal performance and security."
              />
              <Feature 
                icon={<HeartHandshake size={20} />}
                title="Dedicated Account Manager"
                description="A personal point of contact to understand your needs and provide tailored solutions."
              />
            </div>

            <div className="mt-10">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-24 h-24 rounded-full bg-brand-cyan/10 opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-brand-orange/10 opacity-50 animate-float" style={{ animationDelay: '1.2s' }} />
    </section>
  );
};

export default FeaturesSection;
