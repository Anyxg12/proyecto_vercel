import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlowButton = ({ children, onClick, active, color = 'cyan', className = '' }) => {
  const [ripples, setRipples] = useState([]);

  const colors = {
    cyan: { bg: 'bg-cyan-500', shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.8)]', border: 'border-cyan-400' },
    purple: { bg: 'bg-purple-500', shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.8)]', border: 'border-purple-400' },
    orange: { bg: 'bg-orange-500', shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.8)]', border: 'border-orange-400' },
    green: { bg: 'bg-green-500', shadow: 'shadow-[0_0_15px_rgba(34,197,94,0.8)]', border: 'border-green-400' },
  };

  const theme = colors[color] || colors.cyan;

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-6 py-2.5 rounded-xl font-black uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 ${
        active 
          ? `${theme.bg} text-white ${theme.shadow} border-transparent` 
          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Ripple Effect Container */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            initial={{ top: ripple.y, left: ripple.x, scale: 0, opacity: 0.5 }}
            animate={{ scale: 30, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onAnimationComplete={() => setRipples(prev => prev.filter(r => r.id !== ripple.id))}
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              background: 'white',
              borderRadius: '50%',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              zIndex: 0
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export default GlowButton;
