import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 mb-10 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
        Comparación Final
      </h2>

      {/* Tabla Comparativa Robusta */}
      <div className="overflow-x-auto bg-[#02040a]/80 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl shadow-[0_0_40px_rgba(34,211,238,0.1)] mb-12 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-cyan-500 to-purple-500 opacity-50"></div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10 text-gray-300">
              <th className="p-6 font-bold uppercase tracking-wider text-sm">Característica</th>
              <th className="p-6 font-bold uppercase tracking-wider text-sm text-red-400">Lógica Irreversible (AND)</th>
              <th className="p-6 font-bold uppercase tracking-wider text-sm text-cyan-400">Lógica Reversible (CNOT)</th>
              <th className="p-6 font-bold uppercase tracking-wider text-sm text-purple-400">Cómputo Cuántico</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 font-medium text-white">Conservación de Bits</td>
              <td className="p-6 text-red-300">No (Entran 2, Sale 1)</td>
              <td className="p-6 text-cyan-300">Sí (Entran 2, Salen 2)</td>
              <td className="p-6 text-purple-300">Sí (Unitaria)</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 font-medium text-white">Pérdida de Información</td>
              <td className="p-6 text-red-300">Total e Irrecuperable</td>
              <td className="p-6 text-cyan-300">Nula (Cálculo reversible)</td>
              <td className="p-6 text-purple-300">Nula (Fidelidad 100%)</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 font-medium text-white">Generación de Calor (Landauer)</td>
              <td className="p-6 text-red-300">Inevitable (k_B * T * ln2)</td>
              <td className="p-6 text-cyan-300">Teóricamente Cero</td>
              <td className="p-6 text-purple-300">Teóricamente Cero</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 font-medium text-white">Fenómenos Especiales</td>
              <td className="p-6 text-gray-400">Ninguno</td>
              <td className="p-6 text-gray-400">Computación hacia atrás</td>
              <td className="p-6 text-purple-300">Superposición y Entrelazamiento</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conclusiones Finales */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-[#02040a]/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 lg:p-12 text-center shadow-[inset_0_0_50px_rgba(168,85,247,0.1)] relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 tracking-wider uppercase relative z-10">
          Impacto en el Futuro del Software
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10 relative z-10">
          <div className="bg-cyan-950/20 p-6 rounded-2xl border border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
            <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2 uppercase tracking-widest text-sm">
              <span className="text-lg">🎮</span> Industria de Videojuegos
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex gap-2"><span className="text-cyan-500">»</span> <strong>Físicas Ultrarrealistas:</strong> Modelar colisiones y fluidos sin perder datos (Lógica Reversible).</li>
              <li className="flex gap-2"><span className="text-cyan-500">»</span> <strong>Viaje en el Tiempo Lógico:</strong> Rebobinar el estado del juego (Braid, Forza) con 100% de precisión y costo computacional nulo.</li>
            </ul>
          </div>
          
          <div className="bg-purple-950/20 p-6 rounded-2xl border border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
            <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2 uppercase tracking-widest text-sm">
              <span className="text-lg">⚙️</span> Algoritmos de Optimización
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex gap-2"><span className="text-purple-500">»</span> <strong>Búsqueda Cuántica:</strong> Algoritmos como Grover exploran datos exponencialmente más rápido aprovechando la superposición.</li>
              <li className="flex gap-2"><span className="text-purple-500">»</span> <strong>Eficiencia Térmica:</strong> Los futuros centros de datos usarán CNOTs lógicas para no fundirse (Hardware Reversible).</li>
            </ul>
          </div>
        </div>

        <div className="inline-block bg-black/50 border border-green-500/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(34,197,94,0.2)] relative z-10">
          <span className="text-sm uppercase tracking-widest text-green-400 block mb-2">Proyecto de Lógica Computacional</span>
          <span className="text-xl font-bold text-white tracking-widest uppercase">Demostración Finalizada</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Comparison;
