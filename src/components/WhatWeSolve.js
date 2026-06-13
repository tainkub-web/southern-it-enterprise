'use client';

import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import { ShieldAlert, ServerCrash, Skull, DatabaseZap, FileWarning, HelpCircle, ArrowRight } from 'lucide-react';

export default function WhatWeSolve() {
  const { t } = useTranslation();

  const cardsData = [
    {
      key: 'downtime',
      icon: ServerCrash,
      problem: t.whatWeSolve.cards.downtime.problem,
      solution: t.whatWeSolve.cards.downtime.solution,
      impact: t.whatWeSolve.cards.downtime.impact,
    },
    {
      key: 'ransomware',
      icon: Skull,
      problem: t.whatWeSolve.cards.ransomware.problem,
      solution: t.whatWeSolve.cards.ransomware.solution,
      impact: t.whatWeSolve.cards.ransomware.impact,
    },
    {
      key: 'dataloss',
      icon: DatabaseZap,
      problem: t.whatWeSolve.cards.dataloss.problem,
      solution: t.whatWeSolve.cards.dataloss.solution,
      impact: t.whatWeSolve.cards.dataloss.impact,
    },
    {
      key: 'security',
      icon: ShieldAlert,
      problem: t.whatWeSolve.cards.security.problem,
      solution: t.whatWeSolve.cards.security.solution,
      impact: t.whatWeSolve.cards.security.impact,
    },
    {
      key: 'slowinfra',
      icon: FileWarning,
      problem: t.whatWeSolve.cards.slowinfra.problem,
      solution: t.whatWeSolve.cards.slowinfra.solution,
      impact: t.whatWeSolve.cards.slowinfra.impact,
    },
    {
      key: 'drfail',
      icon: HelpCircle,
      problem: t.whatWeSolve.cards.drfail.problem,
      solution: t.whatWeSolve.cards.drfail.solution,
      impact: t.whatWeSolve.cards.drfail.impact,
    },
  ];

  return (
    <section id="what-we-solve" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.whatWeSolve.title}
          </h2>
          <p className="text-lg text-white/60 font-thai">
            {t.whatWeSolve.subtitle}
          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-8 relative flex flex-col gap-6 group overflow-hidden border border-white/5"
              >
                {/* Neon hover border effect */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500/20 to-accent-cyan/20 group-hover:from-accent-cyan group-hover:to-accent-blue transition-all duration-300"></div>

                {/* Problem Section */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-950/30 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/20 group-hover:text-accent-cyan transition-colors shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xxs font-mono text-red-400 group-hover:text-accent-cyan transition-colors uppercase tracking-wider">
                      PROBLEM
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {card.problem}
                    </h3>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="flex items-center gap-2 text-white/30 my-1 group-hover:text-accent-cyan transition-colors">
                  <span className="text-xs font-mono">MITIGATION PATH</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>

                {/* Solution & Impact */}
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-xxs font-mono text-emerald-400 uppercase tracking-wider">
                      RESOLUTION
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {card.solution}
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-1">
                    <span className="text-xxs font-mono text-accent-cyan uppercase tracking-wider">
                      BUSINESS IMPACT
                    </span>
                    <p className="text-xs text-white/60 font-thai mt-1 leading-relaxed">
                      {card.impact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
