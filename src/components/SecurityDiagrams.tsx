import React, { useState } from 'react';
import { Shield, AlertTriangle, Lock, Wifi, Database, Users } from 'lucide-react';

const SecurityDiagrams = () => {
  const [activeTab, setActiveTab] = useState('attacks');

  const cyberAttacks = [
    { name: 'Phishing', severity: 'High', icon: '🎣', description: 'Fraudulent emails to steal credentials' },
    { name: 'Ransomware', severity: 'Critical', icon: '🔒', description: 'Malware that encrypts data for ransom' },
    { name: 'DDoS', severity: 'Medium', icon: '⚡', description: 'Overwhelming servers with traffic' },
    { name: 'SQL Injection', severity: 'High', icon: '💉', description: 'Attacking database queries' },
    { name: 'Malware', severity: 'High', icon: '🦠', description: 'Malicious software infections' },
    { name: 'Social Engineering', severity: 'Medium', icon: '👥', description: 'Manipulating people for information' },
  ];

  const securityLayers = [
    { 
      layer: 'Perimeter Security', 
      icon: Shield, 
      description: 'Firewalls, IDS/IPS, Network Segmentation',
      position: 'outer'
    },
    { 
      layer: 'Network Security', 
      icon: Wifi, 
      description: 'VPN, Network Access Control, Monitoring',
      position: 'middle-outer'
    },
    { 
      layer: 'Endpoint Security', 
      icon: Lock, 
      description: 'Antivirus, EDR, Device Management',
      position: 'middle'
    },
    { 
      layer: 'Application Security', 
      icon: AlertTriangle, 
      description: 'Code Review, WAF, API Security',
      position: 'middle-inner'
    },
    { 
      layer: 'Data Security', 
      icon: Database, 
      description: 'Encryption, DLP, Access Controls',
      position: 'inner'
    },
    { 
      layer: 'User Security', 
      icon: Users, 
      description: 'Identity Management, MFA, Training',
      position: 'core'
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Security Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding cyber threats and implementing layered security defenses
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'attacks' 
                  ? 'bg-navy-900 text-white' 
                  : 'text-navy-900 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('attacks')}
            >
              Cyber Attacks
            </button>
            <button
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'layers' 
                  ? 'bg-navy-900 text-white' 
                  : 'text-navy-900 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('layers')}
            >
              Security Layers
            </button>
          </div>
        </div>

        {/* Cyber Attacks Diagram */}
        {activeTab === 'attacks' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberAttacks.map((attack, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{attack.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getSeverityColor(attack.severity)}`}>
                    {attack.severity}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{attack.name}</h3>
                <p className="text-gray-600">{attack.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Security Layers Diagram */}
        {activeTab === 'layers' && (
          <div className="relative">
            <div className="flex flex-col items-center space-y-12">
              {/* Professional Layered Security Diagram */}
              <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Defense in Depth Architecture</h3>
                  <p className="text-gray-600">Multi-layered security approach for comprehensive protection</p>
                </div>
                
                {/* Layered Security Visualization */}
                <div className="relative">
                  <svg viewBox="0 0 800 600" className="w-full h-auto">
                    {/* Background Grid */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                      </pattern>
                      <linearGradient id="layerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.1"/>
                        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.3"/>
                      </linearGradient>
                    </defs>
                    
                    <rect width="800" height="600" fill="url(#grid)"/>
                    
                    {/* Security Layers as Concentric Rectangles */}
                    {securityLayers.map((layer, index) => {
                      const padding = 40 + (index * 35);
                      const x = padding;
                      const y = padding;
                      const width = 800 - (padding * 2);
                      const height = 600 - (padding * 2);
                      const colors = ['#1e3a8a', '#3730a3', '#4338ca', '#4f46e5', '#6366f1', '#8192ff'];
                      
                      return (
                        <g key={index}>
                          <rect
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            fill="none"
                            stroke={colors[index]}
                            strokeWidth="3"
                            strokeDasharray={index % 2 === 0 ? "0" : "8,4"}
                            rx="12"
                            className="hover:stroke-4 transition-all duration-300"
                          />
                          
                          {/* Layer Label */}
                          <rect
                            x={x + 10}
                            y={y - 15}
                            width={layer.layer.length * 8 + 20}
                            height="30"
                            fill="white"
                            stroke={colors[index]}
                            strokeWidth="2"
                            rx="15"
                          />
                          <text
                            x={x + 20}
                            y={y + 5}
                            fill={colors[index]}
                            fontSize="12"
                            fontWeight="600"
                            className="font-sans"
                          >
                            {layer.layer}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Central Asset */}
                    <circle
                      cx="400"
                      cy="300"
                      r="60"
                      fill="#bfdbfe"
                      stroke="#1e3a8a"
                      strokeWidth="4"
                    />
                    <text
                      x="400"
                      y="295"
                      textAnchor="middle"
                      fill="#1e3a8a"
                      fontSize="14"
                      fontWeight="700"
                      className="font-sans"
                    >
                      CRITICAL
                    </text>
                    <text
                      x="400"
                      y="310"
                      textAnchor="middle"
                      fill="#1e3a8a"
                      fontSize="14"
                      fontWeight="700"
                      className="font-sans"
                    >
                      ASSETS
                    </text>
                    
                    {/* Threat Arrows */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                              refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                      </marker>
                    </defs>
                    
                    {/* External Threats */}
                    <line x1="50" y1="100" x2="120" y2="150" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    <text x="20" y="95" fill="#ef4444" fontSize="12" fontWeight="600">External Threats</text>
                    
                    <line x1="750" y1="100" x2="680" y2="150" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    <text x="680" y="95" fill="#ef4444" fontSize="12" fontWeight="600">Cyber Attacks</text>
                    
                    <line x1="50" y1="500" x2="120" y2="450" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    <text x="20" y="520" fill="#ef4444" fontSize="12" fontWeight="600">Insider Threats</text>
                  </svg>
                </div>
              </div>
              
              {/* Layer Descriptions */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {securityLayers.map((layer, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-navy-900"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4">
                        <layer.icon className="h-6 w-6 text-navy-900" />
                      </div>
                      <h3 className="text-lg font-semibold text-navy-900">{layer.layer}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{layer.description}</p>
                    <div className="mt-4 text-xs text-baby-blue font-semibold">
                      Layer {index + 1} of {securityLayers.length}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecurityDiagrams;