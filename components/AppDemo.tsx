import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppTab } from '../types';
import { CheckCircle, AlertTriangle, Store, ScanBarcode, ArrowRight, RefreshCw, Smartphone, Camera, Fingerprint, Wallet, GraduationCap, Bell } from 'lucide-react';

const AppDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.BUSINESS);
  
  // State for Business App
  const [businessStep, setBusinessStep] = useState(0); 
  const [businessName, setBusinessName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // State for Food App
  const [foodStep, setFoodStep] = useState(0); 
  
  // State for Citizen App
  const [citizenStep, setCitizenStep] = useState(0);

  const handleBusinessSubmit = () => {
    if (!businessName) return;
    setBusinessStep(1);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBusinessStep(2);
    }, 2000); 
  };

  const resetBusiness = () => {
    setBusinessStep(0);
    setBusinessName('');
    setIsProcessing(false);
  };

  const autoFillBusiness = () => {
    setBusinessName("Bar Manolo");
  };

  return (
    <section id="demos" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Description Text */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Smartphone size={14} />
              Proyecto Estado 1-Click
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              La Administración <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">en tu bolsillo.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              La infraestructura digital está lista. No son maquetas, es lógica real aplicada a problemas reales.
              Prueba la simplicidad de un Estado que funciona.
            </p>

            {/* App Selection Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => { setActiveTab(AppTab.BUSINESS); resetBusiness(); }}
                className={`flex-1 p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-3 ${activeTab === AppTab.BUSINESS ? 'bg-orange-600 text-white border-orange-500 shadow-lg scale-105' : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-800'}`}
              >
                <div className="p-2 bg-white/10 rounded-lg"><Store size={20} /></div>
                <div>
                  <div className="text-xs opacity-70 uppercase">Emprendedor</div>
                  <div>MiNegocio</div>
                </div>
              </button>
              
              <button 
                onClick={() => { setActiveTab(AppTab.CITIZEN); setCitizenStep(0); }}
                className={`flex-1 p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-3 ${activeTab === AppTab.CITIZEN ? 'bg-blue-600 text-white border-blue-500 shadow-lg scale-105' : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-800'}`}
              >
                <div className="p-2 bg-white/10 rounded-lg"><Wallet size={20} /></div>
                <div>
                  <div className="text-xs opacity-70 uppercase">Ciudadano</div>
                  <div>MiCarpeta</div>
                </div>
              </button>

              <button 
                onClick={() => { setActiveTab(AppTab.FOOD); setFoodStep(0); }}
                className={`flex-1 p-4 rounded-xl font-bold transition-all border text-left flex items-center gap-3 ${activeTab === AppTab.FOOD ? 'bg-green-600 text-white border-green-500 shadow-lg scale-105' : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-800'}`}
              >
                <div className="p-2 bg-white/10 rounded-lg"><ScanBarcode size={20} /></div>
                <div>
                  <div className="text-xs opacity-70 uppercase">Consumo</div>
                  <div>ComeLocal</div>
                </div>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-md"
              >
                <h3 className="font-bold text-white mb-2 flex items-center gap-2 text-lg">
                  {activeTab === AppTab.BUSINESS && "Caso: Abrir un Bar en 24h"}
                  {activeTab === AppTab.CITIZEN && "Caso: Beca Universitaria Proactiva"}
                  {activeTab === AppTab.FOOD && "Caso: Soberanía Alimentaria"}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {activeTab === AppTab.BUSINESS && "Olvida los 12 trámites y 6 meses de espera. MiNegocio fusiona Hacienda, Seguridad Social y Ayuntamiento en un solo paso. Licencia provisional inmediata."}
                  {activeTab === AppTab.CITIZEN && "El Estado ya sabe tus datos. No los pidas de nuevo. Cruzamos renta y notas para ofrecerte la beca antes de que la pidas. 1 Clic."}
                  {activeTab === AppTab.FOOD && "Escanea productos para ver la verdad: origen real, pesticidas usados y si cumple normativa UE. Empoderamiento del consumidor."}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PHONE MOCKUP */}
          <div className="lg:w-1/2 flex justify-center perspective-1000">
            <motion.div 
              initial={{ rotateY: -10, rotateX: 5 }}
              animate={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1 }}
              className="relative w-[340px] h-[680px] bg-slate-950 rounded-[3.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10"
            >
              {/* Hardware details */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 flex justify-center items-center">
                <div className="w-16 h-4 bg-slate-900/50 rounded-full"></div>
              </div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-slate-50 relative flex flex-col pt-10 font-sans">
                
                {/* Dynamic App Header */}
                <div className="px-5 pb-3 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-100 flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${
                        activeTab === AppTab.BUSINESS ? 'bg-orange-600' : 
                        activeTab === AppTab.CITIZEN ? 'bg-blue-600' : 'bg-green-600'
                    }`}>
                       {activeTab === AppTab.BUSINESS && <Store size={16} />}
                       {activeTab === AppTab.CITIZEN && <Wallet size={16} />}
                       {activeTab === AppTab.FOOD && <ScanBarcode size={16} />}
                    </div>
                    <span className="font-bold text-slate-800 text-sm tracking-tight">
                      {activeTab === AppTab.BUSINESS && 'MiNegocio'}
                      {activeTab === AppTab.CITIZEN && 'MiCarpeta'}
                      {activeTab === AppTab.FOOD && 'ComeLocal'}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <Fingerprint size={16} className="text-slate-400" />
                  </div>
                </div>

                <div className="flex-1 p-5 relative overflow-hidden bg-slate-50">
                  <AnimatePresence mode="wait">
                    
                    {/* --- BUSINESS APP --- */}
                    {activeTab === AppTab.BUSINESS && (
                      <motion.div key="business" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col">
                        {businessStep === 0 && (
                          <div className="space-y-6 mt-4 h-full flex flex-col">
                            <div className="bg-orange-600 rounded-2xl p-6 text-white shadow-lg shadow-orange-900/20">
                              <h2 className="text-lg font-bold mb-1">Nueva Solicitud</h2>
                              <p className="text-orange-100 text-xs">Licencia de Apertura Express</p>
                            </div>
                            <div className="space-y-4 flex-grow">
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nombre Comercial</label>
                                <input 
                                  type="text" 
                                  placeholder="Ej: Cafetería Madrid"
                                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-orange-500 outline-none text-slate-800"
                                  value={businessName}
                                  onChange={(e) => setBusinessName(e.target.value)}
                                />
                                {!businessName && <button onClick={autoFillBusiness} className="text-[10px] text-orange-600 font-bold ml-1">Autocompletar</button>}
                              </div>
                            </div>
                            <button onClick={handleBusinessSubmit} disabled={!businessName} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl flex items-center justify-center gap-2">
                              <span>Solicitar Licencia</span> <ArrowRight size={18} />
                            </button>
                          </div>
                        )}
                        {businessStep === 1 && (
                          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                             <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
                             <p className="text-slate-600 font-medium">Validando 21 bases de datos...</p>
                          </div>
                        )}
                        {businessStep === 2 && (
                          <div className="flex-1 flex flex-col h-full items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"><CheckCircle size={40} /></div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Aprobada!</h2>
                            <p className="text-slate-500 mb-8">Ya puedes abrir tu negocio.</p>
                            <button onClick={resetBusiness} className="px-6 py-2 bg-slate-100 rounded-lg text-slate-600 font-bold text-sm">Reiniciar</button>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* --- CITIZEN APP (BECA) --- */}
                    {activeTab === AppTab.CITIZEN && (
                      <motion.div key="citizen" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col">
                        {citizenStep === 0 && (
                          <div className="space-y-4 h-full flex flex-col pt-4">
                             {/* Notification Card */}
                             <motion.div 
                               initial={{x: 20, opacity: 0}}
                               animate={{x: 0, opacity: 1}}
                               className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-blue-500 relative cursor-pointer hover:bg-slate-50 transition-colors"
                               onClick={() => setCitizenStep(1)}
                             >
                                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="flex items-center gap-3 mb-2">
                                   <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><GraduationCap size={16} /></div>
                                   <span className="text-xs font-bold text-slate-400 uppercase">Proactivo</span>
                                </div>
                                <h3 className="font-bold text-slate-800">Beca Universitaria Disponible</h3>
                                <p className="text-xs text-slate-500 mt-1">Hemos cruzado tus datos. Tienes derecho a 3.450€.</p>
                                <div className="mt-3 text-blue-600 text-xs font-bold flex items-center gap-1">Ver detalles <ArrowRight size={10} /></div>
                             </motion.div>

                             <div className="opacity-50 pointer-events-none space-y-3">
                                <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                   <div className="h-2 w-20 bg-slate-200 rounded mb-2"></div>
                                   <div className="h-2 w-32 bg-slate-100 rounded"></div>
                                </div>
                                <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                   <div className="h-2 w-20 bg-slate-200 rounded mb-2"></div>
                                   <div className="h-2 w-32 bg-slate-100 rounded"></div>
                                </div>
                             </div>
                          </div>
                        )}
                        {citizenStep === 1 && (
                           <motion.div initial={{y: 20, opacity: 0}} animate={{y:0, opacity: 1}} className="flex-1 flex flex-col">
                              <div className="bg-blue-600 text-white p-6 rounded-b-2xl -mx-5 -mt-5 mb-6 pb-10">
                                 <h2 className="text-xl font-bold">Resumen Beca</h2>
                                 <p className="opacity-80 text-sm">Curso 2026/2027</p>
                                 <div className="mt-6 text-center">
                                    <div className="text-4xl font-extrabold">3.450 €</div>
                                    <div className="text-xs opacity-70 uppercase tracking-widest mt-1">Importe Total</div>
                                 </div>
                              </div>
                              
                              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 -mt-8 mx-2 relative z-10 space-y-3 mb-6">
                                 <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Matrícula</span>
                                    <span className="font-bold">1.200 €</span>
                                 </div>
                                 <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Residencia</span>
                                    <span className="font-bold">1.500 €</span>
                                 </div>
                                 <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Material</span>
                                    <span className="font-bold">750 €</span>
                                 </div>
                              </div>

                              <div className="flex-grow">
                                 <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-800">
                                    <CheckCircle size={16} />
                                    <span>Datos verificados automáticamente (AEAT)</span>
                                 </div>
                              </div>

                              <button onClick={() => setCitizenStep(2)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl">
                                 Aceptar en 1 Clic
                              </button>
                           </motion.div>
                        )}
                        {citizenStep === 2 && (
                           <div className="flex-1 flex flex-col items-center justify-center text-center">
                              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce"><CheckCircle size={40} /></div>
                              <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Concedida!</h2>
                              <p className="text-slate-500 mb-8 px-6">El dinero estará en tu cuenta en 24 horas.</p>
                              <button onClick={() => setCitizenStep(0)} className="text-sm text-slate-400">Volver al inicio</button>
                           </div>
                        )}
                      </motion.div>
                    )}

                    {/* --- FOOD APP --- */}
                    {activeTab === AppTab.FOOD && (
                      <motion.div key="food" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full flex flex-col">
                        {foodStep === 0 && (
                          <div className="h-full flex flex-col">
                             <div className="flex-1 bg-slate-200 rounded-xl relative overflow-hidden mb-4">
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <p className="text-slate-400 text-xs font-bold">CÁMARA</p>
                                </div>
                                <div className="absolute inset-0 border-2 border-white/50 m-8 rounded-lg">
                                   <div className="w-full h-0.5 bg-red-500 top-1/2 absolute animate-[scan_2s_infinite]"></div>
                                </div>
                             </div>
                             <div className="grid grid-cols-2 gap-3">
                                <button onClick={() => setFoodStep(1)} className="p-3 bg-red-100 text-red-700 rounded-lg text-xs font-bold">🍅 Tomate (No UE)</button>
                                <button onClick={() => setFoodStep(2)} className="p-3 bg-green-100 text-green-700 rounded-lg text-xs font-bold">🍊 Naranja (UE)</button>
                             </div>
                          </div>
                        )}
                        {foodStep === 1 && (
                           <div className="h-full flex flex-col pt-4">
                              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded-r-lg">
                                 <h3 className="text-red-800 font-bold flex items-center gap-2"><AlertTriangle size={16}/> Alerta Sanitaria</h3>
                                 <p className="text-xs text-red-600 mt-1">Pesticidas prohibidos detectados.</p>
                              </div>
                              <div className="space-y-3 flex-grow">
                                 <div className="flex justify-between border-b py-2"><span className="text-slate-500 text-sm">Origen</span> <span className="font-bold text-sm">Marruecos</span></div>
                                 <div className="flex justify-between border-b py-2"><span className="text-slate-500 text-sm">Arancel</span> <span className="font-bold text-red-600 text-sm">+0.60 €/kg</span></div>
                              </div>
                              <button onClick={() => setFoodStep(0)} className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold text-sm">Escanear otro</button>
                           </div>
                        )}
                        {foodStep === 2 && (
                           <div className="h-full flex flex-col pt-4">
                              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded-r-lg">
                                 <h3 className="text-green-800 font-bold flex items-center gap-2"><CheckCircle size={16}/> Certificado UE</h3>
                                 <p className="text-xs text-green-600 mt-1">Cumple normativa calidad.</p>
                              </div>
                              <div className="space-y-3 flex-grow">
                                 <div className="flex justify-between border-b py-2"><span className="text-slate-500 text-sm">Origen</span> <span className="font-bold text-sm">Valencia</span></div>
                                 <div className="flex justify-between border-b py-2"><span className="text-slate-500 text-sm">Precio Justo</span> <span className="font-bold text-green-600 text-sm">Garantizado</span></div>
                              </div>
                              <button onClick={() => setFoodStep(0)} className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold text-sm">Escanear otro</button>
                           </div>
                        )}
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Home Bar */}
                <div className="h-1 bg-slate-300 mx-auto w-1/3 rounded-full mb-3"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;