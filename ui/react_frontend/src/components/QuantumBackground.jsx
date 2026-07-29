import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const QuantumBackground = () => {
  // Generar 100 estrellas aleatorias
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {/* 1. Fondo base estelar profundo (Deep Space) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

      {/* 2. Grid de Neón (Estilo Cyberpunk/Quantum) */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* 3. Estrellas brillantes (Sparkles) animadas */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 4. Resplandores púrpuras y cyan de fondo (Nebulas) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
    </div>
  );
};

export default QuantumBackground;
