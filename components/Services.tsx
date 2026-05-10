import React from 'react';
import { Workflow, Layers, Bot, Database } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Workflow Automation",
      description: "Seamlessly connect your favorite apps using Make.com (formerly Integromat) and Zapier to eliminate repetitive tasks.",
      icon: Workflow,
      tags: ["Make.com", "Zapier", "Integromat"]
    },
    {
      title: "Advanced Orchestration",
      description: "Complex data routing and custom logic implementation using n8n for enterprise-grade automation solutions.",
      icon: Layers,
      tags: ["n8n", "Webhooks", "JSON"]
    },
    {
      title: "AI Content Pipelines",
      description: "Build autonomous content creation systems that generate, format, and publish content using GPT models and automation tools.",
      icon: Bot,
      tags: ["OpenAI", "Gemini", "Auto-Blogging"]
    },
    {
      title: "API Integration",
      description: "Custom API connections to bridge gaps between software that doesn't natively talk to each other.",
      icon: Database,
      tags: ["REST", "GraphQL", "Python"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Leveraging cutting-edge tools to build systems that work while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-6 bg-brand-light rounded-2xl border border-white/5 hover:border-brand-accent transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-brand-dark rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-brand-dark rounded-md text-xs text-brand-accent font-medium border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;