import React from 'react';
import { motion } from 'framer-motion';

const ReversibleLogic = ({ logicData, control, setControl, target, setTarget }) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
    <div className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <div className="p-10 bento-glass-card border-cyan-500/50 group">
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 text-center uppercase tracking-widest relative z-10 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">Física Cuántica (CNOT)</h2>
        
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

          <div className="flex justify-center relative">
            <motion.div 
              animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.4)', '0 0 40px rgba(34,211,238,0.8)', '0 0 20px rgba(34,211,238,0.4)'], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-36 h-36 bg-[#020a0a] rounded-full flex flex-col items-center justify-center border-2 border-cyan-400 z-10"
            >
              <div className="absolute inset-2 border-2 border-cyan-500/50 rounded-full border-dashed animate-[spin_8s_linear_infinite]"></div>
              <div className="absolute inset-[-10px] border border-cyan-500/20 rounded-full border-dotted animate-[spin_12s_linear_infinite_reverse]"></div>
              <span className="text-3xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(0,243,255,1)] tracking-widest">CNOT</span>
              <span className="text-[10px] text-cyan-200 mt-1 uppercase tracking-[0.2em] bg-cyan-900/50 px-2 py-0.5 rounded-full">Reversible</span>
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
        className="bento-glass-card p-10 border-cyan-500/30 group"
      >
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
        <h3 className="text-3xl font-black text-cyan-400 mb-8 flex items-center gap-4 uppercase tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
          <span className="text-4xl">🔄</span> Conservación de Información
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <ul className="text-gray-300 space-y-5 text-lg font-medium">
            <li className="flex gap-4 items-start"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Mapeo Biunívoco:</strong> Entran 2 bits, salen 2 bits. La operación matemática es 100% reversible.</p></li>
            <li className="flex gap-4 items-start"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Fricción Cero:</strong> Al no haber destrucción de datos, evitamos el límite de Landauer. No hay disipación de calor.</p></li>
            <li className="flex gap-4 items-start"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Viaje en el Tiempo:</strong> Puedes ejecutar el circuito hacia atrás y recuperar el estado original intacto.</p></li>
          </ul>

          <div className="space-y-6">
            <div className="bg-cyan-950/30 border border-cyan-500/50 p-6 rounded-2xl shadow-[inset_0_0_30px_rgba(0,243,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all">
              <h4 className="text-cyan-300 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
                <span className="text-xl">🔑</span> Criptografía Cuántica Perfecta
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Usa CNOT como candado impenetrable. El mensaje es el "Objetivo", la clave el "Control". Aplica CNOT y obtienes texto cifrado. Aplícalo de nuevo con la misma clave y recuperarás el mensaje intacto.
              </p>
            </div>
            
            <div className="bg-purple-950/40 border border-purple-500/50 p-5 rounded-xl flex items-center justify-between shadow-[0_0_20px_rgba(168,85,247,0.15)] overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
              <span className="text-xs uppercase text-purple-400 tracking-widest pl-2">Propiedad Inversa</span>
              <p className="font-mono text-xl font-bold text-white glow-text-purple">
                CNOT(CNOT(x)) = x
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReversibleLogic;
