import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-pink-100 selection:text-pink-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;