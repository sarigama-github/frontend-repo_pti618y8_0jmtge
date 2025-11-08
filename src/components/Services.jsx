import React from 'react';
import { Hammer, Building2, Home } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Design & Refurbishment',
    desc: 'Smart design to maximise rental income.',
  },
  {
    icon: Building2,
    title: 'Development & Projects',
    desc: 'Full project management from scope to snagging.',
  },
  {
    icon: Home,
    title: 'Property Management',
    desc: 'Tenant screening, maintenance, 24/7 support, and transparent reporting.',
  },
];

export default function Services() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';

  return (
    <section id="services" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: primary }}>Services</p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl">Design-led services to increase yield and protect assets.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border bg-[#FDFDFC] p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md" style={{ backgroundColor: '#F4EFE6' }}>
                <Icon size={20} style={{ color: gold }} />
              </div>
              <h4 className="font-serif text-xl">{title}</h4>
              <p className="mt-2 text-sm text-[#333]">{desc}</p>
              <button className="mt-4 inline-flex items-center text-sm" style={{ color: primary }}>
                Learn more →
              </button>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(217,183,122,0.6)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
