'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Shield, Menu, X, Globe, Phone } from 'lucide-react';

export default function Header() {
  const { language, toggleLanguage, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.whatWeSolve, href: '#what-we-solve' },
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.partner, href: '#partner' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.industries, href: '#industries' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center shadow-glow-cyan">
            <Shield className="w-5 h-5 text-navy-950 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-accent-cyan transition-colors">
              SOUTHERN ENTERPRISE
            </span>
            <span className="font-thai text-xs text-white/50 tracking-wider">
              {language === 'th' ? 'พันธมิตรไอทีและไซเบอร์' : 'IT & CYBERSECURITY PARTNER'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-accent-cyan transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-accent-cyan/50 hover:bg-white/5 transition-all text-xs font-semibold"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-accent-cyan" />
            <span>{language === 'th' ? 'EN' : 'TH'}</span>
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-accent-cyan to-accent-blue hover:opacity-90 text-navy-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-glow-cyan-hover"
          >
            <Phone className="w-4 h-4" />
            <span>{t.nav.requestConsult}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 text-xs font-semibold"
          >
            <Globe className="w-3.5 h-3.5 text-accent-cyan" />
            <span>{language === 'th' ? 'EN' : 'TH'}</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-accent-cyan transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-b border-white/10 py-6 px-6 shadow-2xl flex flex-col gap-4 backdrop-blur-lg">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/80 hover:text-accent-cyan py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-cyan to-accent-blue text-navy-950 font-bold py-3 rounded-lg text-sm transition-all mt-2"
          >
            <Phone className="w-4 h-4" />
            <span>{t.nav.requestConsult}</span>
          </a>
        </div>
      )}
    </header>
  );
}
