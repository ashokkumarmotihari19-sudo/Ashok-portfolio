import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { CompanyLogo } from './CompanyLogos';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'collections' | 'lending' | 'management'>('all');

  const filteredExperience = WORK_EXPERIENCE.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'collections') {
      return exp.id === 'lt-finance' || exp.id === 'cnh-conneqt';
    }
    if (filter === 'lending') {
      return exp.id === 'aye-finance' || exp.id === 'fullerton';
    }
    if (filter === 'management') {
      return exp.id === 'hdfc-life' || exp.id === 'fullerton';
    }
    return true;
  });

  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Professional Career Track Record
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Work Experience & Corporate Portfolios
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              A comprehensive chronicle of 10+ years driving retail lending growth, early delinquency containment, and
              customer loan recoveries across leading financial institutions.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shadow-xs overflow-x-auto self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Tenures (5)
            </button>
            <button
              onClick={() => setFilter('collections')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'collections' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Collections & 0–90 Recovery
            </button>
            <button
              onClick={() => setFilter('lending')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'lending' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Retail & MSME Lending
            </button>
            <button
              onClick={() => setFilter('management')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'management' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Team & Business Dev
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="mt-12 space-y-6">
          {filteredExperience.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 sm:p-8 transition-all hover:shadow-md"
            >
              {/* Top row: Company Logo, Role, Period */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Company Logo Component */}
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0 w-fit">
                    <CompanyLogo companyKey={item.logoKey} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {item.role}
                      </h3>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        {item.division}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1.5">
                      <span className="font-semibold text-slate-800">{item.companyName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities and Key Achievements */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Key Responsibilities & Operational Scope</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics pill strip / KPI cards */}
                {item.metrics && (
                  <div className="lg:col-span-4 bg-slate-50 rounded-lg p-4 border border-slate-100 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Performance Highlights
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {item.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center justify-between p-2 rounded bg-white border border-slate-200/70 text-xs"
                        >
                          <span className="text-slate-600 font-medium">{metric.label}</span>
                          <span className="font-bold text-slate-900 font-mono tabular-nums">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
