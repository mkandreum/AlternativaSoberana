import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppTab } from '../types';
import { CheckCircle, AlertTriangle, Store, ScanBarcode, ArrowRight, Smartphone, Wallet, GraduationCap, Bell, Fingerprint, LayoutDashboard, FileText, Activity, ShieldCheck, MapPin } from 'lucide-react';

const AppDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.GOVERNMENT);
  
  // State for Business App
  const [businessStep, setBusinessStep] = useState(0); 
  const [businessName, setBusinessName] = useState('');

  // State for Food App
  const [foodStep, setFoodStep] = useState(0); 
  
  // State for Citizen App
  const [citizenStep, setCitizenStep] = useState(0);

  // State for Government App
  const [govStep, setGovStep] = useState(0);

  const handleBusinessSubmit = () => {
    if (!businessName) return;
    setBusinessStep(1);
    // Simulate complex background checks
    setTimeout(() => {
      setBusinessStep(2);
    }, 2500); 
  };

  const resetBusiness = () => {
    setBusinessStep(0);
    setBusinessName('');
  };

  const autoFillBusiness = () => {
    setBusinessName("Bar Manolo");
  };

  return (
    <section id="demos" className="py-16 sm:py-20 lg:py-24 bg-slate-950 overflow-hidden relative border-t border-slate-800">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          
          {/* Description Text */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Smartphone size={14} />
              Proyecto Estado 1-Click
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              La Administración <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">en tu bolsillo.</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Hemos fusionado 21 portales en una sola interfaz. La infraestructura digital está lista. No son maquetas, es lógica real aplicada a problemas reales.
            </p>

            {/* App Selection Tabs - Grid Layout */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
              <button 
                onClick={() => { setActiveTab(AppTab.GOVERNMENT); setGovStep(0); }}
                className={`p-3 sm:p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-2 sm:gap-3 touch-manipulation active:scale-95 ${activeTab === AppTab.GOVERNMENT ? 'bg-slate-800 text-white border-orange-500 shadow-lg shadow-orange-900/20' : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800'}`}
              >
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg text-white"><LayoutDashboard size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] opacity-70 uppercase tracking-wider">Dashboard</div>
                  <div className="text-xs sm:text-sm truncate">MiGobierno</div>
                </div>
              </button>

              <button 
                onClick={() => { setActiveTab(AppTab.BUSINESS); resetBusiness(); }}
                className={`p-3 sm:p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-2 sm:gap-3 touch-manipulation active:scale-95 ${activeTab === AppTab.BUSINESS ? 'bg-slate-800 text-white border-blue-500 shadow-lg shadow-blue-900/20' : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800'}`}
              >
                <div className="p-1.5 sm:p-2 bg-blue-600 rounded-lg text-white"><Store size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] opacity-70 uppercase tracking-wider">Empresa</div>
                  <div className="text-xs sm:text-sm truncate">MiNegocio</div>
                </div>
              </button>
              
              <button 
                onClick={() => { setActiveTab(AppTab.CITIZEN); setCitizenStep(0); }}
                className={`p-3 sm:p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-2 sm:gap-3 touch-manipulation active:scale-95 ${activeTab === AppTab.CITIZEN ? 'bg-slate-800 text-white border-purple-500 shadow-lg shadow-purple-900/20' : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800'}`}
              >
                <div className="p-1.5 sm:p-2 bg-purple-600 rounded-lg text-white"><Wallet size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] opacity-70 uppercase tracking-wider">Personal</div>
                  <div className="text-xs sm:text-sm truncate">MiCarpeta</div>
                </div>
              </button>

              <button 
                onClick={() => { setActiveTab(AppTab.FOOD); setFoodStep(0); }}
                className={`p-3 sm:p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-2 sm:gap-3 touch-manipulation active:scale-95 ${activeTab === AppTab.FOOD ? 'bg-slate-800 text-white border-green-500 shadow-lg shadow-green-900/20' : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800'}`}
              >
                <div className="p-1.5 sm:p-2 bg-green-600 rounded-lg text-white"><ScanBarcode size={16} className="sm:w-[18px] sm:h-[18px]" /></div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] opacity-70 uppercase tracking-wider">Consumo</div>
                  <div className="text-xs sm:text-sm truncate">ComeLocal</div>
                </div>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 bg-slate-900 rounded-2xl border border-slate-800"
              >
                <h3 className="font-bold text-white mb-2 flex items-center gap-2 text-lg">
                  {activeTab === AppTab.GOVERNMENT && "Control Total en un vistazo"}
                  {activeTab === AppTab.BUSINESS && "Fusión de 3 ministerios y ayuntamiento"}
                  {activeTab === AppTab.CITIZEN && "Tus datos trabajan para ti"}
                  {activeTab === AppTab.FOOD && "Soberanía alimentaria en tiempo real"}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {activeTab === AppTab.GOVERNMENT && "El nuevo portal unificado 'MiGobierno.es' centraliza AEAT, Seguridad Social y DGT. Recibe alertas proactivas antes de que te multen."}
                  {activeTab === AppTab.BUSINESS && "Analizamos tu solicitud contra 21 bases de datos en tiempo real. Si cumples, tienes licencia provisional inmediata bajo declaración responsable."}
                  {activeTab === AppTab.CITIZEN && "Sistema IDÚNICO. Carpeta ciudadana que bloquea solicitudes de documentos duplicados. Beca proactiva calculada antes de pedirla."}
                  {activeTab === AppTab.FOOD && "La Ley de Cláusula Espejo en tu mano. Escanea para detectar productos que no cumplen normativas UE que sí se exigen a los nuestros."}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PHONE MOCKUP */}
          <div className="lg:w-1/2 flex justify-center perspective-1000">
            <motion.div 
              initial={{ rotateY: -5, rotateX: 2 }}
              animate={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1 }}
              className="relative w-[340px] h-[680px] bg-slate-950 rounded-[3.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10"
            >
              {/* Dynamic Notch/Dynamic Island area */}
              <div className="absolute top-0 left-0 w-full h-14 z-30 bg-black/20 backdrop-blur-sm flex justify-center items-end pb-2">
                 <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2 px-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-75"></div>
                 </div>
              </div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-slate-50 relative flex flex-col font-sans">
                
                {/* Dynamic App Header */}
                <div className={`px-5 pt-14 pb-4 sticky top-0 z-20 flex justify-between items-center shadow-sm transition-colors duration-300 ${
                  activeTab === AppTab.GOVERNMENT ? 'bg-slate-900 text-white' : 
                  'bg-white text-slate-900'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm ${
                        activeTab === AppTab.GOVERNMENT ? 'bg-gradient-to-br from-orange-500 to-red-600' :
                        activeTab === AppTab.BUSINESS ? 'bg-blue-600' : 
                        activeTab === AppTab.CITIZEN ? 'bg-purple-600' : 'bg-green-600'
                    }`}>
                       {activeTab === AppTab.GOVERNMENT && <LayoutDashboard size={16} />}
                       {activeTab === AppTab.BUSINESS && <Store size={16} />}
                       {activeTab === AppTab.CITIZEN && <Wallet size={16} />}
                       {activeTab === AppTab.FOOD && <ScanBarcode size={16} />}
                    </div>
                    <div>
                        <span className="font-bold text-sm tracking-tight block leading-none">
                        {activeTab === AppTab.GOVERNMENT && 'MiGobierno'}
                        {activeTab === AppTab.BUSINESS && 'MiNegocio'}
                        {activeTab === AppTab.CITIZEN && 'MiCarpeta'}
                        {activeTab === AppTab.FOOD && 'ComeLocal'}
                        </span>
                        <span className="text-[10px] opacity-60 font-medium">Gobierno de España</span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${activeTab === AppTab.GOVERNMENT ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-100'}`}>
                    <Fingerprint size={16} className={activeTab === AppTab.GOVERNMENT ? 'text-slate-400' : 'text-slate-400'} />
                  </div>
                </div>

                <div className={`flex-1 relative overflow-hidden flex flex-col ${activeTab === AppTab.GOVERNMENT ? 'bg-slate-900' : 'bg-slate-50'}`}>
                  <AnimatePresence mode="wait">
                    
                    {/* --- GOVERNMENT SUPER APP --- */}
                    {activeTab === AppTab.GOVERNMENT && (
                      <motion.div key="gov" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col p-5">
                         {govStep === 0 && (
                            <>
                                <div className="mb-6">
                                    <h2 className="text-2xl text-white font-light">Hola, <span className="font-bold">Carlos</span></h2>
                                    <p className="text-slate-400 text-xs">ID Digital Verificado • Nivel 5 de Ciudadanía</p>
                                </div>

                                {/* Alerts Section */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                                        <span>Alertas Pendientes</span>
                                        <span className="bg-red-500 text-white px-2 rounded-full">2</span>
                                    </div>
                                    <motion.button 
                                        onClick={() => setGovStep(1)}
                                        whileTap={{scale: 0.98}}
                                        className="w-full bg-slate-800 p-4 rounded-xl border-l-4 border-red-500 flex items-start gap-3 shadow-lg"
                                    >
                                        <div className="bg-red-500/20 p-2 rounded-lg text-red-500"><Activity size={18} /></div>
                                        <div className="text-left">
                                            <h4 className="text-white font-bold text-sm">Declaración Trimestral IVA</h4>
                                            <p className="text-slate-400 text-xs mt-1">Vence en 3 días. Autocompletado listo.</p>
                                        </div>
                                    </motion.button>
                                    <div className="w-full bg-slate-800 p-4 rounded-xl border-l-4 border-yellow-500 flex items-start gap-3 shadow-lg opacity-60">
                                        <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-500"><MapPin size={18} /></div>
                                        <div className="text-left">
                                            <h4 className="text-white font-bold text-sm">Renovación ITV</h4>
                                            <p className="text-slate-400 text-xs mt-1">Vehículo 1234-BBB. Pedir cita.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                        <div className="text-slate-400 text-[10px] uppercase">Ahorro Anual</div>
                                        <div className="text-green-400 font-bold text-xl">450 €</div>
                                        <div className="text-slate-500 text-[10px]">en devoluciones</div>
                                    </div>
                                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                        <div className="text-slate-400 text-[10px] uppercase">Trámites</div>
                                        <div className="text-white font-bold text-xl">4</div>
                                        <div className="text-slate-500 text-[10px]">este año</div>
                                    </div>
                                </div>
                            </>
                         )}
                         {govStep === 1 && (
                             <div className="flex-1 flex flex-col">
                                 <div className="flex items-center gap-2 mb-6 text-slate-400 cursor-pointer" onClick={() => setGovStep(0)}>
                                     <ArrowRight className="rotate-180" size={16} /> <span>Volver</span>
                                 </div>
                                 <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-6">
                                     <h3 className="text-white font-bold text-lg mb-4">Modelo 303 (IVA)</h3>
                                     <div className="space-y-4">
                                         <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                                             <span className="text-slate-400">Ingresos (Facturas Elec.)</span>
                                             <span className="text-white font-mono">12.450 €</span>
                                         </div>
                                         <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                                             <span className="text-slate-400">Gastos Deducibles</span>
                                             <span className="text-white font-mono">4.200 €</span>
                                         </div>
                                         <div className="flex justify-between text-lg font-bold pt-2">
                                             <span className="text-white">A Pagar</span>
                                             <span className="text-green-400 font-mono">1.732 €</span>
                                         </div>
                                     </div>
                                 </div>
                                 <button onClick={() => setGovStep(2)} className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-900/40 flex justify-center items-center gap-2">
                                     <Fingerprint size={20} /> Firmar y Pagar
                                 </button>
                             </div>
                         )}
                         {govStep === 2 && (
                             <div className="flex-1 flex flex-col items-center justify-center text-center">
                                 <motion.div 
                                    initial={{scale: 0}} animate={{scale: 1}}
                                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                                 >
                                     <CheckCircle size={40} />
                                 </motion.div>
                                 <h2 className="text-2xl font-bold text-white mb-2">Trámite Completado</h2>
                                 <p className="text-slate-400 mb-8 px-4 text-sm">Recibo PDF guardado en tu Carpeta Ciudadana. Notificación enviada.</p>
                                 <button onClick={() => setGovStep(0)} className="text-sm text-orange-400 font-bold">Volver al Dashboard</button>
                             </div>
                         )}
                      </motion.div>
                    )}

                    {/* --- BUSINESS APP --- */}
                    {activeTab === AppTab.BUSINESS && (
                      <motion.div key="business" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col p-5">
                        {businessStep === 0 && (
                          <div className="space-y-6 mt-2 h-full flex flex-col">
                            <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-900/20 relative overflow-hidden">
                              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
                              <h2 className="text-lg font-bold mb-1 relative z-10">Solicitud Única</h2>
                              <p className="text-blue-100 text-xs relative z-10">Licencia de Apertura + Alta SS + Alta Hacienda</p>
                            </div>
                            <div className="space-y-4 flex-grow">
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nombre Comercial</label>
                                <input 
                                  type="text" 
                                  placeholder="Ej: Cafetería Madrid"
                                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 transition-shadow"
                                  value={businessName}
                                  onChange={(e) => setBusinessName(e.target.value)}
                                />
                                {!businessName && <button onClick={autoFillBusiness} className="text-[10px] text-blue-600 font-bold ml-1 mt-1">Autocompletar</button>}
                              </div>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-500 flex gap-2 items-start">
                                <ShieldCheck size={14} className="mt-0.5 text-slate-400" />
                                <span>Al pulsar, se consultarán 21 bases de datos (Catastro, Penales, Deudas) para evitar papeleo.</span>
                            </div>
                            <button onClick={handleBusinessSubmit} disabled={!businessName} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                              <span>Iniciar Trámite Express</span> <ArrowRight size={18} />
                            </button>
                          </div>
                        )}
                        {businessStep === 1 && (
                          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                             <div className="relative">
                                <div className="w-20 h-20 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-blue-600">AI</div>
                             </div>
                             <div className="space-y-2 text-center w-full px-8">
                                <p className="text-slate-900 font-bold text-lg">Analizando viabilidad...</p>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-slate-400 border-b border-slate-100 pb-1"><span>Antecedentes Penales</span> <span className="text-green-500 font-bold">OK</span></div>
                                    <div className="flex justify-between text-xs text-slate-400 border-b border-slate-100 pb-1"><span>Deudas Seguridad Social</span> <span className="text-green-500 font-bold">OK</span></div>
                                    <div className="flex justify-between text-xs text-slate-400 border-b border-slate-100 pb-1"><span>Licencia Local</span> <span className="text-green-500 font-bold">Disponible</span></div>
                                </div>
                             </div>
                          </div>
                        )}
                        {businessStep === 2 && (
                          <div className="flex-1 flex flex-col h-full items-center justify-center text-center">
                            <motion.div initial={{scale:0}} animate={{scale:1}} className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 border-4 border-green-50"><CheckCircle size={48} /></motion.div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Licencia Aprobada!</h2>
                            <p className="text-slate-500 mb-6 text-sm">Tu negocio #BAR-2026 está legalmente activo.</p>
                            
                            <div className="bg-slate-50 rounded-xl p-4 w-full mb-6 text-left border border-slate-100">
                                <div className="text-[10px] uppercase text-slate-400 font-bold mb-1">Próximos pasos</div>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Inspección programada: 15/04
                                </div>
                            </div>

                            <button onClick={resetBusiness} className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold text-sm w-full">Finalizar</button>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* --- CITIZEN APP (BECA) --- */}
                    {activeTab === AppTab.CITIZEN && (
                      <motion.div key="citizen" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col p-5">
                        {citizenStep === 0 && (
                          <div className="space-y-4 h-full flex flex-col pt-2">
                             
                             {/* Digital ID Card */}
                             <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 text-white shadow-lg mb-2 relative overflow-hidden">
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <div className="text-[10px] opacity-70 uppercase">IDÚNICO</div>
                                        <div className="font-bold text-lg">María García</div>
                                        <div className="text-xs opacity-80 mt-1">***-***-28K</div>
                                    </div>
                                    <Fingerprint className="opacity-50" />
                                </div>
                             </div>

                             {/* Notification Card */}
                             <motion.div 
                               initial={{x: 20, opacity: 0}}
                               animate={{x: 0, opacity: 1}}
                               className="bg-white p-4 rounded-2xl shadow-sm border border-purple-100 relative cursor-pointer hover:bg-purple-50 transition-colors group"
                               onClick={() => setCitizenStep(1)}
                             >
                                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
                                
                                <div className="flex items-center gap-3 mb-3">
                                   <div className="p-2 bg-purple-100 rounded-lg text-purple-600 group-hover:bg-purple-200 transition-colors"><GraduationCap size={18} /></div>
                                   <span className="text-xs font-bold text-purple-600 uppercase bg-purple-50 px-2 py-0.5 rounded">Proactivo</span>
                                </div>
                                <h3 className="font-bold text-slate-800 leading-tight">Tienes derecho a una Beca Universitaria</h3>
                                <p className="text-xs text-slate-500 mt-2">Hemos cruzado tus datos de Renta y Notas. No necesitas presentar papeles.</p>
                                <div className="mt-3 text-purple-600 text-xs font-bold flex items-center gap-1">Solicitar con 1 Clic <ArrowRight size={12} /></div>
                             </motion.div>

                             <div className="text-xs text-center text-slate-400 mt-auto pb-2">
                                Sistema "Un Trámite, Una Vez" activo.
                             </div>
                          </div>
                        )}
                        {citizenStep === 1 && (
                           <motion.div initial={{y: 20, opacity: 0}} animate={{y:0, opacity: 1}} className="flex-1 flex flex-col">
                              <div className="bg-purple-600 text-white p-6 rounded-2xl mb-6 shadow-xl shadow-purple-900/20 text-center">
                                 <h2 className="text-lg font-bold opacity-90">Beca Estimada</h2>
                                 <div className="mt-2">
                                    <div className="text-5xl font-extrabold tracking-tighter">3.450€</div>
                                 </div>
                              </div>
                              
                              <div className="bg-white rounded-xl border border-slate-100 p-4 space-y-3 mb-6">
                                 <div className="flex justify-between text-sm items-center">
                                    <span className="text-slate-500 flex items-center gap-2"><FileText size={14}/> Matrícula</span>
                                    <span className="font-bold">1.200 €</span>
                                 </div>
                                 <div className="flex justify-between text-sm items-center">
                                    <span className="text-slate-500 flex items-center gap-2"><LayoutDashboard size={14}/> Residencia</span>
                                    <span className="font-bold">1.500 €</span>
                                 </div>
                                 <div className="flex justify-between text-sm items-center">
                                    <span className="text-slate-500 flex items-center gap-2"><Activity size={14}/> Material</span>
                                    <span className="font-bold">750 €</span>
                                 </div>
                                 <div className="border-t border-slate-100 pt-2 mt-2">
                                    <div className="flex items-center gap-2 text-[10px] text-green-600 font-bold bg-green-50 p-2 rounded">
                                        <CheckCircle size={12} /> Datos de Renta 2025 verificados (AEAT)
                                    </div>
                                 </div>
                              </div>

                              <button onClick={() => setCitizenStep(2)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl mt-auto">
                                 Aceptar y Recibir
                              </button>
                           </motion.div>
                        )}
                        {citizenStep === 2 && (
                           <div className="flex-1 flex flex-col items-center justify-center text-center">
                              <motion.div initial={{scale: 0.5}} animate={{scale: 1}} className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 border-4 border-green-50"><CheckCircle size={40} /></motion.div>
                              <h2 className="text-2xl font-bold text-slate-900 mb-2">Transferencia en Camino</h2>
                              <p className="text-slate-500 mb-8 px-6 text-sm">El dinero estará en tu cuenta en 24 horas laborables.</p>
                              <button onClick={() => setCitizenStep(0)} className="text-sm text-slate-400 font-bold">Volver al inicio</button>
                           </div>
                        )}
                      </motion.div>
                    )}

                    {/* --- FOOD APP --- */}
                    {activeTab === AppTab.FOOD && (
                      <motion.div key="food" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col p-5">
                        {foodStep === 0 && (
                          <div className="h-full flex flex-col">
                             <div className="flex-1 bg-slate-800 rounded-2xl relative overflow-hidden mb-6 border border-slate-700 shadow-inner">
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <p className="text-slate-500 text-xs font-bold tracking-widest">CÁMARA ACTIVA</p>
                                </div>
                                {/* Scanning animation */}
                                <div className="absolute inset-0 m-8 border-2 border-white/30 rounded-lg">
                                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white"></div>
                                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white"></div>
                                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white"></div>
                                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white"></div>
                                   <div className="w-full h-0.5 bg-green-400 top-1/2 absolute animate-[scan_2s_linear_infinite] shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                                </div>
                             </div>
                             
                             <div className="space-y-3">
                                <p className="text-xs text-center text-slate-400 mb-2">Simular escaneo de producto:</p>
                                <button onClick={() => setFoodStep(1)} className="w-full p-4 bg-white border border-slate-200 shadow-sm hover:border-red-300 rounded-xl text-xs font-bold flex justify-between items-center group">
                                    <span>🍅 Tomate (Importado)</span>
                                    <ScanBarcode className="text-slate-300 group-hover:text-red-500" size={16} />
                                </button>
                                <button onClick={() => setFoodStep(2)} className="w-full p-4 bg-white border border-slate-200 shadow-sm hover:border-green-300 rounded-xl text-xs font-bold flex justify-between items-center group">
                                    <span>🍊 Naranja (Nacional)</span>
                                    <ScanBarcode className="text-slate-300 group-hover:text-green-500" size={16} />
                                </button>
                             </div>
                          </div>
                        )}
                        {foodStep === 1 && (
                           <div className="h-full flex flex-col pt-4">
                              <div className="bg-red-50 border border-red-100 p-5 mb-6 rounded-2xl text-center shadow-sm">
                                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-3">
                                     <AlertTriangle size={24}/>
                                 </div>
                                 <h3 className="text-red-800 font-bold text-lg">Alerta Sanitaria</h3>
                                 <p className="text-xs text-red-600 mt-1 font-medium">No cumple estándar UE</p>
                              </div>
                              
                              <div className="space-y-0 divide-y divide-slate-100 bg-white rounded-xl border border-slate-100 overflow-hidden mb-6">
                                 <div className="flex justify-between p-4 bg-slate-50"><span className="text-slate-500 text-xs uppercase font-bold">Origen</span> <span className="font-bold text-sm text-slate-900">Marruecos</span></div>
                                 <div className="flex justify-between p-4"><span className="text-slate-500 text-sm">Pesticidas</span> <span className="font-bold text-red-600 text-xs bg-red-50 px-2 py-1 rounded">DETECTADOS</span></div>
                                 <div className="flex justify-between p-4"><span className="text-slate-500 text-sm">Arancel Espejo</span> <span className="font-bold text-slate-900 text-sm">+0.60 €/kg</span></div>
                              </div>

                              <button onClick={() => setFoodStep(0)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-sm mt-auto shadow-lg">Escanear otro</button>
                           </div>
                        )}
                        {foodStep === 2 && (
                           <div className="h-full flex flex-col pt-4">
                              <div className="bg-green-50 border border-green-100 p-5 mb-6 rounded-2xl text-center shadow-sm">
                                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-3">
                                     <CheckCircle size={24}/>
                                 </div>
                                 <h3 className="text-green-800 font-bold text-lg">Producto Certificado</h3>
                                 <p className="text-xs text-green-600 mt-1 font-medium">Cumple normativa calidad UE</p>
                              </div>

                              <div className="space-y-0 divide-y divide-slate-100 bg-white rounded-xl border border-slate-100 overflow-hidden mb-6">
                                 <div className="flex justify-between p-4 bg-slate-50"><span className="text-slate-500 text-xs uppercase font-bold">Origen</span> <span className="font-bold text-sm text-slate-900">Valencia, España</span></div>
                                 <div className="flex justify-between p-4"><span className="text-slate-500 text-sm">Precio en Origen</span> <span className="font-bold text-green-600 text-xs bg-green-50 px-2 py-1 rounded">JUSTO</span></div>
                                 <div className="flex justify-between p-4"><span className="text-slate-500 text-sm">Huella Carbono</span> <span className="font-bold text-slate-900 text-sm">Baja</span></div>
                              </div>
                              
                              <button onClick={() => setFoodStep(0)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-sm mt-auto shadow-lg">Escanear otro</button>
                           </div>
                        )}
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Home Bar */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-slate-300 rounded-full z-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;