import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
      <motion.div 
        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="bg-[#0a0f25] border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-purple-400">🔥</span> El Problema: Pérdida de Información
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          En la computación clásica, operaciones como la compuerta <strong>AND</strong> toman dos bits y devuelven uno. Esto destruye información, generando calor (Principio de Landauer).
        </p>
        <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border border-red-500/20 text-red-300">
          Entrada: (1, 0) ➔ [AND] ➔ Salida: (0) <br/>
          ¿Cuál fue la entrada? ¡Es imposible saberlo solo con la salida!
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#0a0f25] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-cyan-400">❄️</span> La Solución: Lógica Reversible
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          La computación cuántica utiliza compuertas reversibles como <strong>CNOT</strong>. Mantiene la misma cantidad de bits de entrada y salida, permitiendo reconstruir el pasado.
        </p>
        <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border border-cyan-500/20 text-cyan-300">
          Entrada: (1, 0) ➔ [CNOT] ➔ Salida: (1, 1) <br/>
          ¿Cuál fue la entrada? ¡Aplica CNOT otra vez y obtienes (1, 0)!
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
