'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { ShieldCheck, HardDrive, Cpu, Radio, Network } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 60;
    const connectionDistance = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden bg-navy-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-mesh opacity-70 z-0"></div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 z-10 pointer-events-none" />
      <div className="ambient-glow-1 top-1/4 left-1/4 z-0"></div>
      <div className="ambient-glow-2 bottom-1/4 right-1/4 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20 w-full mt-8">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.hero.tag}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.hero.title.split('.').map((part, index, arr) => (
              <React.Fragment key={index}>
                {part.trim() && (
                  <span className={index === 2 ? 'text-accent-cyan text-glow-cyan' : ''}>
                    {part.trim()}{index < arr.length - 1 ? '.' : ''}
                  </span>
                )}
                {index < arr.length - 1 && <br className="hidden md:inline" />}
              </React.Fragment>
            ))}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-navy-950 hover:opacity-95 text-base font-bold rounded-xl text-center shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t.hero.ctaConsult}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-base font-bold rounded-xl text-center transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t.hero.ctaSurvey}
            </a>
          </div>

          {/* Metrics tags */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <ShieldCheck className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <p className="text-xs text-white/50">{t.hero.metrics.sla.split(' ')[2] + ' ' + (t.hero.metrics.sla.split(' ')[3] || '')}</p>
                <p className="text-sm font-bold text-white">{t.hero.metrics.sla.split(' ')[0] + ' ' + t.hero.metrics.sla.split(' ')[1]}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <Cpu className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <p className="text-xs text-white/50">{t.hero.metrics.active.split(' ')[2] || 'Operation'}</p>
                <p className="text-sm font-bold text-white">{t.hero.metrics.active.split(' ')[0] + ' ' + (t.hero.metrics.active.split(' ')[1] || '')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <Network className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <p className="text-xs text-white/50">{t.hero.metrics.region.split(' ').slice(1).join(' ')}</p>
                <p className="text-sm font-bold text-white">{t.hero.metrics.region.split(' ')[0]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Interactive Dashboard Visualization */}
        <div className="lg:col-span-5 relative">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 shadow-glow-cyan shadow-glow-cyan/5 w-full relative overflow-hidden">
            {/* Glossy lighting effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl"></div>

            {/* Dashboard Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse"></span>
                <span className="text-xs font-mono text-white/50 tracking-wider">SYSTEM_HEALTH_MONITOR</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/15 text-accent-cyan">ACTIVE</span>
            </div>

            {/* Servers and Racks UI Representation */}
            <div className="flex flex-col gap-4">
              {[
                { name: 'Core Firewall', ip: '10.0.1.1', load: '14%', status: 'Secure', color: 'text-accent-cyan' },
                { name: 'Primary Hypervisor', ip: '10.0.10.5', load: '68%', status: '99.9% Up', color: 'text-green-400' },
                { name: 'Immutable Storage', ip: '10.2.1.200', load: '42%', status: 'Encrypted', color: 'text-accent-cyan' },
                { name: 'Cloud Recovery DR', ip: '192.168.100.2', load: '2%', status: 'Synced', color: 'text-accent-cyan' },
              ].map((server, idx) => (
                <div key={idx} className="bg-navy-950/60 border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-white/5 flex items-center justify-center border border-white/10">
                      <HardDrive className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{server.name}</p>
                      <p className="text-xxs font-mono text-white/40">{server.ip}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-bold ${server.color}`}>{server.status}</p>
                    <p className="text-xxs font-mono text-white/40">Load: {server.load}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual telemetry network stats graph simulation */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xxs font-mono text-white/40">BANDWIDTH TELEMETRY</span>
                <span className="text-xxs font-mono text-accent-cyan">342.8 Mb/s</span>
              </div>
              <svg className="w-full h-16" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M0,15 Q10,12 20,8 T40,12 T60,5 T80,14 T100,7 L100,20 L0,20 Z"
                  fill="url(#graph-grad)"
                  opacity="0.2"
                />
                <path
                  d="M0,15 Q10,12 20,8 T40,12 T60,5 T80,14 T100,7"
                  fill="none"
                  stroke="#00e5ff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="graph-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
