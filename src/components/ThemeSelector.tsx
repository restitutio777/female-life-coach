import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { themes, ThemeKey } from '../themes';
import { Palette } from 'lucide-react';

interface Props {
  active: ThemeKey;
  onChange: (key: ThemeKey) => void;
}

const keys: ThemeKey[] = ['feminine', 'fresh', 'modern'];

export default function ThemeSelector({ active, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-2 p-3 rounded-2xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {keys.map((key) => {
              const t = themes[key];
              const isActive = key === active;
              return (
                <button
                  key={key}
                  onClick={() => { onChange(key); setOpen(false); }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? 'rgba(0,0,0,0.04)' : 'transparent',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 transition-transform duration-200"
                    style={{
                      backgroundColor: t.preview,
                      transform: isActive ? 'scale(1.15)' : 'scale(1)',
                      boxShadow: isActive ? `0 0 0 2px white, 0 0 0 3.5px ${t.preview}` : 'none',
                    }}
                  />
                  <span
                    className="font-sans text-[13px] font-400 whitespace-nowrap"
                    style={{ color: isActive ? '#1a1a1a' : '#8a8a8a' }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          backgroundColor: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette size={18} style={{ color: themes[active].preview }} strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}
