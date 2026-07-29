import React from 'react';
import { motion } from 'framer-motion';
import BlackHoleCanvas from './BlackHoleCanvas';

const AdvancedMotor = ({ theta, setTheta, phi, setPhi, quantumData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
      
      {/* Controles y Métricas (Columna Izquierda) */}
      <div className="lg:col-span-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-[#060a1a]/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 shadow-xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Controles Cuánticos (Qiskit)</h3>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Ángulo Theta (θ)</span>
              <span className="text-purple-400 font-mono">{theta}°</span>
            </div>
            <input 
              type="range" min="0" max="180" step="1" 
              value={theta} onChange={(e) => setTheta(parseFloat(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Ángulo Phi (φ)</span>
              <span className="text-cyan-400 font-mono">{phi}°</span>
            </div>
            <input 
              type="range" min="0" max="360" step="1" 
              value={phi} onChange={(e) => setPhi(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>
        </motion.div>

        {/* Real-time Metrics Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-[#060a1a]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 shadow-xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Métricas en Tiempo Real</h3>
          <div className="space-y-4">
             <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-gray-400 text-sm">Fidelidad de Recuperación</span>
                <span className="text-green-400 font-mono font-bold">{quantumData ? (quantumData.fidelidad * 100).toFixed(2) : '100.00'}%</span>
             </div>
             <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-gray-400 text-sm">Entropía (Entrada)</span>
                <span className="text-purple-400 font-mono">{quantumData?.entrada?.entropia.toFixed(4) ?? '0.0000'}</span>
             </div>
             <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-gray-400 text-sm">Entropía (Radiación)</span>
                <span className="text-cyan-400 font-mono font-bold shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  {quantumData?.distribucion?.entropia.toFixed(4) ?? '0.6931'}
                </span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Visualización 3D (Columna Derecha x2) */}
      <div className="lg:col-span-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Re-utilizamos el estado de distribución para que haya partículas moviéndose, controlando la etapa desde theta/phi si se desea, o lo dejamos en Radiación para ver la entropía máxima */}
          <BlackHoleCanvas 
            etapa="Radiación" 
            theta={theta} 
            phi={phi} 
            entropia={quantumData?.distribucion?.entropia ?? 0.6931} 
            pureza={quantumData?.distribucion?.pureza ?? 0.5} 
            fidelidad={quantumData?.fidelidad ?? 1.0} 
          />
        </motion.div>
      </div>
      
    </div>
  );
};

export default AdvancedMotor;
