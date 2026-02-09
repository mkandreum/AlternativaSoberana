import React from 'react';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 sm:pt-20 pb-6 sm:pb-8 border-t-4 border-orange-500">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 mb-12 sm:mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:w-1/3">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">ALTERNATIVA SOBERANA</h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
              Un proyecto político para transformar la administración en una herramienta al servicio del ciudadano, no en su obstáculo.
              <br/><br/>
              Menos burocracia, más libertad, más España.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors touch-manipulation active:scale-95"><Twitter size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors touch-manipulation active:scale-95"><Facebook size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors touch-manipulation active:scale-95"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="lg:w-2/3 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Únete al Pacto</h3>
                <p className="text-slate-400 text-sm sm:text-base">Recibe actualizaciones y colabora como voluntario digital.</p>
              </div>
              <div className="px-3 sm:px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Fase de Reclutamiento
              </div>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                className="flex-1 px-4 py-3 sm:py-3.5 bg-slate-900 border border-slate-700 rounded-lg focus:border-orange-500 outline-none text-white text-sm sm:text-base"
              />
              <input 
                type="email" 
                placeholder="Correo Electrónico" 
                className="flex-1 px-4 py-3 sm:py-3.5 bg-slate-900 border border-slate-700 rounded-lg focus:border-orange-500 outline-none text-white text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 min-h-[48px] bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 touch-manipulation active:scale-95 text-sm sm:text-base">
                Unirme <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-slate-500 gap-4">
          <p>© 2026 Alternativa Soberana. Todos los derechos reservados.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;