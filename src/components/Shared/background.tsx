import React from "react";

// GlowyBackgroundComponent.tsx
// Usage: import GlowyBackground from '@/components/GlowyBackgroundComponent';
// Then place <GlowyBackground /> as a full-bleed background (positioned behind content).
// Requires TailwindCSS in your Next.js project.

export default function GlowyBackground() {
  return (
    <div className="">
      {/* subtle glassy top gloss */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[360px] rounded-full opacity-30 transform-gpu blur-[60px]" style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.75), rgba(255,255,255,0.05))' }} />

        {/* layered blurred blobs */}
        <div className="absolute -left-40 -top-10 w-72 h-72 rounded-full filter blur-2xl opacity-60 mix-blend-screen animate-blob" />
        <div className="absolute -right-24 top-8 w-80 h-80 rounded-full filter blur-3xl opacity-40 mix-blend-overlay animate-blob animation-delay-2000" />
        <div className="absolute left-10 bottom-10 w-56 h-56 rounded-full filter blur-2xl opacity-30 mix-blend-screen animate-blob animation-delay-4000" />

        {/* soft grid/light streak */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="b" />
            </filter>
          </defs>

          <g filter="url(#soft)">
            <path d="M-50 150 C150 50, 350 250, 550 150 C750 50, 950 250, 1150 150" stroke="url(#lineGrad)" strokeWidth="160" fill="none" opacity="0.06" />
          </g>
        </svg>

        {/* top-right glossy highlight */}
        <div className="absolute right-8 top-6 w-48 h-28 rounded-xl transform rotate-12 opacity-20" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.02))', filter: 'blur(18px)' }} />
      </div>

      {/* content placeholder so you can see how it stacks */}
      <div className="relative z-10 p-8">
        {/* Put your page content here. This is intentionally empty to show only background if needed. */}
      </div>

      {/* Scoped styles for blob animation and small utilities */}
      <style jsx>{`
        .animate-blob {
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(255,255,255,0.02));
          background-color: rgba(255,255,255,0.06);
          animation: blob 12s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-18px) scale(1.08);
          }
          66% {
            transform: translateY(6px) scale(0.96);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
