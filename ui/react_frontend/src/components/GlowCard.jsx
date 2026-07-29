import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlowCard = ({ children, className = "", color = "cyan", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Posición del mouse relativa a la tarjeta para el efecto 3D Hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalizar la posición del ratón entre -0.5 y 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Definir colores según el prop
  const colors = {
    cyan: "from-cyan-400 via-cyan-600 to-blue-600",
    purple: "from-purple-400 via-purple-600 to-indigo-600",
    orange: "from-orange-400 via-orange-600 to-red-600",
    green: "from-green-400 via-green-600 to-emerald-600",
  };
  const gradient = colors[color] || colors.cyan;

  return (
    <motion.div
      {...props}
      style={{
        perspective: 1000, // Necesario para el efecto 3D
        transformStyle: "preserve-3d"
      }}
      className={`relative rounded-3xl w-full h-full p-[2px] overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={props.animate || { scale: isHovered ? 1.02 : 1 }}
      transition={props.transition || { type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Animated Moving Border (Aceternity UI Effect) */}
      <div 
        className={`absolute inset-0 z-0 bg-gradient-to-r ${gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          backgroundSize: '200% 200%',
          animation: 'move-bg 4s linear infinite',
        }}
      ></div>
      
      {/* Inner Card (Glassmorphism) */}
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-10 h-full w-full bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-[22px] overflow-hidden shadow-2xl"
      >
        {/* Shimmer interno tenue */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        {children}
      </motion.div>
      
      <style>{`
        @keyframes move-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

export default GlowCard;
