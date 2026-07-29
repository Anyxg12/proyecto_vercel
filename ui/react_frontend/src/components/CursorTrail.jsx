import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const trail = [];
    const maxTrailLength = 40;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Añadir nueva posición del mouse al inicio del trail
      trail.unshift({ x: mouse.x, y: mouse.y });
      if (trail.length > maxTrailLength) {
        trail.pop();
      }

      // Dibujar la estela (Comet trail)
      if (trail.length > 1) {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        // Usar un gradiente o colores luminosos
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#06b6d4'; // Cyan neon

        for (let i = 1; i < trail.length; i++) {
          const pt = trail[i];
          const prevPt = trail[i - 1];
          
          // El grosor se reduce a medida que se aleja
          const progress = i / trail.length;
          const lineWidth = (1 - progress) * 8; 
          // La opacidad también
          const opacity = 1 - progress;

          ctx.beginPath();
          ctx.moveTo(prevPt.x, prevPt.y);
          ctx.lineTo(pt.x, pt.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorTrail;
