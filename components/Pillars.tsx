import React from 'react';
import { Smartphone, ShieldCheck, LineChart, TrainFront } from 'lucide-react';
import { motion } from 'framer-motion';

const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: <Smartphone className="w-10 h-10 text-orange-500" />,
      title: "Cero Burocracia",
      sub: "Trámites en minutos, no en meses.",
      desc: "Ley de Lenguaje Claro y Plataforma Única."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
      title: "Soberanía Real",
      sub: "Tu campo protegido, tu dinero tuyo.",
      desc: "Cláusulas espejo y defensa del efectivo."
    },
    {
      icon: <LineChart className="w-10 h-10 text-orange-500" />,
      title: "Autónomos Libres",
      sub: "Si ganas 0, pagas 0.",
      desc: "Cuota por beneficio real y año de respiración."
    },
    {
      icon: <TrainFront className="w-10 h-10 text-orange-500" />,
      title: "España Conectada",
      sub: "Tren y 5G en cada pueblo.",
      desc: "Inversión masiva en el mundo rural."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Nuestros Pilares</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">La base de una nación eficiente</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h4>
              <p className="text-orange-600 font-semibold mb-3">{pillar.sub}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;