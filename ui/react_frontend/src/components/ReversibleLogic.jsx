import React from 'react';
import { motion } from 'framer-motion';

const ReversibleLogic = ({ logicData, control, setControl, target, setTarget }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-[#060a1a]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.1)]">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Lógica Reversible (CNOT)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <label className="text-sm text-gray-400 uppercase">Cúbit de Control</label>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setControl(0)} className={`flex-1 py-2 rounded-lg font-bold ${control === 0 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>0</button>
              <button onClick={() => setControl(1)} className={`flex-1 py-2 rounded-lg font-bold ${control === 1 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>1</button>
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <label className="text-sm text-gray-400 uppercase">Cúbit Objetivo</label>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setTarget(0)} className={`flex-1 py-2 rounded-lg font-bold ${target === 0 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>0</button>
              <button onClick={() => setTarget(1)} className={`flex-1 py-2 rounded-lg font-bold ${target === 1 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>1</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div 
            animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.4)', '0 0 40px rgba(34,211,238,0.8)', '0 0 20px rgba(34,211,238,0.4)'] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-full flex flex-col items-center justify-center border-2 border-cyan-400"
          >
            <span className="text-2xl font-black text-white">CNOT</span>
            <span className="text-xs text-cyan-200 mt-1">Reversible</span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white/5 p-4 rounded-xl border border-cyan-500/50 flex justify-between items-center">
            <span className="text-sm text-cyan-300 uppercase">Control Salida</span>
            <span className="text-2xl font-mono font-bold text-cyan-400">{logicData?.controlOut ?? '-'}</span>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-purple-500/50 flex justify-between items-center">
            <span className="text-sm text-purple-300 uppercase">Objetivo Salida</span>
            <span className="text-2xl font-mono font-bold text-purple-400">{logicData?.targetOut ?? '-'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReversibleLogic;
