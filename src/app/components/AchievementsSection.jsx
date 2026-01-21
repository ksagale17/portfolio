import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function AchievementsSection() {
  const milestones = [
    {
      year: '2004',
      location: 'Mumbai, India',
      title: 'Founded Gems Muse Limited',
      metric: 'Company Launch'
    },
    {
      year: '2010',
      location: 'Hong Kong',
      title: 'Asia-Pacific Expansion',
      metric: '₹15Cr Revenue'
    },
    {
      year: '2016',
      location: 'New York, USA',
      title: 'US Market Entry',
      metric: '25+ Partners'
    },
    {
      year: '2020',
      location: 'Dubai, UAE',
      title: 'Middle East Operations',
      metric: '5 Countries'
    },
    {
      year: '2024',
      location: 'Bangkok, Thailand',
      title: 'Southeast Asia Hub',
      metric: '₹50Cr+ Revenue'
    }
  ];

  const stats = [
    { value: '300%', label: 'Growth in 5 Years' },
    { value: '12', label: 'Industry Awards' },
    { value: '500+', label: 'Team Members' },
    { value: '50K+', label: 'Pieces Created' }
  ];

  return (
    <section id="achievements" className="py-16 lg:py-20 bg-[#F6F4F1] border-t border-[#E5E3DF]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="text-3xl md:text-4xl text-[#1B1B1B] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Track Record & Global Footprint
          </h2>
          <div className="w-24 h-[2px] bg-[#C7A24B]"></div>
        </div>

        {/* Alternating Timeline with Center Line */}
        <div className="relative max-w-[1200px] mx-auto mb-16">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C7A24B] via-[#C7A24B]/60 to-[#C7A24B] hidden lg:block -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Mobile Layout (Stacked) */}
                  <div className="lg:hidden">
                    <div className="flex items-start gap-4">
                      {/* Dot */}
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#C7A24B] border-4 border-[#F6F4F1] mt-1"></div>
                      
                      {/* Card */}
                      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-[#E5E3DF]">
                        <p 
                          className="text-2xl text-[#C7A24B] mb-2"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {milestone.year}
                        </p>
                        <h3 
                          className="text-xl text-[#1B1B1B] mb-2"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {milestone.title}
                        </h3>
                        <p 
                          className="text-[#C7A24B] mb-2"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {milestone.metric}
                        </p>
                        <p 
                          className="flex items-center gap-2 text-sm text-[#8B8985]"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          <MapPin className="w-4 h-4" strokeWidth={1.5} />
                          {milestone.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout (Alternating) */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Left Side */}
                    {isLeft ? (
                      <>
                        {/* Card on Left */}
                        <div className="flex justify-end">
                          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E3DF] max-w-md w-full hover:shadow-md transition-shadow">
                            <p 
                              className="text-2xl text-[#C7A24B] mb-2"
                              style={{ fontFamily: 'var(--font-serif)' }}
                            >
                              {milestone.year}
                            </p>
                            <h3 
                              className="text-xl text-[#1B1B1B] mb-2"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {milestone.title}
                            </h3>
                            <p 
                              className="text-[#C7A24B] mb-2"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {milestone.metric}
                            </p>
                            <p 
                              className="flex items-center gap-2 text-sm text-[#8B8985]"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              <MapPin className="w-4 h-4" strokeWidth={1.5} />
                              {milestone.location}
                            </p>
                          </div>
                        </div>
                        {/* Empty Right */}
                        <div></div>
                      </>
                    ) : (
                      <>
                        {/* Empty Left */}
                        <div></div>
                        {/* Card on Right */}
                        <div className="flex justify-start">
                          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E3DF] max-w-md w-full hover:shadow-md transition-shadow">
                            <p 
                              className="text-2xl text-[#C7A24B] mb-2"
                              style={{ fontFamily: 'var(--font-serif)' }}
                            >
                              {milestone.year}
                            </p>
                            <h3 
                              className="text-xl text-[#1B1B1B] mb-2"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {milestone.title}
                            </h3>
                            <p 
                              className="text-[#C7A24B] mb-2"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {milestone.metric}
                            </p>
                            <p 
                              className="flex items-center gap-2 text-sm text-[#8B8985]"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              <MapPin className="w-4 h-4" strokeWidth={1.5} />
                              {milestone.location}
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Center Dot - Positioned Absolutely */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-[#C7A24B] border-4 border-[#F6F4F1] shadow-sm"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#E5E3DF]">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p 
                className="text-3xl text-[#C7A24B] mb-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {stat.value}
              </p>
              <p 
                className="text-sm text-[#8B8985]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
