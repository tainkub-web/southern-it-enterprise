'use client';

import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Award, Layers, Monitor, Wifi, ShieldAlert, Cpu, Hammer, HeartHandshake, CheckCircle } from 'lucide-react';

export default function PartnerSolutions() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const partnersCards = [
    { icon: Monitor, title: t.partner.cards.software.title, desc: t.partner.cards.software.desc },
    { icon: Wifi, title: t.partner.cards.wifi.title, desc: t.partner.cards.wifi.desc },
    { icon: Cpu, title: t.partner.cards.server.title, desc: t.partner.cards.server.desc },
    { icon: Layers, title: t.partner.cards.infra.title, desc: t.partner.cards.infra.desc },
    { icon: ShieldAlert, title: t.partner.cards.security.title, desc: t.partner.cards.security.desc },
    { icon: Hammer, title: t.partner.cards.sysimpl.title, desc: t.partner.cards.sysimpl.desc },
    { icon: HeartHandshake, title: t.partner.cards.support.title, desc: t.partner.cards.support.desc },
  ];

  // Steps in the cooperative workflow diagram
  const flowSteps = [
    {
      title: t.language === 'en' ? '1. Southern Clients' : '1. ลูกค้าในภาคใต้',
      desc: t.language === 'en' ? 'Hospitals, Factories, and Businesses request custom IT architectures.' : 'โรงพยาบาล โรงงาน และหน่วยงานต่างๆ ยื่นความประสงค์ระบบไอที',
      color: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30'
    },
    {
      title: t.language === 'en' ? '2. Regional Solution Partner' : '2. ทีมงานภาคใต้ (เรา)',
      desc: t.language === 'en' ? 'We audit, survey, and design the solution. We manage regional implementation.' : 'เราดำเนินการสำรวจ วิเคราะห์ ออกแบบ และนำทีมติดตั้งหน้างานทั้งหมด',
      color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/30'
    },
    {
      title: t.language === 'en' ? '3. NebulaSoft HQ' : '3. สำนักงานใหญ่ NebulaSoft',
      desc: t.language === 'en' ? 'Purchasing, hardware procurement, and formal invoicing are processed.' : 'จัดซื้อ ลิขสิทธิ์ฮาร์ดแวร์/ซอฟต์แวร์ และออกใบกำกับภาษีโดยตรง',
      color: 'text-purple-400 bg-purple-950/30 border-purple-500/20'
    }
  ];

  return (
    <section id="partner" className="py-24 bg-navy-900 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            {/* Authorized badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>{t.partner.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {t.partner.title}
            </h2>
            <p className="text-lg text-white/60 font-thai">
              {t.partner.subtitle}
            </p>
          </div>
        </div>

        {/* Cooperative Architecture Diagram (Dashboard Widget style) */}
        <div className="glass-panel rounded-2xl p-8 border border-white/5 mb-16">
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6 text-center">
            {t.language === 'en' ? 'INTEGRATED PROCUREMENT & DEPLOYMENT ARCHITECTURE' : 'สถาปัตยกรรมการจัดซื้อและการติดตั้งระบบ'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Visual connector lines for desktop */}
            <div className="hidden lg:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-blue to-purple-500 opacity-20"></div>

            {flowSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-xl border transition-all cursor-pointer relative group ${
                  activeStep === idx 
                    ? 'bg-white/5 border-white/20 shadow-glow-cyan shadow-glow-cyan/5' 
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm mb-4 ${step.color}`}>
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-white/50 font-thai leading-relaxed">{step.desc}</p>
                
                {/* Active selection dot */}
                {activeStep === idx && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs font-mono text-accent-cyan/90 font-thai">
              {t.partner.procurementNote}
            </p>
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partnersCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-navy-950/60 hover:bg-navy-950 border border-white/5 hover:border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-white/50 font-thai leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
