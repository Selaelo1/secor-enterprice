import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-baby-blue" />
              <div>
                <span className="text-white font-bold text-xl">Secor</span>
                <span className="text-baby-blue font-bold text-xl"> Enterprises</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Protecting your digital assets with comprehensive cybersecurity and infrastructure solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-baby-blue transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-baby-blue transition-colors">Infrastructure Support</a></li>
              <li><a href="#healthcare" className="text-gray-400 hover:text-baby-blue transition-colors">Healthcare Solutions</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-baby-blue transition-colors">Security Monitoring</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-baby-blue" />
                <span className="text-gray-400">Info@secor.co.za</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-baby-blue mt-1" />
                <span className="text-gray-400">
                  78 6th Avenue Postdene<br />
                  Postmasburg 8420<br />
                  Northern Cape
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Secor Enterprises. All rights reserved. | Cybersecurity & Infrastructure Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;