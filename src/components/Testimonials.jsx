import React from 'react';

const testimonials = [
  {
    quote: 'Working with The Gate PM increased our monthly yield by 22% in six months.',
    author: 'Sarah H., Kensington',
  },
  {
    quote: 'Fast delivery, excellent trades, and clear reporting — highly recommended.',
    author: 'Tom R., Fulham',
  },
  {
    quote: 'They handled everything; I now sleep easy knowing the property is in good hands.',
    author: 'A. Patel, Notting Hill',
  },
];

export default function Testimonials() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: primary }}>Testimonials</p>
          <h3 className="mt-2 font-serif text-3xl md:text-4xl">What landlords say</h3>
        </div>
        <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[280px] snap-start rounded-xl border bg-[#FDFDFC] p-6 shadow-sm md:min-w-[420px]"
              style={{ borderColor: 'rgba(30,90,67,0.15)' }}
            >
              <p className="font-serif text-xl leading-relaxed">“{t.quote}”</p>
              <p className="mt-4 text-sm text-[#333]">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
