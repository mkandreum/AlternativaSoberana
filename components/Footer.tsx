import React from 'react';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 border-t-4 border-orange-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6">ALTERNATIVA SOBERANA</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Un proyecto político para transformar la administración en una herramienta al servicio del ciudadano, no en su obstáculo.
              <br/><br/>
              Menos burocracia, más libertad, más España.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="lg:w-2/3 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold">Únete al Pacto</h3>
                <p className="text-slate-400">Recibe actualizaciones y colabora como voluntario digital.</p>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider">
                Fase de Reclutamiento
              </div>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-orange-500 outline-none text-white"
              />
              <input 
                type="email" 
                placeholder="Correo Electrónico" 
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-orange-500 outline-none text-white"
              />
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                Unirme <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Alternativa Soberana. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
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