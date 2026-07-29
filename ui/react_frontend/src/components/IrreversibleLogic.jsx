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

const IrreversibleLogic = ({ logicData, inputA, setInputA, inputB, setInputB }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <GlowCard color="orange" className="p-10 group">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-red-600/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition-all duration-700 pointer-events-none"></div>
        <AnimatedTitle text="Lógica Irreversible (AND)" type="shimmer" className="text-4xl font-black text-transparent mb-10 text-center uppercase tracking-widest relative z-10 flex justify-center w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="bg-red-950/20 p-4 rounded-xl border border-red-500/20">
              <label className="text-xs text-red-400 uppercase tracking-widest mb-2 block">Entrada A</label>
              <div className="flex gap-2">
                <button onClick={() => setInputA(0)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${inputA === 0 ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>0</button>
                <button onClick={() => setInputA(1)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${inputA === 1 ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>1</button>
              </div>
            </div>
            <div className="bg-red-950/20 p-4 rounded-xl border border-red-500/20">
              <label className="text-xs text-red-400 uppercase tracking-widest mb-2 block">Entrada B</label>
              <div className="flex gap-2">
                <button onClick={() => setInputB(0)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${inputB === 0 ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>0</button>
                <button onClick={() => setInputB(1)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${inputB === 1 ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>1</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative w-full h-full min-h-[160px] items-center">
            {/* Bit Entrante A */}
            <motion.div
              animate={{ x: [ -80, 0, 0 ], opacity: [ 0, 1, 0 ], scale: [0.5, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, times: [0, 0.4, 0.5] }}
              className="absolute left-[-20px] top-4 w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"
            />
            {/* Bit Entrante B */}
            <motion.div
              animate={{ x: [ -80, 0, 0 ], opacity: [ 0, 1, 0 ], scale: [0.5, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, times: [0, 0.4, 0.5] }}
              className="absolute left-[-20px] bottom-4 w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"
            />

            <motion.div 
              animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(239,68,68,0.5)", "0 0 40px rgba(239,68,68,0.9)", "0 0 20px rgba(239,68,68,0.5)"] }}
              transition={{ repeat: Infinity, duration: 2.5, times: [0, 0.5, 1] }}
              className="w-36 h-36 bg-[#0a0202] rounded-3xl flex items-center justify-center border-2 border-red-500 z-10 relative"
            >
              <span className="text-4xl font-black text-red-500 tracking-widest drop-shadow-[0_0_15px_rgba(255,0,0,1)]">AND</span>
              {/* Desvanecimiento de bit */}
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 2] }}
                transition={{ repeat: Infinity, duration: 2.5, times: [0.3, 0.5, 0.7] }}
                className="absolute text-4xl font-black text-red-500/30"
              >
                ?
              </motion.div>
            </motion.div>

            {/* Bit Saliente */}
            <motion.div
              animate={{ x: [ 0, 80 ], opacity: [ 0, 1 ], scale: [0, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, times: [0.5, 0.9] }}
              className="absolute right-[0px] top-1/2 -translate-y-1/2 w-6 h-6 bg-red-400 rounded-full shadow-[0_0_15px_rgba(248,113,113,1)]"
            />
          </div>

          <div className="bg-red-950/20 p-6 rounded-xl border border-red-500/40 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
            <span className="text-xs text-red-400 uppercase tracking-widest mb-2">Salida Computada</span>
            <motion.span 
              key={logicData?.output}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-mono font-bold text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]"
            >
              {logicData?.output ?? '-'}
            </motion.span>
            <p className="mt-4 text-xs text-center text-gray-400">La información ha colisionado. No se puede revertir.</p>
          </div>
        </div>
      </GlowCard>

      {/* Deducción Lógica */}
      <GlowCard color="orange" className="p-10 group">
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-red-600/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition-all duration-700 pointer-events-none"></div>
        <AnimatedTitle text="Pérdida de Deducción Lógica" type="shimmer" className="text-3xl font-black text-red-400 mb-8 flex items-center justify-center gap-4 uppercase tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <ul className="text-gray-300 space-y-5 text-lg font-medium flex flex-col justify-center">
            <motion.li variants={itemVariants} className="flex gap-4 items-start"><span className="text-red-500 font-bold text-2xl">»</span> <p><strong>Reducción de Estado:</strong> Ingresan 2 bits (4 combinaciones), pero solo sale 1 bit (2 estados posibles).</p></motion.li>
            <motion.li variants={itemVariants} className="flex gap-4 items-start"><span className="text-red-500 font-bold text-2xl">»</span> <p><strong>Ambigüedad Fundamental:</strong> Si la salida del AND es <code>0</code>, es imposible deducir lógicamente qué entradas lo originaron.</p></motion.li>
            <motion.li variants={itemVariants} className="flex gap-4 items-start"><span className="text-red-500 font-bold text-2xl">»</span> <p><strong>Irreversibilidad:</strong> El cálculo no puede correrse "hacia atrás". La información pasada se ha esfumado del universo lógico.</p></motion.li>
          </ul>

          <div className="flex flex-col justify-center">
            <div className="bg-red-950/40 border border-red-500/50 p-8 rounded-2xl shadow-[inset_0_0_30px_rgba(255,0,0,0.15)] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(255,0,0,0.2)] transition-all">
              <span className="text-sm uppercase text-red-400 tracking-widest block mb-4 text-center">Colapso de la Tabla de Verdad</span>
              <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-red-500/20 mb-2">
                <span className="font-mono text-gray-400">0 AND 0</span>
                <span className="text-red-500 font-black">{'->'}</span>
                <span className="font-mono text-white text-xl">0</span>
              </div>
              <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-red-500/20 mb-2">
                <span className="font-mono text-gray-400">0 AND 1</span>
                <span className="text-red-500 font-black">{'->'}</span>
                <span className="font-mono text-white text-xl">0</span>
              </div>
              <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-red-500/20 mb-2">
                <span className="font-mono text-gray-400">1 AND 0</span>
                <span className="text-red-500 font-black">{'->'}</span>
                <span className="font-mono text-white text-xl">0</span>
              </div>
              <div className="text-center text-xs text-red-400 mt-4 uppercase tracking-widest">
                Tres caminos convergen en uno. Indescriptible.
              </div>
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default IrreversibleLogic;
