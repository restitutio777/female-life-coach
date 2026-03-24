import { motion } from 'framer-motion';
import { Heart, Compass, Flame, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const areas = [
  { icon: Heart, title: 'Lebenskrisen & Umbrüche', description: 'Trennung, Verlust, Neuanfang — festen Boden finden, wenn alles wankt.' },
  { icon: Compass, title: 'Selbstwert & innere Stimme', description: 'Die eigenen Bedürfnisse kennen, aussprechen und leben.' },
  { icon: Flame, title: 'Berufliche Neuorientierung', description: 'Herausfinden, was wirklich zu dir passt — nicht zum Lebenslauf.' },
  { icon: Leaf, title: 'Beziehungen & Grenzen', description: 'Gesunde Beziehungen gestalten — zu anderen und zu dir selbst.' },
];

export default function TransformationAreas() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="bereiche" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-blush-light)' }}>
      <div className="max-w-content mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-display font-400 text-4xl md:text-5xl" style={{ color: 'var(--c-text)' }}>Womit ich dich begleite</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div key={i} className="rounded-2xl p-8 md:p-10 cursor-default transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', border: '1px solid var(--c-card-border)' }}
                initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                whileHover={{ boxShadow: '0 16px 48px rgba(44,40,37,0.08)', y: -3 }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--c-accent-light)' }}>
                  <Icon size={20} style={{ color: 'var(--c-accent)' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-500 text-2xl mb-3" style={{ color: 'var(--c-text)' }}>{area.title}</h3>
                <p className="font-sans font-300 text-sm leading-[1.8]" style={{ color: 'var(--c-text-soft)' }}>{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
