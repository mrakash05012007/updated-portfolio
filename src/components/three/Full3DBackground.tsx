'use client';

import { useRef, useEffect, useState } from 'react';

export default function Full3DBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse & Scroll interaction
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const scroll = {
      y: 0,
      targetY: 0,
    };

    interface Shockwave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }
    const shockwaves: Shockwave[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / width - 0.5) * 2; // -1 to 1
      mouse.targetY = (e.clientY / height - 0.5) * 2;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scroll.targetY = window.scrollY / maxScroll; // 0 to 1
    };

    const handleClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 12,
        maxRadius: Math.max(width, height) * 0.75,
        alpha: 0.9,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // 3D Nodes spanning across both width, height, and deep scrolling space
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

    const NODE_COUNT = 90;
    const nodes: Node3D[] = [];

    // Distribute nodes across a tall cylinder / lattice so scrolling travels through new clusters
    for (let i = 0; i < NODE_COUNT; i++) {
      const progress = i / NODE_COUNT; // 0 (top) to 1 (bottom)
      const theta = Math.random() * Math.PI * 2;
      const r = 260 + Math.random() * 520;

      // Vertical spread from -400 (hero) down to +1400 (contact/footer)
      const y = -350 + progress * 1650 + (Math.random() - 0.5) * 220;
      const x = r * Math.cos(theta);
      const z = (Math.random() - 0.5) * 600;

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        size: 2.2 + Math.random() * 3.5,
        isCyan: i % 2 === 0,
        orbitSpeed: (Math.random() - 0.5) * 0.003,
        orbitRadius: 10 + Math.random() * 20,
        orbitAngle: theta,
      });
    }

    // Hero Section Central Nexus Core
    nodes.push({
      x: 0,
      y: -50,
      z: 0,
      baseX: 0,
      baseY: -50,
      baseZ: 0,
      pulsePhase: 0,
      pulseSpeed: 0.04,
      size: 7.5,
      isCyan: true,
      orbitSpeed: 0,
      orbitRadius: 0,
      orbitAngle: 0,
    });

    // Deep space stars / cyber dust
    interface StarParticle {
      x: number;
      y: number;
      z: number;
      size: number;
      alpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }

    const STAR_COUNT = 130;
    const stars: StarParticle[] = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * 2200,
      y: -500 + Math.random() * 2200,
      z: -450 + Math.random() * 900,
      size: 0.8 + Math.random() * 2.0,
      alpha: 0.2 + Math.random() * 0.55,
      twinkleSpeed: 0.02 + Math.random() * 0.04,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    // Calculate synapse connection pairs (nearby nodes in 3D)
    const MAX_SYNAPSE_DIST = 210;
    const pairs: [number, number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dz = nodes[i].baseZ - nodes[j].baseZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < MAX_SYNAPSE_DIST) {
          pairs.push([i, j, dist]);
        }
      }
    }

    // Dynamic data packets traveling through the active synapse web
    const PACKET_COUNT = 22;
    const packets = Array.from({ length: PACKET_COUNT }, (_, i) => {
      const pairIndex = (i * 7) % Math.max(pairs.length, 1);
      return {
        pairIndex,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        color: i % 2 === 0 ? '#22D3EE' : '#60A5FA',
      };
    });

    let baseAngleY = 0;
    let baseAngleX = 0.08;

    const render = () => {
      if (width === 0 || height === 0) return;

      // Deep space base fill
      ctx.fillStyle = '#080E1C';
      ctx.fillRect(0, 0, width, height);

      // Smooth damping for mouse and scroll
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;
      scroll.y += (scroll.targetY - scroll.y) * 0.06;

      // Camera position moves vertically as the user scrolls
      // Scroll moves camera down the Y axis from 0 to ~1400px
      const cameraY = scroll.y * 1350;

      baseAngleY += 0.002;
      const angleY = baseAngleY + mouse.x * 0.45 + scroll.y * Math.PI * 0.6;
      const angleX = baseAngleX + mouse.y * 0.3;
      const angleZ = mouse.x * -0.06;

      const cx = width / 2;
      const cy = height / 2;
      const fov = 520;

      // Dynamic ambient lighting gradient centered around current perspective
      const lightX = cx + mouse.x * 140;
      const lightY = cy + mouse.y * 90;
      const bgGrad = ctx.createRadialGradient(
        lightX,
        lightY,
        50,
        lightX,
        lightY,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(59, 130, 246, 0.18)');
      bgGrad.addColorStop(0.35, 'rgba(34, 211, 238, 0.07)');
      bgGrad.addColorStop(0.7, 'rgba(11, 17, 32, 0.55)');
      bgGrad.addColorStop(1, 'rgba(8, 14, 28, 0.96)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Cyan ambient aura accent
      const auraGrad = ctx.createRadialGradient(
        width * 0.8,
        height * 0.75,
        10,
        width * 0.8,
        height * 0.75,
        width * 0.5
      );
      auraGrad.addColorStop(0, 'rgba(34, 211, 238, 0.06)');
      auraGrad.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      // Project Stars
      for (let s = 0; s < stars.length; s++) {
        const star = stars[s];
        const relY = star.y - cameraY * 0.5; // Star parallax depth
        let rx = star.x * cosY - star.z * sinY;
        let rz = star.z * cosY + star.x * sinY;
        let ry = relY * cosX - rz * sinX;
        rz = rz * cosX + relY * sinX;

        const depth = fov + rz + 320;
        if (depth > 60) {
          const scale = fov / depth;
          const sx = cx + rx * scale;
          const sy = cy + ry * scale;

          if (sx >= -40 && sx <= width + 40 && sy >= -40 && sy <= height + 40) {
            const twinkle = Math.sin(Date.now() * star.twinkleSpeed * 0.05 + star.twinklePhase);
            const a = Math.max(0.08, star.alpha * (0.7 + twinkle * 0.3));
            ctx.beginPath();
            ctx.arc(sx, sy, star.size * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(186, 230, 253, ${a * 0.65})`;
            ctx.fill();
          }
        }
      }

      // Project Nodes relative to camera scroll
      const projected = nodes.map((n) => {
        // Orbit motion
        if (n.orbitSpeed !== 0) {
          n.orbitAngle += n.orbitSpeed;
          n.x = n.baseX + Math.sin(n.orbitAngle) * n.orbitRadius;
          n.y = n.baseY + Math.cos(n.orbitAngle) * (n.orbitRadius * 0.7);
        }

        const relY = n.y - cameraY;

        let rx = n.x * cosY - n.z * sinY;
        let rz = n.z * cosY + n.x * sinY;

        let ry = relY * cosX - rz * sinX;
        rz = rz * cosX + relY * sinX;

        let rxFinal = rx * cosZ - ry * sinZ;
        let ryFinal = ry * cosZ + rx * sinZ;

        const depth = fov + rz + 320;
        const scale = fov / Math.max(depth, 80);

        return {
          sx: cx + rxFinal * scale,
          sy: cy + ryFinal * scale,
          scale: Math.max(0.12, scale),
          z: rz,
          node: n,
        };
      });

      // Draw Synapses
      for (let p = 0; p < pairs.length; p++) {
        const [i, j, dist] = pairs[p];
        const a = projected[i];
        const b = projected[j];

        if (!a || !b) continue;

        // Skip if outside viewport bounds
        if (
          (a.sy < -100 && b.sy < -100) ||
          (a.sy > height + 100 && b.sy > height + 100) ||
          (a.sx < -100 && b.sx < -100) ||
          (a.sx > width + 100 && b.sx > width + 100)
        ) {
          continue;
        }

        const factor = 1 - dist / MAX_SYNAPSE_DIST;
        const avgScale = (a.scale + b.scale) * 0.5;
        const alpha = factor * 0.42 * Math.min(avgScale * 1.3, 1);

        if (alpha > 0.02) {
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);

          const grad = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy);
          if (a.node.isCyan || b.node.isCyan) {
            grad.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
            grad.addColorStop(1, `rgba(59, 130, 246, ${alpha * 0.75})`);
          } else {
            grad.addColorStop(0, `rgba(59, 130, 246, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(96, 165, 250, ${alpha * 0.55})`);
          }

          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.max(0.6, 1.2 * avgScale);
          ctx.stroke();
        }
      }

      // Draw Data Packets along Synapses
      for (let k = 0; k < packets.length; k++) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.pairIndex = (pkt.pairIndex + 11) % pairs.length;
        }

        const [i, j] = pairs[pkt.pairIndex] || [0, 1];
        const p1 = projected[i];
        const p2 = projected[j];

        if (p1 && p2) {
          const px = p1.sx + (p2.sx - p1.sx) * pkt.progress;
          const py = p1.sy + (p2.sy - p1.sy) * pkt.progress;

          if (px >= 0 && px <= width && py >= 0 && py <= height) {
            const pScale = (p1.scale + p2.scale) * 0.5;
            const pGlow = ctx.createRadialGradient(px, py, 0, px, py, 6 * pScale);
            pGlow.addColorStop(0, '#FFFFFF');
            pGlow.addColorStop(0.3, pkt.color);
            pGlow.addColorStop(1, 'rgba(34, 211, 238, 0)');

            ctx.beginPath();
            ctx.arc(px, py, 6 * pScale, 0, Math.PI * 2);
            ctx.fillStyle = pGlow;
            ctx.fill();
          }
        }
      }

      // Draw Click Shockwaves
      for (let w = shockwaves.length - 1; w >= 0; w--) {
        const sw = shockwaves[w];
        sw.radius += 14;
        sw.alpha *= 0.96;

        if (sw.radius > sw.maxRadius || sw.alpha < 0.01) {
          shockwaves.splice(w, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${sw.alpha * 0.45})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw Nodes with Multi-layer Glow
      projected.forEach(({ sx, sy, scale, node }) => {
        if (sx < -60 || sx > width + 60 || sy < -60 || sy > height + 60) return;

        const pulse = Math.sin(Date.now() * node.pulseSpeed * 0.04 + node.pulsePhase);
        const r = Math.max(1.8, node.size * scale * (1 + pulse * 0.22));
        const alpha = Math.min(1, 0.45 + scale * 0.6);
        const color = node.isCyan ? '34, 211, 238' : '59, 130, 246';

        // Outer glow
        const glowRad = r * 3.6;
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowRad);
        glow.addColorStop(0, `rgba(${color}, ${alpha * 0.52})`);
        glow.addColorStop(0.5, `rgba(${color}, ${alpha * 0.16})`);
        glow.addColorStop(1, `rgba(${color}, 0)`);

        ctx.beginPath();
        ctx.arc(sx, sy, glowRad, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.shadowColor = `rgba(${color}, 0.85)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Specular center
        if (scale > 0.75) {
          ctx.beginPath();
          ctx.arc(sx - r * 0.25, sy - r * 0.25, r * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, [mounted]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
