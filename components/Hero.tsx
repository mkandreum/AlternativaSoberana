import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Timer, ShieldCheck } from 'lucide-react';

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

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500/50 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              PLAN DE MODERNIZACIÓN 2026
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              España <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-400">
                Soberana y Ágil
              </span>
            </h1>
            
            <div className="space-y-4 border-l-4 border-orange-500 pl-6">
               <p className="text-xl lg:text-2xl text-slate-300 max-w-lg leading-relaxed">
                Tu tiempo es vida. <br/>
                <span className="text-white font-semibold">No lo pierdas en colas.</span>
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-slate-400">
                <span className="flex items-center gap-1"><Timer size={14} className="text-orange-500"/> Trámites en minutos</span>
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-orange-500"/> Soberanía Real</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToDemo}
                className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg shadow-orange-900/20 transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="flex items-center gap-2">
                  Prueba el Estado 1-Click
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={scrollToProgram}
                className="px-8 py-4 border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white font-semibold rounded-lg transition-all"
              >
                Ver Plan Completo
              </button>
            </div>
          </motion.div>

          {/* Visual Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video group">
              <div className="absolute top-0 w-full h-1 flag-gradient z-20"></div>
              {/* Abstract Representation of Connected Spain */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
                 <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                 
                 {/* Animated Train Line */}
                 <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-slate-700 overflow-hidden">
                    <div className="w-1/3 h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-[moveRight_2s_linear_infinite]"></div>
                 </div>
                 
                 {/* Connection Nodes */}
                 <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"></div>
                 <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"></div>
                 <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"></div>
                 
                 {/* Floating UI Card */}
                 <div className="absolute top-1/4 right-10 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                             <ShieldCheck />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 uppercase">Estado de la Red</div>
                            <div className="font-bold text-white">100% Operativa</div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="text-3xl font-bold text-white">4.500M€</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest">Ahorro Anual</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;