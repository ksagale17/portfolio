import { useState } from 'react';
import { Building2, TrendingUp, Globe2, FileText } from 'lucide-react';

export default function InvestorSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const opportunities = [
    {
      icon: Building2,
      title: 'Equity Partnership',
      description:
        'Strategic investment in jewelry ventures with unique product portfolios, proven ROI and sustainable growth.',
    },
    {
      icon: TrendingUp,
      title: 'Brand Ventures',
      description:
        'Co-create luxury jewelry brands for existing as well emerging markets with full support.',
    },
    {
      icon: Globe2,
      title: 'Market Expansion',
      description:
        'Joint ventures for geographic expansion with established infrastructure.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section
      id="investors"
      className="py-16 lg:py-20 bg-[#F6F4F1] border-t border-[#E5E3DF]"
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2
  className="text-2xl md:text-3xl text-[#1B1B1B] mb-3"
  style={{ fontFamily: 'var(--font-serif)' }}
>
  Investor & Collaboration Opportunities
</h2>


          {/* Thin underline */}
          <div className="w-24 h-px bg-[#C7A24B] mb-5"></div>

          <p
            className="text-lg text-[#8B8985] max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Partner with a proven leader in luxury jewelry innovation
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-[#E5E3DF] hover:border-[#C7A24B] transition-all duration-300"
            >
              <opportunity.icon
                className="w-9 h-9 text-[#C7A24B] mb-4"
                strokeWidth={1.5}
              />
              <h3
                className="text-lg text-[#1B1B1B] mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {opportunity.title}
              </h3>
              <p
                className="text-sm text-[#8B8985] leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Request Deck Form */}
        <div className="max-w-3xl mx-auto">
          {/* Thin border applied here */}
          <div className="bg-white p-8 lg:p-10 border border-[#C7A24B]">
            <div className="flex items-center gap-3 mb-5">
              <FileText
                className="w-7 h-7 text-[#C7A24B]"
                strokeWidth={1.5}
              />
              <h3
                className="text-2xl text-[#1B1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Request Investor Deck
              </h3>
            </div>

            <p
              className="text-sm text-[#8B8985] mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Access our detailed investment prospectus, financial projections,
              and growth strategy.
            </p>

            {formSubmitted ? (
              <div className="text-center py-6">
                <div className="inline-block p-4 bg-[#C7A24B] rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p
                  className="text-xl text-[#1B1B1B] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Request Received
                </p>
                <p
                  className="text-sm text-[#8B8985]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  We'll send the investor deck within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-[#1B1B1B] placeholder-[#8B8985] focus:outline-none focus:border-[#C7A24B] text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-[#1B1B1B] placeholder-[#8B8985] focus:outline-none focus:border-[#C7A24B] text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company / Organization"
                    className="px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-[#1B1B1B] placeholder-[#8B8985] focus:outline-none focus:border-[#C7A24B] text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  <select
                    className="px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-[#1B1B1B] focus:outline-none focus:border-[#C7A24B] text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <option>Investment Interest</option>
                    <option>Equity Partnership</option>
                    <option>Brand Ventures</option>
                    <option>Market Expansion</option>
                    <option>Other Opportunity</option>
                  </select>
                </div>

                <textarea
                  placeholder="Brief message about your investment interests"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-[#1B1B1B] placeholder-[#8B8985] focus:outline-none focus:border-[#C7A24B] resize-none text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-base font-medium
                      border border-[#C7A24B] text-[#C7A24B]
                      hover:bg-[#C7A24B] hover:text-white
                      transition-all duration-300
                      hover:shadow-[0_2px_16px_rgba(199,162,75,0.3)]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Request Investor Deck
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
