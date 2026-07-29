import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SpotlightCard = ({ children, className = "", color = "rgba(6, 182, 212, 0.15)" }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Springs para suavidad del tilt 3D
  const rotateX = useSpring(useTransform(mouseY, [0, 500], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 500], [-4, 4]), { stiffness: 150, damping: 20 });

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
    mouseX.set(250); // center
    mouseY.set(250); // center
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-2xl bg-slate-950/50 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Efecto Spotlight interno */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${color}, transparent 60%)`
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
