import React from 'react';
import { GraduationCap, Code2, Terminal, User, BookOpen, Download } from 'lucide-react';

const AboutDetail: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            About <span className="text-brand-accent">Hassan Malik</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            BS Computer Science Student | Automation Expert | AI Agent Developer
          </p>
        </div>

        {/* Bio Section */}
        <div className="bg-brand-light/50 rounded-2xl p-8 border border-white/5 mb-12 shadow-xl">
          <div className="flex items-center mb-6">
            <User className="w-6 h-6 text-brand-accent mr-3" />
            <h2 className="text-2xl font-bold text-white">Biography</h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I am currently pursuing my <strong>BS in Computer Science</strong> at <strong>The Islamia University of Bahawalpur (IUB)</strong>. 
              My journey in technology began with a curiosity about how things work, which quickly evolved into a passion for making things work <em>better</em>.
            </p>
            <p>
              While my academic foundation is built on core computer science principles like Data Structures, Algorithms, and Object-Oriented Programming, 
              my professional edge lies in <strong>Automation</strong>. I recognized early on that businesses waste countless hours on repetitive tasks. 
              I set out to master tools like Make.com, Zapier, and n8n to solve this problem.
            </p>
            <p>
              Today, I offer a unique blend of services: I can write high-performance code in <strong>C++ or Python</strong> when necessary, 
              but I can also rapidly deploy no-code workflows to save time and budget. This hybrid approach allows me to tackle everything from 
              simple data entry automation to complex AI-driven content pipelines.
            </p>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-12">
           <div className="flex items-center mb-6 px-2">
            <Terminal className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Programming Languages */}
            <div className="bg-brand-light p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {['C++', 'Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-brand-dark rounded-md text-brand-accent text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

             {/* Automation Tools */}
             <div className="bg-brand-light p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Automation & AI</h3>
                <div className="flex flex-wrap gap-2">
                    {['Make.com', 'Zapier', 'n8n', 'OpenAI API', 'Flowise', 'Chatbot Dev'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-brand-dark rounded-md text-green-400 text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
             
             {/* Web Technologies */}
             <div className="bg-brand-light p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                    {['React.js', 'Node.js', 'Tailwind CSS', 'WordPress', 'Webflow'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-brand-dark rounded-md text-blue-400 text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Academic/Core */}
             <div className="bg-brand-light p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">CS Fundamentals</h3>
                <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'OOP', 'Database Design', 'System Analysis'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-brand-dark rounded-md text-pink-400 text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-12">
            <div className="flex items-center mb-6 px-2">
            <GraduationCap className="w-6 h-6 text-brand-accent mr-3" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="bg-brand-light p-8 rounded-xl border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-brand-accent"></div>
             <div className="mb-1">
                 <h3 className="text-xl font-bold text-white">BS Computer Science</h3>
                 <p className="text-brand-accent font-medium">The Islamia University of Bahawalpur (IUB)</p>
             </div>
             <p className="text-sm text-gray-500 mb-4">Current Student</p>
             <p className="text-gray-300">
                 Focusing on Software Engineering principles, Advanced Programming, and Artificial Intelligence. 
                 Actively applying theoretical knowledge to real-world freelance projects.
             </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-brand-accent/20 to-purple-600/20 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Want to see my full CV?</h2>
            <p className="text-gray-300 mb-6">Contact me directly to request a detailed resume or discuss a potential collaboration.</p>
            <div className="flex justify-center gap-4">
                 <a href="/#connect" className="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3 rounded-xl font-bold transition-all">
                    Contact Me
                 </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutDetail;