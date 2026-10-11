import React, { useState } from 'react';
import { Phone, Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-amber-800 transition-colors"
          >
            Ashok Kumar
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Biography
            </a>
            <a href="#experience" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#skills" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Core Skills
            </a>
            <a href="#insights" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Market Insights
            </a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Testimonials
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="View full resume from PDF"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>View CV</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call 8969984535</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation collapse */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Biography & Summary
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Career Experience & Logos
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Core Competencies & Skills
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Market Insights Blog
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Client Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Direct Contact & Address
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive CV</span>
            </button>
            <a
              href="tel:8969984535"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Dial 8969984535 Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
