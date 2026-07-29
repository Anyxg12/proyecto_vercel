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

      {/* Teoría Cuántica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-purple-900/10 border border-purple-500/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">🌊</span> Superposición
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            A diferencia de los bits clásicos (0 o 1), un cúbit puede existir en una combinación lineal de ambos estados simultáneamente gracias a la <strong>superposición cuántica</strong>.
          </p>
          <div className="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-center text-sm text-gray-400 mb-4">
            |ψ⟩ = α|0⟩ + β|1⟩
          </div>
          <p className="text-sm text-gray-400 italic">
            El estado inicial de nuestro cúbit q_0 se prepara usando las compuertas U(θ,φ). Es como lanzar una moneda al aire: mientras gira, es cara y cruz a la vez.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          className="bg-cyan-900/10 border border-cyan-500/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔗</span> Entrelazamiento
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cuando aplicamos la compuerta de Hadamard (H) y las compuertas CNOT, los cúbits se "entrelazan". Sus destinos quedan unidos irrevocablemente, sin importar la distancia.
          </p>
          <div className="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-center text-sm text-cyan-200 mb-4">
            |ψ_entrelazado⟩ = (|000⟩ + |111⟩) / √2
          </div>
          <p className="text-sm text-gray-400 italic">
            Esta es la clave del motor: la información del cúbit 0 se "distribuye" entre los tres cúbits, tal como un Agujero Negro distribuye la información de lo que cae en él.
          </p>
        </motion.div>
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
