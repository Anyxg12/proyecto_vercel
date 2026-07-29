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
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 uppercase">
          El Origen de la Paradoja
        </h2>
        <div className="bg-[#02040a]/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 max-w-3xl mx-auto shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <ul className="text-gray-300 text-lg leading-relaxed text-left space-y-3">
            <li className="flex gap-3 items-start"><span className="text-cyan-400 font-bold">»</span> La información diaria parece recuperable, pero a nivel de procesador, los datos se destruyen constantemente.</li>
            <li className="flex gap-3 items-start"><span className="text-purple-400 font-bold">»</span> Esta aniquilación genera el calor que limita el hardware moderno.</li>
            <li className="flex gap-3 items-start"><span className="text-magenta-500 font-bold">»</span> La computación cuántica ofrece una arquitectura donde nada se pierde.</li>
          </ul>
        </div>
      </motion.div>

      {/* Grid de Comparación Teórica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lógica Irreversible */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#02040a]/80 backdrop-blur-2xl border border-red-500/40 rounded-3xl p-8 hover:border-red-400 transition-all shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <span className="text-3xl">🔥</span>
            </div>
            <h3 className="text-2xl font-bold text-red-400 tracking-wide uppercase">Lógica Clásica</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 relative z-10">
            <ul className="space-y-3">
              <li className="flex gap-2"><span className="text-red-500">▪</span> <strong>Compuertas AND:</strong> 2 bits entran, 1 sale.</li>
              <li className="flex gap-2"><span className="text-red-500">▪</span> <strong>El Problema:</strong> Información aniquilada para siempre.</li>
              <li className="flex gap-2"><span className="text-red-500">▪</span> <strong>Principio de Landauer:</strong> Borrar = Calor. (Por eso tu PC necesita ventiladores).</li>
            </ul>
            
            <div className="mt-6 p-4 bg-red-950/20 rounded-xl border-l-4 border-red-500">
              <h4 className="text-red-300 font-bold mb-1 flex items-center gap-2 text-sm uppercase">
                <span className="text-lg">📖</span> Metáfora Diaria
              </h4>
              <p className="text-sm">
                Quemar un libro. Tienes cenizas, pero es físicamente imposible reconstruir el texto. La información voló en forma de energía térmica.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lógica Reversible */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#02040a]/80 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl p-8 hover:border-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-cyan-900/30 border border-cyan-500/30 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <span className="text-3xl">🧩</span>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 tracking-wide uppercase">Lógica Cuántica</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 relative z-10">
            <ul className="space-y-3">
              <li className="flex gap-2"><span className="text-cyan-400">▪</span> <strong>Compuertas CNOT:</strong> 2 bits entran, 2 salen.</li>
              <li className="flex gap-2"><span className="text-cyan-400">▪</span> <strong>La Solución:</strong> Computación reversible. Puedes viajar en el tiempo lógico.</li>
              <li className="flex gap-2"><span className="text-cyan-400">▪</span> <strong>Cero Calor:</strong> Físicamente posible procesar sin disipación de energía térmica.</li>
            </ul>
            
            <div className="mt-6 p-4 bg-cyan-950/20 rounded-xl border-l-4 border-cyan-500">
              <h4 className="text-cyan-300 font-bold mb-1 flex items-center gap-2 text-sm uppercase">
                <span className="text-lg">🧱</span> Metáfora Diaria
              </h4>
              <p className="text-sm">
                Desarmar una casa de Lego para armar una nave. Si conoces las instrucciones, puedes desarmar la nave y recuperar la casa idéntica. ¡Información 100% a salvo!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Intro;
