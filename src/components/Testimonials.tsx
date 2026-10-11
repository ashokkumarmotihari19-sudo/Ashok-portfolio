import React, { useState } from 'react';
import { Quote, Star, MessageSquarePlus, CheckCircle2, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // New recommendation form state
  const [newName, setNewName] = useState('');
  const [newOrg, setNewOrg] = useState('');
  const [newDesignation, setNewDesignation] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newCategory, setNewCategory] = useState<'Borrower' | 'Colleague / Manager' | 'Dealer Partner'>('Colleague / Manager');

  const categories = ['All', 'Borrower', 'Colleague / Manager', 'Dealer Partner'];

  const filteredTestimonials = testimonialsList.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  const handleAddRecommendation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newQuote) return;

    const newTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      name: newName,
      designation: newDesignation || 'Financial Professional',
      organization: newOrg || 'Peer Endorsement',
      location: 'Bihar / Pan-India',
      category: newCategory,
      quote: newQuote,
    };

    setTestimonialsList([newTestimonial, ...testimonialsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setModalOpen(false);
      setNewName('');
      setNewOrg('');
      setNewDesignation('');
      setNewQuote('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Field Endorsements & Proof
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Client & Professional Testimonials
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Verifiable endorsements from agricultural borrowers, micro-enterprise entrepreneurs, branch leaders, and
              equipment dealerships who have partnered directly with Ashok Kumar.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-slate-700" />
              <span>Leave Endorsement</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat === 'All' ? 'All Endorsements' : cat}
            </button>
          ))}
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-amber-600/70" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-slate-600 font-medium">{item.designation}</p>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                  <span>{item.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                </div>

                {item.verifiedLoanType && (
                  <div className="mt-2 text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5 w-fit font-medium">
                    Verified: {item.verifiedLoanType}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Endorsement Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Add an Endorsement for Ashok Kumar</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Thank you for your endorsement!</h4>
                <p className="text-xs text-slate-600">Your testimonial has been added to the recommendations list.</p>
              </div>
            ) : (
              <form onSubmit={handleAddRecommendation} className="mt-4 space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Designation / Role</label>
                    <input
                      type="text"
                      placeholder="e.g. Branch Operations Manager"
                      value={newDesignation}
                      onChange={(e) => setNewDesignation(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Organization / Business</label>
                    <input
                      type="text"
                      placeholder="e.g. NBFC / Equipment Business"
                      value={newOrg}
                      onChange={(e) => setNewOrg(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Relationship / Capacity</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Colleague / Manager">Colleague / Branch Manager</option>
                    <option value="Borrower">Borrower (MSME / Agriculture / Retail)</option>
                    <option value="Dealer Partner">Equipment Dealer / Corporate Partner</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Testimonial Quote *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe Ashok's field leadership, debt resolution, portfolio management, or lending service..."
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
                  >
                    Submit Endorsement
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
