import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlackHoleCanvas from './BlackHoleCanvas';
import AnimatedTitle from './AnimatedTitle';
import GlowButton from './GlowButton';
import SpotlightCard from './ui/spotlight-card';
import BorderBeam from './ui/border-beam';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const AdvancedMotor = ({ theta, setTheta, phi, setPhi, quantumData }) => {
  const [userPhase, setUserPhase] = useState('Distribución');
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 items-start">
      
      {/* Controles y Métricas (Columna Izquierda) */}
      <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
        <SpotlightCard color="rgba(168,85,247,0.2)" className="p-6">
          <BorderBeam colorFrom="#a855f7" colorTo="#d946ef" duration={10} />
          <AnimatedTitle text="Parámetros (Qiskit)" type="word" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-magenta-500 mb-6 uppercase tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] w-full" />
          
          <div className="mb-6 relative z-10 bg-black/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white font-semibold tracking-wide">Ángulo Theta (θ)</span>
              <span className="text-purple-300 font-mono font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">{theta}°</span>
            </div>
            <input 
              type="range" min="0" max="180" step="1" 
              value={theta} onChange={(e) => setTheta(parseFloat(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>

          <div className="relative z-10 bg-black/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white font-semibold tracking-wide">Ángulo Phi (φ)</span>
              <span className="text-cyan-300 font-mono font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">{phi}°</span>
            </div>
            <input 
              type="range" min="0" max="360" step="1" 
              value={phi} onChange={(e) => setPhi(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>
        </SpotlightCard>

        {/* Real-time Metrics Card (4 Etapas) */}
        <SpotlightCard color="rgba(6,182,212,0.2)" className="p-6">
          <BorderBeam colorFrom="#06b6d4" colorTo="#3b82f6" duration={12} />
          <div className="flex justify-between items-center mb-6 relative z-10">
            <AnimatedTitle text="Flujo de Datos" type="word" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
            <div className="bg-green-950/40 px-3 py-1 rounded-full border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse">
              <span className="text-xs text-green-400 font-bold uppercase tracking-wider">Fidelidad: {quantumData ? (quantumData.fidelidad * 100).toFixed(2) : '100.00'}%</span>
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
             {/* Etapa 1 */}
             <div className="bg-purple-950/40 p-3 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all relative z-10">
                <span className="text-[10px] text-purple-300 font-bold uppercase tracking-widest mb-1 block drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">1. Entrada</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-200 font-semibold">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.entrada?.entropia.toFixed(4) ?? '0.0000'}</span></span>
                  <span className="text-gray-200 font-semibold">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.entrada?.pureza.toFixed(4) ?? '1.0000'}</span></span>
                </div>
             </div>
             
             {/* Etapa 2 */}
             <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all relative z-10">
                <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-widest mb-1 block drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">2. Distribución (Agujero Negro)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-200 font-semibold">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.distribucion?.entropia.toFixed(4) ?? '0.6931'}</span></span>
                  <span className="text-gray-200 font-semibold">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.distribucion?.pureza.toFixed(4) ?? '0.5000'}</span></span>
                </div>
             </div>

             {/* Etapa 3 */}
             <div className="bg-orange-950/40 p-3 rounded-xl border border-orange-500/30 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all relative z-10">
                <span className="text-[10px] text-orange-300 font-bold uppercase tracking-widest mb-1 block drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">3. Emisión (Hawking)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-200 font-semibold">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.radiacion?.entropia.toFixed(4) ?? '0.6931'}</span></span>
                  <span className="text-gray-200 font-semibold">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.radiacion?.pureza.toFixed(4) ?? '0.5000'}</span></span>
                </div>
             </div>

             {/* Etapa 4 */}
             <div className="bg-green-950/40 p-3 rounded-xl border border-green-500/30 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all relative z-10">
                <span className="text-[10px] text-green-300 font-bold uppercase tracking-widest mb-1 block drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]">4. Final (Recuperado)</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-200 font-semibold">Entropía: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.salida?.entropia.toFixed(4) ?? '0.0000'}</span></span>
                  <span className="text-gray-200 font-semibold">Pureza: <span className="text-white font-mono drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{quantumData?.salida?.pureza.toFixed(4) ?? '1.0000'}</span></span>
                </div>
             </div>
           </div>
        </SpotlightCard>
      </motion.div>

      <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4">
        {/* Phase Controls */}
        <SpotlightCard color="rgba(34,211,238,0.2)" className="p-4 flex flex-wrap gap-4 justify-center items-center">
          <BorderBeam colorFrom="#06b6d4" colorTo="#a855f7" duration={14} />
          <div className="relative z-10 flex flex-wrap gap-4 justify-center items-center w-full">
            <span className="text-white font-bold uppercase tracking-widest text-sm w-full text-center sm:w-auto">Control de Fase:</span>
            <GlowButton active={userPhase === 'Entrada'} onClick={() => setUserPhase('Entrada')} color="cyan">1. Entrada</GlowButton>
            <GlowButton active={userPhase === 'Distribución'} onClick={() => setUserPhase('Distribución')} color="purple">2. Scrambling</GlowButton>
            <GlowButton active={userPhase === 'Radiación'} onClick={() => setUserPhase('Radiación')} color="orange">3. Radiación</GlowButton>
            <GlowButton active={userPhase === 'Salida'} onClick={() => setUserPhase('Salida')} color="green">4. Recuperación</GlowButton>
          </div>
        </SpotlightCard>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
        >
          <BlackHoleCanvas 
            etapa={userPhase} 
            theta={theta} 
            phi={phi} 
            entropia={quantumData?.distribucion?.entropia ?? 0.6931} 
            pureza={quantumData?.distribucion?.pureza ?? 0.5} 
            fidelidad={quantumData?.fidelidad ?? 1.0} 
          />
        </motion.div>
      </motion.div>
      
      {/* Explicación Teórica del Agujero Negro */}
      <motion.div variants={itemVariants} className="lg:col-span-3 mt-4">
        <SpotlightCard color="rgba(249,115,22,0.2)" className="p-10">
          <BorderBeam colorFrom="#f97316" colorTo="#ef4444" duration={15} />
          <AnimatedTitle text="Paradoja de la Información" type="word" className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8 flex items-center justify-center gap-4 uppercase tracking-widest relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] w-full" />
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
        </SpotlightCard>
      </motion.div>

    </motion.div>
  );
};

export default AdvancedMotor;
