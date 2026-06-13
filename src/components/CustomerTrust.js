'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Quote, Briefcase, ShieldCheck, Activity, Award } from 'lucide-react';

export default function CustomerTrust() {
  const { t } = useTranslation();
  const [projectCount, setProjectCount] = useState(0);
  const [systemCount, setSystemCount] = useState(0);

  // Simple counting simulation
  useEffect(() => {
    const projInterval = setInterval(() => {
      setProjectCount((prev) => (prev < 150 ? prev + 3 : 150));
    }, 20);

    const sysInterval = setInterval(() => {
      setSystemCount((prev) => (prev < 4800 ? prev + 120 : 4,800));
    }, 20);

    return () => {
      clearInterval(projInterval);
      clearInterval(sysInterval);
    };
  }, []);

  const stats = [
    {
      icon: Briefcase,
      value: projectCount === 150 ? "150+" : `${projectCount}`,
      label: t.trust.stats.projects,
    },
    {
      icon: ShieldCheck,
      value: systemCount === 4800 ? "4,800+" : `${systemCount}`,
      label: t.trust.stats.protected,
    },
    {
      icon: Activity,
      value: "99.99%",
      label: t.trust.stats.availability,
    },
    {
      icon: Award,
      value: "98.5%",
      label: t.trust.stats.satisfaction,
    },
  ];

  return (
    <section id="trust" className="py-24 bg-navy-950 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-navy-900 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.trust.title}
          </h2>
          <p className="text-lg text-white/60 font-thai">
            {t.trust.subtitle}
          </p>
        </div>

        {/* Animated Counters Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-panel border border-white/5 rounded-2xl p-6 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-accent-cyan/25 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-accent-cyan transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-semibold text-white/50 font-thai mt-2">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.trust.testimonials.map((test, idx) => (
            <div
              key={idx}
              className="glass-panel border border-white/5 rounded-2xl p-8 md:p-10 relative flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute -left-4 -top-4 text-white/5 pointer-events-none">
                <Quote className="w-32 h-32 fill-current" />
              </div>

              <div className="relative z-10 mb-8">
                <p className="text-base md:text-lg text-white/80 font-thai italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="relative z-10 border-t border-white/5 pt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">
                    {test.author}
                  </p>
                  <p className="text-xs text-accent-cyan font-thai mt-0.5">
                    {test.company}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
