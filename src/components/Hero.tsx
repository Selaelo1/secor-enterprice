import React from 'react';
import { Shield, Lock, Server, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Cybersecurity background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-black/90"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-baby-blue rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-baby-blue rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-baby-blue rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-baby-blue" />
              <span className="text-baby-blue font-semibold text-lg">Cybersecurity Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Protecting Your
              <span className="block text-baby-blue">Digital Assets</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secor Enterprises delivers comprehensive cybersecurity and infrastructure solutions 
              with specialized expertise in healthcare environments. Safeguarding your critical 
              data and systems with enterprise-grade security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-baby-blue text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border border-baby-blue text-baby-blue px-8 py-4 rounded-lg font-semibold hover:bg-baby-blue hover:text-navy-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:border-baby-blue transition-colors duration-300">
              <Lock className="h-12 w-12 text-baby-blue mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Security Monitoring</p>
            </div>
            
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:border-baby-blue transition-colors duration-300">
              <Server className="h-12 w-12 text-baby-blue mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-300">Infrastructure Uptime</p>
            </div>
            
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:border-baby-blue transition-colors duration-300">
              <Users className="h-12 w-12 text-baby-blue mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
              <p className="text-gray-300">Industry Specialists</p>
            </div>
            
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:border-baby-blue transition-colors duration-300">
              <Shield className="h-12 w-12 text-baby-blue mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">HIPAA</h3>
              <p className="text-gray-300">Compliant Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;