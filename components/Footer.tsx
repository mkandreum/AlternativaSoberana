import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = name.trim().length > 2 && /\S+@\S+\.\S+/.test(email);

    if (!isValid) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <footer className="bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white pt-20 pb-8 border-t-4 border-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_left,#f97316_0,transparent_35%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-2xl font-bold">ALTERNATIVA SOBERANA</h2>
            <p className="text-slate-300 leading-relaxed">
              Un proyecto político para transformar la administración en una herramienta al servicio del ciudadano, no en su obstáculo.
              <br/><br/>
              Menos burocracia, más libertad, más España.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="p-3 bg-slate-800/60 border border-slate-700 rounded-xl shadow-inner">
                <p className="text-[10px] uppercase text-orange-300 font-bold tracking-widest">Tiempo de respuesta</p>
                <p className="font-bold text-lg">24h</p>
                <p className="text-[11px] text-slate-400">Media estimada</p>
              </div>
              <div className="p-3 bg-slate-800/60 border border-slate-700 rounded-xl shadow-inner">
                <p className="text-[10px] uppercase text-orange-300 font-bold tracking-widest">Voluntarios activos</p>
                <p className="font-bold text-lg">12.450</p>
                <p className="text-[11px] text-slate-400">Red nacional</p>
              </div>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="lg:w-2/3 bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-2xl shadow-black/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold">Únete al Pacto</h3>
                <p className="text-slate-400">Recibe actualizaciones y colabora como voluntario digital.</p>
              </div>
              <div className="mt-2 md:mt-0 px-4 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Fase de Reclutamiento
              </div>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit} aria-live="polite">
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                className={`flex-1 px-4 py-3 bg-slate-900 border rounded-lg outline-none text-white transition-colors ${status === 'error' && !name ? 'border-red-500/70 focus:border-red-400' : 'border-slate-700 focus:border-orange-500'}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Nombre completo"
              />
              <input 
                type="email" 
                placeholder="Correo Electrónico" 
                className={`flex-1 px-4 py-3 bg-slate-900 border rounded-lg outline-none text-white transition-colors ${status === 'error' && !email ? 'border-red-500/70 focus:border-red-400' : 'border-slate-700 focus:border-orange-500'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Correo electrónico"
              />
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60" disabled={status === 'success'}>
                {status === 'success' ? 'Enviado' : 'Unirme'} <Send size={18} />
              </button>
            </form>

            {status !== 'idle' && (
              <div className={`mt-4 flex items-center gap-3 text-sm rounded-lg px-4 py-3 border ${status === 'success' ? 'bg-green-500/10 border-green-500/40 text-green-200' : 'bg-red-500/10 border-red-500/40 text-red-200'}`}>
                {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>
                  {status === 'success' ? '¡Gracias! Nos pondremos en contacto contigo en las próximas horas.' : 'Revisa que el nombre y el correo sean válidos antes de enviar.'}
                </span>
              </div>
            )}
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
