import React from 'react';
import { motion } from 'framer-motion';

const QuantumCircuit = ({ quantumData }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-8">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          Circuito de Simulación
        </h2>
        <p className="text-cyan-100/70 mt-4 max-w-2xl mx-auto text-sm tracking-wide">
          Codificación » Distribución (Scrambling) » Recuperación
        </p>
      </div>

      <div className="bg-[#02040a]/80 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)] overflow-x-auto relative group">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
         <div className="min-w-[600px] flex flex-col gap-6 relative z-10">
            
            {/* Cúbit 0 */}
            <div className="flex items-center gap-4 relative">
              <span className="text-cyan-400 font-mono font-bold w-12 text-right drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">q_0 |0⟩</span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-cyan-500/20 flex-1 relative flex items-center justify-between px-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                 <Gate color="bg-purple-900/80 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]" label={`U(θ,φ)`} />
                 <Gate color="bg-cyan-900/80 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]" label="H" />
                 <Gate color="bg-cyan-900/80 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]" label="H" />
                 <Gate color="bg-purple-900/80 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]" label={`U†`} />
              </div>
            </div>

            {/* Cúbit 1 */}
            <div className="flex items-center gap-4 relative">
              <span className="text-cyan-400 font-mono font-bold w-12 text-right drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">q_1 |0⟩</span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-cyan-500/20 flex-1 relative flex items-center justify-between px-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                 <div className="w-10"></div>
                 <Gate color="bg-blue-900/80 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" label="X" />
                 <Gate color="bg-blue-900/80 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" label="X" />
                 <div className="w-10"></div>
              </div>
            </div>

            {/* Cúbit 2 */}
            <div className="flex items-center gap-4 relative">
              <span className="text-cyan-400 font-mono font-bold w-12 text-right drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">q_2 |0⟩</span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-cyan-500/20 flex-1 relative flex items-center justify-between px-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                 <div className="w-10"></div>
                 <Gate color="bg-green-900/80 border-green-400 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.5)]" label="CNOT" />
                 <Gate color="bg-green-900/80 border-green-400 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.5)]" label="CNOT" />
                 <div className="w-10"></div>
              </div>
            </div>

         </div>
      </div>

      {/* Teoría Cuántica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-[#02040a]/60 border border-purple-500/30 rounded-3xl p-8 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[inset_0_0_30px_rgba(168,85,247,0.2)] transition-all"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3 uppercase tracking-widest">
            <span className="text-2xl">🌊</span> Superposición
          </h3>
          <ul className="text-gray-300 space-y-4 mb-6">
            <li className="flex gap-3"><span className="text-purple-500">»</span> <strong>Múltiples Estados:</strong> Un cúbit no es solo 0 o 1, es una combinación de ambos hasta ser medido.</li>
            <li className="flex gap-3"><span className="text-purple-500">»</span> <strong>Compuerta U(θ,φ):</strong> Prepara el estado inicial (Lanzar la moneda).</li>
          </ul>
          <div className="bg-purple-950/40 p-4 rounded-xl border border-purple-500/30 font-mono text-center text-sm text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            |ψ⟩ = α|0⟩ + β|1⟩
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          className="bg-[#02040a]/60 border border-cyan-500/30 rounded-3xl p-8 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.2)] transition-all"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3 uppercase tracking-widest">
            <span className="text-2xl">🔗</span> Entrelazamiento
          </h3>
          <ul className="text-gray-300 space-y-4 mb-6">
            <li className="flex gap-3"><span className="text-cyan-500">»</span> <strong>Conexión Cuántica:</strong> Cúbits unidos irrevocablemente. Medir uno afecta al instante al otro.</li>
            <li className="flex gap-3"><span className="text-cyan-500">»</span> <strong>Scrambling:</strong> Distribuye la información del q_0 en el q_1 y q_2 (Simulación de Agujero Negro).</li>
          </ul>
          <div className="bg-cyan-950/40 p-4 rounded-xl border border-cyan-500/30 font-mono text-center text-sm text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            |ψ_entrelazado⟩ = (|000⟩ + |111⟩) / √2
          </div>
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
