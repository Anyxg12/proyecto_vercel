import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const Intro = () => {
  return (
    <motion.div 
      variants={containerVariants} initial="hidden" animate="show"
      className="flex flex-col max-w-6xl mx-auto space-y-12 pb-12 mt-4"
    >
      {/* Título Principal */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase drop-shadow-[0_0_25px_rgba(0,243,255,0.4)]">
          El <span className="glow-text-cyan">Origen</span> de la Paradoja
        </h2>
        <div className="bento-glass-card p-6 max-w-3xl mx-auto">
          <ul className="text-gray-300 text-lg leading-relaxed text-left space-y-4">
            <motion.li variants={itemVariants} className="flex gap-4 items-center"><span className="text-cyan-400 font-bold text-2xl">»</span> <p><strong>Borrar archivos físicos</strong> destruye información irreversiblemente.</p></motion.li>
            <motion.li variants={itemVariants} className="flex gap-4 items-center"><span className="text-purple-400 font-bold text-2xl">»</span> <p>Esa destrucción se disipa como <strong>calor extremo</strong> en los chips.</p></motion.li>
            <motion.li variants={itemVariants} className="flex gap-4 items-center"><span className="text-emerald-400 font-bold text-2xl">»</span> <p>La <strong>Física Cuántica</strong> permite procesar sin perder un solo dato.</p></motion.li>
          </ul>
        </div>
      </motion.div>

      {/* Grid de Comparación Teórica */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lógica Irreversible */}
        <motion.div variants={itemVariants} className="bento-glass-card p-8 border-red-500/30 group">
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-red-600/20 rounded-full blur-[60px] group-hover:bg-red-500/40 transition-all duration-700"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-red-950/50 border border-red-500/50 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.5)]">
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,0,0,1)]">🔥</span>
            </div>
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 tracking-wider uppercase">Física Clásica</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 relative z-10">
            <ul className="space-y-3 font-medium text-lg">
              <motion.li variants={itemVariants} className="flex gap-3"><span className="text-red-500 font-bold">×</span> <p><strong>Compuertas AND:</strong> 2 entran, solo 1 sale.</p></motion.li>
              <motion.li variants={itemVariants} className="flex gap-3"><span className="text-red-500 font-bold">×</span> <p><strong>Problema:</strong> Se aniquila la información.</p></motion.li>
              <motion.li variants={itemVariants} className="flex gap-3"><span className="text-red-500 font-bold">×</span> <p><strong>Landauer:</strong> Borrar produce fricción y calor.</p></motion.li>
            </ul>
            
            <motion.div variants={itemVariants} className="mt-8 p-5 bg-red-950/30 rounded-2xl border-l-4 border-red-500 backdrop-blur-md">
              <h4 className="text-red-300 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                <span className="text-xl">📖</span> Metáfora Visual
              </h4>
              <p className="text-sm text-gray-400">
                Quemar un libro. Tienes cenizas calientes, pero nunca podrás reconstruir la historia.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Lógica Reversible */}
        <motion.div variants={itemVariants} className="bento-glass-card p-8 border-cyan-500/30 group">
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-cyan-600/20 rounded-full blur-[60px] group-hover:bg-cyan-500/40 transition-all duration-700"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-cyan-950/50 border border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(0,255,255,1)]">🧩</span>
            </div>
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wider uppercase">Física Cuántica</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 relative z-10">
            <ul className="space-y-3 font-medium text-lg">
              <motion.li variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <p><strong>CNOT:</strong> 2 entran, 2 salen.</p></motion.li>
              <motion.li variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <p><strong>Viaje en el Tiempo:</strong> Deshacer operaciones matemáticamente.</p></motion.li>
              <motion.li variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 font-bold">✓</span> <p><strong>Cero Fricción:</strong> Nada se borra, no se genera calor.</p></motion.li>
            </ul>
            
            <motion.div variants={itemVariants} className="mt-8 p-5 bg-cyan-950/30 rounded-2xl border-l-4 border-cyan-500 backdrop-blur-md">
              <h4 className="text-cyan-300 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                <span className="text-xl">🧱</span> Metáfora Visual
              </h4>
              <p className="text-sm text-gray-400">
                Desarmar una figura de LEGO. Como conoces las instrucciones inversas, puedes reconstruirla intacta.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Intro;
