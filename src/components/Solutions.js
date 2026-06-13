'use client';

import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Cpu, Database, Server, ShieldCheck, Network, Wrench, Check } from 'lucide-react';

export default function Solutions() {
  const { t } = useTranslation();

  const solutionBlocks = [
    {
      icon: Cpu,
      title: t.solutions.categories.sysint.title,
      desc: t.solutions.categories.sysint.desc,
      items: t.solutions.categories.sysint.items,
      color: 'from-accent-cyan to-accent-blue',
    },
    {
      icon: Database,
      title: t.solutions.categories.backup.title,
      desc: t.solutions.categories.backup.desc,
      items: t.solutions.categories.backup.items,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Server,
      title: t.solutions.categories.compute.title,
      desc: t.solutions.categories.compute.desc,
      items: t.solutions.categories.compute.items,
      color: 'from-indigo-500 to-accent-blue',
    },
    {
      icon: ShieldCheck,
      title: t.solutions.categories.security.title,
      desc: t.solutions.categories.security.desc,
      items: t.solutions.categories.security.items,
      color: 'from-accent-cyan to-blue-500',
    },
    {
      icon: Network,
      title: t.solutions.categories.network.title,
      desc: t.solutions.categories.network.desc,
      items: t.solutions.categories.network.items,
      color: 'from-blue-600 to-accent-cyan',
    },
    {
      icon: Wrench,
      title: t.solutions.categories.ma.title,
      desc: t.solutions.categories.ma.desc,
      items: t.solutions.categories.ma.items,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-navy-950 relative">
      {/* Background ambient radial lights */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-lg text-white/60 font-thai">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionBlocks.map((block, index) => {
            const Icon = block.icon;
            // Span-2 for the last one if total is odd, to keep a nice layout
            const isLast = index === solutionBlocks.length - 1;
            return (
              <div
                key={index}
                className={`glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden group ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background light glow on hover */}
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-accent-cyan/10 transition-all duration-300"></div>

                <div>
                  {/* Icon Header */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center text-navy-950 shadow-glow-cyan shadow-glow-cyan/10 mb-6 shrink-0`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {block.title}
                  </h3>
                  <p className="text-sm text-white/60 font-thai leading-relaxed mb-6">
                    {block.desc}
                  </p>
                </div>

                {/* Sub-items Checklist */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <ul className="flex flex-col gap-3">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20 shrink-0">
                          <Check className="w-3.5 h-3.5 text-accent-cyan" />
                        </div>
                        <span className="text-sm font-medium text-white/80 font-thai">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
