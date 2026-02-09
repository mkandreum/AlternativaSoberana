import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Timer, ShieldCheck, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden flex items-center">
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-20 pb-16 sm:pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6 sm:space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-1.5 border border-orange-500/30 rounded-full bg-orange-500/10 text-orange-300 text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_orange]"></span>
              <span className="hidden sm:inline">Plan de Modernización 2026</span>
              <span className="sm:hidden">Modernización 2026</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              España <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1BF00] via-orange-300 to-[#F1BF00]">
                Soberana y Ágil
              </span>
            </h1>
            
            <div className="space-y-3 sm:space-y-4 border-l-4 border-[#AA151B] pl-4 sm:pl-6 py-1">
               <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-lg leading-relaxed font-light">
                Tu tiempo es vida. <br/>
                <strong className="text-white font-semibold">No lo pierdas en ventanillas.</strong>
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-2"><Cpu size={16} className="text-orange-500"/> Estado Digital</span>
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#AA151B]"/> Soberanía Real</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToDemo}
                className="group relative px-6 sm:px-8 py-4 min-h-[52px] bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-500 hover:to-red-600 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-orange-900/30 transition-all overflow-hidden active:scale-95 touch-manipulation"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="flex items-center justify-center gap-2 sm:gap-3 relative z-10 text-sm sm:text-base">
                  <span className="hidden sm:inline">Prueba el Estado 1-Click</span>
                  <span className="sm:hidden">Estado 1-Click</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProgram}
                className="px-6 sm:px-8 py-4 min-h-[52px] border-2 border-slate-600 hover:border-slate-400 bg-slate-800/50 backdrop-blur-sm text-slate-300 hover:text-white font-semibold rounded-xl sm:rounded-2xl transition-all active:scale-95 touch-manipulation text-sm sm:text-base"
              >
                Ver Plan Completo
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative perspective-1000 w-full"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video group transform transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute top-0 w-full h-1 flag-gradient z-20"></div>
              {/* Abstract Representation of Connected Spain */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
                 <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                 
                 {/* Animated Train Line */}
                 <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-slate-700 overflow-hidden">
                    <div className="w-1/3 h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-[moveRight_2s_linear_infinite]"></div>
                 </div>
                 
                 {/* Connection Nodes */}
                 <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg shadow-white/50 z-10"></div>
                 <div className="absolute bottom-1/4 left-2/3 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg shadow-white/50 z-10"></div>
                 <div className="absolute bottom-1/4 right-6 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg shadow-white/50 z-10"></div>
                 
                 {/* Floating UI Card */}
                 <div className="absolute top-1/4 right-4 sm:right-10 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-2xl">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                             <ShieldCheck size={16} className="sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-bold">Estado de la Red</div>
                            <div className="font-bold text-white text-sm sm:text-lg">100% Soberana</div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-slate-800 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-700 shadow-xl shadow-black/20"
            >
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">4.500M€</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Ahorro en Grasa Política</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 w-full flex justify-center text-slate-600"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;