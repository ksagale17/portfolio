import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AuthorityStrip from "./components/AuthorityStrip";
import AboutSection from "./components/AboutSection";
import SpotLightSection from "./components/SpotLightSection";
import ExpertiseSection from "./components/ExpertiseSection";
import InvestorSection from "./components/InvestorSection";
import VisionSection from "./components/VisionSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#F6F4F1]" style={{ fontFamily: "var(--font-sans)" }}>
      <Helmet>
        <title>
          Shashi Bhushan | Visionary Leader in Jewelry Business Innovation
        </title>
        <meta
          name="description"
          content="Discover Shashi Bhushan's portfolio showcasing visionary leadership in jewelry business innovation, expertise in design, and future-forward strategies."
        />
        <meta
          name="keywords"
          content="Shashi Bhushan, jewelry business, innovation, visionary leader, portfolio, design expertise"
        />
        <meta
          property="og:title"
          content="Shashi Bhushan | Visionary Leader in Jewelry Business Innovation"
        />
        <meta
          property="og:description"
          content="Explore the professional portfolio of Shashi Bhushan, a leader in jewelry innovation and design."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shashi Bhushan | Visionary Leader in Jewelry Business Innovation"
        />
        <meta
          name="twitter:description"
          content="Discover Shashi Bhushan's portfolio showcasing visionary leadership in jewelry business innovation."
        />
        <meta name="twitter:image" content="/favicon.png" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <AuthorityStrip />
        <AboutSection />
        <SpotLightSection />
        <ExpertiseSection />
        <InvestorSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
