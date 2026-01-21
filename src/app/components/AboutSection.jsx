import profileImage from "../../assets/aboutimg.JPG";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-[#F6F4F1]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Section Label - Cursive */}
       {/* Content */}
<div className="relative z-10 max-w-4xl">
  <p
    className="text-4xl md:text-5xl text-[#C7A24B] font-serif font-normal mb-6"
  >
    The Journey
  </p>
</div>


        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Image - Editorial Style */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-white">
              <img 
                src={profileImage}
                alt="Shashi Bhushan"
                className="w-full h-full object-cover scale-x-[-1]"
              />
            </div>
            {/* Thin Gold Border Frame - Creative Detail */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C7A24B] -z-10"></div>
          </div>

          {/* Content */}
          <div className="lg:pt-6">
            <h2 
              className="text-3xl md:text-4xl text-[#1B1B1B] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              From Humble Beginnings to Global Leadership
            </h2>

            <p 
              className="text-lg text-[#1B1B1B] mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
             "The Farmer's Son With A Jewelry's Soul"
            </p>

            <div className="space-y-5">
              <p 
                className="text-base text-[#1B1B1B] leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
              A seasoned entrepreneur and industry pioneer with 25+ years of expertise in diamonds, jewelry, and gemstones, Shashi Bhushan blends artistry, technology, and ethical values to create meaningful luxury. His designs transcend aesthetics, embedding stories and emotional resonance that connect deeply with consumers. A farmer's son with a jeweler's soul, he merges the humility of agriculture with the sophistication of high-end craftsmanship to redefine jewelry as a catalyst for enriched living.
              </p>

              {/* Tagline */}
              <p 
                className="text-base md:text-lg text-[#C7A24B]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Precision | Artistry | Trust
              </p>

              {/* Pull Quote - Cursive in Content */}
              <div className="pl-6 border-l-2 border-[#C7A24B] my-6">
                <p 
                  className="text-xl text-[#C7A24B] leading-relaxed"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "He  ventured into the world of diamonds and gemstones driven by a singular belief: that jewelry is more than adornment—it's a lifeline of emotion, culture, and legacy."
                </p>
              </div>

              <p 
                className="text-base text-[#1B1B1B] leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
Over the past two decades, Shashi has built many ventures and his manufacturing company Gems Muse Limited into a globally recognized name in the luxury jewelry sector. His approach combines traditional craftsmanship with cutting-edge technology, sustainability with profitability, and artistry with strategic market positioning.

Today, he stands at the forefront of jewelry innovation, leading initiatives in ethical sourcing, technology integration in manufacturing, and brand creation for emerging markets.              </p>

              <p 
                className="text-base text-[#1B1B1B] leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Today, he stands at the forefront of jewelry innovation, leading initiatives in ethical sourcing, technology integration in manufacturing, and brand creation for emerging markets.
              </p>
            </div>

            {/* Compact Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-[#E5E3DF]">
              <div>
                <p 
                  className="text-3xl text-[#C7A24B] mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  25+
                </p>
                <p 
                  className="text-sm text-[#8B8985]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Years
                </p>
              </div>
              <div>
                <p 
                  className="text-3xl text-[#C7A24B] mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  15+
                </p>
                <p 
                  className="text-sm text-[#8B8985]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Countries
                </p>
              </div>
              <div>
                <p 
                  className="text-3xl text-[#C7A24B] mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  10+
                </p>
                <p 
                  className="text-sm text-[#8B8985]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Ventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}