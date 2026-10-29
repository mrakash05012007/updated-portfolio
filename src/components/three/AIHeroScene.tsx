'use client';

import { useRef, useEffect, useState } from 'react';

// CSS-based fallback for when WebGL/Canvas is rendering
function FallbackScene() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at center, #111D35 0%, #070D1A 100%)',
      }}
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `${i % 2 === 0 ? 1.5 : 1}px solid ${i % 2 === 0 ? 'rgba(34, 211, 238, 0.25)' : 'rgba(59, 130, 246, 0.2)'}`,
            width: `${140 + i * 70}px`,
            height: `${140 + i * 70}px`,
            animation: `pulse-slow ${2.5 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <div
        style={{
          width: '76px',
          height: '76px',
          background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: '0 0 35px rgba(34, 211, 238, 0.4)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        🧠
      </div>
    </div>
  );
}

// 3D Neural Network Canvas Visualization
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
      mouseRef.current.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
    };
    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // 3D Neural Nodes in spherical space
    interface Node3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      pulsePhase: number;
      pulseSpeed: number;
      size: number;
      isCyan: boolean;
      orbitSpeed: number;
      orbitRadius: number;
      orbitAngle: number;
    }

    const NODE_COUNT = 34;
    const nodes: Node3D[] = Array.from({ length: NODE_COUNT }, (_, i) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 90 + Math.random() * 85;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      return {
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.03,
        size: 3 + Math.random() * 3.5,
        isCyan: i % 2 === 0,
        orbitSpeed: (Math.random() - 0.5) * 0.006,
        orbitRadius: r,
        orbitAngle: theta,
      };
    });

    // Central primary hub
    nodes.push({
      x: 0,
      y: 0,
      z: 0,
      baseX: 0,
      baseY: 0,
      baseZ: 0,
      pulsePhase: 0,
      pulseSpeed: 0.05,
      size: 8,
      isCyan: true,
      orbitSpeed: 0,
      orbitRadius: 0,
      orbitAngle: 0,
    });

    let angleY = 0;
    let angleX = 0.2;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w === 0 || h === 0) return;

      // Deep Midnight Navy background with radial aura
      ctx.fillStyle = '#080E1C';
      ctx.fillRect(0, 0, w, h);

      // Subtle ambient glow centered
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * 0.65);
      bgGrad.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      bgGrad.addColorStop(0.5, 'rgba(34, 211, 238, 0.05)');
      bgGrad.addColorStop(1, 'rgba(8, 14, 28, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      angleY += 0.005;
      const totalAngleY = angleY + mouseRef.current.x * 0.5;
      const totalAngleX = angleX + mouseRef.current.y * 0.5;

      const cx = w / 2;
      const cy = h / 2;
      const fov = 380;

      // Project 3D -> 2D
      const projected = nodes.map((n) => {
        // Subtle orbital floating
        if (n.orbitSpeed !== 0) {
          n.orbitAngle += n.orbitSpeed;
          n.x = n.baseX + Math.sin(n.orbitAngle) * 8;
          n.y = n.baseY + Math.cos(n.orbitAngle) * 8;
        }

        // Y rotation
        const cosY = Math.cos(totalAngleY);
        const sinY = Math.sin(totalAngleY);
        let rx = n.x * cosY - n.z * sinY;
        let rz = n.x * sinY + n.z * cosY;

        // X rotation
        const cosX = Math.cos(totalAngleX);
        const sinX = Math.sin(totalAngleX);
        let ry = n.y * cosX - rz * sinX;
        rz = n.y * sinX + rz * cosX;

        const scale = fov / (fov + rz + 180);
        return {
          sx: cx + rx * scale,
          sy: cy + ry * scale,
          scale: Math.max(0.2, scale),
          z: rz,
          node: n,
        };
      });

      // Sort by Z for proper depth rendering
      projected.sort((a, b) => a.z - b.z);

      const maxDist = 135;

      // Draw Neural Synapse Connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];

          const dx = a.node.x - b.node.x;
          const dy = a.node.y - b.node.y;
          const dz = a.node.z - b.node.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDist) {
            const factor = (1 - dist / maxDist);
            const alpha = factor * 0.45 * Math.min(a.scale, b.scale);

            // Gradient line between connected nodes
            const grad = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy);
            if (a.node.isCyan || b.node.isCyan) {
              grad.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
              grad.addColorStop(1, `rgba(59, 130, 246, ${alpha * 0.8})`);
            } else {
              grad.addColorStop(0, `rgba(59, 130, 246, ${alpha})`);
              grad.addColorStop(1, `rgba(59, 130, 246, ${alpha * 0.4})`);
            }

            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1 * Math.min(a.scale, b.scale);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes with Multi-Layer Glow
      projected.forEach(({ sx, sy, scale, node }) => {
        const pulse = Math.sin(Date.now() * node.pulseSpeed * 0.04 + node.pulsePhase);
        const r = Math.max(1.5, node.size * scale * (1 + pulse * 0.25));
        const alpha = Math.min(1, 0.4 + scale * 0.6);

        const primaryColor = node.isCyan ? '34, 211, 238' : '59, 130, 246';

        // Outer glow
        const glowRadius = r * 3.5;
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowRadius);
        glow.addColorStop(0, `rgba(${primaryColor}, ${alpha * 0.45})`);
        glow.addColorStop(0.6, `rgba(${primaryColor}, ${alpha * 0.15})`);
        glow.addColorStop(1, `rgba(${primaryColor}, 0)`);

        ctx.beginPath();
        ctx.arc(sx, sy, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${alpha})`;
        ctx.shadowColor = `rgba(${primaryColor}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Bright white center specular highlight
        if (scale > 0.8) {
          ctx.beginPath();
          ctx.arc(sx - r * 0.25, sy - r * 0.25, r * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
          ctx.fill();
        }
      });

      // Luminous Cyan / Electric Blue data pulses along active connections
      const t = Date.now() * 0.0015;
      for (let k = 0; k < 6; k++) {
        const idx1 = (k * 5) % projected.length;
        const idx2 = (k * 5 + 3) % projected.length;
        const p1 = projected[idx1];
        const p2 = projected[idx2];

        const progress = (t * 0.8 + k * 0.2) % 1;
        const px = p1.sx + (p2.sx - p1.sx) * progress;
        const py = p1.sy + (p2.sy - p1.sy) * progress;

        const pulseGlow = ctx.createRadialGradient(px, py, 0, px, py, 6);
        pulseGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        pulseGlow.addColorStop(0.4, 'rgba(34, 211, 238, 0.8)');
        pulseGlow.addColorStop(1, 'rgba(34, 211, 238, 0)');

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = pulseGlow;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', cursor: 'grab' }}
      aria-label="Interactive 3D AI neural network visualization"
    />
  );
}

export default function AIHeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <FallbackScene />;

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <NeuralCanvas />
    </div>
  );
}
