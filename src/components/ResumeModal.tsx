import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, FileDown } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION_DATA, CORE_COMPETENCIES, PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    setDownloading(true);
    try {
      downloadResumePdf();
    } catch (e) {
      console.error(e);
      window.print();
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const resumeText = `
ASHOK KUMAR - BANKING & FINANCE PROFESSIONAL
Mobile: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
Address: ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.summary}

PROFESSIONAL EXPERIENCE:
${WORK_EXPERIENCE.map(
  (exp) => `
* ${exp.role} | ${exp.companyName} (${exp.period})
  Location: ${exp.location} | Division: ${exp.division}
  ${exp.bullets.map((b) => `  - ${b}`).join('\n')}
`
).join('\n')}

CORE COMPETENCIES:
${CORE_COMPETENCIES.map((c) => `${c.name}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}

EDUCATION:
${EDUCATION_DATA.map((e) => `* ${e.degree} (${e.year}) - ${e.institution} - ${e.division}`).join('\n')}

LANGUAGES: Hindi, English
PERSONAL: Date of Birth: 05/12/1988 | Nationality: Indian
    `.trim();

    navigator.clipboard?.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative my-auto print:max-h-none print:shadow-none print:border-none print:rounded-none">
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Curriculum Vitae</span>
            <span className="text-xs text-amber-800 bg-amber-50 border border-amber-200 font-semibold px-2 py-0.5 rounded">
              Verified Experience
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Preparing PDF...' : 'Download Official PDF'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Container */}
        <div className="p-6 sm:p-10 font-sans text-slate-900 space-y-8 print:p-8 print:space-y-6">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 uppercase">Ashok Kumar</h1>
              <p className="text-sm font-bold text-amber-800 uppercase tracking-widest mt-1">
                Banking & Finance Professional · Debt Recovery Expert
              </p>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                Specialized in 0–90 Delinquency Buckets, Retail Lending, MSME Appraisals & Bad Debt Restructuring
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-700 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <a href="tel:8969984535" className="font-bold text-slate-900 hover:underline">
                  8969984535
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <a href="mailto:ashokkumarmotihari19@gmail.com" className="hover:underline">
                  ashokkumarmotihari19@gmail.com
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Ambika Nagar, Laxman Chowk, Motihari, Bihar – 845401</span>
              </div>
            </div>
          </div>

          {/* Current Status Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-950 flex items-center justify-between">
            <span className="font-semibold">
              Current Engagement: Debt Recovery Expert at L&T Holdings Limited
            </span>
            <span className="font-bold text-amber-800 uppercase text-[10px] tracking-wider">
              Open to New Opportunities
            </span>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-3">
              Core Competencies & Key Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-800">
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Retail & MSME Lending</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Collections & Recovery</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• 0–90 Bucket Management</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Debt Restructuring</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Credit Risk Awareness</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Relationship Management</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Business Development</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Team Handling & Mentoring</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Accounting & MIS Reporting</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Computer Operations</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• Communication & Negotiation</div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100 font-medium">• FOS (Feet On Street) Tech</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-xs font-semibold text-slate-700">
                        {exp.companyName} · <span className="text-slate-500">{exp.division}</span>
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <span className="font-mono font-bold text-slate-800">{exp.period}</span>
                      <p className="text-slate-500 text-[11px]">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 leading-relaxed pt-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-3">
              Education & Academic Background
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 last:border-b-0">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <span className="text-slate-600"> — {edu.institution}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    <span className="font-mono">{edu.year}</span> · <span>Division: {edu.division}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Personal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs">
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Languages:</span>
              <span className="text-slate-700">Hindi · English (Fluent Professional Proficiency)</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Personal Details:</span>
              <span className="text-slate-700">Date of Birth: 05/12/1988 · Nationality: Indian · Place of Residence: Motihari, Bihar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
