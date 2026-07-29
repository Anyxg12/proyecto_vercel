import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto space-y-12 pb-12 mt-4">
      {/* Título Principal */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Fundamentos de la Lógica: De lo Clásico a lo Cuántico
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          En nuestra vida diaria damos por sentado que la información siempre se puede recuperar. 
          Pero en el corazón de nuestras computadoras actuales, ocurre un fenómeno destructivo e irreversible a nivel microscópico. 
          Este proyecto explora cómo la computación cuántica promete solucionar la pérdida de información.
        </p>
      </motion.div>

      {/* Grid de Comparación Teórica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lógica Irreversible */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0a0f25]/80 backdrop-blur-md border border-red-500/30 rounded-3xl p-8 hover:border-red-500/60 transition-all shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <span className="text-3xl">🔥</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Lógica Irreversible (Clásica)</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Nuestras computadoras actuales usan compuertas lógicas como <strong>AND</strong>, que toman dos bits (ej. 1 y 0) y devuelven un solo bit (0).
            </p>
            <p className="text-red-300 font-semibold">
              El Problema: Al borrar un bit, la información se destruye para siempre.
            </p>
            <p>
              Según el <strong>Principio de Landauer</strong>, borrar información genera calor. Es por esto que los procesadores modernos se calientan tanto que necesitan ventiladores masivos.
            </p>
            <div className="mt-6 p-5 bg-black/40 rounded-xl border border-red-500/20">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-xl">📖</span> Ejemplo de la Vida Diaria
              </h4>
              <p className="text-sm italic">
                Imagina que tienes un libro enciclopédico y lo quemas en una fogata. Te quedará un montón de cenizas (el resultado). 
                ¿Puedes reconstruir el texto original leyendo las cenizas? ¡Imposible! La información se perdió de forma irreversible y se liberó en forma de calor.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lógica Reversible */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0a0f25]/80 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-500/60 transition-all shadow-lg shadow-cyan-900/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/20 rounded-xl">
              <span className="text-3xl">🧩</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Lógica Reversible (Cuántica)</h3>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              La computación cuántica utiliza compuertas como <strong>CNOT</strong>. Si entran dos bits, salen exactamente dos bits. Ninguna información se borra; solo se transforma.
            </p>
            <p className="text-cyan-300 font-semibold">
              La Solución: Conservar los bits permite viajar "hacia atrás" en el tiempo computacional.
            </p>
            <p>
              Como no se borra información, teóricamente no se genera calor límite (Límite de Landauer). Es un proceso computacional perfectamente ecológico y reversible.
            </p>
            <div className="mt-6 p-5 bg-black/40 rounded-xl border border-cyan-500/20">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-xl">🧱</span> Ejemplo de la Vida Diaria
              </h4>
              <p className="text-sm italic">
                Imagina que construyes una casa con piezas de Lego (el estado inicial). Luego, la desarmas y construyes una nave espacial usando <strong>exactamente las mismas piezas</strong> (el resultado). 
                Si conoces los pasos de ensamblaje, puedes desarmar la nave y volver a armar la casa idéntica. ¡Nada se perdió!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Intro;
