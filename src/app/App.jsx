import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AuthorityStrip from './components/AuthorityStrip';
import AboutSection from './components/AboutSection';
import SpotLightSection from './components/SpotLightSection';
import ExpertiseSection from './components/ExpertiseSection';
import InvestorSection from './components/InvestorSection';
import VisionSection from './components/VisionSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#F6F4F1]" style={{ fontFamily: 'var(--font-sans)' }}>
      <Header />
      <main>
        <HeroSection />
        <AuthorityStrip />
        <AboutSection />
        <SpotLightSection />
        <ExpertiseSection />
        <InvestorSection/>
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}