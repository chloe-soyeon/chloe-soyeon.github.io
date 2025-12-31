import React from 'react';
import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const { profile, ui } = content;

  return (
    <footer id="contact" className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-900/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
              {ui.contact.title.replace('.', '')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed whitespace-pre-line">
              {ui.contact.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:pt-4">
             {/* Email Card */}
             <a 
               href={`mailto:${profile.email}`}
               className="group flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300"
             >
                <div className="flex items-center gap-4">
                   <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <Mail size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-gray-400 mb-1">{ui.contact.emailLabel}</p>
                      <p className="text-2xl font-bold text-white">{profile.email}</p>
                   </div>
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={32} />
             </a>

             {/* GitHub Card - Full Width */}
             <a 
               href={profile.github}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300"
             >
                <div className="flex items-center gap-4">
                   <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <Github size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-gray-400 mb-1">{ui.contact.githubLabel}</p>
                      <p className="text-2xl font-bold text-white">GitHub</p>
                   </div>
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={32} />
             </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
           <p>© {new Date().getFullYear()} {ui.contact.copyright}</p>
           <div className="flex gap-8 mt-4 md:mt-0">
             <span className="hover:text-white cursor-pointer transition-colors">{profile.location}</span>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;