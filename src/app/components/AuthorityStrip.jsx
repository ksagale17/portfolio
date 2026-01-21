import { Award, Globe2, Gem, Leaf, Layers } from 'lucide-react';

export default function AuthorityStrip() {
  const highlights = [
    {
      icon: Award,
      label: '25+ Years Experience',
      sublabel: 'Industry Leadership'
    },
    {
      icon: Globe2,
      label: 'Global Markets',
      sublabel: 'Hong Kong, New York, Bangkok, Mumbai'
    },
    {
      icon: Gem,
      label: 'Founder & Director – Gems Muse',
      sublabel: 'House Of High Jewelry'
    },
    {
      icon: Layers,
        label: 'Product Development Poineer & Sourcing Synchronisation',
      sublabel: 'Luxury Innovation Hub'
    }
  ];

  return (
    <section className="py-8 lg:py-10 bg-white border-b border-[#E5E3DF]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <item.icon 
                className="w-7 h-7 text-[#C7A24B] mx-auto mb-3" 
                strokeWidth={1.5}
              />
              <p 
                className="text-sm md:text-base text-[#1B1B1B] mb-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {item.label}
              </p>
              <p 
                className="text-xs text-[#8B8985]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}