import { useState } from 'react';
import { Mail, Linkedin, Instagram, Send, Facebook } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/email/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-20 bg-[#F6F4F1] border-t border-[#E5E3DF]"
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl text-[#1B1B1B] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Build Beyond Extraordinary
            </h2>

            {/* Thin underline */}
            <div className="w-24 h-px bg-[#C7A24B] mb-6" />

            <p
              className="text-base text-[#8B8985] mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              For the visionary founder, the expanding house, the strategic investor.
              Let’s build, scale, and define a new era—together.
            </p>

            {/* CONNECT */}
            <div className="space-y-5 mb-8">
              <p
                className="text-xs tracking-wider text-[#1B1B1B] flex items-center gap-2"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.08em' }}
              >
                CONNECT
                <span>→</span>
              </p>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-white border border-[#E5E3DF]">
                  <Mail className="w-5 h-5 text-[#C7A24B]" strokeWidth={1.5} />
                </div>

                <div className="pt-1">
                  <p
                    className="text-xs text-[#8B8985] mb-1 tracking-wider"
                    style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.08em' }}
                  >

                  </p>

                  <a
                    href="mailto:shashi@shashi.me"
                    className="text-base text-[#1B1B1B] hover:text-[#C7A24B] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: '400' }} // normal weight
                  >
                    shashi@shashi.me
                  </a>

                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/shashi.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 flex items-center justify-center bg-white border border-[#E5E3DF]
                           hover:border-[#C7A24B] hover:bg-[#C7A24B]
                           text-[#1B1B1B] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>

              <a
                href="https://www.linkedin.com/in/shashi-bhushan-11083b14/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center bg-white border border-[#E5E3DF]
                           hover:border-[#C7A24B] hover:bg-[#C7A24B]
                           text-[#1B1B1B] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>

              <a
                href="https://www.facebook.com/ShashiJeweled"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 flex items-center justify-center bg-white border border-[#E5E3DF]
                           hover:border-[#C7A24B] hover:bg-[#C7A24B]
                           text-[#1B1B1B] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (FORM) ================= */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 border border-[#E5E3DF]">
              <div className="flex items-center gap-3 mb-5">
                <Send className="w-6 h-6 text-[#C7A24B]" strokeWidth={1.5} />
                <h3
                  className="text-2xl text-[#1B1B1B]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Send a Message
                </h3>
              </div>

              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-block p-4 bg-[#C7A24B] rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <p
                    className="text-xl text-[#1B1B1B] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Message Sent
                  </p>

                  <p
                    className="text-sm text-[#8B8985]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    I’ll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 w-full max-w-[320px] mx-auto"
                >
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-sm
                               focus:border-[#C7A24B] outline-none"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-sm
                               focus:border-[#C7A24B] outline-none"
                  />

                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-[#F6F4F1] border border-[#E5E3DF] text-sm
                               focus:border-[#C7A24B] outline-none resize-none"
                  />

                  <div className="flex justify-center pt-2 flex-col items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2.5 text-base font-medium
                                 border border-[#C7A24B] text-[#C7A24B]
                                 hover:bg-[#C7A24B] hover:text-white
                                 transition-all duration-300
                                 hover:shadow-[0_2px_16px_rgba(199,162,75,0.3)]
                                 flex items-center gap-2
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
