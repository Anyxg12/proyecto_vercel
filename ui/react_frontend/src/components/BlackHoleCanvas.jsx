import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BlackHoleCanvas = ({ etapa, theta, phi, entropia, pureza, fidelidad }) => {
  const mountRef = useRef(null);
  const [estadoSistema, setEstadoSistema] = useState('Información localizada (|Ψ_in⟩)');
  
  useEffect(() => {
    let currentSystemState = "Información localizada (|Ψ_in⟩)";
    if (etapa === "Entrada") currentSystemState = "Información localizada (|Ψ_in⟩)";
    else if (etapa === "Distribución") currentSystemState = "Scrambling & Entrelazamiento";
    else if (etapa === "Radiación") currentSystemState = "Radiación de Hawking (No localizada)";
    else currentSystemState = "Reconstrucción Coherente (|Ψ_out⟩)";
    setEstadoSistema(currentSystemState);

    const canvasWidth = mountRef.current.clientWidth;
    const canvasHeight = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x010207, 0.0035);

    const camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 1000);
    camera.position.set(0, 24, 98);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvasWidth, canvasHeight);
    
    // Clear old canvases if re-rendering
    if (mountRef.current.childElementCount > 0) {
      mountRef.current.innerHTML = '';
    }
    mountRef.current.appendChild(renderer.domElement);

    // Textures
    const createSoftParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.18, 'rgba(255, 255, 255, 0.9)');
      grad.addColorStop(0.45, 'rgba(255, 255, 255, 0.3)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const createHighGlowQuantumTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128; canvas.height = 128;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.15, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.35, 'rgba(0, 243, 255, 0.95)');
      grad.addColorStop(0.7, 'rgba(168, 85, 247, 0.45)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(64, 64, 64, 0, Math.PI * 2);
      ctx.fill();
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createSoftParticleTexture();
    const quantumGlowTexture = createHighGlowQuantumTexture();

    // 1. Singularidad
    const singularity = new THREE.Mesh(
      new THREE.SphereGeometry(9.5, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    scene.add(singularity);

    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(10.0, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.5, side: THREE.BackSide, blending: THREE.AdditiveBlending })
    ));

    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(10.7, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.35, side: THREE.BackSide, blending: THREE.AdditiveBlending })
    ));

    // 2. Anillos Fotónicos
    const photonRing1 = new THREE.Mesh(
      new THREE.RingGeometry(9.8, 11.6, 64),
      new THREE.MeshBasicMaterial({ color: 0x00f3ff, side: THREE.DoubleSide, transparent: true, opacity: 0.98, blending: THREE.AdditiveBlending })
    );
    photonRing1.rotation.x = Math.PI / 2;
    scene.add(photonRing1);

    const photonRing2 = new THREE.Mesh(
      new THREE.RingGeometry(11.7, 13.2, 64),
      new THREE.MeshBasicMaterial({ color: 0xc084fc, side: THREE.DoubleSide, transparent: true, opacity: 0.78, blending: THREE.AdditiveBlending })
    );
    photonRing2.rotation.x = Math.PI / 2;
    scene.add(photonRing2);

    // 3. Disco de Acreción
    const diskCount = 20000;
    const diskGeo = new THREE.BufferGeometry();
    const diskPos = new Float32Array(diskCount * 3);
    const diskColors = new Float32Array(diskCount * 3);
    const diskVelocities = [];

    for (let i = 0; i < diskCount; i++) {
        const r = 10.5 + Math.random() * 52.0;
        const thetaAngle = Math.random() * Math.PI * 2;
        const yOffset = (Math.random() - 0.5) * (2.0 * (r / 52.0));

        diskPos[i * 3] = r * Math.cos(thetaAngle);
        diskPos[i * 3 + 1] = yOffset;
        diskPos[i * 3 + 2] = r * Math.sin(thetaAngle);

        const keplerSpeed = (0.36 / Math.sqrt(r)) * (1 + (phi / 360) * 0.4);
        diskVelocities.push({ r, angle: thetaAngle, speed: keplerSpeed });

        const normR = (r - 10.5) / 52.0;
        const color = new THREE.Color();
        if (normR < 0.22) color.setHSL(0.53 - normR * 0.08, 1.0, 0.88);
        else if (normR < 0.62) color.setHSL(0.72 + normR * 0.06, 0.95, 0.68);
        else color.setHSL(0.78, 0.9, 0.45);
        
        diskColors[i * 3] = color.r;
        diskColors[i * 3 + 1] = color.g;
        diskColors[i * 3 + 2] = color.b;
    }
    diskGeo.setAttribute('position', new THREE.BufferAttribute(diskPos, 3));
    diskGeo.setAttribute('color', new THREE.BufferAttribute(diskColors, 3));
    const accretionDisc = new THREE.Points(diskGeo, new THREE.PointsMaterial({
        size: 1.6, map: particleTexture, vertexColors: true, transparent: true,
        opacity: 0.88, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(accretionDisc);

    // 4. Haz fotónico (Qubits)
    const qCount = 800;
    const qGeo = new THREE.BufferGeometry();
    const qPos = new Float32Array(qCount * 3);
    const qColors = new Float32Array(qCount * 3);
    const qData = [];

    for (let i = 0; i < qCount; i++) {
        const p = {};
        if (etapa === "Entrada") {
            p.x = -98 + Math.random() * 48;
            p.y = (Math.random() - 0.5) * 22;
            p.z = (Math.random() - 0.5) * 22;
            p.vx = 0.7 + Math.random() * 0.85;
            p.vy = (Math.random() - 0.5) * 0.12;
            p.vz = (Math.random() - 0.5) * 0.12;
            p.color = new THREE.Color(0xffffff);
        } else if (etapa === "Distribución") {
            p.r = 10.5 + Math.random() * 40;
            p.angle = Math.random() * Math.PI * 2;
            p.speed = 0.03 + Math.random() * 0.045;
            p.x = p.r * Math.cos(p.angle);
            p.y = (Math.random() - 0.5) * 5.0;
            p.z = p.r * Math.sin(p.angle);
            p.color = Math.random() > 0.5 ? new THREE.Color(0xffffff) : new THREE.Color(0x00f3ff);
        } else if (etapa === "Radiación") {
            p.x = (Math.random() - 0.5) * 6;
            p.y = (Math.random() - 0.5) * 6;
            p.z = (Math.random() - 0.5) * 6;
            const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
            p.vx = dir.x * (0.6 + Math.random() * 0.9);
            p.vy = dir.y * (0.6 + Math.random() * 0.9);
            p.vz = dir.z * (0.6 + Math.random() * 0.9);
            p.color = new THREE.Color(0xffaefc);
        } else {
            p.x = (Math.random() - 0.5) * 4;
            p.y = (Math.random() - 0.5) * 4;
            p.z = (Math.random() - 0.5) * 4;
            p.vx = 0.95 + Math.random() * 1.25;
            p.vy = (Math.random() - 0.5) * 0.1;
            p.vz = (Math.random() - 0.5) * 0.1;
            p.color = new THREE.Color(0x5ff59e);
        }

        qPos[i * 3] = p.x; qPos[i * 3 + 1] = p.y; qPos[i * 3 + 2] = p.z;
        qColors[i * 3] = p.color.r; qColors[i * 3 + 1] = p.color.g; qColors[i * 3 + 2] = p.color.b;
        qData.push(p);
    }
    qGeo.setAttribute('position', new THREE.BufferAttribute(qPos, 3));
    qGeo.setAttribute('color', new THREE.BufferAttribute(qColors, 3));
    const qParticlesMesh = new THREE.Points(qGeo, new THREE.PointsMaterial({
        size: 4.8, map: quantumGlowTexture, vertexColors: true, transparent: true,
        opacity: 1.0, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(qParticlesMesh);

    // Animation loop
    let animationId;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        const positions = accretionDisc.geometry.attributes.position.array;
        
        // Disk rotation
        for (let i = 0; i < diskCount; i++) {
            diskVelocities[i].angle += diskVelocities[i].speed * 0.05;
            positions[i * 3] = diskVelocities[i].r * Math.cos(diskVelocities[i].angle);
            positions[i * 3 + 2] = diskVelocities[i].r * Math.sin(diskVelocities[i].angle);
        }
        accretionDisc.geometry.attributes.position.needsUpdate = true;
        
        // Qubit beam logic based on Etapa
        const qPositions = qParticlesMesh.geometry.attributes.position.array;
        for (let i = 0; i < qCount; i++) {
            const p = qData[i];
            if (etapa === "Entrada") {
                p.x += p.vx; p.y += p.vy; p.z += p.vz;
                if (p.x > 0) {
                    p.x = -98 + Math.random() * 10;
                    p.y = (Math.random() - 0.5) * 22;
                    p.z = (Math.random() - 0.5) * 22;
                }
            } else if (etapa === "Distribución") {
                p.angle += p.speed;
                p.x = p.r * Math.cos(p.angle);
                p.z = p.r * Math.sin(p.angle);
            } else if (etapa === "Radiación") {
                p.x += p.vx; p.y += p.vy; p.z += p.vz;
                if (Math.abs(p.x) > 60 || Math.abs(p.y) > 60 || Math.abs(p.z) > 60) {
                    p.x = (Math.random() - 0.5) * 6;
                    p.y = (Math.random() - 0.5) * 6;
                    p.z = (Math.random() - 0.5) * 6;
                }
            } else {
                p.x += p.vx; p.y += p.vy; p.z += p.vz;
                if (p.x > 90) {
                    p.x = (Math.random() - 0.5) * 4;
                    p.y = (Math.random() - 0.5) * 4;
                    p.z = (Math.random() - 0.5) * 4;
                }
            }
            qPositions[i * 3] = p.x; qPositions[i * 3 + 1] = p.y; qPositions[i * 3 + 2] = p.z;
        }
        qParticlesMesh.geometry.attributes.position.needsUpdate = true;

        photonRing1.rotation.z -= 0.005;
        photonRing2.rotation.z += 0.003;
        renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [etapa, theta, phi]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '770px', borderRadius: '28px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.35)', background: 'radial-gradient(circle at 50% 50%, #0c0f26 0%, #010207 100%)', boxShadow: '0 35px 120px rgba(0,0,0,0.95), inset 0 0 90px rgba(168, 85, 247, 0.15)' }}>
      <div ref={mountRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 28px' }}>
        
        {/* HUD Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(8, 12, 28, 0.78)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '20px', padding: '14px 24px', boxShadow: '0 12px 45px rgba(0, 0, 0, 0.65)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 14px #38bdf8, 0 0 28px #38bdf8' }} />
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 850, letterSpacing: '-0.025em', background: 'linear-gradient(90deg, #ffffff, #c084fc 45%, #38bdf8 85%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MODELO DE PRESERVACIÓN DE INFORMACIÓN CUÁNTICA EN EL HORIZONTE DE SUCESOS</div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginTop: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Etapa activa: {etapa} &bull; {estadoSistema}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
             <MetricPill label="Ángulos θ, φ" val={`${theta}°, ${phi}°`} valColor="#38bdf8" />
             <MetricPill label="Entropía" val={entropia.toFixed(4)} valColor="#c084fc" />
             <MetricPill label="Pureza" val={pureza.toFixed(4)} valColor="#38bdf8" />
             <MetricPill label="Fidelidad" val={`${fidelidad.toFixed(2)}%`} valColor="#4ade80" />
          </div>
        </div>

        {/* HUD Center Side Cards */}
        <div style={{ position: 'absolute', top: '52%', left: 0, width: '100%', transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 30px', pointerEvents: 'none' }}>
           <div style={{ background: 'rgba(6, 10, 26, 0.78)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.13)', borderRadius: '18px', padding: '16px 20px', maxWidth: '235px', boxShadow: '0 16px 40px rgba(0,0,0,0.65)' }}>
             <strong style={{ color: '#38bdf8', display: 'block', fontSize: '0.85rem', marginBottom: '5px' }}>Estado Preparado (|Ψ_in⟩)</strong>
             <p style={{ fontSize: '0.73rem', color: '#a1a1aa' }}>Haz fotónico localizado ingresando al horizonte gravitatorio.</p>
           </div>
           <div style={{ background: 'rgba(6, 10, 26, 0.78)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.13)', borderRadius: '18px', padding: '16px 20px', maxWidth: '235px', boxShadow: '0 16px 40px rgba(0,0,0,0.65)' }}>
             <strong style={{ color: '#e879f9', display: 'block', fontSize: '0.85rem', marginBottom: '5px' }}>Reconstrucción (|Ψ_out⟩)</strong>
             <p style={{ fontSize: '0.73rem', color: '#a1a1aa' }}>Radiación de Hawking descodificada mediante circuito inverso.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const MetricPill = ({ label, val, valColor }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '6px 14px', whiteSpace: 'nowrap' }}>
     <span style={{ fontSize: '0.64rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
     <span style={{ fontSize: '0.92rem', fontWeight: 800, fontFamily: 'monospace', color: valColor, textShadow: `0 0 10px ${valColor}80` }}>{val}</span>
  </div>
);

export default BlackHoleCanvas;
