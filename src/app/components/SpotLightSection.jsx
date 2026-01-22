import { useState, useEffect } from "react";

/* ===================== LOCAL IMAGE IMPORTS ===================== */
import sp1 from "../../assets/P23.jpg";
import sp2 from "../../assets/P51.jpg";
import sp3 from "../../assets/P12.jpg";
import sp9 from "../../assets/sp9.JPG";
import sp11 from "../../assets/sp11.JPG";
import sp12 from "../../assets/sp12.jpg";
import sp14 from "../../assets/sp14.jpg";
import sp16 from "../../assets/sp16.jpg";
import sp17 from "../../assets/sp17.jpg";
import sp20 from "../../assets/sp20.JPG";
/* =============================================================== */

export default function SpotLightSection() {
  // ===================== IMAGE OBJECT =====================
  const images = { sp1, sp2, sp3, sp9, sp11, sp12, sp14, sp16, sp17, sp20 };

  // ===================== IMAGE SEQUENCE =====================
  const sequence = ["sp1", "sp9", "sp12", "sp2", "sp11", "sp14", "sp3", "sp20", "sp17", "sp16"];

  // ===================== CARDS ARRAY =====================
  const cards = sequence.map((name) => ({ image: images[name] }));

  // ===================== STATE =====================
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // ===================== RESPONSIVE CHECK =====================
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ===================== ROTATION ANIMATION =====================
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // ===================== RESPONSIVE VALUES =====================
const cardWidth = isMobile ? 100 : isTablet ? 140 : 160; // reduced
const cardHeight = isMobile ? 140 : isTablet ? 200 : 220; // reduced
const radius = isMobile ? 200 : isTablet ? 300 : 400; // reduced
const perspective = isMobile ? 800 : isTablet ? 1200 : 1600; // slightly reduced
const containerHeight = isMobile ? 250 : isTablet ? 350 : 400; // smaller container


  // ===================== FRONT CARD INDEX =====================
  const frontIndex = Math.round((rotation % 360) / (360 / cards.length)) % cards.length;

  return (
    <section id="spotlight" className="py-16 lg:py-24 bg-[#F6F4F1]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

     {/* ===================== SECTION TITLE ===================== */}
<div className="mb-8 flex flex-col items-center">
  <p className="text-3xl md:text-4xl lg:text-5xl text-[#C7A24B] font-serif font-normal tracking-wide">
    SpotLight
  </p>

  {/* Centered partial underline */}
  <div className="mt-3 w-20 h-[1px] bg-[#1B1B1B]" />
</div>





        {/* ===================== HEADING ===================== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            className="text-2xl md:text-4xl lg:text-6xl text-[#1B1B1B] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Redefining Luxury. <br /> One Story at a Time.
          </h2>

          <p
            className="text-sm md:text-base lg:text-lg text-[#1B1B1B]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Global market builder, tech integrator, and sustainability advocate
            driving your brand&apos;s growth.
          </p>
        </div>

        {/* ===================== 3D CAROUSEL ===================== */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{ height: `${containerHeight}px` }}
        >
          <div
            className="relative w-full h-full"
            style={{ perspective: `${perspective}px` }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${rotation}deg)`,
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                {cards.map((card, index) => {
                  const angle = (360 / cards.length) * index;
                  const isFront = index === frontIndex;

                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        top: "50%",
                        left: "50%",
                        marginLeft: `-${cardWidth / 2}px`,
                        marginTop: `-${cardHeight / 2}px`,
                        transition: "transform 0.3s, box-shadow 0.3s",
                        zIndex: isFront ? 10 : 1,
                      }}
                    >
                      <div
                        className="overflow-hidden bg-white rounded-[16px] lg:rounded-[24px]"
                        style={{
                          width: `${cardWidth}px`,
                          height: `${cardHeight}px`,
                          boxShadow: isFront
                            ? "0 30px 80px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.15)"
                            : "0 20px 60px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.12)",
                          transform: isFront ? "scale(1.05)" : "scale(1)",
                        }}
                      >
                        <img
                          src={card.image}
                          alt="Luxury jewelry"
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
