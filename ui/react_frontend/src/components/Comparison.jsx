import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Comparación Final: El Destino de la Información
      </h2>

      {/* Tabla Comparativa Robusta */}
      <div className="overflow-x-auto bg-[#060a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl mb-12">
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
        className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-white/10 rounded-3xl p-8 lg:p-12 text-center"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
          Conclusión: El Futuro de la Información
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
          La lógica tradicional que usamos todos los días (basada en compuertas AND u OR) tiene un límite físico insuperable: <strong>destruye información</strong> y por tanto se sobrecalienta. 
          Al transitar hacia la lógica reversible y la computación cuántica, descubrimos que las leyes de la física permiten procesar datos de forma "ecológica" a nivel termodinámico.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
          Incluso en el entorno más extremo del universo —un <strong>Agujero Negro</strong>— la información cuántica que parece perderse y mezclarse (Scrambling), 
          finalmente puede recuperarse a través de la radiación gracias al entrelazamiento. 
          <em>La información, al igual que la energía, no se crea ni se destruye; solo se transforma.</em>
        </p>
        
        <div className="inline-block bg-black/50 border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          <span className="text-sm uppercase tracking-widest text-purple-300 block mb-2">Proyecto de Lógica Computacional</span>
          <span className="text-xl font-bold text-white">Demostración Finalizada Exitosamente</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Comparison;
