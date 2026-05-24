import { useMemo } from 'react';
import { usePageStore } from '@/stores/usePageStore';

export default function HomePage() {
  const message = usePageStore((s) => s.message);
  const loaded = usePageStore((s) => s.loaded);

  const displayMessage = useMemo(
    () => (loaded && message ? message : 'Hello!'),
    [message, loaded]
  );

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden"
      style={{ background: 'var(--canvas-deep)' }}
    >
      {/* Deep background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Primary orb — upper left */}
        <div
          className="absolute rounded-full"
          style={{
            width: '60vw',
            height: '60vw',
            top: '-18vw',
            left: '-14vw',
            background: 'radial-gradient(circle, hsla(217,91%,55%,0.28) 0%, transparent 72%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Accent orb — lower right */}
        <div
          className="absolute rounded-full"
          style={{
            width: '55vw',
            height: '55vw',
            bottom: '-16vw',
            right: '-12vw',
            background: 'radial-gradient(circle, hsla(262,83%,60%,0.25) 0%, transparent 72%)',
            filter: 'blur(48px)',
          }}
        />
        {/* Subtle mid accent */}
        <div
          className="absolute rounded-full"
          style={{
            width: '30vw',
            height: '30vw',
            top: '40%',
            left: '55%',
            background: 'radial-gradient(circle, hsla(217,91%,60%,0.12) 0%, transparent 70%)',
            filter: 'blur(56px)',
          }}
        />
      </div>

      {/* Spacer */}
      <div className="flex-1 flex items-center justify-center w-full px-4 py-16">
        {/* Frosted glass card */}
        <div
          className="relative max-w-lg w-full rounded-2xl px-10 py-12 flex flex-col items-center text-center"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            boxShadow: 'var(--neon-glow), var(--glass-shadow)',
            border: '1px solid var(--glass-border)',
          }}
        >
          {/* Neon top edge highlight */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: '60%',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, var(--neon-primary), var(--neon-accent), transparent)',
            }}
          />

          {/* Stack label */}
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-widest uppercase"
            style={{
              background: 'hsla(217,91%,55%,0.15)',
              border: '1px solid hsla(217,91%,65%,0.3)',
              color: 'hsl(217,91%,78%)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.15em',
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'hsl(217,91%,65%)' }}
            />
            Stack Online
          </span>

          {/* Headline */}
          <h1
            className="text-5xl font-bold tracking-tight leading-none mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              background:
                'linear-gradient(135deg, hsl(217,91%,80%) 0%, hsl(200,90%,88%) 40%, hsl(262,83%,80%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {displayMessage}
          </h1>

          {/* Subtext */}
          <p
            className="mt-3 text-base leading-relaxed"
            style={{
              color: 'hsla(220,30%,88%,0.65)',
              fontFamily: 'var(--font-display)',
              maxWidth: '28ch',
            }}
          >
            The palette is alive. The pipeline is wired.
            <br />
            Everything from here is yours to build.
          </p>

          {/* Divider */}
          <div
            className="my-8 w-full"
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, hsla(217,91%,65%,0.2), hsla(262,83%,70%,0.2), transparent)',
            }}
          />

          {/* Tech badge row */}
          <div className="flex flex-wrap justify-center gap-2">
            {['React 18', 'Zustand 5', 'Tailwind v3', 'Vite 6'].map((tech) => (
              <span
                key={tech}
                className="rounded-md px-2.5 py-1 text-xs font-medium"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'hsla(262,83%,60%,0.12)',
                  border: '1px solid hsla(262,83%,70%,0.2)',
                  color: 'hsl(262,80%,80%)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom neon edge highlight */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: '40%',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, var(--neon-accent), transparent)',
            }}
          />
        </div>
      </div>

      {/* Footer strip */}
      <footer className="w-full pb-6 px-6">
        <div
          className="mx-auto max-w-lg"
          style={{
            borderTop: '1px solid hsla(217,91%,65%,0.12)',
            paddingTop: '1.25rem',
          }}
        >
          <p
            className="text-center text-xs"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'hsla(220,20%,70%,0.4)',
              letterSpacing: '0.06em',
            }}
          >
            Hello World — pipeline check complete
          </p>
        </div>
      </footer>
    </div>
  );
}
