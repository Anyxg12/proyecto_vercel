import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SpotlightCard = ({ children, className = "", color = "rgba(6, 182, 212, 0.15)" }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-black/40 border border-white/10 ${className}`}
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Efecto Spotlight interno */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${color}, transparent 80%)`
          )
        }}
      />
      {/* Contenido */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
