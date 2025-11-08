import React from 'react';
import { ShieldCheck, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';
  const offWhite = '#F5F5F2';

  return (
    <section id="about" className="relative w-full bg-[#F5F5F2] py-20 text-[#0b1f19]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: primary }}>Who we are</p>
          <h3 className="mt-2 font-serif text-3xl md:text-4xl" style={{ color: '#1E1E1B' }}>
            We’re The Gate PM — a London-based in-house team delivering design-led property management that protects value and grows returns.
          </h3>
          <p className="mt-4 text-base text-[#333]">
            We handle everything from refurbishment to day-to-day operations.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <ShieldCheck size={20} style={{ color: gold }} />
              <span className="text-sm">Full transparency — live reporting dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <Users size={20} style={{ color: gold }} />
              <span className="text-sm">In-house trades & design team — faster delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp size={20} style={{ color: gold }} />
              <span className="text-sm">Proven results — measurable uplift in yield</span>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
            alt="Team at work"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
