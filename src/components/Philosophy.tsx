import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Philosophy() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="ansatz" className="py-32 md:py-40 px-6" style={{ backgroundColor: 'var(--c-bg)' }}>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-center">
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="font-sans text-[11px] font-500 tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--c-accent)' }}>
              Mein Ansatz
            </p>
            <h2 className="font-display font-400 text-4xl md:text-5xl lg:text-[3.5rem] mb-8 leading-[1.15]" style={{ color: 'var(--c-text)' }}>
              Veränderung braucht keinen Mut.<br />
              <span className="italic" style={{ color: 'var(--c-text-soft)' }}>Sie braucht Ehrlichkeit.</span>
            </h2>
            <p className="font-sans font-300 text-base leading-[1.8] mb-10" style={{ color: 'var(--c-text-soft)' }}>
              Transformation beginnt nicht mit großen Gesten, sondern mit dem leisen Moment, in dem du aufhörst, dir selbst etwas vorzumachen. In meinen Coachings schaffen wir einen Raum, in dem genau das möglich wird.
            </p>
            <blockquote
              className="font-display italic text-2xl md:text-3xl leading-relaxed border-l-[1.5px] pl-6"
              style={{ color: 'var(--c-blush)', borderColor: 'var(--c-blush)' }}
            >
              „Was wäre, wenn alles schon da ist?"
            </blockquote>
          </motion.div>

          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-64 h-64 md:w-72 md:h-72 rounded-full"
                style={{ backgroundColor: 'var(--c-blush-light)', zIndex: 0 }}
              />
              <div className="relative z-10" style={{ width: '320px', maxWidth: '100%' }}>
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
                  alt="Anna Lichtenberg"
                  className="w-full object-cover"
                  style={{
                    borderRadius: '200px 200px 20px 20px',
                    aspectRatio: '3/4',
                    boxShadow: '0 12px 40px rgba(44,40,37,0.08)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
