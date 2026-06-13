'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeSolve from '../components/WhatWeSolve';
import Solutions from '../components/Solutions';
import PartnerSolutions from '../components/PartnerSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import CustomerTrust from '../components/CustomerTrust';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white overflow-hidden selection:bg-accent-cyan selection:text-navy-950">
      {/* Background Mesh Overlay */}
      <div className="absolute inset-0 bg-grid-mesh opacity-30 z-0 pointer-events-none"></div>

      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <WhatWeSolve />
        <Solutions />
        <PartnerSolutions />
        <WhyChooseUs />
        <Industries />
        <CustomerTrust />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
