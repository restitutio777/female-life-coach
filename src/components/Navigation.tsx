import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Angebot', href: '#angebot' },
  { label: 'Weg', href: '#weg' },
  { label: 'Stimmen', href: '#stimmen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'var(--c-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--c-divider)' : '1px solid transparent',
        }}
      >
        <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="flex items-baseline gap-1.5 group flex-shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span
              className="font-display italic text-2xl lg:text-[1.75rem] leading-none"
              style={{ color: 'var(--c-text)', fontWeight: 400 }}
            >
              Anna
            </span>
            <span
              className="font-sans text-xs lg:text-[13px] leading-none tracking-[0.1em] uppercase"
              style={{ color: 'var(--c-text-soft)', fontWeight: 300 }}
            >
              Lichtenberg
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-[13px] font-300 tracking-wide transition-colors duration-200"
                style={{ color: 'var(--c-text-soft)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-text-soft)')}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#kontakt')}
              className="font-sans text-[13px] font-400 tracking-wide px-6 py-2.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
            >
              Kennenlerngespräch
            </button>
          </nav>

          <button
            className="lg:hidden p-2"
            style={{ color: 'var(--c-text)' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col pt-8 pb-12 px-8"
              style={{ backgroundColor: 'var(--c-bg)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              <button
                className="self-end p-2 mb-12"
                style={{ color: 'var(--c-text)' }}
                onClick={() => setMobileOpen(false)}
              >
                <X size={22} strokeWidth={1.5} />
              </button>
              <nav className="flex flex-col gap-7">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="font-display text-2xl font-400 text-left"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('#kontakt')}
                  className="font-sans text-sm font-400 tracking-wide px-6 py-3 rounded-full mt-4"
                  style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
                >
                  Kennenlerngespräch
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
