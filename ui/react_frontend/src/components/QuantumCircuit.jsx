import React from 'react';
import { motion } from 'framer-motion';

const QuantumCircuit = ({ quantumData }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-8">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>
        <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 tracking-widest uppercase mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Circuito de Simulación
        </h2>
        <p className="text-cyan-100/70 mt-4 max-w-2xl mx-auto text-sm tracking-widest uppercase font-bold">
          Codificación <span className="text-cyan-500">»</span> Distribución (Scrambling) <span className="text-purple-500">»</span> Recuperación
        </p>
      </div>

      <div className="bento-glass-card p-10 overflow-x-auto relative group border-cyan-500/40">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none group-hover:bg-[size:35px_35px] transition-all duration-1000"></div>
         <div className="min-w-[700px] flex flex-col gap-8 relative z-10">
            
            {/* Cúbit 0 */}
            <div className="flex items-center gap-6 relative">
              <span className="text-cyan-400 font-mono font-bold w-16 text-right text-xl drop-shadow-[0_0_8px_rgba(34,211,238,1)]">q_0 |0⟩</span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500/10 via-cyan-400 to-cyan-500/10 flex-1 relative flex items-center justify-between px-12 shadow-[0_0_15px_rgba(34,211,238,0.8)] overflow-visible">
                 <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/50 blur-[5px] animate-pulse"></div>
                 <Gate color="bg-purple-900/90 border-purple-400 text-purple-300 gate-purple" label={`U(θ,φ)`} />
                 <Gate color="bg-cyan-900/90 border-cyan-400 text-cyan-300 gate-cyan" label="H" />
                 <Gate color="bg-cyan-900/90 border-cyan-400 text-cyan-300 gate-cyan" label="H" />
                 <Gate color="bg-purple-900/90 border-purple-400 text-purple-300 gate-purple" label={`U†`} />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 pb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bento-glass-card p-10 border-purple-500/40 group"
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
          className="bento-glass-card p-10 border-cyan-500/40 group"
        >
          <h3 className="text-3xl font-black text-cyan-400 mb-6 flex items-center gap-3 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
            <span className="text-4xl">🔗</span> Entrelazamiento
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
    whileHover={{ scale: 1.25, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className={`w-14 h-14 flex items-center justify-center rounded-xl border-[3px] z-10 text-white font-black text-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] backdrop-blur-md transition-colors ${color}`}
  >
    {label}
  </motion.div>
);

export default QuantumCircuit;
