import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Database, Activity, GitBranch } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { content } = useLanguage();
  const { profile, ui } = content;
  
  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full h-[95vh] min-h-[800px] overflow-hidden bg-[#f5f5f7]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-multiply pointer-events-none">
        <iframe 
          src='https://my.spline.design/interactivecubes-ztHnXnHMbfSUpQrMwvcvGu6T/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-105" 
          title="Interactive Cubes"
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-28 md:pt-32 px-4 pointer-events-none">
        <motion.div
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm mb-4"
          >
             <span className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
             </span>
             <span className="text-xs font-bold tracking-widest uppercase text-gray-800">{ui.hero.badge}</span>
          </motion.div>

          {/* Name & Title */}
          <div className="flex flex-col items-center text-center">
             <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 drop-shadow-sm leading-tight mb-6 pb-2">
              {profile.nameEng}
            </h1>
             <div className="h-1.5 w-24 bg-pink-500 rounded-full mb-8 opacity-90"></div>
             <h2 className="text-3xl md:text-5xl font-medium text-gray-800 tracking-tight">
               {profile.heroTitle}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal text-balance text-center">
            {profile.heroDescription}
          </p>

          {/* Key Attributes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
             <div className="flex items-center gap-2 text-gray-700 font-semibold px-5 py-2.5 bg-white/70 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm">
                <Database size={18} className="text-pink-600" />
                <span>{ui.hero.role1}</span>
             </div>
             <div className="flex items-center gap-2 text-gray-700 font-semibold px-5 py-2.5 bg-white/70 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm">
                <GitBranch size={18} className="text-pink-600" />
                <span>{ui.hero.role2}</span>
             </div>
             <div className="flex items-center gap-2 text-gray-700 font-semibold px-5 py-2.5 bg-white/70 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm">
                <Activity size={18} className="text-pink-600" />
                <span>{ui.hero.role3}</span>
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 z-10 pointer-events-none"
      >
        <ChevronDown size={32} />
      </motion.div>
      
      {/* Gradient Overlay for seamless blending */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;