import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "El Destino de la Información",
    subtitle: "Lógica Clásica vs. Computación Cuántica",
    content: (
      <ul className="text-left space-y-3 max-w-xl mx-auto list-none">
        <li className="flex items-start gap-3"><span className="text-cyan-400">⚡</span> Exploración interactiva del flujo de información.</li>
        <li className="flex items-start gap-3"><span className="text-cyan-400">⚡</span> Del sobrecalentamiento del procesador a los Agujeros Negros.</li>
      </ul>
    ),
    icon: "🌌"
  },
  {
    title: "1. El Problema: Lógica Clásica",
    subtitle: "Irreversibilidad y Calor",
    content: (
      <ul className="text-left space-y-3 max-w-xl mx-auto list-none">
        <li className="flex items-start gap-3"><span className="text-red-400">🔥</span> <strong>Compuertas Irreversibles (AND):</strong> Destruyen bits al procesar.</li>
        <li className="flex items-start gap-3"><span className="text-red-400">🔥</span> <strong>Principio de Landauer:</strong> La información perdida se disipa como calor.</li>
      </ul>
    ),
    icon: "🔥"
  },
  {
    title: "2. La Solución: Lógica Reversible",
    subtitle: "Conservación Total",
    content: (
      <ul className="text-left space-y-3 max-w-xl mx-auto list-none">
        <li className="flex items-start gap-3"><span className="text-green-400">🔄</span> <strong>Operaciones Biyectivas (CNOT):</strong> Entradas = Salidas. Ningún bit se borra.</li>
        <li className="flex items-start gap-3"><span className="text-green-400">🔄</span> <strong>Cómputo Frío:</strong> Al no perder datos, teóricamente no se genera calor límite.</li>
      </ul>
    ),
    icon: "🔄"
  },
  {
    title: "3. El Último Límite: Mecánica Cuántica",
    subtitle: "Entrelazamiento y Superposición",
    content: (
      <ul className="text-left space-y-3 max-w-xl mx-auto list-none">
        <li className="flex items-start gap-3"><span className="text-purple-400">⚛️</span> <strong>Superposición:</strong> Múltiples estados simultáneos.</li>
        <li className="flex items-start gap-3"><span className="text-purple-400">⚛️</span> <strong>Entrelazamiento:</strong> La información se distribuye globalmente sin destruirse.</li>
      </ul>
    ),
    icon: "⚛️"
  },
  {
    title: "4. Simulador Avanzado (Qiskit)",
    subtitle: "Paradoja de Hawking Resuelta",
    content: (
      <ul className="text-left space-y-3 max-w-xl mx-auto list-none">
        <li className="flex items-start gap-3"><span className="text-cyan-400">🚀</span> <strong>Agujeros Negros simulados:</strong> La información absorbida se mezcla (Scrambling).</li>
        <li className="flex items-start gap-3"><span className="text-cyan-400">🚀</span> <strong>Recuperación 100%:</strong> La radiación de Hawking preserva y devuelve la información (Fidelidad total).</li>
      </ul>
    ),
    icon: "🚀"
  }
];

const PresentationMode = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-[#060a1a] border border-white/10 p-12 rounded-3xl shadow-2xl backdrop-blur-xl max-w-4xl w-full text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-white/5">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            ></div>
          </div>

          <div className="text-6xl mb-6 mt-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {slides[current].icon}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-400">
            {slides[current].title}
          </h1>
          
          <h2 className="text-2xl text-cyan-400 font-semibold mb-8">
            {slides[current].subtitle}
          </h2>
          
          <div className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto min-h-[140px] flex items-center justify-center">
            {slides[current].content}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-6 mt-12 items-center">
        <button 
          onClick={prevSlide}
          className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all focus:outline-none"
        >
          ← Anterior
        </button>
        <span className="text-gray-500 font-mono text-sm">
          {current + 1} / {slides.length}
        </span>
        <button 
          onClick={nextSlide}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all focus:outline-none font-bold"
        >
          Siguiente →
        </button>
      </div>
      
      <p className="mt-8 text-xs text-gray-500 text-center">
        Usa las flechas para navegar por el modo presentación, o el menú superior para saltar a una sección específica.
      </p>
    </div>
  );
};

export default PresentationMode;
