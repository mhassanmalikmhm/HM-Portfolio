import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { WorkExperienceItem } from '../types';

const WorkHistory: React.FC = () => {
  const experiences: WorkExperienceItem[] = [
    {
      role: "Automation Specialist (Self-Employed)",
      company: "Freelance",
      period: "2022 - Present",
      description: "Providing bespoke automation solutions to international clients, focusing on e-commerce and operational efficiency.",
      achievements: [
        "Reduced manual data entry effort by 80% for multiple e-commerce clients using Zapier.",
        "Designed a complete lead generation pipeline connecting Facebook Ads to CRM via Make.com.",
        "Implemented n8n workflows for automated client reporting, saving 10+ hours per week."
      ]
    },
    {
      role: "Backend & API Developer",
      company: "Academic Projects",
      period: "2023 - Present",
      description: "Developing robust backend systems as part of BSCS coursework and personal portfolio projects.",
      achievements: [
        "Built RESTful APIs using Node.js and Python.",
        "Integrated third-party APIs (Stripe, Twilio, OpenAI) into web applications.",
        "Optimized database queries for high-performance data retrieval."
      ]
    }
  ];

  return (
    <section id="work" className="py-20 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work History</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-brand-accent/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-3 top-0 w-6 h-6 bg-brand-accent rounded-full border-4 border-brand-dark shadow-lg"></span>
              
              <div className="bg-brand-dark p-6 rounded-xl border border-white/5 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-brand-accent" />
                      {exp.role}
                    </h3>
                    <p className="text-brand-muted text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-3 py-1 bg-brand-light rounded-full text-xs font-mono text-gray-300 border border-white/10 w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 italic">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;