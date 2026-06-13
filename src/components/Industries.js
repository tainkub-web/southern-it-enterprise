'use client';

import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import { HeartPulse, Factory, Building2, GraduationCap, Building, ShieldCheck } from 'lucide-react';

export default function Industries() {
  const { t } = useTranslation();

  const industryData = [
    {
      icon: HeartPulse,
      title: t.industries.healthcare.title,
      desc: t.industries.healthcare.desc,
      compliance: "PDPA / HIPAA Compliant",
    },
    {
      icon: Factory,
      title: t.industries.manufacturing.title,
      desc: t.industries.manufacturing.desc,
      compliance: "NIST / OT Security Shield",
    },
    {
      icon: Building2,
      title: t.industries.enterprise.title,
      desc: t.industries.enterprise.desc,
      compliance: "ISO 27001 Readiness",
    },
    {
      icon: GraduationCap,
      title: t.industries.education.title,
      desc: t.industries.education.desc,
      compliance: "Multi-Gigabit Campus LAN",
    },
    {
      icon: Building,
      title: t.industries.government.title,
      desc: t.industries.government.desc,
      compliance: "Gov Data Center Audited",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-navy-900 relative">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.industries.title}
          </h2>
          <p className="text-lg text-white/60 font-thai">
            {t.industries.subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryData.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-8 border border-white/5 relative flex flex-col justify-between group overflow-hidden"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl group-hover:bg-accent-cyan/15 transition-all"></div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/70 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors mb-6 border border-white/10 group-hover:border-accent-cyan/20 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-white/60 font-thai leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                {/* Compliance Badge */}
                <div className="border-t border-white/5 pt-4 mt-auto flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors">
                    {ind.compliance}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
