import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Aurora Canvas — static, simpler for 404 */}
      <div className="aurora-canvas aurora-medium">
        <div className="aurora-blob aurora-blob-1" style={{ opacity: 0.5 }} />
        <div className="aurora-blob aurora-blob-2" style={{ opacity: 0.45 }} />
        <div className="aurora-blob aurora-blob-4" style={{ opacity: 0.3 }} />
      </div>

      <main className="relative z-10 flex flex-col items-center gap-8 px-6 text-center animate-float-in">
        <span
          className="font-display text-[10rem] md:text-[14rem] font-bold leading-none tracking-tight select-none"
          style={{
            backgroundImage:
              'linear-gradient(135deg, hsl(190, 80%, 80%) 0%, hsl(217, 91%, 75%) 40%, hsl(262, 83%, 78%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 32px hsla(262, 83%, 60%, 0.5))',
          }}
        >
          404
        </span>

        <div className="flex flex-col items-center gap-3">
          <p
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: 'hsl(220, 70%, 88%)' }}
          >
            This page wandered off.
          </p>
          <p
            className="text-base font-light max-w-xs"
            style={{ color: 'hsla(220, 50%, 75%, 0.7)' }}
          >
            The aurora is still here, but that URL isn&apos;t. Probably a typo — or a little magic gone sideways.
          </p>
        </div>

        <Link
          to="/"
          className="frosted-card rounded-xl px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            color: 'hsl(220, 80%, 90%)',
            border: '1px solid hsla(262, 83%, 70%, 0.35)',
          }}
        >
          ✦ Take me home
        </Link>
      </main>
    </div>
  );
}
