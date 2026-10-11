import React, { useState } from 'react';
import { Phone, Mail, MapPin, Download, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { KEY_METRICS, PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDirectDownload = () => {
    setDownloading(true);
    try {
      downloadResumePdf();
    } catch (e) {
      console.error(e);
      onOpenResume();
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Column Typography, Right Column Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              <span>Banking & NBFC Specialist</span>
              <span aria-hidden="true">·</span>
              <span>10+ Years Field Experience</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-800">Bihar, India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Protecting Portfolio Health, Driving Retail Credit & Delinquency Recovery
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Results-driven banking and finance professional with over a decade of hands-on expertise across life
              insurance, NBFCs, and retail lending. Proven authority in early-stage collections (0–90 bucket), loan
              sales, farm equipment debt recovery, and cross-functional field team leadership.
            </p>

            {/* Direct Contact & Location Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-sm text-slate-600 font-medium">
              <a
                href="tel:8969984535"
                className="inline-flex items-center gap-1.5 text-slate-900 hover:text-amber-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span className="font-semibold">{PERSONAL_INFO.phoneFormatted}</span>
              </a>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                |
              </span>
              <a
                href="mailto:ashokkumarmotihari19@gmail.com"
                className="inline-flex items-center gap-1.5 text-slate-900 hover:text-amber-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Motihari, Bihar – 845401</span>
              </span>
            </div>

            {/* Actions CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Connect with Ashok</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDirectDownload}
                  disabled={downloading}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-all"
                >
                  <Download className="w-4 h-4 text-slate-900" />
                  <span>{downloading ? 'Downloading...' : 'Download CV (PDF)'}</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-xs transition-all"
                  title="Preview official curriculum vitae"
                >
                  <FileText className="w-4 h-4 text-slate-600" />
                  <span>View CV</span>
                </button>
              </div>

              <a
                href="https://wa.me/918969984535?text=Hello%20Ashok%20Kumar,%20I%20reviewed%20your%20banking%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              >
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Target Mandate Assurance */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Available for Relationship Manager, Credit/Loan Officer, or Collections & Recovery leadership</span>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame with subtle shadow */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                  <img
                    src={PERSONAL_INFO.heroPortrait}
                    alt="Ashok Kumar - Banking & Finance Professional"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Scrim overlay at bottom for clean text legibility */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 text-white">
                    <p className="text-xl font-bold tracking-tight">Ashok Kumar</p>
                    <p className="text-xs text-amber-300 font-medium tracking-wide mt-0.5">
                      Banking & Finance Professional · 10+ Years
                    </p>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                      L&T Finance · CNH New Holland · Aye Finance · Fullerton · HDFC Life
                    </p>
                  </div>
                </div>

                {/* Sub-card quick info */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Mobile Number</span>
                    <a href="tel:8969984535" className="font-bold text-slate-900 hover:text-amber-700">
                      8969984535
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Specialty</span>
                    <span className="font-semibold text-slate-900">0–90 Delinquency Bucket</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 5-column metric strip placed strictly in a full-width row below the split */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {KEY_METRICS.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  {metric.value}
                </span>
                <span className="mt-1 text-xs text-slate-500 font-medium leading-snug">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
