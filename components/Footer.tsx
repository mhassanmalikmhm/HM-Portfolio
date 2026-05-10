import React from 'react';
import { Mail, Facebook, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Hassan Malik</h2>
            <p className="text-brand-muted">Automating business processes, one workflow at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/hassanmalik_mhm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://wa.me/923179680130" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/hassan.malik.94828" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="mailto:mhmhassanmalik@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hassan Malik. All rights reserved. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;