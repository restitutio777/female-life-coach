import { motion } from 'framer-motion';
import { User, Sparkles, Zap, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const programs = [
  { icon: User, title: 'Einzelcoaching', details: '6 Sessions à 75 Min · 3 Monate', description: 'Für deine persönliche Reise — fokussiert, individuell, in deinem Tempo.', price: 'Preis im Gespräch', features: ['6 individuelle Sessions', 'Persönlicher Fahrplan', 'Session-Nachbereitungen', 'E-Mail Support'], highlighted: false },
  { icon: Sparkles, title: 'Intensive Begleitung', details: '12 Sessions · 6 Monate · WhatsApp Support', description: 'Für tiefgreifende Veränderung mit durchgehender Begleitung.', price: 'Preis im Gespräch', features: ['12 intensive Sessions', 'WhatsApp Begleitung', 'Persönlicher Fahrplan', 'Reflexionsübungen', 'Follow-up nach Abschluss'], highlighted: true },
  { icon: Zap, title: 'Intensivtag', details: '1 Tag · 6 Stunden · Follow-up Session', description: 'Ein ganzer Tag nur für dich — wenn du Klarheit brauchst, jetzt.', price: 'Preis im Gespräch', features: ['6 Stunden intensive Arbeit', 'Vorab-Reflexion', 'Follow-up Session', 'Dein persönlicher Fahrplan'], highlighted: false },
];

export default function Program() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="angebot" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-bg)' }}>
      <div className="max-w-content mx-auto">
        <motion.div ref={ref} className="text-center mb-6" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-display font-400 text-4xl md:text-5xl mb-4" style={{ color: 'var(--c-text)' }}>Dein Weg mit mir</h2>
          <p className="font-sans font-300 text-base" style={{ color: 'var(--c-text-soft)' }}>Jeder Weg ist anders. Hier findest du den passenden Rahmen.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 items-start">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i} className="relative rounded-2xl p-8 md:p-9 flex flex-col"
                style={{ backgroundColor: 'var(--c-surface)', border: p.highlighted ? '1.5px solid var(--c-card-highlight)' : '1px solid var(--c-divider)', boxShadow: p.highlighted ? '0 12px 40px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.03)' }}
                initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }} whileHover={{ y: -4 }}>
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[10px] font-500 tracking-[0.2em] uppercase px-4 py-1.5 rounded-full" style={{ backgroundColor: 'var(--c-badge)', color: '#FFFFFF' }}>Empfohlen</span>
                )}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--c-accent-light)' }}>
                  <Icon size={18} style={{ color: 'var(--c-accent)' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-500 text-2xl mb-1" style={{ color: 'var(--c-text)' }}>{p.title}</h3>
                <p className="font-sans text-[11px] font-500 tracking-wide mb-4" style={{ color: 'var(--c-accent)' }}>{p.details}</p>
                <p className="font-sans font-300 text-sm leading-[1.7] mb-6" style={{ color: 'var(--c-text-soft)' }}>{p.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--c-blush)' }} />
                      <span className="font-sans text-sm font-300" style={{ color: 'var(--c-text-soft)' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="font-display italic font-400 text-xl mb-6" style={{ color: 'var(--c-text-soft)' }}>{p.price}</div>
                <motion.button className="w-full font-sans font-400 text-sm tracking-wide py-3.5 rounded-full transition-all duration-300"
                  style={{ backgroundColor: p.highlighted ? 'var(--c-accent)' : 'transparent', color: p.highlighted ? '#FFFFFF' : 'var(--c-text)', border: p.highlighted ? 'none' : '1px solid var(--c-divider)' }}
                  onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                  Anfragen
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
