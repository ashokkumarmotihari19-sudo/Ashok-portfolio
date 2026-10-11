import React, { useState } from 'react';
import { CORE_COMPETENCIES } from '../data/portfolioData';
import { ShieldAlert, TrendingDown, Layers, Calculator, Check, ArrowUpRight } from 'lucide-react';

export const KeySkills: React.FC = () => {
  // Interactive Bucket Calculator State
  const [loanType, setLoanType] = useState<'tractor' | 'msme' | 'personal'>('tractor');
  const [loanAmount, setLoanAmount] = useState<number>(650000);
  const [daysOverdue, setDaysOverdue] = useState<number>(45);

  // Compute Delinquency Details
  const getBucketDetails = (dpd: number) => {
    if (dpd <= 30) {
      return {
        bucket: '0–30 Days (Bucket 1)',
        smaCategory: 'SMA-0 (Standard Account)',
        riskLevel: 'Low / Early Friction',
        riskColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        strategy: 'Early diagnosis call within 3–7 days of bounce. Verify whether delay is operational, salary delay, or seasonal harvest cycle. Agree on soft repayment date.',
        impact: 'Zero impairment to credit bureau score if cleared within cycle. Avoids penal surcharge.',
      };
    } else if (dpd <= 60) {
      return {
        bucket: '31–60 Days (Bucket 2)',
        smaCategory: 'SMA-1 (Sub-watchlist)',
        riskLevel: 'Moderate / Roll-Risk Alert',
        riskColor: 'text-amber-700 bg-amber-50 border-amber-200',
        strategy: 'Personal field visit to borrower residence/enterprise. Review genuine cash-flow ledgers. Structure phased bi-weekly clearing or partial payment before month-end freeze.',
        impact: 'CIBIL report records 30+ DPD mark. High risk of rolling over into SMA-2 without field contact.',
      };
    } else if (dpd <= 90) {
      return {
        bucket: '61–90 Days (Bucket 3)',
        smaCategory: 'SMA-2 (Critical Watchlist)',
        riskLevel: 'High / Imminent NPA Slippage',
        riskColor: 'text-orange-700 bg-orange-50 border-orange-200',
        strategy: 'Intensive firm negotiation involving co-borrower, guarantor, or equipment dealer. Offer structured restructuring plan (interest clearance + harvest bullet payment) to prevent hard default.',
        impact: 'Severe credit impairment. At 91 DPD, account is mandatorily classified as Gross NPA under RBI norms.',
      };
    } else {
      return {
        bucket: '90+ Days (Hard Bucket)',
        smaCategory: 'Gross NPA (Sub-Standard Asset)',
        riskLevel: 'Critical / Legal Escalation',
        riskColor: 'text-rose-700 bg-rose-50 border-rose-200',
        strategy: 'Legal notice under Section 138 (Cheque Bounce) / SARFAESI / Arbitration, while concurrently exploring one-time structured settlement (OTS) or asset retrieval.',
        impact: 'Statutory 15%–25% provisioning required by bank. Borrower credit profile heavily impaired.',
      };
    }
  };

  const bucketInfo = getBucketDetails(daysOverdue);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Core Competencies & Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Specialized Skills & Risk Governance
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            A battle-tested skill set honed across high-volume retail lending, early delinquency management, credit
            appraisal, and on-ground negotiation.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_COMPETENCIES.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/80">
                <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-700" />
                  <span>{category.name}</span>
                </h3>
                <span className="text-xs font-mono text-slate-500 font-medium">Domain Expertise</span>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-900 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-slate-900 h-1.5 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-600 leading-normal pt-0.5">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Delinquency Bucket & Overdue Resolution Visualizer */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Banking Simulation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                Delinquency Bucket & Early Intervention Simulator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Explore how Ashok Kumar tackles the 0–90 DPD cycle to prevent accounts from deteriorating into Gross NPA
                under RBI provisioning guidelines.
              </p>
            </div>

            {/* Loan Type Selector */}
            <div className="flex items-center gap-1 p-1 bg-slate-800/90 rounded-lg border border-slate-700 shrink-0">
              <button
                onClick={() => {
                  setLoanType('tractor');
                  setLoanAmount(650000);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  loanType === 'tractor' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                Farm Tractor Loan
              </button>
              <button
                onClick={() => {
                  setLoanType('msme');
                  setLoanAmount(350000);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  loanType === 'msme' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                MSME Business
              </button>
              <button
                onClick={() => {
                  setLoanType('personal');
                  setLoanAmount(150000);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  loanType === 'personal' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                Personal / 2W
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Interactive Sliders */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                  <span>Loan Outstanding Amount</span>
                  <span className="font-mono text-amber-300 font-bold text-sm">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1500000"
                  step="25000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>₹50,000</span>
                  <span>₹7,50,000</span>
                  <span>₹15,00,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                  <span>Days Past Due (DPD)</span>
                  <span className="font-mono text-amber-300 font-bold text-sm">
                    {daysOverdue} Days ({bucketInfo.bucket})
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="1"
                  value={daysOverdue}
                  onChange={(e) => setDaysOverdue(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>0 DPD (Current)</span>
                  <span>30 DPD (SMA-0)</span>
                  <span>60 DPD (SMA-1)</span>
                  <span>90 DPD (SMA-2)</span>
                  <span>120 DPD (NPA)</span>
                </div>
              </div>

              {/* Bucket Stages Visual Bar */}
              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  RBI Delinquency Framework Stages
                </span>
                <div className="grid grid-cols-4 gap-1 text-[11px] text-center font-mono font-semibold">
                  <div className={`p-1.5 rounded ${daysOverdue <= 30 ? 'bg-emerald-600 text-white' : 'bg-slate-700/70 text-slate-400'}`}>
                    0–30 DPD
                  </div>
                  <div className={`p-1.5 rounded ${daysOverdue > 30 && daysOverdue <= 60 ? 'bg-amber-600 text-white' : 'bg-slate-700/70 text-slate-400'}`}>
                    31–60 DPD
                  </div>
                  <div className={`p-1.5 rounded ${daysOverdue > 60 && daysOverdue <= 90 ? 'bg-orange-600 text-white' : 'bg-slate-700/70 text-slate-400'}`}>
                    61–90 DPD
                  </div>
                  <div className={`p-1.5 rounded ${daysOverdue > 90 ? 'bg-rose-600 text-white' : 'bg-slate-700/70 text-slate-400'}`}>
                    90+ NPA
                  </div>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-7 bg-slate-800/80 rounded-xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Account Classification
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight mt-0.5">
                      {bucketInfo.smaCategory}
                    </h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-xs font-bold border ${bucketInfo.riskColor}`}>
                    {bucketInfo.riskLevel}
                  </span>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-700/70">
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Ashok Kumar&apos;s Field Strategy
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                      {bucketInfo.strategy}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Institutional & Bureau Impact
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {bucketInfo.impact}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>Tested across Sheohar & West Champaran loan beats</span>
                <span className="text-amber-400 font-medium flex items-center gap-1">
                  10+ Yrs Field Rigor <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
