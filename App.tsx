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
    { id: 'hero', icon: <Home size={18} />, label: 'Inicio' },
    { id: 'demos', icon: <Smartphone size={18} />, label: 'Apps' },
    { id: 'program', icon: <FileText size={18} />, label: 'Programa' },
    { id: 'footer', icon: <Users size={18} />, label: 'Únete' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative selection:bg-orange-500 selection:text-white">
      
      {/* Top Left Brand (Static) */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-orange-900/20 border border-white/10 backdrop-blur-sm">
            AS
          </div>
          <div className="hidden sm:block">
            <span className="block font-bold text-lg tracking-tight leading-none text-white/90">ALTERNATIVA</span>
            <span className="block font-bold text-lg tracking-tight leading-none text-white/50">SOBERANA</span>
          </div>
        </div>

        {/* Desktop CTA Top Right */}
        <button className="hidden md:block pointer-events-auto px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/10 active:scale-95">
          Afiliarme
        </button>
      </header>

      <main className="flex-grow">
        <div id="hero"><Hero /></div>
        <div className="h-2 w-full flag-gradient"></div>
        <div id="pillars"><Pillars /></div>
        <div id="demos"><AppDemo /></div>
        <div id="program"><Program /></div>
      </main>

      <div id="footer"><Footer /></div>

      {/* Modern Floating Pill Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 sm:w-auto">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center justify-between sm:justify-center p-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/40 ring-1 ring-white/5"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-3 sm:px-5 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="pill-active"
                    className="absolute inset-0 bg-orange-600 rounded-full shadow-lg shadow-orange-600/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">{item.icon}</span>
                <span className={`relative z-10 text-sm font-semibold hidden sm:inline-block ${activeSection === item.id ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>

          <button className="hidden sm:flex relative items-center justify-center w-10 h-10 rounded-full bg-white text-slate-900 hover:bg-orange-50 transition-colors shadow-lg shadow-white/10 active:scale-95">
            <HeartHandshake size={20} />
          </button>
        </motion.nav>
      </div>

    </div>
  );
};

export default App;