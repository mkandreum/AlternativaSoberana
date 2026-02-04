import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, TrendingUp, Clock, AlertCircle, Coins, ArrowRight, BookOpen, Shield, Tractor, Users, Train, FileCheck } from 'lucide-react';

interface ProgramPhase {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  timeline: string;
  keyMeasures: { title: string; desc: string; icon: React.ReactNode }[];
  impact: { label: string; value: string; sub: string }[];
}

const phases: ProgramPhase[] = [
  {
    id: "fase0",
    title: "Fase 0: El Gran Reseteo",
    subtitle: "100 Primeros Días",
    icon: <AlertCircle />,
    color: "bg-red-600",
    timeline: "Días 1 - 100",
    keyMeasures: [
      { 
        title: "Ley Cura-Burocracia", 
        desc: "Lenguaje claro obligatorio (nivel ESO). Si no se entiende, el trámite es nulo. Sello 'Entendible' en cada carta.", 
        icon: <BookOpen size={18} /> 
      },
      { 
        title: "Un Trámite, Una Vez", 
        desc: "Prohibido pedir documentos que el Estado ya tiene. Multas automáticas al organismo que duplique solicitudes.", 
        icon: <FileCheck size={18} /> 
      },
      { 
        title: "Fusión de Portales", 
        desc: "Creación de MiGobierno.es unificando AEAT, Seguridad Social y 19 organismos más.", 
        icon: <Users size={18} /> 
      }
    ],
    impact: [
      { label: "Ahorro Inmediato", value: "2.600 M€", sub: "Eliminación de Diputaciones" },
      { label: "Tiempo Ciudadano", value: "-30%", sub: "Reducción de burocracia" }
    ]
  },
  {
    id: "fase1",
    title: "Fase 1: Estado Austero",
    subtitle: "Limpieza Institucional",
    icon: <Shield />,
    color: "bg-slate-700",
    timeline: "Año 1",
    keyMeasures: [
      { title: "Senado Digital", desc: "90% de actividad telemática. Ahorro de dietas, viajes y estructuras obsoletas.", icon: <Users size={18}/> },
      { title: "Regla 1-IN-2-OUT", desc: "Por cada nueva norma aprobada, se deben derogar dos antiguas.", icon: <FileCheck size={18}/> },
      { title: "Eliminación de Diputaciones", desc: "Transferencia de competencias a CCAA o Municipios. Fin del gasto político intermedio.", icon: <Shield size={18}/> }
    ],
    impact: [
      { label: "Gasto Político", value: "-15%", sub: "Reducción estructuras" },
      { label: "Recursos Liberados", value: "2.500 M€", sub: "Para Tren Rural" }
    ]
  },
  {
    id: "fase2",
    title: "Fase 2: Autónomos",
    subtitle: "El Motor de España",
    icon: <Users />,
    color: "bg-orange-500",
    timeline: "Año 1 - 2",
    keyMeasures: [
      { title: "Cuota Beneficio Real", desc: "Si ganas 0€, pagas 0€. Tramos progresivos del 5% al 15%.", icon: <Coins size={18}/> },
      { title: "Año de Respiración", desc: "1€/mes durante el primer año para nuevos emprendedores sin letra pequeña.", icon: <Clock size={18}/> },
      { title: "Fusión Fiscal", desc: "IVA + IRPF + SS en un solo click trimestral desde la App.", icon: <FileCheck size={18}/> }
    ],
    impact: [
      { label: "Nuevos Autónomos", value: "+150.000", sub: "Estimación anual" },
      { label: "Economía Sumergida", value: "-20%", sub: "Aflore fiscal" }
    ]
  },
  {
    id: "fase3",
    title: "Fase 3: Soberanía",
    subtitle: "Campo e Industria",
    icon: <Tractor />,
    color: "bg-green-600",
    timeline: "Año 2",
    keyMeasures: [
      { title: "Cláusula Espejo", desc: "Arancel automático a productos importados que no cumplan normas fitosanitarias UE.", icon: <Shield size={18}/> },
      { title: "Etiqueta Dignidad", desc: "Distinción visual gigante 'Origen España' en el frontal del envase.", icon: <FileCheck size={18}/> },
      { title: "Defensa del Efectivo", desc: "Prohibición de CBDCs. Uso del efectivo garantizado por Constitución.", icon: <Coins size={18}/> }
    ],
    impact: [
      { label: "Sector Primario", value: "+12%", sub: "Rentabilidad" },
      { label: "Seguridad", value: "100%", sub: "Alimentaria" }
    ]
  },
  {
    id: "fase4",
    title: "Fase 4: Territorio",
    subtitle: "España Conectada",
    icon: <Train />,
    color: "bg-blue-600",
    timeline: "Año 3 - 4",
    keyMeasures: [
      { title: "Tren Rural", desc: "Conexión de 1.000 pueblos en 8 años mediante tren ligero.", icon: <Train size={18}/> },
      { title: "Internet 5G por Ley", desc: "Obligatorio para operadoras si quieren mantener licencia urbana.", icon: <Users size={18}/> },
      { title: "Vivienda Rural", desc: "Alquileres a 1€ en municipios críticos para jóvenes trabajadores remotos.", icon: <Clock size={18}/> }
    ],
    impact: [
      { label: "Población Rural", value: "+5%", sub: "Recuperación" },
      { label: "Conectividad", value: "100%", sub: "Territorio nacional" }
    ]
  }
];

const Program: React.FC = () => {
  const [activePhase, setActivePhase] = useState<ProgramPhase>(phases[0]);
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePhaseClick = (phase: ProgramPhase) => {
    setActivePhase(phase);
    // On mobile, scroll to content to make it visible
    if (window.innerWidth < 1024 && contentRef.current) {
       const yOffset = -40; 
       const element = contentRef.current;
       const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
       
       window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <section id="program" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={14} className="text-green-600" />
            Programa Electoral 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hoja de Ruta para una <span className="text-orange-600">Nación Funcional</span>
          </h2>
          <p className="text-lg text-slate-600">
            Un plan cronológico, financiado y específico. Sin retórica vacía.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-2 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)]">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => handlePhaseClick(phase)}
                className={`group relative p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                  activePhase.id === phase.id 
                    ? 'bg-white border-orange-500 shadow-xl scale-[1.02] z-10' 
                    : 'bg-white border-transparent hover:border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                    activePhase.id === phase.id ? `${phase.color} text-white` : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                  }`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-0.5">{phase.timeline}</div>
                    <div className={`font-bold text-lg leading-tight ${activePhase.id === phase.id ? 'text-slate-900' : 'text-slate-500'}`}>{phase.title}</div>
                  </div>
                  {activePhase.id === phase.id && (
                    <motion.div layoutId="arrow" className="text-orange-500">
                      <ArrowRight size={20} />
                    </motion.div>
                  )}
                </div>
              </button>
            ))}

            {/* Budget Mini-Card - Hidden on small mobile to save space, visible on tablet+ */}
            <div className="mt-4 lg:mt-auto bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Coins size={60} /></div>
                <div className="relative z-10">
                    <div className="text-xs uppercase font-bold text-orange-400 mb-2">Financiación</div>
                    <div className="text-2xl font-bold mb-1">ROI: 16 Meses</div>
                    <p className="text-xs text-slate-400">La inversión de 6.000M€ se recupera mediante ahorro burocrático y tasa tecnológica.</p>
                </div>
                {/* Simple Bar Chart */}
                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-12">Coste</span>
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-red-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-12">Ahorro</span>
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3 scroll-mt-24" ref={contentRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-12 border border-slate-100 shadow-xl h-full flex flex-col"
              >
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-bold uppercase ${activePhase.color}`}>
                      {activePhase.subtitle}
                    </span>
                    <span className="text-slate-400 text-sm font-semibold flex items-center gap-1">
                      <Clock size={14} /> {activePhase.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{activePhase.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                     {activePhase.impact.map((metric, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                           <div className="text-xl md:text-2xl font-bold text-slate-900">{metric.value}</div>
                           <div className="text-[10px] md:text-xs font-bold uppercase text-slate-500">{metric.label}</div>
                           <div className="text-[10px] text-slate-400 mt-1">{metric.sub}</div>
                        </div>
                     ))}
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                   <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      Medidas Clave
                   </h4>
                   <div className="grid gap-4">
                      {activePhase.keyMeasures.map((measure, idx) => (
                         <div key={idx} className="group p-4 bg-slate-50 hover:bg-white rounded-xl border border-transparent hover:border-slate-200 hover:shadow-lg transition-all flex gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activePhase.color} bg-opacity-10 text-slate-700 group-hover:bg-opacity-20`}>
                               {measure.icon}
                            </div>
                            <div>
                               <h5 className="font-bold text-slate-900 text-sm md:text-base">{measure.title}</h5>
                               <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-1">{measure.desc}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Program;