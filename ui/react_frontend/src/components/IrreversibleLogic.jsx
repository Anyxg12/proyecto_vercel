import React from 'react';
import { motion } from 'framer-motion';

const IrreversibleLogic = ({ logicData, inputA, setInputA, inputB, setInputB }) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <div className="p-8 bg-[#02040a]/80 backdrop-blur-2xl border border-red-500/40 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.15)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-8 text-center uppercase tracking-widest relative z-10">Lógica Irreversible (AND)</h2>
        
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

          <div className="flex justify-center">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-32 h-32 bg-[#02040a] rounded-2xl flex items-center justify-center border border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6),inset_0_0_20px_rgba(239,68,68,0.3)]"
            >
              <span className="text-3xl font-black text-red-500 tracking-widest drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">AND</span>
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
        className="bg-[#02040a]/60 border border-red-500/20 rounded-3xl p-8 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
      >
        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
          <span className="text-3xl">📉</span> Principio de Landauer
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="text-gray-300 space-y-4">
            <li className="flex gap-3"><span className="text-red-500">»</span> <strong>Aniquilación de Datos:</strong> Ingresan 2 bits, sale 1. El bit restante se destruye irremediablemente.</li>
            <li className="flex gap-3"><span className="text-red-500">»</span> <strong>Borrar = Calor:</strong> Rolf Landauer demostró en 1961 que este borrado lógico aumenta la entropía física.</li>
            <li className="flex gap-3"><span className="text-red-500">»</span> <strong>El Límite Físico:</strong> El calor disipado limita la velocidad de los chips modernos.</li>
          </ul>

          <div className="flex flex-col justify-center">
            <div className="bg-red-950/40 border border-red-500/30 p-6 rounded-xl shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]">
              <span className="text-xs uppercase text-red-400 tracking-widest block mb-2">Ecuación de Disipación Térmica</span>
              <p className="font-mono text-xl text-white tracking-widest text-center">
                E = k_B · T · ln(2)
              </p>
              <p className="text-xs text-gray-500 mt-4 text-center">
                (Constante de Boltzmann × Temperatura × logaritmo natural de 2)
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IrreversibleLogic;
