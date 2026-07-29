import React from 'react';
import { motion } from 'framer-motion';

const IrreversibleLogic = ({ logicData, inputA, setInputA, inputB, setInputB }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-[#060a1a]/80 backdrop-blur-xl border border-red-500/30 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.1)]">
      <h2 className="text-3xl font-bold text-red-400 mb-8 text-center">Lógica Irreversible (AND)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <label className="text-sm text-gray-400 uppercase">Entrada A</label>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setInputA(0)} className={`flex-1 py-2 rounded-lg font-bold ${inputA === 0 ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-400'}`}>0</button>
              <button onClick={() => setInputA(1)} className={`flex-1 py-2 rounded-lg font-bold ${inputA === 1 ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-400'}`}>1</button>
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <label className="text-sm text-gray-400 uppercase">Entrada B</label>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setInputB(0)} className={`flex-1 py-2 rounded-lg font-bold ${inputB === 0 ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-400'}`}>0</button>
              <button onClick={() => setInputB(1)} className={`flex-1 py-2 rounded-lg font-bold ${inputB === 1 ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-400'}`}>1</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-900 rounded-2xl flex items-center justify-center border-2 border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
          >
            <span className="text-2xl font-black text-white">AND</span>
          </motion.div>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-red-500/50 flex flex-col items-center justify-center">
          <span className="text-sm text-red-300 uppercase tracking-widest mb-2">Salida Perdida</span>
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
  );
};

export default IrreversibleLogic;
