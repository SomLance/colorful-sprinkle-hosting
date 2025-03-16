
import React, { useEffect, useRef } from 'react';
import Button from './ui-custom/Button';
import SparkleEffect from './ui-custom/SparkleEffect';
import { ChevronRight, Server, Globe, Smartphone } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-purple-50 min-h-screen flex items-center">
      <SparkleEffect className="opacity-70" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-animation">
          <div className="inline-block py-1 px-3 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-6 opacity-0 animate-fade-in">
            Customize Your Digital Presence
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 text-balance"
          >
            <span className="text-gray-900">The </span>
            <span className="text-brand-purple">Easiest Way</span>
            <span className="text-gray-900"> to launch your</span>
            <br />
            <span className="text-brand-cyan bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-blue-400">Websites</span>
            <span className="text-gray-700"> & </span>
            <span className="text-gray-600">Mobile Apps</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in text-balance">
            Everything you need to grow online. Get customized hosting solutions, 
            professional website development, and cutting-edge mobile applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fade-in">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch <ChevronRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-brand-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Hosting Solutions</h3>
            <p className="text-gray-600">Custom hosting options tailored to your specific requirements.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-brand-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Website Development</h3>
            <p className="text-gray-600">Professional websites that engage visitors and drive conversions.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="text-brand-orange" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile App Development</h3>
            <p className="text-gray-600">Innovative mobile applications that deliver exceptional user experiences.</p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-5 w-24 h-24 rounded-full bg-brand-purple/10 opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-brand-cyan/10 opacity-50 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-20 w-12 h-12 rounded-full bg-brand-orange/10 opacity-50 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 right-20 w-20 h-20 rounded-full bg-brand-yellow/10 opacity-50 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
