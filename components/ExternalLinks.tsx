import React from 'react';
import { ExternalLink, Github, Linkedin, Briefcase } from 'lucide-react';

const ExternalLinks: React.FC = () => {
  return (
    <section id="connect" className="py-20 bg-brand-dark relative overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-brand-muted">Find me on professional platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upwork */}
          <a 
            href="https://www.upwork.com/freelancers/~010c4190b0bd5c9f6f" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-[#14a800] transition-all hover:shadow-[0_0_30px_rgba(20,168,0,0.1)]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-[#14a800]/20 rounded-full flex items-center justify-center text-[#14a800]">
                <Briefcase className="w-6 h-6" />
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Upwork</h3>
            <p className="text-brand-muted text-sm">Top Rated Automation Freelancer. View my projects and client reviews.</p>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/mhassanmalikmhm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-white transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                <Github className="w-6 h-6" />
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-brand-muted text-sm">Explore my open-source code, API integrations, and automation scripts.</p>
          </a>

          {/* LinkedIn */}
          <a href="#" className="group bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-[#0077b5] transition-all hover:shadow-[0_0_30px_rgba(0,119,181,0.2)]">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-[#0077b5]/20 rounded-full flex items-center justify-center text-[#0077b5]">
                <Linkedin className="w-6 h-6" />
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-brand-muted text-sm">Connect for professional opportunities and industry updates.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;