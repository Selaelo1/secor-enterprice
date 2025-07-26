import React from 'react';
import { Shield, Server, Network, AlertTriangle, Eye, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessments, threat detection, and incident response services to protect your organization.',
      features: ['Penetration Testing', 'Vulnerability Assessments', 'Security Audits', 'Compliance Management'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Server,
      title: 'Infrastructure Support',
      description: 'Reliable IT infrastructure management and support services ensuring optimal performance and availability.',
      features: ['Server Management', 'Network Administration', 'Cloud Solutions', '24/7 Monitoring'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced network protection with firewall management, intrusion detection, and secure access controls.',
      features: ['Firewall Management', 'VPN Solutions', 'Network Segmentation', 'Access Control'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Proactive threat monitoring and intelligence gathering to stay ahead of emerging security risks.',
      features: ['Real-time Monitoring', 'Threat Analysis', 'Risk Assessment', 'Security Alerts'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Continuous security monitoring and incident response with advanced detection capabilities.',
      features: ['SIEM Solutions', 'Log Analysis', 'Incident Response', 'Forensic Analysis'],
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data protection strategies including encryption, backup, and recovery solutions.',
      features: ['Data Encryption', 'Backup Solutions', 'Disaster Recovery', 'Data Loss Prevention'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity and infrastructure solutions tailored to protect your business
            and ensure compliance with industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-navy-100 rounded-xl mb-6 group-hover:bg-baby-blue transition-colors duration-300">
                <service.icon className="h-8 w-8 text-navy-900 group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-baby-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;