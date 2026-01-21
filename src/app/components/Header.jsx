import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F4F1]/95 backdrop-blur-sm border-b border-[#E5E3DF]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-3xl md:text-4xl lg:text-5xl text-[#1B1B1B] hover:text-[#C7A24B] transition-colors ml-4 lg:ml-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shashi Bhushan
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <button onClick={() => scrollToSection('about')} className="text-base text-[#1B1B1B] hover:text-[#C7A24B] transition-colors">
              The Journey
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-base text-[#1B1B1B] hover:text-[#C7A24B] transition-colors">
              Expertise
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-base text-[#1B1B1B] hover:text-[#C7A24B] transition-colors">
              Future
            </button>
            <button onClick={() => scrollToSection('investors')} className="text-base text-[#1B1B1B] hover:text-[#C7A24B] transition-colors">
              Investors
            </button>

            {/* Work With Me – Desktop */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2.5 text-base font-medium border-1 border-[#C7A24B] text-[#C7A24B]
              hover:bg-[#C7A24B] hover:text-white transition-all duration-300
              hover:shadow-[0_2px_16px_rgba(199,162,75,0.3)]"
            >
              Work With Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#1B1B1B]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#E5E3DF]">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-[#C7A24B]">
                About
              </button>
              <button onClick={() => scrollToSection('expertise')} className="text-left py-2 hover:text-[#C7A24B]">
                Expertise
              </button>
              <button onClick={() => scrollToSection('achievements')} className="text-left py-2 hover:text-[#C7A24B]">
                Achievements
              </button>
              <button onClick={() => scrollToSection('vision')} className="text-left py-2 hover:text-[#C7A24B]">
                Vision
              </button>
              <button onClick={() => scrollToSection('investors')} className="text-left py-2 hover:text-[#C7A24B]">
                Investors
              </button>

              {/* Work With Me – Mobile */}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-6 py-2.5 text-base font-medium border-2 border-[#C7A24B] text-[#C7A24B]
                hover:bg-[#C7A24B] hover:text-white transition-all duration-300 text-center"
              >
                Work With Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
