import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Comparación Final: El Destino de la Información
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Lógica Irreversible */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-red-900/20 border border-red-500/30 rounded-3xl p-8 flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mb-6">
            <span className="text-3xl">🗑️</span>
          </div>
          <h3 className="text-xl font-bold text-red-400 mb-4">Irreversible (AND)</h3>
          <p className="text-gray-400 text-sm mb-6">
            Destruye información irremediablemente. Genera calor y entropía física en el universo.
          </p>
          <div className="w-full bg-black/50 rounded-xl p-4 mt-auto border border-red-500/20">
            <span className="text-xs uppercase text-red-300 block mb-1">Recuperabilidad</span>
            <span className="font-bold text-red-500">0%</span>
          </div>
        </motion.div>

        {/* Lógica Reversible */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-cyan-900/20 border border-cyan-500/30 rounded-3xl p-8 flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center mb-6">
            <span className="text-3xl">🔄</span>
          </div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Reversible (CNOT)</h3>
          <p className="text-gray-400 text-sm mb-6">
            Conserva todos los bits. Permite computación teóricamente sin disipación de calor.
          </p>
          <div className="w-full bg-black/50 rounded-xl p-4 mt-auto border border-cyan-500/20">
            <span className="text-xs uppercase text-cyan-300 block mb-1">Recuperabilidad</span>
            <span className="font-bold text-cyan-400">100%</span>
          </div>
        </motion.div>

        {/* Cómputo Cuántico */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-purple-900/20 border border-purple-500/30 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
          <div className="w-20 h-20 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mb-6 relative z-10">
            <span className="text-3xl">⚛️</span>
          </div>
          <h3 className="text-xl font-bold text-purple-400 mb-4 relative z-10">Cómputo Cuántico</h3>
          <p className="text-gray-400 text-sm mb-6 relative z-10">
            No solo conserva la información, sino que permite entrelazamiento y superposición. 
            Demuestra que la información nunca se pierde en el universo.
          </p>
          <div className="w-full bg-black/50 rounded-xl p-4 mt-auto border border-purple-500/20 relative z-10">
            <span className="text-xs uppercase text-purple-300 block mb-1">Preservación Coherente</span>
            <span className="font-bold text-purple-400">100% Garantizada</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Comparison;
