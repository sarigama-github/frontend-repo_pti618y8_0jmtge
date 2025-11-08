import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Typography pairing: Playfair Display for headings, Inter for body text
    document.documentElement.style.setProperty('--tw-ring-color', '#D9B77A');
  }, []);

  return (
    <div className="min-h-screen w-full scroll-smooth" style={{ backgroundColor: '#F5F5F2', color: '#0b1f19' }}>
      <style>{`
        h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; }
        body, p, span, a, input, textarea, button { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
