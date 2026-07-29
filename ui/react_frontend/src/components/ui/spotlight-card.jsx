import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SpotlightCard = ({ children, className = "", color = "rgba(6, 182, 212, 0.15)", ...props }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Generar un color transparente seguro para evitar el "dirty gradient ring" en Chromium/Safari
  const safeTransparent = color.replace(/[\d.]+\)$/, '0)');

  // Springs para suavidad del tilt 3D
  const rotateX = useSpring(useTransform(mouseY, [0, 500], [3, -3]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 500], [-3, 3]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(250);
    mouseY.set(250);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015, zIndex: 30 }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 shadow-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 backdrop-blur-md z-0 pointer-events-none" />
      
      {/* Efecto Spotlight interno */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${color}, ${safeTransparent} 60%)`
          )
        }}
      />
      {/* Contenido */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
