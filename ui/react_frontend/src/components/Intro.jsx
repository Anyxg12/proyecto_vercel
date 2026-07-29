import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto space-y-12 pb-12 mt-4">
      {/* Título Principal */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring" }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase drop-shadow-[0_0_25px_rgba(0,243,255,0.4)]">
          El <span className="glow-text-cyan">Origen</span> de la Paradoja
        </h2>
        <div className="bento-glass-card p-6 max-w-3xl mx-auto">
          <ul className="text-gray-300 text-lg leading-relaxed text-left space-y-4">
            <li className="flex gap-4 items-center"><span className="text-cyan-400 font-bold text-2xl">»</span> <p>A nivel físico, <strong>borrar un archivo</strong> destruye información irremediablemente.</p></li>
            <li className="flex gap-4 items-center"><span className="text-purple-400 font-bold text-2xl">»</span> <p>Esta destrucción genera <strong>calor extremo</strong>, frenando el avance de los procesadores actuales.</p></li>
            <li className="flex gap-4 items-center"><span className="text-emerald-400 font-bold text-2xl">»</span> <p>La <strong>Computación Cuántica</strong> promete un universo donde NADA se pierde. Jamás.</p></li>
          </ul>
        </div>
      </motion.div>

      {/* Grid de Comparación Teórica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lógica Irreversible */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bento-glass-card p-8 border-red-500/30 group"
        >
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-red-600/20 rounded-full blur-[60px] group-hover:bg-red-500/40 transition-all duration-700"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-red-950/50 border border-red-500/50 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.5)]">
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,0,0,1)]">🔥</span>
            </div>
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 tracking-wider uppercase">Física Clásica</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 relative z-10">
            <ul className="space-y-3 font-medium text-lg">
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> <strong>Compuertas AND:</strong> 2 entran, solo 1 sale.</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> <strong>Problema Fatal:</strong> Información aniquilada para siempre.</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">×</span> <strong>Calor:</strong> Borrar información calienta el sistema (Principio de Landauer).</li>
            </ul>
            
            <div className="mt-8 p-5 bg-red-950/30 rounded-2xl border-l-4 border-red-500 backdrop-blur-md">
              <h4 className="text-red-300 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                <span className="text-xl">📖</span> Metáfora Visual
              </h4>
              <p className="text-sm text-gray-400">
                Imagina quemar un libro. Tienes las cenizas, pero es físicamente imposible reconstruir la historia. La información se ha convertido en calor caótico.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lógica Reversible */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="bento-glass-card p-8 border-cyan-500/30 group"
        >
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-cyan-600/20 rounded-full blur-[60px] group-hover:bg-cyan-500/40 transition-all duration-700"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-cyan-950/50 border border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(0,255,255,1)]">🧩</span>
            </div>
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wider uppercase">Física Cuántica</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 relative z-10">
            <ul className="space-y-3 font-medium text-lg">
              <li className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <strong>Reversibilidad (CNOT):</strong> 2 entran, 2 salen.</li>
              <li className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <strong>Viaje en el Tiempo:</strong> Puedes retroceder la simulación matemáticamente.</li>
              <li className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <strong>Cero Fricción:</strong> Computación en frío absoluto, sin pérdida de energía térmica.</li>
            </ul>
            
            <div className="mt-8 p-5 bg-cyan-950/30 rounded-2xl border-l-4 border-cyan-500 backdrop-blur-md">
              <h4 className="text-cyan-300 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                <span className="text-xl">🧱</span> Metáfora Visual
              </h4>
              <p className="text-sm text-gray-400">
                Desarmar una figura de LEGO compleja. Aunque parezca caótico, como conoces las instrucciones inversas, puedes reconstruir la figura original. ¡La información sobrevive!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Intro;
