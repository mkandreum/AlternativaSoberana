import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import AppDemo from './components/AppDemo';
import Program from './components/Program';
import Footer from './components/Footer';
import { Home, Smartphone, FileText, Users, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pillars', 'demos', 'program', 'footer'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', icon: <Home />, label: 'Inicio' },
    { id: 'demos', icon: <Smartphone />, label: 'Apps' },
    { id: 'program', icon: <FileText />, label: 'Plan' },
    { id: 'footer', icon: <Users />, label: 'Únete' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative selection:bg-orange-500 selection:text-white">
      
      {/* Top Left Brand (Absolute & Animated) */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-40 px-4 sm:px-6 py-6 flex justify-between items-center pointer-events-none"
      >
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Logo with Spain Flag Gradient */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl shadow-lg shadow-red-900/20 overflow-hidden flex items-center justify-center group cursor-pointer border border-white/10">
            {/* Flag Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#AA151B] via-[#F1BF00] to-[#AA151B]"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span className="relative z-10 font-black text-lg sm:text-xl text-white drop-shadow-md tracking-tighter">AS</span>
          </div>

          {/* Text - Now visible on mobile with responsive sizing */}
          <div className="flex flex-col justify-center">
            <span className="block font-bold text-sm sm:text-lg tracking-tight leading-none text-white/95 drop-shadow-sm">
              ALTERNATIVA
            </span>
            <div className="flex items-center gap-1.5">
              <span className="block font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase leading-none text-orange-200/90">
                SOBERANA
              </span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#F1BF00] shadow-[0_0_5px_#F1BF00]"></span>
            </div>
          </div>
        </div>

        {/* Desktop CTA Top Right */}
        <button 
          onClick={() => scrollTo('footer')}
          aria-label="Abrir formulario de afiliación"
          className="hidden md:block pointer-events-auto px-6 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 group"
        >
          <span className="group-hover:text-orange-200 transition-colors">Afiliarme</span>
        </button>
      </motion.header>

      <main className="flex-grow">
        <div id="hero"><Hero /></div>
        
        {/* Modern Divider */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#AA151B] via-[#F1BF00] to-[#AA151B] shadow-lg shadow-orange-900/20 relative z-20"></div>
        
        <div id="pillars"><Pillars /></div>
        <div id="demos"><AppDemo /></div>
        <div id="program"><Program /></div>
      </main>

      <div id="footer"><Footer /></div>

      {/* Modern Floating Pill Navigation - Wider & Larger Buttons */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[95vw]">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          className="flex items-center gap-2 p-2 bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/40 ring-1 ring-white/5 ring-offset-2 ring-offset-black/20"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`relative px-5 py-2.5 rounded-full flex flex-col items-center justify-center transition-all duration-300 min-w-[75px] sm:min-w-[85px] ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="pill-active"
                  className="absolute inset-0 bg-white/10 border border-white/5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-orange-400/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              
              <span className="relative z-10 mb-0.5">
                {React.cloneElement(item.icon as React.ReactElement, { 
                  size: 22, 
                  strokeWidth: activeSection === item.id ? 2.5 : 2 
                })}
              </span>
              <span className={`relative z-10 text-[10px] sm:text-xs font-medium leading-tight tracking-tight transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100 font-semibold' : 'opacity-60'}`}>
                {item.label}
              </span>
              
              {/* Active dot */}
              {activeSection === item.id && (
                 <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="absolute bottom-1.5 w-1 h-1 bg-orange-400 rounded-full shadow-[0_0_4px_rgba(249,115,22,1)]"
                 />
              )}
            </button>
          ))}
        </motion.nav>
      </div>

    </div>
  );
};

export default App;
