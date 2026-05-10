import React from 'react';
import { ArrowRight, Bot, Zap, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Automating the Future
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">Hassan Malik</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            I build intelligent <span className="text-white font-semibold">AI Content Pipelines</span> and streamline business workflows using <span className="text-white font-semibold">Make, n8n, & Zapier</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mt-8">
            {/* Upwork Button */}
            <a 
              href="https://www.upwork.com/freelancers/~010c4190b0bd5c9f6f" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-105 transition-all duration-300 flex items-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Let's Automate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
            </a>

            {/* GitHub Button */}
            <a 
              href="https://github.com/mhassanmalikmhm" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center"
            >
              <Github className="mr-2 h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              View My Work
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Image Container matching the portrait aspect ratio of the provided photo */}
          <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] group">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-30 blur-sm group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-accent via-purple-500 to-brand-dark rounded-[2.1rem] opacity-50 blur-md -z-10"></div>
            
            <img 
              src="components/PFP1.jpg" 
              alt="Hassan Malik Profile Picture" 
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10 border border-white/10"
            />
            
            {/* Floating Badge 1 */}
            <div className="absolute -top-6 -right-6 bg-brand-dark/90 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-2xl z-20 animate-[bounce_3s_infinite]">
              <Bot className="w-8 h-8 text-brand-accent" />
            </div>
            
            {/* Floating Badge 2 */}
            <div className="absolute bottom-8 -left-8 bg-brand-dark/90 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-2xl z-20 animate-[bounce_4s_infinite]">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-xs font-bold text-white">Automation<br/>Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;