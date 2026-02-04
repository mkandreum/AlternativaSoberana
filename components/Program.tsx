import React, { useState } from 'react';
import { ProgramSection } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Coins, TrendingUp, Globe, Scale, ShieldAlert, Banknote, Landmark, Gavel, Radio, Phone, Users } from 'lucide-react';

const programData: ProgramSection[] = [
  {
    id: "fase0",
    category: "FASE 0",
    title: "El Gran Reseteo",
    emoji: "🧨",
    color: "bg-red-600",
    description: "100 Primeros Días: Medidas de choque para desbloquear España.",
    stats: "Ahorro: 2.600 M€",
    items: [
      { title: "Eliminación de Diputaciones", content: "Supresión de 38 organismos políticos. Solo se mantienen en territorios forales/insulares." },
      { title: "Senado Digital", content: "90% sesiones telemáticas. Fin a dietas y viajes absurdos." },
      { title: "Ley 1-IN-2-OUT", content: "Por cada norma nueva, se eliminan dos antiguas." }
    ]
  },
  {
    id: "autonomos",
    category: "ECONOMÍA",
    title: "Revolución Autónoma",
    emoji: "💼",
    color: "bg-orange-500",
    description: "Si ganas, pagas. Si no ganas, respiras. Cuota progresiva real.",
    stats: "+150k Nuevos empleos",
    items: [
      { title: "Cuota Real Estricta", content: "Beneficio 0€ = Cuota 0€. Tramos 5%-15% sobre neto real.", highlight: true },
      { title: "Año de Respiración", content: "1€/mes el primer año para nuevos, sin letra pequeña." },
      { title: "Fusión Fiscal", content: "IVA + IRPF + SS en un solo click trimestral." },
      { title: "Moratoria Inspecciones", content: "2 años sin multas para micropymes (solo avisos)." }
    ]
  },
  {
    id: "campo",
    category: "SOBERANÍA",
    title: "Campo y Alimentación",
    emoji: "🚜",
    color: "bg-green-600",
    description: "Competencia leal y protección al productor nacional.",
    stats: "Arancel Espejo Activo",
    items: [
      { title: "Cláusula Espejo", content: "Aranceles a importaciones con normas inferiores (ej. pesticidas).", highlight: true },
      { title: "Etiqueta Dignidad", content: "Distinción gigante: 'Producido en España' vs 'Importado'." },
      { title: "Ayudas por Empleo", content: "Incentivos por trabajador fijo, no por hectárea vacía." },
      { title: "App ComeLocal", content: "Conexión directa agricultor-consumidor sin intermediarios." }
    ]
  },
  {
    id: "rural",
    category: "TERRITORIO",
    title: "España Vaciada",
    emoji: "🏡",
    color: "bg-yellow-600",
    description: "Reconexión física y digital total del territorio.",
    stats: "1.000 Pueblos Conectados",
    items: [
      { title: "Tren Rural", content: "Red de trenes ligeros frecuentes para 1.000 pueblos en 8 años." },
      { title: "5G Obligatorio", content: "Operadoras: cubren 100% rural o pierden licencia urbana." },
      { title: "Pueblos con Futuro", content: "20.000€ para jóvenes que se muden y trabajen en pueblos." },
      { title: "Vivienda Rural", content: "Alquileres a 1€/mes en municipios críticos." }
    ]
  },
  {
    id: "digital",
    category: "TECNOLOGÍA",
    title: "Estado 1-Click",
    emoji: "📲",
    color: "bg-blue-600",
    description: "Burocracia Cero mediante tecnología y automatización.",
    stats: "-40% Trámites Año 1",
    items: [
      { title: "IDÚNICO", content: "DNI, Cl@ve y Certificados en una App biométrica segura.", highlight: true },
      { title: "MiGobierno.es", content: "Fusión de 21 portales (AEAT, SS, DGT...) en uno solo." },
      { title: "Datos Únicos", content: "Prohibido pedir documentos que el Estado ya tiene." }
    ]
  },
  {
    id: "funcionarios",
    category: "ADMINISTRACIÓN",
    title: "Funcionariado",
    emoji: "⚖️",
    color: "bg-slate-600",
    description: "Exigencia, mérito, incentivos y servicio real.",
    stats: "Auditoría Ciudadana",
    items: [
      { title: "Mystery Ciudadano", content: "Evaluación anónima de oficinas. Las peores se intervienen." },
      { title: "Bonus Excelencia", content: "+20% sueldo a los mejores valorados por ciudadanos." },
      { title: "Despido Exprés", content: "15 días para casos de maltrato o negligencia grave." },
      { title: "Movilidad Forzosa", content: "Reasignación de personal ineficiente a áreas necesarias." }
    ]
  },
  {
    id: "libertad",
    category: "DERECHOS",
    title: "Libertad Financiera",
    emoji: "💶",
    color: "bg-indigo-600",
    description: "Defensa del dinero físico y privacidad económica.",
    stats: "Efectivo Protegido",
    items: [
      { title: "Defensa del Efectivo", content: "Constitucionalmente obligatorio. Límite 10.000€ entre particulares.", highlight: true },
      { title: "Desbancarización", content: "Cuenta pública básica en Correos sin comisiones." },
      { title: "No CBDC", content: "Prohibición constitucional de Moneda Digital Controlada." },
      { title: "IVA Reducido", content: "10% (vs 21%) para pagos en efectivo en comercio local." }
    ]
  },
  {
    id: "internacional",
    category: "GLOBAL",
    title: "Soberanía Global",
    emoji: "🌍",
    color: "bg-teal-600",
    description: "Relaciones inteligentes y defensa de intereses nacionales.",
    items: [
      { title: "Pacto Iberoamericano", content: "Bloques sectoriales de reciprocidad con Latinoamérica." },
      { title: "Veto Estratégico", content: "Bloqueo en UE a acuerdos que dañen sectores clave (campo)." },
      { title: "Agencia Defensa", content: "Litigios automáticos en OMC contra competencia desleal." }
    ]
  },
  {
    id: "financiacion",
    category: "PRESUPUESTO",
    title: "Financiación",
    emoji: "💰",
    color: "bg-emerald-600",
    description: "Crear riqueza, no expoliar. Modelo eficiente.",
    stats: "ROI: 16 Meses",
    items: [
      { title: "Más Productores", content: "Estrategia de ampliar base de contribuyentes, no tipos." },
      { title: "Lucha Fraude IA", content: "Cruce masivo de datos. Recompensa del 15% al denunciante." },
      { title: "Redistribución", content: "Ahorro burocrático (4.500M€) reinvertido en bajada de cuotas." }
    ]
  },
  {
    id: "garantias",
    category: "DEMOCRACIA",
    title: "Garantías y Control",
    emoji: "🗳️",
    color: "bg-violet-600",
    description: "El ciudadano al mando. Transparencia total.",
    items: [
      { title: "Panel Público", content: "Métricas en tiempo real de eficiencia administrativa." },
      { title: "Derecho Desconexión", content: "Canal 060 humano 24/7 y oficinas físicas garantizadas." },
      { title: "Revocatorio", content: "Referéndum de confianza cada 2 años. <50% = Elecciones." }
    ]
  }
];

const Program: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="program" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={14} className="text-green-600" />
            Programa Electoral 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Un Plan de <span className="text-orange-600">Supervivencia.</span>
          </h2>
          <p className="text-lg text-slate-600">
            No es ideología, es pura eficiencia. 10 ejes para transformar el Estado en una herramienta útil.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
          
          {/* Main "Phase 0" Card - Large */}
          <motion.div 
             layout
             className="md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl flex flex-col justify-between min-h-[300px]"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                   <span className="px-2 py-1 bg-red-500 rounded text-xs font-bold uppercase">Prioridad Máxima</span>
                   <span className="text-slate-400 text-sm">100 Días</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Fase 0: El Gran Reseteo</h3>
                <p className="text-slate-300 max-w-md">Medidas de choque inmediato. Eliminación de diputaciones y burocracia inútil para liberar 2.600M€.</p>
             </div>
             <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 relative z-10">
                <div className="text-center">
                   <div className="text-2xl font-bold text-red-400">38</div>
                   <div className="text-[10px] uppercase text-slate-400">Diputaciones Cerradas</div>
                </div>
                <div className="text-center border-l border-white/10">
                   <div className="text-2xl font-bold text-white">90%</div>
                   <div className="text-[10px] uppercase text-slate-400">Senado Digital</div>
                </div>
                <div className="text-center border-l border-white/10">
                   <div className="text-2xl font-bold text-green-400">2.6B€</div>
                   <div className="text-[10px] uppercase text-slate-400">Ahorro Total</div>
                </div>
             </div>
          </motion.div>

          {/* Dynamic Cards */}
          {programData.slice(1).map((section) => (
            <motion.div 
              layout
              key={section.id}
              onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`rounded-3xl p-6 cursor-pointer border-2 relative overflow-hidden group flex flex-col ${
                expandedId === section.id 
                ? 'bg-white border-orange-500 shadow-2xl md:col-span-2 row-span-2 z-20' 
                : 'bg-white border-slate-100 hover:border-orange-200 hover:shadow-lg'
              }`}
            >
              {/* Header Stripe */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${section.color}`}></div>
              
              <motion.div layout="position">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{section.category}</span>
                    <h3 className={`font-bold text-slate-900 leading-tight ${expandedId === section.id ? 'text-2xl' : 'text-xl'}`}>{section.title}</h3>
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform">{section.emoji}</div>
                </div>
                
                <p className={`text-slate-600 mb-4 ${expandedId === section.id ? 'text-lg' : 'text-sm line-clamp-2'}`}>
                  {section.description}
                </p>
                
                {section.stats && (
                   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">
                     <TrendingUp size={12} />
                     {section.stats}
                   </div>
                )}
              </motion.div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === section.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 border-t border-slate-100 pt-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className={`p-3 rounded-xl border ${item.highlight ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-100'}`}>
                           <h4 className={`font-bold text-sm mb-1 ${item.highlight ? 'text-orange-800' : 'text-slate-800'}`}>{item.title}</h4>
                           <p className="text-xs text-slate-600 leading-relaxed">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!expandedId && (
                <motion.div layout="position" className="mt-auto pt-4 flex justify-end">
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                      <ChevronDown size={16} />
                   </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Financial Breakdown Section */}
        <div className="mt-24 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-50"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-flex items-center gap-2 mb-6">
                 <Coins className="text-yellow-400" />
                 <span className="font-bold text-yellow-400 uppercase tracking-widest text-sm">Financiación Realista</span>
               </div>
               <h3 className="text-3xl md:text-4xl font-extrabold mb-6">¿De dónde sale el dinero?</h3>
               <p className="text-slate-400 text-lg mb-8">
                 No subimos impuestos. Eliminamos el gasto político improductivo y reinvertimos en lo que importa.
                 <br/><br/>
                 <strong className="text-white">ROI Estimado: 16 meses.</strong>
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 font-bold">-</div>
                    <div>
                      <div className="font-bold text-lg">Ahorro Burocrático</div>
                      <div className="text-slate-400 text-sm">Eliminación de duplicidades y organismos.</div>
                    </div>
                    <div className="ml-auto font-mono text-green-400 font-bold text-xl">+4.500 M€</div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 font-bold">%</div>
                    <div>
                      <div className="font-bold text-lg">Tasa Tecnológica</div>
                      <div className="text-slate-400 text-sm">Uso de infraestructura pública por Big Tech.</div>
                    </div>
                    <div className="ml-auto font-mono text-green-400 font-bold text-xl">+500 M€</div>
                 </div>
               </div>
            </div>

            {/* Visual Budget Distribution */}
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
               <h4 className="font-bold mb-6 text-center">Destino de la Inversión</h4>
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2 text-sm font-bold">
                       <span>Fondo Tren Rural</span>
                       <span className="text-yellow-400">2.000 M€</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                       <motion.div initial={{width: 0}} whileInView={{width: '45%'}} className="h-full bg-yellow-500 rounded-full"></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm font-bold">
                       <span>Bonificación Autónomos</span>
                       <span className="text-orange-400">1.500 M€</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                       <motion.div initial={{width: 0}} whileInView={{width: '35%'}} className="h-full bg-orange-500 rounded-full"></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm font-bold">
                       <span>Internet Rural & Guarderías 0€</span>
                       <span className="text-blue-400">1.000 M€</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                       <motion.div initial={{width: 0}} whileInView={{width: '20%'}} className="h-full bg-blue-500 rounded-full"></motion.div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Program;