import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageSquareQuote, Youtube } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Project, UIStrings } from '../types';

// Individual Card Component with 3D Tilt Effect
const ProjectCard: React.FC<{ project: Project; index: number; ui: UIStrings['projects'] }> = ({ project, index, ui }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Transform limits (degrees)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const scale = useTransform(mouseX, [-0.5, 0.5], [1.02, 1.02]); // Slight scale up on interaction
  
  // Dynamic shadow based on tilt
  const shadowX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]) => `0px 20px 40px -10px rgba(0,0,0,0.1), ${-sx}px ${-sy}px 30px -10px rgba(0,0,0,0.05)`
  );

  return (
    <motion.div
      style={{ perspective: 2000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16 last:mb-0"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          scale: useSpring(scale, { stiffness: 300, damping: 30 }),
          boxShadow,
          transformStyle: "preserve-3d"
        }}
        className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 relative overflow-hidden group"
      >
        <div className="flex flex-col gap-10 relative z-10" style={{ transform: "translateZ(20px)" }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* 1. Title & Role (Col 4) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
               <div>
                 <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold mb-6 tracking-wide">
                   {project.period}
                 </span>
                 <h4 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                   {project.title}
                 </h4>
                 <p className="text-lg text-pink-600 font-medium">{project.subtitle}</p>
                 
                 {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-pink-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4 group/btn"
                  >
                    <Youtube size={20} className="text-white group-hover/btn:scale-110 transition-transform" />
                    <span>{ui.demoLabel}</span>
                  </a>
                 )}
               </div>
               
               <div>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{ui.roleLabel}</p>
                 <p className="text-gray-900 font-semibold text-lg">{project.role}</p>
               </div>

               {project.awards && (
                 <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100">
                   <p className="text-xs font-bold text-pink-600 uppercase tracking-wide mb-1">{ui.awardLabel}</p>
                   <p className="text-sm font-medium text-gray-800">{project.awards}</p>
                 </div>
               )}
            </div>

            {/* 2. Description & Tech (Col 5) */}
            <div className="lg:col-span-5 flex flex-col h-full">
               <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium" style={{ wordBreak: 'keep-all', overflowWrap: 'normal', lineBreak: 'strict' }}>
                 {project.description}
               </p>
               
               <div className="mt-auto">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">{ui.techLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.concat(project.techStack.db).concat(project.techStack.ai || []).slice(0, 8).map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white text-gray-600 text-xs font-bold rounded-lg border border-gray-200 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
            </div>

            {/* 3. Details (Col 3) */}
            <div className="lg:col-span-3 bg-gray-50 rounded-3xl p-6 h-full flex flex-col justify-center border border-gray-100 transition-colors group-hover:bg-gray-50/80">
               <ul className="space-y-4">
                 {project.details.slice(0, 3).map((detail, idx) => (
                   <li key={idx} className="text-sm text-gray-600 leading-normal flex gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0"></span>
                     {detail}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* 4. Feedback Section (Full Width if exists) */}
          {project.feedbacks && project.feedbacks.length > 0 && (
            <div className="mt-4 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquareQuote className="text-pink-500" size={20} />
                <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide">{ui.feedbackLabel}</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.feedbacks.map((fb, idx) => (
                  <div key={idx} className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100 hover:bg-pink-50/30 transition-colors">
                    <p className="text-sm text-gray-700 leading-relaxed italic mb-3">"{fb.comment}"</p>
                    <p className="text-xs font-bold text-gray-900 text-right">- {fb.author}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projects, ui } = content;

  return (
    <section id="projects" lang="ko" className="py-32 bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold text-pink-600 tracking-widest uppercase mb-3">{ui.projects.label}</h2>
            <h3 className="text-5xl font-bold text-gray-900 tracking-tight">{ui.projects.title}</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-lg md:text-right" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word', lineBreak: 'strict' }}>
            {ui.projects.description}
          </p>
        </div>

        {/* Project List */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              ui={ui.projects}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;