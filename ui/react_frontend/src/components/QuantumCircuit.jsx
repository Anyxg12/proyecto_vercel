import React from 'react';
import { motion } from 'framer-motion';

const QuantumCircuit = ({ quantumData }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Circuito de Codificación y Recuperación
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Este circuito de 3 cúbits implementa la codificación de un estado preparado, la distribución de información (Scrambling simulando un agujero negro) y la posterior recuperación coherente.
        </p>
      </div>

      <div className="bg-[#060a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-x-auto">
         {/* Representación visual esquemática del circuito en React */}
         <div className="min-w-[600px] flex flex-col gap-6 relative">
            
            {/* Cúbit 0 */}
            <div className="flex items-center gap-4 relative">
              <span className="text-cyan-400 font-mono font-bold w-12 text-right">q_0 |0⟩</span>
              <div className="h-px bg-white/20 flex-1 relative flex items-center justify-between px-10">
                 <Gate color="bg-purple-600 border-purple-400" label={`U(θ,φ)`} />
                 <Gate color="bg-blue-600 border-blue-400" label="H" />
                 <Gate color="bg-blue-600 border-blue-400" label="H" />
                 <Gate color="bg-purple-600 border-purple-400" label={`U†`} />
              </div>
            </div>

            {/* Cúbit 1 */}
            <div className="flex items-center gap-4 relative">
              <span className="text-cyan-400 font-mono font-bold w-12 text-right">q_1 |0⟩</span>
              <div className="h-px bg-white/20 flex-1 relative flex items-center justify-between px-10">
                 <div className="w-10"></div>
                 <Gate color="bg-cyan-600 border-cyan-400" label="X" />
                 <Gate color="bg-cyan-600 border-cyan-400" label="X" />
                 <div className="w-10"></div>
              </div>
            </div>

            {/* Cúbit 2 */}
            <div className="flex items-center gap-4 relative">
              <span className="text-cyan-400 font-mono font-bold w-12 text-right">q_2 |0⟩</span>
              <div className="h-px bg-white/20 flex-1 relative flex items-center justify-between px-10">
                 <div className="w-10"></div>
                 <Gate color="bg-green-600 border-green-400" label="CNOT" />
                 <Gate color="bg-green-600 border-green-400" label="CNOT" />
                 <div className="w-10"></div>
              </div>
            </div>

         </div>
      </div>
    </div>
  );
};

const Gate = ({ color, label }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 z-10 text-white font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] ${color}`}
  >
    {label}
  </motion.div>
);

export default QuantumCircuit;
