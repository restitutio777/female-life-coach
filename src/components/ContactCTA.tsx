import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function ContactCTA() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="kontakt" className="py-32 md:py-40 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--c-footer)' }}>
      <div className="max-w-content mx-auto relative z-10">
        <motion.div ref={ref} className="text-center max-w-2xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-display font-300 text-5xl md:text-6xl mb-6 leading-[1.1]" style={{ color: '#FAF7F2' }}>Lass uns reden.</h2>
          <p className="font-sans font-200 text-base leading-[1.8] mb-12" style={{ color: 'rgba(250,247,242,0.60)' }}>
            Kein Verkaufsgespräch. Kein Druck. Einfach ein ehrliches Gespräch darüber, wo du stehst und wohin du willst.
          </p>
          <motion.button className="font-sans font-400 text-sm tracking-wide px-10 py-4 rounded-full mb-8 transition-all duration-300" style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }} whileHover={{ scale: 1.02 }}>
            Kennenlerngespräch buchen
          </motion.button>
          <p className="font-sans font-200 text-sm" style={{ color: 'rgba(250,247,242,0.40)' }}>
            Oder schreib mir:{' '}
            <a href="mailto:anna@annalichtenberg.de" className="underline underline-offset-4 transition-colors duration-200" style={{ color: 'rgba(250,247,242,0.60)' }}>anna@annalichtenberg.de</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
