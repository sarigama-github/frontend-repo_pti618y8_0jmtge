import React from 'react';

export default function Footer() {
  const primary = '#1E5A43';
  const gold = '#D9B77A';

  return (
    <footer className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md" style={{ background: `linear-gradient(135deg, ${gold}, #b79558)` }} />
            <div>
              <p className="text-xs tracking-wide" style={{ color: primary }}>THE GATE</p>
              <p className="text-base font-serif leading-none" style={{ color: primary }}>PM</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm" style={{ color: primary }}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <p className="mt-6 text-sm text-[#666]">Property Management · Refurbishments · Lettings.</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#888]">
          <span>© 2025 The Gate PM. All rights reserved.</span>
          <a href="#" className="hover:text-[#444]">Privacy</a>
          <a href="#" className="hover:text-[#444]">Terms</a>
        </div>
      </div>
    </footer>
  );
}
