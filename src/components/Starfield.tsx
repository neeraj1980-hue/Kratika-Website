"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  pulsing: boolean;
  pulseSpeed: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 3800);
    const stars: Star[] = Array.from({ length: Math.min(starCount, 300) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      pulsing: Math.random() > 0.4,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    // Meteors
    const meteors: Meteor[] = [];
    const spawnMeteor = () => {
      if (meteors.length < 3 && Math.random() < 0.3) {
        meteors.push({
          x: Math.random() * width + 200,
          y: Math.random() * (height * 0.5),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 6 + 7,
          opacity: 1,
          angle: (Math.PI / 4) * (1 + (Math.random() * 0.2 - 0.1)),
        });
      }
    };
    const meteorInterval = setInterval(spawnMeteor, 3000);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle parallax offset
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      // Draw Stars
      for (const star of stars) {
        if (star.pulsing) {
          star.opacity += star.pulseSpeed;
          if (star.opacity > 1 || star.opacity < 0.2) {
            star.pulseSpeed = -star.pulseSpeed;
          }
        }

        ctx.beginPath();
        ctx.arc(
          (star.x + offsetX + width) % width,
          (star.y + offsetY + height) % height,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(224, 242, 254, ${Math.max(0, Math.min(1, star.opacity))})`;
        ctx.shadowBlur = star.size > 1.2 ? 6 : 0;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
      }

      // Draw Meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x -= m.speed * Math.cos(m.angle);
        m.y += m.speed * Math.sin(m.angle);
        m.opacity -= 0.012;

        if (m.opacity <= 0 || m.x < -100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x + m.length * Math.cos(m.angle);
        const tailY = m.y - m.length * Math.sin(m.angle);

        const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        gradient.addColorStop(0.3, `rgba(56, 189, 248, ${m.opacity * 0.8})`);
        gradient.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(meteorInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
