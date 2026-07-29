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

        {/* Real-time Metrics Card (4 Etapas) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-[#060a1a]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Flujo de Información</h3>
            <div className="bg-green-500/20 px-3 py-1 rounded-full border border-green-500/50">
              <span className="text-xs text-green-400 font-bold">Fidelidad: {quantumData ? (quantumData.fidelidad * 100).toFixed(2) : '100.00'}%</span>
            </div>
          </div>
          
          <div className="space-y-4">
             {/* Etapa 1 */}
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
                <span className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-1 block">1. Momento de Entrada</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono">{quantumData?.entrada?.entropia.toFixed(4) ?? '0.0000'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono">{quantumData?.entrada?.pureza.toFixed(4) ?? '1.0000'}</span></span>
                </div>
             </div>
             
             {/* Etapa 2 */}
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1 block">2. Distribución (Agujero Negro)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono">{quantumData?.distribucion?.entropia.toFixed(4) ?? '0.6931'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono">{quantumData?.distribucion?.pureza.toFixed(4) ?? '0.5000'}</span></span>
                </div>
             </div>

             {/* Etapa 3 */}
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-orange-500/50 transition-colors">
                <span className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1 block">3. Emisión de Radiación (Hawking)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono">{quantumData?.radiacion?.entropia.toFixed(4) ?? '0.6931'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono">{quantumData?.radiacion?.pureza.toFixed(4) ?? '0.5000'}</span></span>
                </div>
             </div>

             {/* Etapa 4 */}
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors">
                <span className="text-xs text-green-400 font-bold uppercase tracking-wider mb-1 block">4. Estado Final (Recuperado)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono">{quantumData?.salida?.entropia.toFixed(4) ?? '0.0000'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono">{quantumData?.salida?.pureza.toFixed(4) ?? '1.0000'}</span></span>
                </div>
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
      
      {/* Explicación Teórica del Agujero Negro */}
      <div className="lg:col-span-3 mt-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-black/40 border border-white/5 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4 flex items-center gap-2">
            <span>🌌</span> La Paradoja de la Información
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div>
              <p className="mb-4">
                Stephen Hawking propuso que los Agujeros Negros emiten radiación térmica y eventualmente se evaporan. 
                Si un objeto cae en un Agujero Negro y este desaparece... ¿qué pasa con la información de ese objeto?
              </p>
              <p>
                Este simulador usa <strong>Qiskit</strong> (matemática tensorial en nuestro backend) para modelar el Agujero Negro como un circuito cuántico de "Scrambling" (mezcla extrema).
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-sm">
              <h4 className="font-bold text-white mb-2">Lectura de las Métricas</h4>
              <ul className="space-y-2">
                <li><strong className="text-purple-400">1. Entrada:</strong> Información pura (Entropía 0, Pureza 1).</li>
                <li><strong className="text-cyan-400">2. Distribución:</strong> El agujero negro mezcla la información (Entropía máxima).</li>
                <li><strong className="text-orange-400">3. Emisión:</strong> Radiación de Hawking emerge entrelazada con el interior.</li>
                <li><strong className="text-green-400">4. Estado Final:</strong> ¡La información se recupera! Fidelidad del 100%, resolviendo la paradoja gracias a la Mecánica Cuántica.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default AdvancedMotor;
