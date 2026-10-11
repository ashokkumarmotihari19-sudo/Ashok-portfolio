import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand & Bio summary */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">Ashok Kumar</h3>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Banking & Finance Professional with over 10 years of leadership in retail lending, early-stage collections
              (0–90 bucket), farm equipment financing, and debt recovery. Currently at L&T Holdings Limited.
            </p>
            <div className="pt-1 text-slate-300 font-mono text-[11px]">
              Motihari, Bihar – 845401 · Mobile: 8969984535
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Sections</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Biography & Qualifications
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Career Experience & Logos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Core Skills & Delinquency Tool
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Market Insights & Blog
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client & Peer Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Credentials */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Direct Contact</h4>
            <div className="space-y-2 text-slate-400">
              <a href="tel:8969984535" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-semibold text-slate-200">{PERSONAL_INFO.phoneFormatted}</span>
              </a>
              <a
                href="mailto:ashokkumarmotihari19@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Ambika Nagar, Laxman Chowk, Motihari, Bihar</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
              >
                View & Download Official Curriculum Vitae →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Ashok Kumar. All rights reserved. Banking & Finance Portfolio.</p>
          <div className="flex items-center gap-4">
            <span>Verified Banking & NBFC Professional</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
