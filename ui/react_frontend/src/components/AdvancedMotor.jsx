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
          className="bg-[#02040a]/80 backdrop-blur-2xl border border-purple-500/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all pointer-events-none"></div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-magenta-500 mb-6 uppercase tracking-widest relative z-10">Parámetros (Qiskit)</h3>
          
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
        {/* Real-time Metrics Card (4 Etapas) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-[#02040a]/80 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none"></div>
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-widest">Flujo de Datos</h3>
            <div className="bg-green-950/40 px-3 py-1 rounded-full border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <span className="text-xs text-green-400 font-bold uppercase tracking-wider">Fidelidad: {quantumData ? (quantumData.fidelidad * 100).toFixed(2) : '100.00'}%</span>
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
             {/* Etapa 1 */}
             <div className="bg-purple-950/20 p-3 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mb-1 block">1. Entrada</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.entrada?.entropia.toFixed(4) ?? '0.0000'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.entrada?.pureza.toFixed(4) ?? '1.0000'}</span></span>
                </div>
             </div>
             
             {/* Etapa 2 */}
             <div className="bg-cyan-950/20 p-3 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1 block">2. Distribución (Agujero Negro)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.distribucion?.entropia.toFixed(4) ?? '0.6931'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.distribucion?.pureza.toFixed(4) ?? '0.5000'}</span></span>
                </div>
             </div>

             {/* Etapa 3 */}
             <div className="bg-orange-950/20 p-3 rounded-xl border border-orange-500/30 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all">
                <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mb-1 block">3. Emisión (Hawking)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.radiacion?.entropia.toFixed(4) ?? '0.6931'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.radiacion?.pureza.toFixed(4) ?? '0.5000'}</span></span>
                </div>
             </div>

             {/* Etapa 4 */}
             <div className="bg-green-950/20 p-3 rounded-xl border border-green-500/30 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all">
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-1 block">4. Final (Recuperado)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.salida?.entropia.toFixed(4) ?? '0.0000'}</span></span>
                  <span className="text-gray-400">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{quantumData?.salida?.pureza.toFixed(4) ?? '1.0000'}</span></span>
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
          className="bg-[#02040a]/60 border border-orange-500/30 rounded-3xl p-8 shadow-[inset_0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6 flex items-center gap-3 uppercase tracking-widest relative z-10">
            <span className="text-3xl">🌌</span> Paradoja de la Información
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 relative z-10">
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="text-orange-500 font-bold">»</span> <strong>El Dilema de Hawking:</strong> Si un agujero negro se evapora emitiendo radiación térmica, la información de lo que cayó dentro parece destruirse (violando la mecánica cuántica).</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">»</span> <strong>La Solución Tensorial:</strong> Modelamos el agujero negro en Qiskit como un circuito de mezcla extrema ("Scrambling").</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">»</span> <strong>El Resultado:</strong> La información no se pierde, se entrelaza con la radiación emergente, permitiendo su recuperación 100% fiel.</li>
            </ul>
            <div className="bg-orange-950/20 p-6 rounded-2xl border border-orange-500/30 text-sm shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <h4 className="font-bold text-orange-400 mb-4 uppercase tracking-widest">Decodificando las Métricas</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_5px_#a855f7]"></span> <strong>Entrada:</strong> Datos vírgenes (Entropía 0, Pureza 1).</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]"></span> <strong>Distribución:</strong> Máximo caos aparente (Entropía máxima).</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></span> <strong>Emisión:</strong> Radiación de Hawking (sigue entrelazada).</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span> <strong>Final:</strong> Datos recuperados intactos (Fidelidad 100%).</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default AdvancedMotor;
