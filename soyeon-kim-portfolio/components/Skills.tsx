import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Server } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  "Backend": <Code size={28} />,
  "Data & Analytics": <Database size={28} />,
  "Infra": <Server size={28} />,
};

const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-[#fbfbfd] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-500 group"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 1.5 
                }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-md text-gray-900 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300"
              >
                {iconMap[skill.category] || <Code size={28} />}
              </motion.div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              {skill.level && (
                  <div className="mt-8 pt-8 border-t border-gray-200/50">
                    <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                        <span>{ui.skills.proficiency}</span>
                        <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-300 rounded-full" 
                      ></motion.div>
                    </div>
                  </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;