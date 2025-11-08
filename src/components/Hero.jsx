import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';
  const offWhite = '#F5F5F2';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full text-white" style={{ backgroundColor: primary }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1f19]/70 via-[#0b1f19]/60 to-[#0b1f19]/85" />
      </div>

      {/* Top navigation */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md" style={{ background: `linear-gradient(135deg, ${gold}, #b79558)` }} />
          <div>
            <p className="text-sm tracking-wide" style={{ color: gold }}>THE GATE</p>
            <h1 className="text-lg font-serif leading-none">PM</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { id: 'about', label: 'About' },
            { id: 'services', label: 'Services' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm tracking-wide text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-[10px] border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur transition-all hover:border-white/30 hover:bg-white/20"
          >
            Book audit
          </button>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
            London · Property Management
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl" style={{ color: offWhite }}>
            Premium property management for London’s bespoke homes.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
            Full-service property strategy: design & refurbishment, tenant management, and hands-on oversight that increases rental yield.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-[10px] px-5 py-3 text-sm font-medium shadow-md transition-all"
              style={{ backgroundColor: primary, border: `1px solid ${gold}`, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
            >
              Book your free audit
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-[10px] border px-5 py-3 text-sm font-medium transition-colors"
              style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
            >
              See case studies
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/90">
            <span>250+ projects</span>
            <span className="opacity-40">·</span>
            <span>12 years experience</span>
            <span className="opacity-40">·</span>
            <span>25% avg rental uplift</span>
          </div>
        </div>

        {/* Audit card */}
        <div className="w-full max-w-md justify-self-start rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur md:justify-self-end">
          <h3 className="font-serif text-2xl text-white">Free Property Audit</h3>
          <p className="mt-1 text-sm text-white/80">Get a tailored plan to increase yield and protect value.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you. We will contact you shortly.');
            }}
            className="mt-5 space-y-3"
          >
            <div>
              <label className="mb-1 block text-xs text-white/70">Postcode</label>
              <input
                required
                placeholder="e.g., SW7 2AZ"
                className="w-full rounded-md border border-white/20 bg-white/90 px-3 py-2 text-sm text-[#0b1f19] placeholder:text-[#0b1f19]/60 focus:outline-none focus:ring-2"
                style={{ outlineColor: gold }}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70">Email</label>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full rounded-md border border-white/20 bg-white/90 px-3 py-2 text-sm text-[#0b1f19] placeholder:text-[#0b1f19]/60 focus:outline-none focus:ring-2"
                style={{ outlineColor: gold }}
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-[10px] px-4 py-2 text-sm font-medium text-[#0b1f19] shadow-md transition-transform hover:translate-y-[-1px]"
              style={{ backgroundColor: gold }}
            >
              Request audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
