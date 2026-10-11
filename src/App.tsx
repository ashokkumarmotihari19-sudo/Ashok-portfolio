import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyLogosBanner } from './components/CompanyLogos';
import { AboutBio } from './components/AboutBio';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { KeySkills } from './components/KeySkills';
import { MarketInsights } from './components/MarketInsights';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top 3-Zone Navigation */}
      <Header
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Portrait, Bio & One-Click PDF Download */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* Company Logos & Organizations Served Banner */}
        <CompanyLogosBanner />

        {/* Executive Biography, Philosophy & Education */}
        <AboutBio />

        {/* Career Timeline with All Corporate Roles */}
        <ExperienceTimeline />

        {/* Core Competencies & Interactive Delinquency Simulator */}
        <KeySkills />

        {/* Market Insights & Banking Commentary Blog */}
        <MarketInsights />

        {/* Client & Peer Testimonials */}
        <Testimonials />

        {/* Direct Contact & Opportunities Inquiry */}
        <ContactSection />
      </main>

      {/* Official Printable & Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Site Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />
    </div>
  );
}
