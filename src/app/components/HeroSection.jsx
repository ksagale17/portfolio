import clientPhoto from '../../assets/heropic.JPG';

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        
        {/* Mobile Image */}
        <div className="lg:hidden absolute inset-y-0 right-0 w-full">
          <img
            src={clientPhoto}
            alt="Shashi Bhushan – Fine Jewelry Leadership"
            className="w-full h-full object-cover"
            style={{
              objectPosition: '60% center',
              filter: 'grayscale(100%) contrast(1.05) brightness(0.9)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(246,244,241,0.9), rgba(246,244,241,0.8), rgba(246,244,241,0.9))',
            }}
          />
        </div>

        {/* Desktop Left – Ivory */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-[#F6F4F1]" />

        {/* Desktop Right – Image */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
          <img
            src={clientPhoto}
            alt="Shashi Bhushan – Fine Jewelry Leadership"
            className="w-full h-full object-cover"
            style={{
              objectPosition: '50% 80%', // ✅ FIXED
              filter: 'grayscale(100%) contrast(1.05) brightness(0.9)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #F6F4F1 0%, rgba(246,244,241,0.75) 30%, rgba(246,244,241,0.3) 65%, rgba(246,244,241,0.1) 100%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 lg:px-8 py-24 w-full">
        <div className="max-w-3xl lg:max-w-2xl">

          {/* Heading */}
          <div className="mb-8">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl text-[#1B1B1B] leading-[1.25] font-normal"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Visionary Leader in <br />
              Jewelry Business Innovation
            </h1>
            <div className="w-28 h-[1px] bg-[#C7A24B] mt-6" />
          </div>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-[#8B8985] leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Founder & Director of Gems Muse Limited <br />
            <span className="font-semibold text-[#1B1B1B]">25+</span> Years in Diamonds,
            Gemstones & Jewelry
          </p>

          {/* Identity Line */}
          <p
            className="text-xl md:text-2xl flex items-center gap-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className="text-[#1B1B1B]">Entrepreneur</span>
            <span className="font-extralight text-[#C7A24B]">|</span>
            <span className="text-[#1B1B1B]">Innovator</span>
            <span className="font-extralight text-[#C7A24B]">|</span>
            <span className="text-[#1B1B1B]">Artisan</span>
          </p>

        </div>
      </div>
    </section>
  );
}
