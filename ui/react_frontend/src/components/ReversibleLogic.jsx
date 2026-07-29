import React from 'react';
import { motion } from 'framer-motion';

const ReversibleLogic = ({ logicData, control, setControl, target, setTarget }) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <div className="p-8 bg-[#02040a]/80 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 text-center uppercase tracking-widest relative z-10">Lógica Reversible (CNOT)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/20">
              <label className="text-xs text-cyan-400 uppercase tracking-widest mb-2 block">Cúbit de Control</label>
              <div className="flex gap-2">
                <button onClick={() => setControl(0)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${control === 0 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>0</button>
                <button onClick={() => setControl(1)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${control === 1 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>1</button>
              </div>
            </div>
            <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/20">
              <label className="text-xs text-cyan-400 uppercase tracking-widest mb-2 block">Cúbit Objetivo</label>
              <div className="flex gap-2">
                <button onClick={() => setTarget(0)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${target === 0 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>0</button>
                <button onClick={() => setTarget(1)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${target === 1 ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>1</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div 
              animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.4)', '0 0 40px rgba(34,211,238,0.8)', '0 0 20px rgba(34,211,238,0.4)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-32 h-32 bg-[#02040a] rounded-full flex flex-col items-center justify-center border border-cyan-400 shadow-[inset_0_0_20px_rgba(34,211,238,0.3)] relative"
            >
              <div className="absolute inset-2 border border-cyan-500/30 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
              <span className="text-2xl font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] tracking-widest">CNOT</span>
              <span className="text-[10px] text-cyan-500 mt-1 uppercase tracking-[0.2em]">Reversible</span>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-cyan-950/20 p-4 rounded-xl border border-cyan-500/40 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400"></div>
              <span className="text-xs text-cyan-400 uppercase tracking-widest pl-2">Salida Control</span>
              <span className="text-2xl font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{logicData?.controlOut ?? '-'}</span>
            </div>
            <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-500/40 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
              <span className="text-xs text-purple-400 uppercase tracking-widest pl-2">Salida Objetivo</span>
              <span className="text-2xl font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{logicData?.targetOut ?? '-'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Teoría y Ejemplo Práctico */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-[#02040a]/60 border border-cyan-500/20 rounded-3xl p-8 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
          <span className="text-3xl">🔄</span> Biyectividad y Conservación
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="text-gray-300 space-y-4">
            <li className="flex gap-3"><span className="text-cyan-500">»</span> <strong>Mapeo 1:1:</strong> Entran 2 bits, salen 2 bits. Operación lógicamente reversible.</li>
            <li className="flex gap-3"><span className="text-cyan-500">»</span> <strong>Cero Calor:</strong> Sin pérdida de datos, evitamos el límite de Landauer. Es el futuro del bajo consumo.</li>
            <li className="flex gap-3"><span className="text-cyan-500">»</span> <strong>Viaje en el Tiempo Lógico:</strong> Al ser reversible, aplicar CNOT dos veces te devuelve exactamente al estado inicial.</li>
          </ul>

          <div className="space-y-4">
            <div className="bg-cyan-950/30 border border-cyan-500/30 p-5 rounded-xl shadow-[inset_0_0_15px_rgba(34,211,238,0.1)]">
              <h4 className="text-cyan-300 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-widest">
                <span className="text-lg">🔑</span> Ejemplo: Encriptación
              </h4>
              <p className="text-xs text-gray-300">
                Usa CNOT como candado. El mensaje es el "Objetivo", la contraseña el "Control". Resultado = Texto cifrado. Aplica CNOT de nuevo con la misma contraseña y recuperarás el mensaje intacto.
              </p>
            </div>
            
            <div className="bg-purple-950/30 border border-purple-500/30 p-4 rounded-xl flex items-center justify-between shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]">
              <span className="text-xs uppercase text-purple-400 tracking-widest block">Propiedad Inversa</span>
              <p className="font-mono text-white text-sm">
                CNOT ( CNOT(x) ) = x
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReversibleLogic;
