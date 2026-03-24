import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const steps = [
  { number: '01', title: 'Kennenlerngespräch', description: '20 Minuten, kostenfrei. Wir schauen, ob die Chemie stimmt.' },
  { number: '02', title: 'Standortbestimmung', description: 'Wo stehst du? Wo willst du hin? Was steht im Weg?' },
  { number: '03', title: 'Dein Programm', description: 'Ein individueller Fahrplan — kein Coaching von der Stange.' },
  { number: '04', title: 'Begleitung & Wachstum', description: 'Sessions, Reflexion, Integration in deinen Alltag.' },
];

export default function Process() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="weg" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-surface)' }}>
      <div className="max-w-content mx-auto">
        <motion.div ref={ref} className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-display font-400 text-4xl md:text-5xl" style={{ color: 'var(--c-text)' }}>Wie es funktioniert</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-7 top-10 bottom-10 w-px" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, var(--c-blush) 0, var(--c-blush) 6px, transparent 6px, transparent 14px)', opacity: 0.4 }} />
            <div className="space-y-14">
              {steps.map((step, i) => (
                <motion.div key={i} className="flex gap-8 items-start" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-sans font-400 text-sm relative z-10" style={{ backgroundColor: 'var(--c-blush)', color: '#FFFFFF' }}>{step.number}</div>
                  <div className="pt-3">
                    <h3 className="font-display font-500 text-2xl mb-2" style={{ color: 'var(--c-text)' }}>{step.title}</h3>
                    <p className="font-sans font-300 text-sm leading-[1.8]" style={{ color: 'var(--c-text-soft)' }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
