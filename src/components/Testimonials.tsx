import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const testimonials = [
  { quote: 'Ich kam mit dem Gefühl, festzustecken. Nach drei Monaten hatte ich nicht nur einen neuen Job — sondern ein neues Selbstverständnis.', name: 'Lena M.', context: '34, Marketing-Leiterin' },
  { quote: 'Anna hat eine Art, die dich gleichzeitig hält und herausfordert. Genau das habe ich gebraucht.', name: 'Tobias K.', context: '41, Gründer' },
  { quote: 'Zum ersten Mal in meinem Leben habe ich das Gefühl, meine eigenen Entscheidungen zu treffen.', name: 'Julia S.', context: '29, im Berufswechsel' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>();

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section id="stimmen" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-blush-light)' }}>
      <div className="max-w-content mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-display font-400 text-4xl md:text-5xl" style={{ color: 'var(--c-text)' }}>Stimmen</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={active} className="text-center px-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6 }}>
                <div className="font-display leading-none mb-6 select-none" style={{ color: 'var(--c-blush)', fontSize: '80px', lineHeight: 0.6, fontWeight: 300 }}>&ldquo;</div>
                <p className="font-display italic text-2xl md:text-3xl leading-[1.5] mb-10" style={{ color: 'var(--c-text)' }}>{testimonials[active].quote}</p>
                <div className="w-8 h-px mx-auto mb-4" style={{ backgroundColor: 'var(--c-blush)' }} />
                <p className="font-sans font-400 text-sm" style={{ color: 'var(--c-text)' }}>{testimonials[active].name}</p>
                <p className="font-sans font-300 text-sm mt-0.5" style={{ color: 'var(--c-text-soft)' }}>{testimonials[active].context}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className="w-2 h-2 rounded-full transition-all duration-500"
                style={{ backgroundColor: i === active ? 'var(--c-accent)' : 'var(--c-divider)', transform: i === active ? 'scale(1.3)' : 'scale(1)' }} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
