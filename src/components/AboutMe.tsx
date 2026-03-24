import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const credentials = ['Systemischer Coach (DGSF)', 'NLP Practitioner', 'Achtsamkeitstrainerin'];

export default function AboutMe() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="ueber-mich" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-bg)' }}>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[48fr_52fr] gap-16 lg:gap-24 items-center">
          <motion.div className="relative flex justify-center md:justify-start" initial={{ opacity: 0, scale: 1.03 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.9 }}>
            <div className="relative" style={{ width: '380px', maxWidth: '100%' }}>
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800" alt="Anna Lichtenberg" className="w-full object-cover"
                style={{ borderRadius: '80px 16px 80px 16px', aspectRatio: '4/5', boxShadow: '0 12px 40px rgba(44,40,37,0.08)' }} />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full" style={{ backgroundColor: 'var(--c-blush-light)', zIndex: -1 }} />
            </div>
          </motion.div>
          <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="font-sans text-[11px] font-500 tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--c-accent)' }}>Über mich</p>
            <h2 className="font-display font-400 text-4xl md:text-5xl mb-8 leading-tight" style={{ color: 'var(--c-text)' }}>Anna Lichtenberg</h2>
            <p className="font-sans font-300 text-base leading-[1.8] mb-8" style={{ color: 'var(--c-text-soft)' }}>
              Ich bin systemischer Coach, Mutter, und überzeugt davon, dass jede Frau die Antworten bereits in sich trägt. Meine Aufgabe ist es, die richtigen Fragen zu stellen. Nach 10 Jahren in der Unternehmensberatung habe ich selbst den Sprung gewagt — und begleite heute Frauen, die genau an diesem Punkt stehen.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {credentials.map((c) => (
                <span key={c} className="font-sans text-[13px] font-400 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--c-blush-light)', color: 'var(--c-blush)' }}>{c}</span>
              ))}
            </div>
            <p className="font-display italic text-lg" style={{ color: 'var(--c-text-soft)' }}>Wenn ich nicht coache: auf dem Rad, im Wald, oder mit Tee und einem guten Buch.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
