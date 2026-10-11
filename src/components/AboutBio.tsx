import React from 'react';
import { GraduationCap, Globe2, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const AboutBio: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Executive Profile & Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Professional Biography & Approach
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A grounded perspective earned through 10+ years of direct borrower interactions, credit underwriting, and
            field debt resolution across Bihar and Eastern India.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-semibold text-slate-900 mb-2">Professional Summary</h3>
              <p className="text-slate-700 leading-relaxed italic">
                &ldquo;{PERSONAL_INFO.summary}&rdquo;
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold text-slate-900">Decade of Strategic Field Excellence</h4>
              <p>
                Ashok Kumar brings a rare blend of front-line credit sales and intensive collections recovery. Beginning
                his corporate career in life insurance at HDFC Life, he mentored sales forces and cultivated client
                trust, before channeling his relationship skills into the rigorous world of retail NBFC lending.
              </p>
              <p>
                Across tenures at Fullerton India, Aye Finance, CNH New Holland, and L&T Finance, Ashok specialized in
                navigating the high-stakes 0–90 day delinquency bucket. He developed a reputation for preventing
                accounts from slipping into Special Mention Account (SMA) or Non-Performing Asset (NPA) classifications
                through swift, respectful field interventions and realistic cash-flow restructuring.
              </p>
              <p>
                His domain expertise spans high-ticket farm equipment financing (tractors, harvesters), micro and small
                enterprise (MSME) working capital loans, personal finance, and two-wheeler loans. By combining strict
                statutory compliance with deep empathy for rural agricultural cash cycles, Ashok has consistently
                delivered low roll rates and high borrower retention.
              </p>
            </div>

            {/* Core Philosophies */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Core Operating Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Early Contact Advantage:</strong> Intervening within 7 days of
                    bounce prevents compounding defaults.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Pragmatic Restructuring:</strong> Syncing EMI due dates with
                    Kharif/Rabi harvest cycles guarantees repayment.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Zero-Compromise Compliance:</strong> 100% adherence to RBI Fair
                    Practice Codes and audit guidelines.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Cluster Cash-Flow Mapping:</strong> Assessing true micro-business
                    turnover beyond missing audited books.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Personal Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold text-base">
                <GraduationCap className="w-5 h-5 text-amber-700" />
                <h3>Education & Academic Credentials</h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div
                    key={idx}
                    className="pb-3 border-b border-slate-100 last:border-b-0 last:pb-0 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 text-sm">{edu.degree}</span>
                      <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{edu.institution}</p>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2">
                      <span>Division: {edu.division}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Details Card */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold text-base">
                <Award className="w-5 h-5 text-amber-700" />
                <h3>Personal & Verified Profile</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Date of Birth</span>
                  <div className="flex items-center gap-1.5 mt-1 text-slate-800 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>05/12/1988</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Nationality</span>
                  <div className="flex items-center gap-1.5 mt-1 text-slate-800 font-medium">
                    <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Indian</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Languages Spoken</span>
                  <div className="mt-1 text-slate-800 font-medium">
                    <span>Hindi · English</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Mobile Contact</span>
                  <div className="mt-1 font-bold text-slate-900">
                    <a href="tel:8969984535" className="hover:text-amber-700">
                      8969984535
                    </a>
                  </div>
                </div>

                <div className="col-span-2 pt-2 border-t border-slate-100">
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Permanent Address</span>
                  <div className="flex items-start gap-1.5 mt-1 text-slate-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Ambika Nagar, Laxman Chowk, Motihari, Bihar – 845401</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles Banner */}
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Open to Opportunities
              </span>
              <p className="text-xs leading-relaxed font-medium">
                Relationship Manager · Credit / Loan Officer · Collections & Debt Recovery Lead across Commercial Banks
                and Top-tier NBFCs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
