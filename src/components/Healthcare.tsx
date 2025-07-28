import React from 'react';
import { Heart, FileText, Database, Shield } from 'lucide-react';

const Healthcare = () => {
  const specializations = [
    {
      icon: Heart,
      title: 'HIPAA Compliance',
      description: 'Ensuring healthcare organizations meet all HIPAA requirements for patient data protection and privacy.',
    },
    {
      icon: FileText,
      title: 'EHR Security',
      description: 'Securing Electronic Health Records with advanced encryption and access control measures.',
    },
    {
      icon: Database,
      title: 'Patient Data Protection',
      description: 'Comprehensive data protection strategies specifically designed for healthcare environments.',
    },
    {
      icon: Shield,
      title: 'Medical Device Security',
      description: 'Securing connected medical devices and IoT systems within healthcare networks.',
    },
  ];

  return (
    <section id="healthcare" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Healthcare technology background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Healthcare Cybersecurity Specialists
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed hidden md:block">
              With extensive experience in the healthcare industry, Secor Enterprises understands 
              the unique security challenges facing medical organizations. We provide specialized 
              cybersecurity solutions that protect patient data while ensuring compliance with 
              healthcare regulations.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed md:hidden">
              Specialized cybersecurity solutions for healthcare organizations. HIPAA compliant 
              security that protects patient data and ensures regulatory compliance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-baby-blue rounded-full flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">HIPAA Compliance Expertise</h4>
                  <p className="text-gray-300 hidden sm:block">Deep knowledge of healthcare regulations and compliance requirements.</p>
                  <p className="text-gray-300 sm:hidden">Healthcare compliance specialists.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-baby-blue rounded-full flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Industry Experience</h4>
                  <p className="text-gray-300 hidden sm:block">Years of hands-on experience working with healthcare organizations.</p>
                  <p className="text-gray-300 sm:hidden">Proven healthcare expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-baby-blue rounded-full flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Specialized Solutions</h4>
                  <p className="text-gray-300 hidden sm:block">Tailored security solutions designed specifically for healthcare environments.</p>
                  <p className="text-gray-300 sm:hidden">Custom healthcare security solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:border-baby-blue transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-baby-blue/20 rounded-lg mb-4 group-hover:bg-baby-blue/30 transition-colors">
                  <spec.icon className="h-6 w-6 text-baby-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{spec.title}</h3>
                <p className="text-gray-300 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;