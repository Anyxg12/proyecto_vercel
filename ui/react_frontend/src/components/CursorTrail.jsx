import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let timeoutId;
    
    const handleMouseMove = (e) => {
      // Evitar crear demasiadas partículas, solo crear si el mouse se mueve rápido o cada cierto interval
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
        color: Math.random() > 0.5 ? '#06b6d4' : '#a855f7' // Cyan or Purple
      };
      
      setTrails((prev) => [...prev, newTrail].slice(-20)); // Mantener maximo 20 particulas
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.8, scale: 1, x: trail.x - 10, y: trail.y - 10 }}
            animate={{ 
              opacity: 0, 
              scale: 0.2,
              x: trail.x - 10 + (Math.random() - 0.5) * 20, 
              y: trail.y - 10 + (Math.random() - 0.5) * 20 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${trail.color} 0%, rgba(0,0,0,0) 70%)`,
              boxShadow: `0 0 10px ${trail.color}, 0 0 20px ${trail.color}`,
              pointerEvents: 'none',
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
