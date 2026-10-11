import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, MailCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Job Opportunity / Recruitment',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`${formData.inquiryType}: ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Hello Ashok Kumar,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nOrganization: ${formData.organization || 'N/A'}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                Direct Communication
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Connect with Ashok Kumar
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently engaged as a Debt Recovery Expert at L&T Holdings Limited, while actively exploring
                prospective opportunities across banking, NBFC leadership, and retail credit institutions.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:8969984535"
                className="group p-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 hover:bg-slate-800 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Mobile Contact
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {PERSONAL_INFO.phoneFormatted}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">Available for direct calls & discussions</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:ashokkumarmotihari19@gmail.com"
                className="group p-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 hover:bg-slate-800 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email Address
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">Fast email responses for formal correspondence</span>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Residential Location & Base
                  </span>
                  <span className="text-sm font-semibold text-white block mt-0.5">
                    Ambika Nagar, Laxman Chowk
                  </span>
                  <span className="text-xs text-slate-400 block">Motihari, Bihar – 845401</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/918969984535?text=Hi%20Ashok%20Kumar,%20I%20am%20reaching%20out%20regarding%20a%20banking%20opportunity%20or%20debt%20recovery%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp (+91 8969984535)</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict professional confidentiality maintained on all recruitment & portfolio inquiries</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Opportunity Form */}
          <div className="lg:col-span-7 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white">Send a Message or Opportunity Brief</h3>
              <p className="text-xs text-slate-300 mt-1">
                Whether you represent a bank, NBFC, fintech, or dealership, submit your brief directly below.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Recorded Successfully!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your message
                  has been noted. You can also trigger an email directly to Ashok Kumar:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={openMailto}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <MailCheck className="w-4 h-4" />
                    <span>Send via Email Client (ashokkumarmotihari19@gmail.com)</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        inquiryType: 'Job Opportunity / Recruitment',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rakesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">Bank / Institution Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Commercial Bank / NBFC"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Nature of Inquiry</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="Job Opportunity / Recruitment">Career Opportunity / Recruitment</option>
                    <option value="Delinquency & Debt Recovery Advisory">0–90 Delinquency & Debt Advisory</option>
                    <option value="MSME & Retail Lending Consultation">MSME & Retail Credit Sourcing</option>
                    <option value="Equipment Dealership Partnership">Equipment Dealer Collaboration</option>
                    <option value="General Professional Inquiry">General Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Message / Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details regarding the role, location, target portfolio, or consultation request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400 placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to Ashok Kumar</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
