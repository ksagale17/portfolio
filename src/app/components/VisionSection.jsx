import { Heart, Target, Zap } from "lucide-react";
import visionImg from "../../assets/sp6.PNG";

export default function VisionSection() {
  const pillars = [
    {
      icon: Heart,
      title: "Story-Driven Design",
      description:
        "Every piece tells a story. We create emotional connections that transcend generations.",
    },
    {
      icon: Target,
      title: "Scalable Luxury",
      description:
        "Building systems that deliver premium quality while enabling growth and market expansion.",
    },
    {
      icon: Zap,
      title: "Tech-Forward Sustainability",
      description:
        "Innovation meets responsibility. Modern manufacturing with ethical sourcing at its core.",
    },
  ];

  return (
    <section
      id="vision"
      className="relative py-16 lg:py-24 bg-white border-t border-[#E5E3DF] overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 relative">

        {/* Desktop Floating Image */}
        <div className="absolute right-0 top-[160px] w-[36%] h-[420px] hidden lg:block z-0">
          <img
            src={visionImg}
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "60% center", // ✅ SAME focus everywhere
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-4xl md:text-5xl text-[#C7A24B] font-serif mb-6">
            The Future
          </p>

          <h2 className="text-4xl md:text-5xl text-[#1B1B1B] mb-6 leading-tight font-serif">
            Jewelry is a Lifeline of Emotion, <br />
            Culture and Legacy,
            <br />
            <span className="opacity-80">More Than Luxury</span>
          </h2>

          {/* Mobile & Tablet Image (same crop as desktop) */}
          <div className="block lg:hidden mb-10">
            <img
              src={visionImg}
              alt="Luxury Jewelry"
              className="w-full h-[240px] md:h-[320px] object-cover rounded-sm"
              style={{
                objectPosition: "60% center", // ✅ matches desktop
              }}
            />
          </div>

          <div className="w-28 h-[2px] bg-[#C7A24B] mb-6" />

          <p className="text-lg text-[#8B8985] leading-relaxed mb-4">
            The future of jewelry is not just about adorning the body—it’s about
            expressing identity, values, and digital persona, all while
            respecting people and the planet. In every culture, across every
            generation, jewelry has been more than decoration. It’s memory,
            identity, celebration, legacy.
          </p>

          <p className="text-lg text-[#C7A24B] mb-14">
            A Future shaped by people, craft, and responsibility
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl relative z-10">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 bg-[#F6F4F1] border-t-2 border-[#C7A24B]"
            >
              <pillar.icon
                className="w-9 h-9 text-[#C7A24B] mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg text-[#1B1B1B] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#8B8985] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Future Outlook */}
        <div className="mt-20 relative z-10">
          <h3 className="text-4xl md:text-5xl text-center mb-6 font-serif text-[#1B1B1B]">
            Future Outlook
          </h3>

          <div className="w-20 h-[2px] bg-[#C7A24B] mx-auto mb-8" />

          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-[#8B8985]">
            The traditional jewelry business is transitioning into a
            tech-infused, transparent, and experience-driven industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Build trust through radical transparency.",
              "Leverage technology for creation and connection.",
              "Tell compelling ethical stories.",
              "Deliver seamless omnichannel experiences.",
            ].map((text, i) => (
              <div
                key={i}
                className="relative bg-[#F6F4F1] border border-[#E5E3DF] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#C7A24B]" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#C7A24B]" />
                <p className="text-[#1B1B1B]">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
