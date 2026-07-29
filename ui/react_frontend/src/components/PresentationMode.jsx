import React from 'react';
import { motion } from 'framer-motion';

const PresentationMode = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-[#060a1a] border border-white/10 p-12 rounded-2xl shadow-2xl backdrop-blur-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-400">
              Cómputo Cuántico
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">
            Lógica Reversible & Preservación
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explora cómo la información pasa de ser destruida en la lógica tradicional (AND) a conservarse intacta en la lógica reversible (CNOT) y en los simuladores avanzados basados en Qiskit.
          </p>
          
          <div className="mt-10 flex gap-6 justify-center">
             <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
               <span className="text-3xl font-mono text-cyan-400 mb-2">100%</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest">Fidelidad</span>
             </div>
             <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
               <span className="text-3xl font-mono text-purple-400 mb-2">0.00</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest">Entropía</span>
             </div>
             <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
               <span className="text-3xl font-mono text-green-400 mb-2">Qiskit</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest">Motor</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationMode;
