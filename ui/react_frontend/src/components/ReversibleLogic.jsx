import React from 'react';
import { motion } from 'framer-motion';

const ReversibleLogic = ({ logicData, control, setControl, target, setTarget }) => {
  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-8 pb-12">
      <div className="p-8 bg-[#060a1a]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.1)]">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Lógica Reversible (CNOT)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10">
          <div className="flex flex-col gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <label className="text-sm text-gray-400 uppercase">Cúbit de Control</label>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setControl(0)} className={`flex-1 py-2 rounded-lg font-bold ${control === 0 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>0</button>
                <button onClick={() => setControl(1)} className={`flex-1 py-2 rounded-lg font-bold ${control === 1 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>1</button>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <label className="text-sm text-gray-400 uppercase">Cúbit Objetivo</label>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setTarget(0)} className={`flex-1 py-2 rounded-lg font-bold ${target === 0 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>0</button>
                <button onClick={() => setTarget(1)} className={`flex-1 py-2 rounded-lg font-bold ${target === 1 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>1</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div 
              animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.4)', '0 0 40px rgba(34,211,238,0.8)', '0 0 20px rgba(34,211,238,0.4)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-32 h-32 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-full flex flex-col items-center justify-center border-2 border-cyan-400"
            >
              <span className="text-2xl font-black text-white">CNOT</span>
              <span className="text-xs text-cyan-200 mt-1">Reversible</span>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-cyan-500/50 flex justify-between items-center">
              <span className="text-sm text-cyan-300 uppercase">Control Salida</span>
              <span className="text-2xl font-mono font-bold text-cyan-400">{logicData?.controlOut ?? '-'}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-purple-500/50 flex justify-between items-center">
              <span className="text-sm text-purple-300 uppercase">Objetivo Salida</span>
              <span className="text-2xl font-mono font-bold text-purple-400">{logicData?.targetOut ?? '-'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Teoría y Ejemplo Práctico */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-black/40 border border-white/5 rounded-3xl p-8"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
          <span>🔄</span> Conservación de la Información
        </h3>
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>
            A diferencia de la compuerta AND, la compuerta <strong>CNOT (Control-NOT)</strong> mantiene el mismo número de bits. 
            El bit de <em>Control</em> pasa sin cambios. El bit <em>Objetivo</em> se invierte (NOT) <strong>sólo si</strong> el control es 1.
          </p>
          <p>
            Como entran 2 bits y salen 2 bits, podemos hacer el proceso inverso matemáticamente y deducir exactamente cuáles 
            fueron los bits de entrada. ¡La información está a salvo!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-cyan-900/20 border border-cyan-500/20 p-5 rounded-xl">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-xl">🔑</span> Ejemplo: Encriptación
              </h4>
              <p className="text-sm italic">
                Piensa en CNOT como un candado perfecto. Si el mensaje es el "Objetivo" y la contraseña es el "Control", 
                la salida es tu mensaje encriptado. <br/><br/>
                Como el proceso es reversible, si le aplicas CNOT <strong>de nuevo</strong> a la salida con la misma contraseña, 
                ¡recuperas el mensaje original intacto!
              </p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/20 p-5 rounded-xl font-mono text-sm text-purple-200 flex flex-col justify-center">
              <p className="font-bold mb-2 text-white font-sans">Fórmula Reversible:</p>
              <p>Salida_Control = Control</p>
              <p>Salida_Objetivo = Objetivo ⊕ Control</p>
              <br/>
              <p className="text-cyan-300">Inversa: CNOT( CNOT(x) ) = x</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReversibleLogic;
