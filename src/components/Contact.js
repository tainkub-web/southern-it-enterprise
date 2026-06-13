'use client';

import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { MapPin, Phone, Mail, Clock, Calendar, Check, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    industry: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const servicesOptions = [
    t.language === 'en' ? 'Cybersecurity Audit' : 'ตรวจประเมินไซเบอร์ซีคิวริตี้',
    t.language === 'en' ? 'Disaster Recovery (DR)' : 'ระบบกู้คืนภัยพิบัติ DR',
    t.language === 'en' ? 'Backup Architecture' : 'วางระบบสำรองข้อมูล',
    t.language === 'en' ? 'Server Virtualization' : 'ระบบเซิร์ฟเวอร์และจำลองระบบ',
    t.language === 'en' ? 'Network Integration' : 'ติดตั้งระบบเครือข่าย',
  ];

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        org: '',
        industry: '',
        message: '',
      });
      setSelectedServices([]);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-white/60 font-thai">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 border border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-blue"></div>

            {status === 'success' ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan mb-4 animate-bounce">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                  {t.language === 'en' ? 'REQUEST RECEIVED' : 'ได้รับข้อมูลแล้ว'}
                </h3>
                <p className="text-sm text-white/60 font-thai max-w-md leading-relaxed">
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.name}</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="bg-navy-950/60 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-lg p-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.email}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="bg-navy-950/60 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-lg p-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.phone}</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="bg-navy-950/60 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-lg p-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Org */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.org}</label>
                    <input
                      required
                      type="text"
                      name="org"
                      value={formState.org}
                      onChange={handleInputChange}
                      className="bg-navy-950/60 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-lg p-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Industry */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.industry}</label>
                  <select
                    required
                    name="industry"
                    value={formState.industry}
                    onChange={handleInputChange}
                    className="bg-navy-950/60 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-lg p-3 text-white text-sm outline-none transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" disabled className="bg-navy-900">{t.contact.form.industryPlaceholder}</option>
                    <option value="healthcare" className="bg-navy-900">{t.language === 'en' ? 'Healthcare / Hospital' : 'กลุ่มโรงพยาบาล / สาธารณสุข'}</option>
                    <option value="manufacturing" className="bg-navy-900">{t.language === 'en' ? 'Manufacturing / Factory' : 'กลุ่มโรงงาน / การผลิต'}</option>
                    <option value="enterprise" className="bg-navy-900">{t.language === 'en' ? 'Large Enterprise' : 'บริษัทขนาดใหญ่ / สำนักงาน'}</option>
                    <option value="education" className="bg-navy-900">{t.language === 'en' ? 'Education' : 'สถาบันการศึกษา'}</option>
                    <option value="government" className="bg-navy-900">{t.language === 'en' ? 'Government' : 'หน่วยงานราชการ'}</option>
                  </select>
                </div>

                {/* Services Checkbox options */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.services}</label>
                  <div className="flex flex-wrap gap-3">
                    {servicesOptions.map((opt, idx) => {
                      const isSelected = selectedServices.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleServiceToggle(opt)}
                          className={`px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                            isSelected 
                              ? 'bg-accent-cyan/15 border-accent-cyan text-accent-cyan' 
                              : 'bg-white/5 border-white/10 hover:border-white/20 text-white/70'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-white/50 uppercase tracking-wider">{t.contact.form.message}</label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    className="bg-navy-950/60 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-lg p-3 text-white text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-accent-cyan to-accent-blue hover:opacity-95 text-navy-950 font-bold p-4 rounded-xl text-center shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <span>{t.contact.form.sending}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.form.submit}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Regional Coverage Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Service Area Card */}
            <div className="bg-navy-950/60 border border-white/5 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-2">{t.contact.info.areaTitle}</h4>
                <p className="text-xs text-white/60 font-thai leading-relaxed">{t.contact.info.areaDesc}</p>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-navy-950/60 border border-white/5 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-2">{t.contact.info.addressTitle}</h4>
                <p className="text-xs text-white/60 font-thai leading-relaxed">{t.contact.info.addressDesc}</p>
              </div>
            </div>

            {/* Support Hotline */}
            <div className="bg-navy-950/60 border border-white/5 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-2">{t.contact.info.supportTitle}</h4>
                <p className="text-xs text-white/60 font-mono leading-relaxed">{t.contact.info.supportDesc}</p>
              </div>
            </div>

            {/* Quick Meeting Scheduler simulation */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.language === 'en' ? 'Book a 15m Call' : 'จองเวลาคุยปรึกษา 15 นาที'}</p>
                  <p className="text-xxs text-white/40">{t.language === 'en' ? 'Find open slots on our calendar' : 'เลือกเวลาว่างของวิศวกรบนปฏิทิน'}</p>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => alert(t.language === 'en' ? 'Opening booking calendar...' : 'กำลังเปิดตารางนัดหมาย...')}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                {t.language === 'en' ? 'Schedule' : 'นัดหมาย'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
