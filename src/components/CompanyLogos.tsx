import React from 'react';

interface CompanyLogoProps {
  companyKey: 'lt-finance' | 'cnh-newholland' | 'aye-finance' | 'fullerton' | 'hdfc-life' | 'paytm';
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ companyKey, className = 'h-8' }) => {
  switch (companyKey) {
    case 'paytm':
      return (
        <div className={`inline-flex items-center gap-2 select-none ${className}`}>
          {/* Paytm blue logo badge */}
          <div className="w-8 h-8 rounded-lg bg-[#002E6E] flex items-center justify-center text-[#00BAF2] font-black shrink-0 shadow-xs">
            <span className="text-xs font-black tracking-tight">Pay<span className="text-white">tm</span></span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-sm font-black text-[#002E6E] tracking-tight">
              Paytm <span className="text-[#00BAF2]">Finance</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium truncate max-w-[140px]">
              Digitide Solutions Ltd
            </span>
          </div>
        </div>
      );

    case 'lt-finance':
      return (
        <div className={`inline-flex items-center gap-2 font-bold tracking-tight select-none ${className}`}>
          {/* L&T distinctive circle chevron icon */}
          <div className="w-8 h-8 rounded-full bg-[#00529B] flex items-center justify-center text-white shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M4 6h3v12H4zm5 0h3v8h5v4H9zm10 0h3v12h-3z" opacity="0.3" />
              <path d="M4 17h16v2H4zm0-11h4v8H4zm6 0h4v12h-4zm6 0h4v5h-4z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-base font-extrabold text-[#00529B] tracking-wider">L&T FINANCE</span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Farm & Equipment</span>
          </div>
        </div>
      );

    case 'cnh-newholland':
      return (
        <div className={`inline-flex items-center gap-2 select-none ${className}`}>
          {/* CNH Industrial / New Holland Agriculture badge */}
          <div className="w-8 h-8 rounded-md bg-[#002B49] flex items-center justify-center text-[#FED100] font-black shrink-0 shadow-xs">
            <span className="text-xs font-black tracking-tighter">CNH</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <div className="flex items-center gap-1">
              <span className="text-sm font-black text-[#002B49] tracking-tight">NEW HOLLAND</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FED100]" />
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Conneqt Business Solutions</span>
          </div>
        </div>
      );

    case 'aye-finance':
      return (
        <div className={`inline-flex items-center gap-2 select-none ${className}`}>
          {/* Aye Finance green brand mark */}
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black shrink-0 shadow-xs">
            <span className="text-sm italic font-extrabold">Aye!</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-base font-black text-slate-900 tracking-tight">
              AYE <span className="text-emerald-700">FINANCE</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">MSME Lending</span>
          </div>
        </div>
      );

    case 'fullerton':
      return (
        <div className={`inline-flex items-center gap-2 select-none ${className}`}>
          {/* Fullerton India red target sunburst */}
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity="0.4" />
              <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-sm font-extrabold text-red-700 tracking-tight">Fullerton India</span>
            <span className="text-[10px] text-slate-500 font-medium">Now SMFG India Credit</span>
          </div>
        </div>
      );

    case 'hdfc-life':
      return (
        <div className={`inline-flex items-center gap-2 select-none ${className}`}>
          {/* HDFC Life signature red & blue box */}
          <div className="w-8 h-8 rounded-md bg-[#004C8F] flex items-center justify-center text-white font-black relative overflow-hidden shrink-0 shadow-xs">
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-600" />
            <span className="text-[11px] font-black tracking-tight text-white relative z-10">HDFC</span>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-base font-black text-[#004C8F] tracking-tight">
              HDFC <span className="text-red-600">Life</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Insurance Co.</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const CompanyLogosBanner: React.FC = () => {
  const companies: Array<{
    key: 'lt-finance' | 'cnh-newholland' | 'aye-finance' | 'fullerton' | 'hdfc-life' | 'paytm';
    name: string;
    period: string;
    role: string;
  }> = [
    { key: 'lt-finance', name: 'L&T Holdings Limited', period: 'Present (Active)', role: 'Debt Recovery Expert' },
    { key: 'paytm', name: 'Paytm Financial Services', period: '2026', role: 'Sr. FOS Collection Exec.' },
    { key: 'lt-finance', name: 'L&T Finance Ltd', period: '2024–2025', role: 'Collection Officer (0–90)' },
    { key: 'cnh-newholland', name: 'CNH New Holland', period: '2022–2024', role: 'Debt Management' },
    { key: 'aye-finance', name: 'Aye Finance Pvt Ltd', period: '2020–2021', role: 'MSME Loan Officer' },
    { key: 'fullerton', name: 'Fullerton India', period: '2019–2020', role: 'Relationship Officer' },
    { key: 'hdfc-life', name: 'HDFC Life Insurance', period: '2015–2019', role: 'Business Dev. Manager' },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="shrink-0 lg:max-w-xs">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Organizations & Portfolios Served
            </p>
            <h3 className="text-sm font-semibold text-slate-900 mt-0.5">
              10+ Years with India&apos;s Leading Financial & Fintech Institutions
            </h3>
            <p className="text-xs text-amber-800 font-medium mt-1">
              Currently at L&T Holdings Limited · Open to New Opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4 sm:gap-6 items-center flex-1">
            {companies.map((c, i) => (
              <div
                key={`${c.key}-${i}`}
                className="group p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50/80 transition-all flex flex-col gap-2"
                title={`${c.name} — ${c.role} (${c.period})`}
              >
                <div className="flex items-center">
                  <CompanyLogo companyKey={c.key} />
                </div>
                <div className="text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-1.5 mt-0.5">
                  <span className="font-medium text-slate-700 truncate">{c.role}</span>
                  <span className="text-slate-400 font-mono text-[10px] ml-1 shrink-0">{c.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
