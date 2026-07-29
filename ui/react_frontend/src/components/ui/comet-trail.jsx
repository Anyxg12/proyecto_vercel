import React, { useEffect, useRef } from 'react';

const CometTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const trail = [];
    const maxTrailLength = 45;

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
      // Usamos composite operation para crear un desvanecimiento en lugar de clearRect
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.globalCompositeOperation = 'source-over';

      trail.push({ x: mouse.x, y: mouse.y });
      if (trail.length > maxTrailLength) {
        trail.shift();
      }

      if (trail.length > 1) {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#06b6d4';
        ctx.strokeStyle = '#06b6d4';

        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);

        for (let i = 1; i < trail.length; i++) {
          const pt = trail[i];
          const prevPt = trail[i - 1];
          const xc = (prevPt.x + pt.x) / 2;
          const yc = (prevPt.y + pt.y) / 2;
          ctx.quadraticCurveTo(prevPt.x, prevPt.y, xc, yc);
        }
        ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
        
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Brillo blanco en la cabeza del cometa
        ctx.beginPath();
        const head = trail[trail.length - 1];
        ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#a855f7';
        ctx.fill();
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

export default CometTrail;
