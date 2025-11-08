import React from 'react';

export default function Projects() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';

  return (
    <section id="projects" className="w-full bg-[#F5F5F2] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: primary }}>Featured Projects</p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl">Results across prime London postcodes.</h3>
          </div>
          <button className="hidden rounded-md px-4 py-2 text-sm md:block" style={{ color: primary, border: '1px solid rgba(30,90,67,0.2)' }}>
            See all projects →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left hero case */}
          <div className="relative col-span-1 overflow-hidden rounded-xl md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
              alt="Kensington Townhouse"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="rounded-full px-3 py-1 text-xs" style={{ backgroundColor: gold, color: '#0b1f19' }}>+28%</span>
              <h4 className="mt-2 font-serif text-2xl">Kensington townhouse — full refurbishment.</h4>
              <p className="mt-1 text-sm text-white/90">Challenge: dated layout. Solution: reconfigured plan + bespoke kitchens. Result: +28% rental uplift.</p>
            </div>
          </div>

          {/* Right thumbnails */}
          <div className="grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop"
                alt="Notting Hill Flat"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-serif">Notting Hill Flat</p>
                <p className="text-sm text-white/90">+22% yield</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1522706604294-df95a3cc6b59?q=80&w=1200&auto=format&fit=crop"
                alt="Fulham Conversion"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-serif">Fulham Conversion</p>
                <p className="text-sm text-white/90">Studio to 1-bed redesign</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <button className="w-full rounded-md px-4 py-2 text-sm" style={{ color: primary, border: '1px solid rgba(30,90,67,0.2)' }}>
            See all projects →
          </button>
        </div>
      </div>
    </section>
  );
}
