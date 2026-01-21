import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Cpu, Leaf } from 'lucide-react';
import bgImg from '../../assets/bgimg.jpeg';

export default function ExpertiseSection() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Globe,
      title: 'Brand Creation & Market Entry',
      description:
        'Strategic positioning and launch strategies for jewelry brands, manufacturers and B2B companies entering new markets.',
    },
    {
      icon: Sparkles,
      title: 'Product Development & Sourcing',
      description:
        'Design consultation with expert sourcing of diamonds, gemstones, and luxury materials.',
    },
    {
      icon: Cpu,
      title: 'Technology Integration',
      description:
        'Advanced manufacturing, digital design, marketing tech, and sales enablement.',
    },
    {
      icon: Leaf,
      title: 'Sustainability & Ethics',
      description:
        'Responsible supply chains with certified ethical sourcing practices.',
    },
  ];

  const strategicCards = [
    {
      title: 'Technology-Driven Personalization & Creation',
      points: ['Hyper-Personalization', 'Digital-Only & Phygital Jewelry'],
    },
    {
      title: 'Evolving Retail & Customer Experience',
      points: [
        'Omnichannel is Key',
        'Experiential Retail',
        'Direct-to-Consumer (DTC) & Niche Brands',
      ],
    },
    {
      title: 'Shifts in Consumer Identity & Value',
      points: [
        'Meaning Over Mass',
        'Gender-Fluidity & Self-Expression',
        'Investment & Quiet Luxury',
      ],
    },
    {
      title: 'The Resilient Strategy',
      points: [
        'Multi-Localization Over Globalization',
        'Geopolitical Risk Mapping',
        'Three-Basket Market Strategy',
        'Values-Forward Brand Narrative',
      ],
    },
    {
      title: 'Challenges To Navigate',
      points: [
        'Greenwashing',
        'Lab-Grown Competition',
        'Positioning of Lab-Grown Products',
        'Economic Volatility',
        'Counterfeit & Digital Security',
      ],
    },
  ];

  return (
    <section id="expertise" className="bg-[#FDFBF6] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 text-center pt-24 pb-20">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-[#1B1B1B] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Expertise & Services
        </motion.h2>
        <div className="w-24 h-px bg-[#C7A24B] mx-auto" />
      </div>

      {/* SERVICES */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-28">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <service.icon className="w-10 h-10 text-[#C7A24B] mb-6" strokeWidth={1.4} />
            <h3 className="text-xl font-serif mb-3">{service.title}</h3>
            <p className="text-sm text-[#7A756F]">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* FULL WIDTH IMAGE */}
      <div
        className="w-full py-32 relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 75%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            Become <span className="font-bold">“The World’s Most Trusted Jeweler in Uncertain Times”</span>
          </h3>
        </div>
      </div>

      {/* FUTURE OUTLOOK / ULTIMATE POSITIONING */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 mt-24 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
className="text-3xl md:text-4xl font-serif text-[#1B1B1B]"
        >
          The Ultimate Positioning
        </motion.h3>

        {/* Thin underline */}
<div className="w-24 h-[2px] bg-[#C7A24B] mx-auto mt-6" />
      </div>

      {/* POSITIONING CARDS */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 mt-28">
        <div className="flex flex-col items-center gap-8">
          {strategicCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#C7A24B]  p-8 shadow-md w-full max-w-3xl"
            >
              <h4 className="text-2xl font-serif mb-2 text-[#1B1B1B] text-center">
                {card.title}
              </h4>

              <div className="w-16 h-px bg-[#C7A24B] mx-auto mb-6" />

              <ul className="space-y-3">
                {card.points.map((p, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="mt-2 w-2.5 h-2.5 bg-[#C7A24B] rotate-45 shrink-0" />
                    <span className="text-[#2E2E2E]">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pb-24 text-center mt-24">
        <button
          onClick={() => scrollToSection('contact')}
          className="px-4 py-2.5 text-base font-medium
                     border border-[#C7A24B] text-[#C7A24B]
                     hover:bg-[#C7A24B] hover:text-white
                     transition-all duration-300
                     hover:shadow-[0_2px_16px_rgba(199,162,75,0.3)]"
        >
          REQUEST CONSULTATION
        </button>
      </div>
    </section>
  );
}
