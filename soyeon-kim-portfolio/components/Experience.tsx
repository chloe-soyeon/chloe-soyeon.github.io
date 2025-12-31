import React from 'react';
import { useLanguage } from '../LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">Career History</h2>
          <h3 className="text-4xl font-bold">Professional Experience</h3>
        </div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
          {experience.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-gray-900 group-hover:bg-purple-400 transition-colors"></span>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h4 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{exp.company}</h4>
                <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
              </div>
              <p className="text-xl text-purple-300/80 font-medium mb-3">{exp.position}</p>
              <p className="text-gray-400 max-w-2xl leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;