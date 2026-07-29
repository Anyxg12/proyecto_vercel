import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CometTrail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Springs para suavizar el seguimiento (efecto "cometa" o "fantasma")
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Springs más lentos para el halo externo (estela secundaria)
  const springConfigSlow = { damping: 40, stiffness: 80, mass: 1 };
  const slowX = useSpring(cursorX, springConfigSlow);
  const slowY = useSpring(cursorY, springConfigSlow);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, overflow: "hidden" }}>
      {/* Halo secundario (Estela lenta) */}
      <motion.div
        style={{
          x: slowX,
          y: slowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-opacity duration-300"
      />
      
      {/* Núcleo principal (Punto rápido brillante) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff,0_0_20px_#a855f7,0_0_40px_#a855f7] transition-opacity duration-300"
      />
    </div>
  );
};

export default CometTrail;
