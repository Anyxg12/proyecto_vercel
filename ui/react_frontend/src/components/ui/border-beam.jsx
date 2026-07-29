import React from "react";

const BorderBeam = ({ className = "", colorFrom = "#06b6d4", colorTo = "#a855f7", duration = 8 }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none rounded-inherit overflow-hidden ${className}`}>
      {/* El halo giratorio animado usando conic-gradient */}
      <div 
        className="absolute -inset-[100%] opacity-50"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, ${colorFrom} 20%, ${colorTo} 40%, transparent 60%)`,
          animation: `spin-beam ${duration}s linear infinite`,
        }}
      />
      {/* El enmascaramiento interno para dejar solo el borde */}
      <div className="absolute inset-[2px] bg-black/90 rounded-[inherit] z-10" />
      
      <style>{`
        @keyframes spin-beam {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BorderBeam;
