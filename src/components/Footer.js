'use client';

import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Shield, ChevronUp } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12 relative overflow-hidden">
      {/* Scroll to Top Circle */}
      <div className="absolute right-8 top-0 transform -translate-y-1/2 z-10">
        <button
          onClick={handleScrollTop}
          className="w-10 h-10 rounded-full bg-navy-900 hover:bg-accent-cyan border border-white/10 hover:border-accent-cyan flex items-center justify-center text-white hover:text-navy-950 transition-all shadow-glow-cyan shadow-glow-cyan/5"
          title="Scroll to Top"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
            <Shield className="w-4 h-4 text-accent-cyan" />
          </div>
          <div>
            <p className="text-xs text-white/50 font-sans tracking-wide">
              {t.footer.rights}
            </p>
          </div>
        </div>

        {/* Disclaimer / Invoicing Warning */}
        <div className="max-w-md text-center md:text-right">
          <p className="text-[10px] md:text-xxs font-mono text-white/40 leading-relaxed font-thai">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
}
