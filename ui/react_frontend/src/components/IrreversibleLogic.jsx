import React from 'react';
import { motion } from 'framer-motion';

const IrreversibleLogic = ({ logicData, inputA, setInputA, inputB, setInputB }) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <div className="p-10 bento-glass-card border-red-500/50 group">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-red-600/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition-all duration-700 pointer-events-none"></div>
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-10 text-center uppercase tracking-widest relative z-10 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">Física Clásica (AND)</h2>
        
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

          <div className="flex justify-center relative">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(239,68,68,0.5)", "0 0 40px rgba(239,68,68,0.8)", "0 0 20px rgba(239,68,68,0.5)"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-36 h-36 bg-[#0a0202] rounded-3xl flex items-center justify-center border-2 border-red-500 z-10"
            >
              <span className="text-4xl font-black text-red-500 tracking-widest drop-shadow-[0_0_15px_rgba(255,0,0,1)]">AND</span>
            </motion.div>
            {/* Animación de bits perdiéndose */}
            <motion.div 
              animate={{ y: [0, 50], opacity: [1, 0], scale: [1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
              className="absolute bottom-[-40px] text-red-500 font-bold text-xl drop-shadow-[0_0_10px_rgba(255,0,0,1)] z-0"
            >
              ↓ bit perdido
            </motion.div>
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
      </div>

      {/* Teoría de Landauer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bento-glass-card p-10 border-red-500/30 group"
      >
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-red-600/10 rounded-full blur-[80px] group-hover:bg-red-500/20 transition-all duration-700 pointer-events-none"></div>
        <h3 className="text-3xl font-black text-red-400 mb-8 flex items-center gap-4 uppercase tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          <span className="text-4xl">📉</span> Principio de Landauer
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <ul className="text-gray-300 space-y-5 text-lg font-medium">
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-2xl">»</span> <p><strong>Aniquilación de Datos:</strong> Ingresan 2 bits, sale 1. El bit restante se destruye en el procesador.</p></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-2xl">»</span> <p><strong>Borrar = Calor:</strong> Rolf Landauer demostró que este "borrado" aumenta la entropía física del universo.</p></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-2xl">»</span> <p><strong>El Límite Físico:</strong> El calor disipado es lo que impide que tu computadora vaya a un millón de gigahercios.</p></li>
          </ul>

          <div className="flex flex-col justify-center">
            <div className="bg-red-950/40 border border-red-500/50 p-8 rounded-2xl shadow-[inset_0_0_30px_rgba(255,0,0,0.15)] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(255,0,0,0.2)] transition-all">
              <span className="text-sm uppercase text-red-400 tracking-widest block mb-4">La Ecuación del Calor Fatal</span>
              <p className="font-mono text-3xl font-bold text-white tracking-widest text-center glow-text-cyan">
                E = k_B · T · ln(2)
              </p>
              <p className="text-sm text-gray-400 mt-6 text-center">
                Cada vez que se borra un bit, el universo se calienta exactamente esta cantidad.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IrreversibleLogic;
