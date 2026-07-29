import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import GlowCard from './GlowCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const ReversibleLogic = ({ logicData, control, setControl, target, setTarget }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <GlowCard color="cyan" className="p-10 group">
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
        <AnimatedTitle text="Lógica Reversible (CNOT)" type="shimmer" className="text-4xl font-black text-transparent mb-10 text-center uppercase tracking-widest relative z-10 flex justify-center w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/20">
              <label className="text-xs text-cyan-400 uppercase tracking-widest mb-2 block">Cúbit de Control</label>
              <div className="flex gap-2">
                <button onClick={() => setControl(0)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${control === 0 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>0</button>
                <button onClick={() => setControl(1)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${control === 1 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>1</button>
              </div>
            </div>
            <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/20">
              <label className="text-xs text-cyan-400 uppercase tracking-widest mb-2 block">Cúbit Objetivo</label>
              <div className="flex gap-2">
                <button onClick={() => setTarget(0)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${target === 0 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>0</button>
                <button onClick={() => setTarget(1)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${target === 1 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>1</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative w-full h-full min-h-[160px] items-center">
            {/* Bit Entrante Control */}
            <motion.div
              animate={{ x: [ -80, 0, 0, 80 ], opacity: [ 0, 1, 1, 0 ], scale: [0.5, 1, 1, 1] }}
              transition={{ repeat: Infinity, duration: 3, times: [0, 0.3, 0.7, 1] }}
              className="absolute left-[-20px] top-4 w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)] z-0"
            />
            {/* Bit Entrante Objetivo */}
            <motion.div
              animate={{ x: [ -80, 0, 0, 80 ], opacity: [ 0, 1, 1, 0 ], scale: [0.5, 1, 1, 1] }}
              transition={{ repeat: Infinity, duration: 3, times: [0, 0.3, 0.7, 1] }}
              className="absolute left-[-20px] bottom-4 w-6 h-6 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)] z-0"
            />

            <motion.div 
              animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.4)', '0 0 40px rgba(34,211,238,0.8)', '0 0 20px rgba(34,211,238,0.4)'], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-36 h-36 bg-[#020a0a] rounded-full flex flex-col items-center justify-center border-2 border-cyan-400 z-10"
            >
              <div className="absolute inset-2 border-2 border-cyan-500/50 rounded-full border-dashed animate-[spin_8s_linear_infinite]"></div>
              <div className="absolute inset-[-10px] border border-cyan-500/20 rounded-full border-dotted animate-[spin_12s_linear_infinite_reverse]"></div>
              <span className="text-3xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(0,243,255,1)] tracking-widest">CNOT</span>
              <span className="text-[10px] text-cyan-200 mt-1 uppercase tracking-[0.2em] bg-cyan-900/50 px-2 py-0.5 rounded-full">Reversible</span>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/40 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400"></div>
              <span className="text-xs text-cyan-400 uppercase tracking-widest pl-2">Salida Control</span>
              <span className="text-2xl font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{logicData?.controlOut ?? '-'}</span>
            </div>
            <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-500/40 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
              <span className="text-xs text-purple-400 uppercase tracking-widest pl-2">Salida Objetivo</span>
              <span className="text-2xl font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{logicData?.targetOut ?? '-'}</span>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Teoría y Ejemplo Práctico */}
      <GlowCard color="cyan" className="p-10 group">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
        <AnimatedTitle text="Conservación Biunívoca de Datos" type="shimmer" className="text-3xl font-black text-cyan-400 mb-8 flex items-center justify-center gap-4 uppercase tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <ul className="text-gray-300 space-y-5 text-lg font-medium flex flex-col justify-center">
            <motion.li variants={itemVariants} className="flex gap-4 items-start"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Mapeo 1 a 1:</strong> Entran 2 bits, salen 2 bits. La dimensión del estado lógico se mantiene constante.</p></motion.li>
            <motion.li variants={itemVariants} className="flex gap-4 items-start"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Determinismo Bidireccional:</strong> Cada combinación de salida proviene de un único y exclusivo par de entradas.</p></motion.li>
            <motion.li variants={itemVariants} className="flex gap-4 items-start"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Viaje Lógico Inverso:</strong> Al no haber ambigüedad, aplicar la misma operación deshace el cómputo y restaura el origen.</p></motion.li>
          </ul>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="bg-cyan-950/30 border border-cyan-500/50 p-6 rounded-2xl shadow-[inset_0_0_30px_rgba(0,243,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all">
              <h4 className="text-cyan-300 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
                <span className="text-xl">🔑</span> Criptografía Irrompible
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Usa el cúbit de Control como tu "clave", y el Objetivo como tu "mensaje". Aplica CNOT para cifrar. Para descifrar, sencillamente aplica CNOT otra vez usando la misma clave.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-purple-950/40 border border-purple-500/50 p-5 rounded-xl flex items-center justify-between shadow-[0_0_20px_rgba(168,85,247,0.15)] overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
              <span className="text-xs uppercase text-purple-400 tracking-widest pl-2">Propiedad de Involución</span>
              <p className="font-mono text-xl font-bold text-white glow-text-purple">
                CNOT(CNOT(x)) = x
              </p>
            </motion.div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default ReversibleLogic;
