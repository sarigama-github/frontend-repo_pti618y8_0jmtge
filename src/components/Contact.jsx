import React from 'react';

export default function Contact() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';

  return (
    <section id="contact" className="w-full bg-[#F5F5F2] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: primary }}>Contact</p>
          <h3 className="mt-2 font-serif text-3xl md:text-4xl">Request your free audit</h3>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will be in touch.'); }}
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-[#333]">Name</label>
                <input className="w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: 'rgba(30,90,67,0.2)', outlineColor: gold }} />
              </div>
              <div>
                <label className="mb-1 block text-xs text-[#333]">Email</label>
                <input type="email" className="w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: 'rgba(30,90,67,0.2)', outlineColor: gold }} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-[#333]">Phone</label>
                <input className="w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: 'rgba(30,90,67,0.2)', outlineColor: gold }} />
              </div>
              <div>
                <label className="mb-1 block text-xs text-[#333]">Property Postcode</label>
                <input className="w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: 'rgba(30,90,67,0.2)', outlineColor: gold }} />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-[#333]">Message</label>
              <textarea rows={5} className="w-full rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: 'rgba(30,90,67,0.2)', outlineColor: gold }} />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="rounded-[10px] px-5 py-3 text-sm font-medium shadow-md transition-transform hover:-translate-y-0.5" style={{ backgroundColor: primary, color: 'white' }}>
                Request free audit
              </button>
              <button type="button" className="rounded-[10px] border px-5 py-3 text-sm" style={{ borderColor: primary, color: primary }}>
                Book audit
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm" style={{ borderColor: 'rgba(30,90,67,0.15)' }}>
          <div className="mb-4">
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: primary }}>Contact info</span>
          </div>
          <ul className="space-y-3 text-sm text-[#333]">
            <li><span className="font-medium text-[#1E1E1B]">Email:</span> info@thegatepm.co.uk</li>
            <li><span className="font-medium text-[#1E1E1B]">Phone:</span> +44 (0) XX XXXX XXXX</li>
            <li><span className="font-medium text-[#1E1E1B]">Address:</span> London — by appointment.</li>
          </ul>
          <div className="mt-6 rounded-lg bg-[#F5F5F2] p-4 text-sm text-[#1E1E1B]">
            We operate across Prime Central and West London with trusted in-house trades and designers.
          </div>
        </div>
      </div>
    </section>
  );
}
