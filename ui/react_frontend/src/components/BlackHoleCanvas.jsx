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
    // Posición para ver el disco horizontalmente con un poco de ángulo
    camera.position.set(0, 18, 105);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvasWidth, canvasHeight);
    
    if (mountRef.current.childElementCount > 0) {
      mountRef.current.innerHTML = '';
    }
    mountRef.current.appendChild(renderer.domElement);

    // Textura suave para partículas
    const createSoftParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };
    const particleTexture = createSoftParticleTexture();

    // Colores dinámicos
    let baseHue = 0.75; // Purple
    if (etapa === 'Entrada') baseHue = 0.55; // Blue
    else if (etapa === 'Radiación') baseHue = 0.05; // Orange/Red
    else if (etapa === 'Salida') baseHue = 0.35; // Green

    const innerColor = new THREE.Color().setHSL(baseHue, 0.9, 0.6);
    const outerColor = new THREE.Color().setHSL(baseHue + 0.1, 0.9, 0.4);

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(innerColor, 500, 100);
    scene.add(pointLight);

    // 1. Singularidad Central
    const singularity = new THREE.Mesh(
      new THREE.SphereGeometry(8.5, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    scene.add(singularity);

    // Lente Gravitacional (Esfera refractiva que curva la luz trasera)
    const gravitationalLens = new THREE.Mesh(
      new THREE.SphereGeometry(10.5, 64, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 1.0, // Vidrio puro
        opacity: 1,
        metalness: 0,
        roughness: 0,
        ior: 2.5, // Índice de refracción alto para curvar la luz mucho
        thickness: 5.0,
        side: THREE.BackSide,
      })
    );
    scene.add(gravitationalLens);

    // Halos Brillantes (Atmosfera central)
    const halo1 = new THREE.Mesh(
      new THREE.SphereGeometry(10.8, 64, 64),
      new THREE.MeshBasicMaterial({ color: innerColor, transparent: true, opacity: 0.5, side: THREE.BackSide, blending: THREE.AdditiveBlending })
    );
    scene.add(halo1);
    
    const halo2 = new THREE.Mesh(
      new THREE.SphereGeometry(14.0, 64, 64),
      new THREE.MeshBasicMaterial({ color: outerColor, transparent: true, opacity: 0.15, side: THREE.BackSide, blending: THREE.AdditiveBlending })
    );
    scene.add(halo2);

    // 2. Disco de Acreción (Plano Ecuatorial)
    const diskCount = 45000;
    const diskGeo = new THREE.BufferGeometry();
    const diskPos = new Float32Array(diskCount * 3);
    const diskColors = new Float32Array(diskCount * 3);
    const diskVelocities = [];

    for (let i = 0; i < diskCount; i++) {
        const r = 12.0 + Math.random() * 60.0;
        const thetaAngle = Math.random() * Math.PI * 2;
        // Grosor del disco aumenta con la distancia
        const thickness = (r - 11.5) * 0.12;
        const yOffset = (Math.random() - 0.5) * thickness;

        diskPos[i * 3] = r * Math.cos(thetaAngle);
        diskPos[i * 3 + 1] = yOffset;
        diskPos[i * 3 + 2] = r * Math.sin(thetaAngle);

        const keplerSpeed = (0.5 / Math.sqrt(r)) * (1 + (phi / 360) * 0.5);
        diskVelocities.push({ r, angle: thetaAngle, speed: keplerSpeed, yOriginal: yOffset });

        const normR = (r - 12.0) / 60.0;
        const color = new THREE.Color();
        color.setHSL(baseHue - normR * 0.15, 0.9, 0.8 - normR * 0.4);
        
        diskColors[i * 3] = color.r;
        diskColors[i * 3 + 1] = color.g;
        diskColors[i * 3 + 2] = color.b;
    }
    diskGeo.setAttribute('position', new THREE.BufferAttribute(diskPos, 3));
    diskGeo.setAttribute('color', new THREE.BufferAttribute(diskColors, 3));
    const accretionDisc = new THREE.Points(diskGeo, new THREE.PointsMaterial({
        size: 1.2, map: particleTexture, vertexColors: true, transparent: true,
        opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(accretionDisc);

    // 2.5 Flujo de Información Explícito (Qubits Entrando/Saliendo)
    const infoCount = 2000;
    const infoGeo = new THREE.BufferGeometry();
    const infoPos = new Float32Array(infoCount * 3);
    const infoColors = new Float32Array(infoCount * 3);
    const infoData = [];

    for (let i = 0; i < infoCount; i++) {
        infoData.push({
            x: -100 + Math.random() * 200,
            y: (Math.random() - 0.5) * 10,
            z: (Math.random() - 0.5) * 10,
            speed: 0.5 + Math.random() * 1.5,
            angle: Math.random() * Math.PI * 2,
            r: 12 + Math.random() * 15
        });
        infoPos[i*3] = 0; infoPos[i*3+1] = 0; infoPos[i*3+2] = 0;
        
        infoColors[i*3] = 1.0; infoColors[i*3+1] = 1.0; infoColors[i*3+2] = 1.0;
    }
    infoGeo.setAttribute('position', new THREE.BufferAttribute(infoPos, 3));
    infoGeo.setAttribute('color', new THREE.BufferAttribute(infoColors, 3));
    
    // Un material súper brillante para que destaquen sobre el disco
    const infoMaterial = new THREE.PointsMaterial({
        size: 2.5, map: particleTexture, vertexColors: true, transparent: true,
        opacity: 1.0, blending: THREE.AdditiveBlending, depthWrite: false
    });
    const infoStream = new THREE.Points(infoGeo, infoMaterial);
    scene.add(infoStream);

    // 3. Jets Polares Relativistas
    const jetCount = 10000;
    const jetGeo = new THREE.BufferGeometry();
    const jetPos = new Float32Array(jetCount * 3);
    const jetColors = new Float32Array(jetCount * 3);
    const jetData = [];

    const jetActive = (etapa === 'Radiación' || etapa === 'Salida');

    for (let i = 0; i < jetCount; i++) {
        const isNorth = Math.random() > 0.5;
        const r = Math.random() * 2.5; // Radio estrecho en la base
        const angle = Math.random() * Math.PI * 2;
        const y = (Math.random() * 80) * (isNorth ? 1 : -1);
        
        jetPos[i * 3] = r * Math.cos(angle);
        jetPos[i * 3 + 1] = y;
        jetPos[i * 3 + 2] = r * Math.sin(angle);

        // Velocidad muy alta en Y
        const speed = (0.5 + Math.random() * 2.0) * (isNorth ? 1 : -1);
        jetData.push({ r, angle, y, speed, isNorth });

        const color = new THREE.Color();
        if (etapa === 'Salida') {
          color.setHSL(0.35, 1.0, 0.7); // Green recovery
        } else {
          color.setHSL(0.05, 1.0, 0.6); // Orange/Red hawking radiation
        }

        jetColors[i * 3] = color.r;
        jetColors[i * 3 + 1] = color.g;
        jetColors[i * 3 + 2] = color.b;
    }
    jetGeo.setAttribute('position', new THREE.BufferAttribute(jetPos, 3));
    jetGeo.setAttribute('color', new THREE.BufferAttribute(jetColors, 3));
    const polarJets = new THREE.Points(jetGeo, new THREE.PointsMaterial({
        size: 1.5, map: particleTexture, vertexColors: true, transparent: true,
        opacity: jetActive ? 0.8 : 0.0, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(polarJets);

    // 4. Campo Estelar (Fondo 360)
    const starCount = 4000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        const r = 80 + Math.random() * 200;
        const thetaStar = Math.random() * Math.PI * 2;
        const phiStar = Math.acos(2 * Math.random() - 1);
        starPos[i * 3] = r * Math.sin(phiStar) * Math.cos(thetaStar);
        starPos[i * 3 + 1] = r * Math.sin(phiStar) * Math.sin(thetaStar);
        starPos[i * 3 + 2] = r * Math.cos(phiStar);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starField = new THREE.Points(starGeo, new THREE.PointsMaterial({
        size: 1.0, color: 0xaaccff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(starField);

    // Animation loop (60 FPS optimized)
    let animationId;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        // Rotar disco de acreción
        const positions = accretionDisc.geometry.attributes.position.array;
        for (let i = 0; i < diskCount; i++) {
            diskVelocities[i].angle -= diskVelocities[i].speed * 0.05;
            positions[i * 3] = diskVelocities[i].r * Math.cos(diskVelocities[i].angle);
            positions[i * 3 + 2] = diskVelocities[i].r * Math.sin(diskVelocities[i].angle);
            
            // Si es etapa de entrada, las partículas tienden a espiralar hacia adentro suavemente
            if (etapa === 'Entrada') {
                diskVelocities[i].r -= 0.01;
                if (diskVelocities[i].r < 12) diskVelocities[i].r = 72.0;
            }
        }
        accretionDisc.geometry.attributes.position.needsUpdate = true;
        
        // Flujo de Información Lógica (El viaje del Qubit)
        const iPositions = infoStream.geometry.attributes.position.array;
        const iColors = infoStream.geometry.attributes.color.array;
        
        for (let i = 0; i < infoCount; i++) {
            const data = infoData[i];
            let targetColor = new THREE.Color(0xffffff);

            if (etapa === 'Entrada') {
                // Entrando por la izquierda hacia el agujero negro
                data.x += data.speed;
                // Si llega al centro, se reinicia a la izquierda
                if (data.x > -12) {
                    data.x = -120 - Math.random() * 50;
                    data.y = (Math.random() - 0.5) * 4;
                    data.z = (Math.random() - 0.5) * 4;
                }
                iPositions[i*3] = data.x;
                iPositions[i*3+1] = data.y;
                iPositions[i*3+2] = data.z;
                targetColor.setHex(0x38bdf8); // Cyan claro
                
            } else if (etapa === 'Distribución' || etapa === 'Radiación') {
                // Scrambling: orbitando caóticamente cerca del núcleo
                data.angle -= data.speed * 0.05;
                // Pequeña fluctuación caótica
                data.r += (Math.random() - 0.5) * 0.5;
                if (data.r < 11.5) data.r = 11.5;
                if (data.r > 25) data.r = 25;
                
                iPositions[i*3] = data.r * Math.cos(data.angle);
                iPositions[i*3+1] = (Math.random() - 0.5) * 6; // Dispersión vertical
                iPositions[i*3+2] = data.r * Math.sin(data.angle);
                
                if (etapa === 'Distribución') targetColor.setHex(0xc084fc); // Púrpura scrambling
                if (etapa === 'Radiación') targetColor.setHex(0xfacc15); // Amarillo radiación
                
            } else if (etapa === 'Salida') {
                // Saliendo por la derecha (para el otro lado)
                data.x += data.speed * 1.5; // Salen rápido
                if (data.x > 120 || data.x < 12) { // Si están muy lejos o acaban de cambiar de fase, reiniciar en el borde derecho
                    data.x = 12 + Math.random() * 10;
                    data.y = (Math.random() - 0.5) * 4;
                    data.z = (Math.random() - 0.5) * 4;
                }
                iPositions[i*3] = data.x;
                iPositions[i*3+1] = data.y;
                iPositions[i*3+2] = data.z;
                targetColor.setHex(0x4ade80); // Verde recuperación
            }

            iColors[i*3] = targetColor.r;
            iColors[i*3+1] = targetColor.g;
            iColors[i*3+2] = targetColor.b;
        }
        infoStream.geometry.attributes.position.needsUpdate = true;
        infoStream.geometry.attributes.color.needsUpdate = true;

        // Mover polar jets si están activos
        if (jetActive) {
            const jPositions = polarJets.geometry.attributes.position.array;
            for (let i = 0; i < jetCount; i++) {
                const jd = jetData[i];
                jd.y += jd.speed;
                // Si la partícula se aleja mucho, reiniciarla cerca del núcleo
                if (Math.abs(jd.y) > 100) {
                    jd.y = jd.isNorth ? 8 : -8; 
                }
                jPositions[i * 3 + 1] = jd.y;
                // Pequeña expansión del radio mientras se aleja
                const expansion = Math.abs(jd.y) * 0.05;
                jPositions[i * 3] = (jd.r + expansion) * Math.cos(jd.angle);
                jPositions[i * 3 + 2] = (jd.r + expansion) * Math.sin(jd.angle);
            }
            polarJets.geometry.attributes.position.needsUpdate = true;
            polarJets.material.opacity = Math.min(1.0, polarJets.material.opacity + 0.02);
        } else {
            polarJets.material.opacity = Math.max(0.0, polarJets.material.opacity - 0.05);
        }

        // Rotación general sutil de la escena
        starField.rotation.y += 0.0005;
        halo1.rotation.y -= 0.01;
        halo2.rotation.y += 0.005;

        renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose geometry/materials to prevent memory leaks
      diskGeo.dispose();
      jetGeo.dispose();
      starGeo.dispose();
      infoGeo.dispose();
      infoMaterial.dispose();
    };
  }, [etapa, theta, phi]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'inherit', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.35)', background: 'radial-gradient(circle at 50% 50%, #080a1a 0%, #000000 100%)', boxShadow: '0 35px 120px rgba(0,0,0,0.95), inset 0 0 90px rgba(168, 85, 247, 0.15)' }}>
      <div ref={mountRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 28px' }}>
        
        {/* HUD Header */}
        <div className="bento-glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', border: '1px solid rgba(255, 255, 255, 0.15)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 14px #38bdf8, 0 0 28px #38bdf8' }} />
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 850, letterSpacing: '-0.025em', background: 'linear-gradient(90deg, #ffffff, #c084fc 45%, #38bdf8 85%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SIMULACIÓN ASTROFÍSICA: LENTE GRAVITACIONAL Y JETS POLARES</div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginTop: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Etapa activa: {etapa} &bull; {estadoSistema}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
             <MetricPill label="Ángulos θ, φ" val={`${theta}°, ${phi}°`} valColor="#38bdf8" />
             <MetricPill label="Entropía" val={entropia.toFixed(4)} valColor="#c084fc" />
             <MetricPill label="Pureza" val={pureza.toFixed(4)} valColor="#38bdf8" />
             <MetricPill label="Fidelidad" val={`${fidelidad.toFixed(2)}%`} valColor="#4ade80" />
          </div>
        </div>

        {/* HUD Center Side Cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px', pointerEvents: 'none', marginBottom: 'auto', marginTop: 'auto' }}>
           <div style={{ background: 'rgba(6, 10, 26, 0.78)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.13)', borderRadius: '18px', padding: '16px 20px', maxWidth: '235px', boxShadow: '0 16px 40px rgba(0,0,0,0.65)' }}>
             <strong style={{ color: '#38bdf8', display: 'block', fontSize: '0.85rem', marginBottom: '5px' }}>Plano Ecuatorial (Entrada)</strong>
             <p style={{ fontSize: '0.73rem', color: '#a1a1aa' }}>Disco de acreción donde convergen los cúbits antes de cruzar el horizonte.</p>
           </div>
           <div style={{ background: 'rgba(6, 10, 26, 0.78)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.13)', borderRadius: '18px', padding: '16px 20px', maxWidth: '235px', boxShadow: '0 16px 40px rgba(0,0,0,0.65)' }}>
             <strong style={{ color: '#4ade80', display: 'block', fontSize: '0.85rem', marginBottom: '5px' }}>Jets Polares (Salida)</strong>
             <p style={{ fontSize: '0.73rem', color: '#a1a1aa' }}>Expulsión relativista vertical. La información escapa ilesa de la paradoja.</p>
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
