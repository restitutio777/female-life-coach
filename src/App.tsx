import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import BotanicalDivider from './components/BotanicalDivider';
import TransformationAreas from './components/TransformationAreas';
import AboutMe from './components/AboutMe';
import Program from './components/Program';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import { themes, ThemeKey } from './themes';

export default function App() {
  const [theme, setTheme] = useState<ThemeKey>('feminine');

  useEffect(() => {
    const root = document.documentElement;
    const colors = themes[theme].colors;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--c-bg)' }}>
      <Navigation />
      <Hero />
      <Philosophy />
      <TransformationAreas />
      <AboutMe />
      <BotanicalDivider />
      <Program />
      <Process />
      <BotanicalDivider flip />
      <Testimonials />
      <Journal />
      <ContactCTA />
      <Footer />
      <ThemeSelector active={theme} onChange={setTheme} />
    </div>
  );
}
