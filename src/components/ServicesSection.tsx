
import React, { useEffect, useRef } from 'react';
import { Server, Code, Smartphone, Database, Shield, Rocket } from 'lucide-react';
import Button from './ui-custom/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, color, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up');
              entry.target.classList.remove('opacity-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl p-6 shadow-lg border border-${color}-100 hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-4`}
    >
      <div className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="ghost" 
        size="sm" 
        className={`text-${color}`}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Learn More
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-purple-50 to-white relative">
      <div className="container px-6 mx-auto">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <div className="inline-block py-1 px-3 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital services to help your business thrive online.
            From hosting to development, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Server className="text-brand-purple" />}
            title="Customized Hosting"
            description="Tailored hosting solutions designed to meet your specific performance and security requirements."
            color="brand-purple"
            delay={100}
          />
          
          <ServiceCard 
            icon={<Code className="text-brand-cyan" />}
            title="Website Development"
            description="Professional website design and development that creates an impactful online presence for your brand."
            color="brand-cyan"
            delay={200}
          />
          
          <ServiceCard 
            icon={<Smartphone className="text-brand-orange" />}
            title="Mobile App Development"
            description="Native and cross-platform mobile applications that deliver exceptional user experiences."
            color="brand-orange"
            delay={300}
          />
          
          <ServiceCard 
            icon={<Database className="text-brand-green" />}
            title="Database Management"
            description="Efficient database solutions to store, manage, and protect your valuable business data."
            color="brand-green"
            delay={400}
          />
          
          <ServiceCard 
            icon={<Shield className="text-brand-red" />}
            title="Security Solutions"
            description="Comprehensive security measures to protect your digital assets from threats and vulnerabilities."
            color="brand-red"
            delay={500}
          />
          
          <ServiceCard 
            icon={<Rocket className="text-brand-yellow" />}
            title="Performance Optimization"
            description="Speed optimization techniques to ensure your digital platforms deliver lightning-fast experiences."
            color="brand-yellow"
            delay={600}
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-purple/5 opacity-70" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-brand-cyan/5 opacity-70" />
    </section>
  );
};

export default ServicesSection;
