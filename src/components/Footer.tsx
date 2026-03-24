import { Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Angebot', href: '#angebot' },
  { label: 'Mein Weg', href: '#weg' },
  { label: 'Stimmen', href: '#stimmen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="px-6 pt-16 pb-8" style={{ backgroundColor: 'var(--c-footer)' }}>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(250,247,242,0.07)' }}>
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display italic text-2xl" style={{ color: '#FAF7F2', fontWeight: 400 }}>Anna</span>
              <span className="font-sans text-sm tracking-[0.12em] uppercase" style={{ color: 'rgba(250,247,242,0.50)', fontWeight: 300 }}>Lichtenberg</span>
            </div>
            <p className="font-sans font-200 text-sm leading-[1.7]" style={{ color: 'rgba(250,247,242,0.40)' }}>Systemisches Coaching für Frauen, die eine echte Veränderung wollen.</p>
          </div>
          <div>
            <p className="font-sans text-[10px] font-500 tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--c-blush)' }}>Navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)} className="font-sans text-sm font-200 text-left transition-colors duration-200" style={{ color: 'rgba(250,247,242,0.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF7F2')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.45)')}>{link.label}</button>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-sans text-[10px] font-500 tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--c-blush)' }}>Kontakt</p>
            <a href="mailto:anna@annalichtenberg.de" className="font-sans text-sm font-200 block mb-6 transition-colors duration-200" style={{ color: 'rgba(250,247,242,0.45)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FAF7F2')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.45)')}>anna@annalichtenberg.de</a>
            <div className="flex gap-3">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200" style={{ backgroundColor: 'rgba(250,247,242,0.06)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(250,247,242,0.12)')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(250,247,242,0.06)')} aria-label={i === 0 ? 'Instagram' : 'LinkedIn'}>
                  <Icon size={15} style={{ color: 'rgba(250,247,242,0.55)' }} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs font-200" style={{ color: 'rgba(250,247,242,0.25)' }}>© 2026 Anna Lichtenberg</p>
          <div className="flex gap-6">
            {['Impressum', 'Datenschutz'].map((item) => (
              <a key={item} href="#" className="font-sans text-xs font-200 transition-colors duration-200" style={{ color: 'rgba(250,247,242,0.25)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.55)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.25)')}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
