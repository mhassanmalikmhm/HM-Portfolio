import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/fY6PCJzp/Screenshot-2025-12-17-175829.png" 
              alt="Hassan Malik Logo" 
              className="h-10 w-10 rounded-full object-cover border border-white/10"
            />
            <span className="text-xl font-bold tracking-tight text-white">Hassan<span className="text-brand-accent">.Auto</span></span>
          </div>
          
          {/* Navigation links removed as requested */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;