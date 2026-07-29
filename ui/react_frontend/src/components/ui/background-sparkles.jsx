import React, { useEffect, useRef } from 'react';

const BackgroundSparkles = ({ background = "radial-gradient(circle at center, #020617 0%, #000000 100%)", particleCount = 120 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.1;
        this.opacity = Math.random();
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.fading = Math.random() > 0.5;
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.fading) {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.1) this.fading = false;
        } else {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.8) this.fading = true;
        }

        if (this.x < 0 || this.x > w) this.speedX *= -1;
        if (this.y < 0 || this.y > h) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Malla sutil
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      const gridSize = 40;
      for(let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for(let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, background }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #000 100%)', pointerEvents: 'none' }}></div>
    </div>
  );
};

export default BackgroundSparkles;
