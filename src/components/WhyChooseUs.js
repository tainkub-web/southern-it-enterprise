'use client';

import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Compass, Clipboard, Play, ShieldAlert, HeartHandshake, Zap, Award, MapPin, Eye, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      icon: Compass,
      title: t.whyUs.timeline.consult.title,
      desc: t.whyUs.timeline.consult.desc,
    },
    {
      icon: Clipboard,
      title: t.whyUs.timeline.design.title,
      desc: t.whyUs.timeline.design.desc,
    },
    {
      icon: Play,
      title: t.whyUs.timeline.deploy.title,
      desc: t.whyUs.timeline.deploy.desc,
    },
    {
      icon: ShieldAlert,
      title: t.whyUs.timeline.protect.title,
      desc: t.whyUs.timeline.protect.desc,
    },
    {
      icon: HeartHandshake,
      title: t.whyUs.timeline.support.title,
      desc: t.whyUs.timeline.support.desc,
    },
  ];

  const coreValues = [
    {
      icon: Zap,
      title: t.whyUs.values.fast.title,
      desc: t.whyUs.values.fast.desc,
    },
    {
      icon: Award,
      title: t.whyUs.values.standard.title,
      desc: t.whyUs.values.standard.desc,
    },
    {
      icon: MapPin,
      title: t.whyUs.values.regional.title,
      desc: t.whyUs.values.regional.desc,
    },
    {
      icon: Eye,
      title: t.whyUs.values.preventive.title,
      desc: t.whyUs.values.preventive.desc,
    },
    {
      icon: Star,
      title: t.whyUs.values.partnership.title,
      desc: t.whyUs.values.partnership.desc,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-navy-950 relative">
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-white/60 font-thai">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Timeline Interaction */}
        <div className="mb-24 relative">
          <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-10 text-center">
            {t.language === 'en' ? 'OPERATIONAL IMPLEMENTATION PIPELINE' : 'ขั้นตอนขั้นตอนการปฏิบัติงานเพื่อผลลัพธ์สูงสุด'}
          </h3>

          {/* Desktop Timeline horizontal line */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-1 timeline-line opacity-30 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {timelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Glowing Node Button */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isActive 
                      ? 'bg-accent-cyan border-accent-cyan text-navy-950 shadow-glow-cyan' 
                      : 'bg-navy-900 border-white/10 text-white/60 group-hover:border-accent-cyan group-hover:text-accent-cyan'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text Container */}
                  <div className="mt-6 max-w-xs">
                    <span className="text-xxs font-mono text-white/30 uppercase tracking-wider block mb-1">
                      STAGE 0{idx + 1}
                    </span>
                    <h4 className={`text-base font-bold transition-colors ${
                      isActive ? 'text-accent-cyan' : 'text-white group-hover:text-accent-cyan'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/50 font-thai leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values grid */}
        <div>
          <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-10 text-center">
            {t.language === 'en' ? 'OUR KEY VALUE PROPOSITIONS' : 'คุณค่าหลักและพันธกิจในการดูแลของเร'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="glass-panel hover:bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-white/50 font-thai leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
