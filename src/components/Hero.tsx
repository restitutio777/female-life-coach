import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-[110%] object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(250,247,242,0.82) 0%, rgba(250,247,242,0.62) 40%, rgba(250,247,242,0.75) 100%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-sans text-[11px] font-500 tracking-[0.25em] uppercase mb-8"
          style={{ color: 'var(--c-accent)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Systemisches Coaching für Frauen
        </motion.p>

        <motion.h1
          className="font-display font-300 text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8"
          style={{ color: 'var(--c-text)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Dein Leben<br />
          wartet nicht.
          <span className="block mt-2 italic font-300" style={{ color: 'var(--c-text-italic)' }}>
            Es hat längst begonnen.
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-200 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--c-text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Ich begleite dich dabei, die Veränderung zu leben,
          die du in dir schon spürst.
        </motion.p>

        <motion.button
          className="font-sans font-400 text-sm tracking-wide px-10 py-4 rounded-full transition-all duration-300"
          style={{ backgroundColor: 'var(--c-accent)', color: '#FFFFFF' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Den ersten Schritt gehen
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} style={{ color: 'var(--c-accent)' }} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
