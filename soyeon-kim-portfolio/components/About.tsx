import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Quote, FileBadge } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const CardWrapper: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 ${className}`}
    >
      {/* Spotlight Gradient - Pink */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(236, 72, 153, 0.06), transparent 40%)`
        }}
      />
      
      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const { content } = useLanguage();
  const { profile, education, awards, certifications, paper, ui } = content;

  return (
    <section id="about" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
           <h2 className="text-sm font-bold text-pink-600 tracking-widest uppercase mb-3">{ui.about.label}</h2>
           <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{ui.about.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Row 1 */}
          {/* 1. Philosophy Card */}
          <CardWrapper className="md:col-span-2 p-8 md:p-10 bg-gray-50/80">
            <Quote className="absolute top-8 right-8 text-pink-100 hidden md:block" size={100} />
            <div className="relative z-10 flex flex-col justify-center min-h-[180px] md:min-h-[250px]">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">{ui.about.philosophyTitle}</h4>
              <p
                className="text-gray-600 text-xl font-medium text-balance text-center md:text-left max-w-3xl"
                style={{ wordBreak: 'keep-all', overflowWrap: 'break-word', lineHeight: '1.9' }}
              >
                {profile.summary}
              </p>
            </div>
          </CardWrapper>

          {/* 2. Education Card */}
          <CardWrapper className="md:col-span-1 p-8 md:p-10 !bg-gray-900 text-white" delay={0.1}>
             <div className="flex flex-col justify-between h-full">
               <div>
                 <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-8">
                    <GraduationCap className="text-pink-400" size={24} />
                 </div>
                 <h4 className="text-2xl font-bold mb-6">{ui.about.educationTitle}</h4>
                 <div className="space-y-6">
                   {education.map((edu, idx) => (
                      <div key={idx} className="group/item">
                        <p className="font-bold text-lg text-white group-hover/item:text-pink-300 transition-colors">{edu.school}</p>
                        <p className="text-sm text-gray-400 mt-1">{edu.major}</p>
                        <p className="text-xs text-gray-600 font-mono mt-1">{edu.period}</p>
                      </div>
                   ))}
                 </div>
               </div>
             </div>
          </CardWrapper>

          {/* Row 2 */}
          {/* 3. Awards Card */}
          <CardWrapper className="md:col-span-2 p-8 md:p-10" delay={0.2}>
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Award className="text-gray-900" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{ui.about.awardsTitle}</h4>
             </div>
             <ul className="space-y-6">
                {awards.map((award, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0 gap-2 md:gap-4">
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 text-lg leading-snug block mb-1">{award.title}</span>
                      {award.description && (
                        <p className="text-sm text-gray-500 leading-relaxed">
                          : {award.description}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start md:items-end shrink-0">
                      <span className="text-sm font-semibold text-pink-600">{award.issuer}</span>
                      <span className="text-xs text-gray-400 font-mono mt-0.5">{award.date}</span>
                    </div>
                  </li>
                ))}
             </ul>
          </CardWrapper>

          {/* 4. Certifications Card */}
          <CardWrapper className="md:col-span-1 p-8 md:p-8 bg-gray-50/50" delay={0.3}>
             <div className="h-full flex flex-col">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm shrink-0">
                  <FileBadge className="text-gray-900" size={24} />
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-4 shrink-0">{ui.about.certTitle}</h4>
               
               <div className="flex flex-col justify-between flex-grow space-y-3">
                  {certifications.map((cert, idx) => (
                     <div key={idx} className="flex justify-between items-baseline border-b border-gray-200/60 border-dashed pb-2 last:border-0 last:pb-0">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-800 text-sm leading-tight">{cert.title}</span>
                          <span className="text-[10px] text-gray-400 mt-0.5">{cert.issuer}</span>
                        </div>
                        <span className="text-[10px] text-pink-600 font-mono whitespace-nowrap ml-2">{cert.date}</span>
                     </div>
                  ))}
               </div>
             </div>
           </CardWrapper>

           {/* Row 3 */}
           {/* 5. Research Card */}
           <CardWrapper className="md:col-span-3 p-8 md:p-8 !bg-gray-900 border-gray-800" delay={0.4}>
             <div className="flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <BookOpen className="text-pink-400" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-200 mb-1">{ui.about.paperLabel}</h4>
                   <p className="text-lg font-bold text-white leading-tight">{paper.title}</p>
                 </div>
               </div>
               <div className="flex items-center gap-3 text-sm text-pink-300 font-medium bg-gray-800 px-5 py-3 rounded-xl">
                 <span>{paper.conference}</span>
                 <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                 <span>{paper.date}</span>
                 <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                 <span>{paper.role}</span>
               </div>
             </div>
           </CardWrapper>

        </div>
      </div>
    </section>
  );
};

export default About;