'use client'

import React from 'react';
import { Eye, Shield, Network, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    title: 'Transparency',
    description: 'We are committed to complete transparency in all financial transactions, ensuring that every expense is visible, traceable, and accounted for, fostering trust and accountability among users.',
    icon: Eye,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Security',
    description: 'We prioritize the security of user data and funds above all, utilizing cutting-edge blockchain technology to protect against fraud, ensuring that transactions are safe and secure.',
    icon: Shield,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Decentralization',
    description: 'We believe in the transformative power of decentralization, removing intermediaries and giving users full control over their financial transactions, promoting a more equitable and user-centric financial ecosystem.',
    icon: Network,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Innovation',
    description: 'We are dedicated to continuous innovation, always exploring and integrating new technologies and approaches to enhance our platform, providing superior user experiences and staying at the forefront of decentralized finance.',
    icon: Lightbulb,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'User Empowerment',
    description: 'We strive to empower users with the tools, insights, and confidence they need to manage their finances effectively, promoting financial literacy and enabling them to make informed decisions.',
    icon: Users,
    gradient: 'from-red-500 to-rose-500',
  },
];

const ValueCards: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen p-8 dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-16 tracking-tight">Our Core Values</h1>
        <div className="flex flex-wrap gap-10 justify-evenly">
          {values.map((value, index) => (
            <div key={index} className="group w-[400px] rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${value.gradient}`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${value.gradient} group-hover:rotate-3 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-white text-2xl font-semibold mb-4 group-hover:translate-x-1 transition-transform duration-300">{value.title}</h2>
                <p className="text-gray-300 leading-relaxed group-hover:translate-x-1 transition-transform duration-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueCards;

