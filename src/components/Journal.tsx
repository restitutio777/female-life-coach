import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const articles = [
  { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600', tag: 'Mindset', title: 'Warum Veränderung kein Feind ist', excerpt: 'Wir fürchten Veränderung — dabei ist sie das Einzige, das uns wirklich befreit.' },
  { image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600', tag: 'Impulse', title: '5 Fragen, die alles verändern', excerpt: 'Manchmal braucht es nur die richtigen Fragen, um eine neue Perspektive zu finden.' },
  { image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=600', tag: 'Praxis', title: 'Die Kunst des Loslassens', excerpt: 'Loslassen heißt nicht aufgeben — es heißt, Platz zu schaffen.' },
];

export default function Journal() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="journal" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-surface)' }}>
      <div className="max-w-content mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-display font-400 text-4xl md:text-5xl" style={{ color: 'var(--c-text)' }}>Gedanken &amp; Impulse</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article key={i} className="group cursor-pointer" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}>
              <div className="overflow-hidden rounded-2xl mb-6">
                <img src={a.image} alt={a.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ aspectRatio: '4/3' }} />
              </div>
              <span className="font-sans text-[10px] font-500 tracking-[0.2em] uppercase" style={{ color: 'var(--c-blush)' }}>{a.tag}</span>
              <h3 className="font-display font-500 text-xl mt-2.5 mb-2 leading-snug" style={{ color: 'var(--c-text)' }}>{a.title}</h3>
              <p className="font-sans font-300 text-sm leading-[1.7] mb-4" style={{ color: 'var(--c-text-soft)' }}>{a.excerpt}</p>
              <span className="font-sans text-sm font-400 flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5" style={{ color: 'var(--c-accent)' }}>
                Weiterlesen <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
