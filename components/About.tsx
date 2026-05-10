import React from 'react';
import { GraduationCap, Code2, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-semibold">BS Computer Science student at The Islamia University of Bahawalpur (IUB)</span>, 
              dedicated to transforming how businesses operate through technology.
            </p>
            <p>
              As an <span className="text-white font-semibold">Automation Expert</span>, I specialize in dissecting complex manual processes and rebuilding them into efficient, 
              hands-off workflows. My expertise bridges the gap between traditional development and modern no-code/low-code solutions.
            </p>
            <p>
              Whether it's designing intricate API integrations or deploying AI-driven content engines, 
              my goal is simple: <span className="text-brand-accent">Reduce manual effort, maximize output.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-brand-dark rounded-xl border border-white/5 hover:border-brand-accent/50 transition-colors">
              <GraduationCap className="w-10 h-10 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-sm text-brand-muted">BS Computer Science @ IUB</p>
            </div>
            <div className="p-6 bg-brand-dark rounded-xl border border-white/5 hover:border-brand-accent/50 transition-colors">
              <Code2 className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-sm text-brand-muted">Full Stack & Scripting</p>
            </div>
            <div className="p-6 bg-brand-dark rounded-xl border border-white/5 hover:border-brand-accent/50 transition-colors sm:col-span-2">
              <Rocket className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Mission</h3>
              <p className="text-sm text-brand-muted">Helping businesses save 1000+ hours annually through automation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;