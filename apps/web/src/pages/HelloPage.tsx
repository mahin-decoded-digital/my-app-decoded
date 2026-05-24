import { useGreetingStore } from '@/stores/useGreetingStore';

type GlowIntensity = 'low' | 'medium' | 'high';

const glowLabels: Record<GlowIntensity, string> = {
  low: 'Low ✦',
  medium: 'Medium ✦✦',
  high: 'High ✦✦✦',
};

const sublines: Record<GlowIntensity, string> = {
  low: 'Nice and easy. Like dawn breaking over still water.',
  medium: 'Just right. The aurora is awake and so are you.',
  high: 'Full aurora. You asked for magic — here it is.',
};

export default function HelloPage() {
  const message = useGreetingStore((s) => s.message);
  const glowIntensity = useGreetingStore((s) => s.glowIntensity);
  const cycleGlow = useGreetingStore((s) => s.cycleGlow);

  const glowClass = `text-aurora-glow-${glowIntensity}` as const;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Aurora Canvas */}
      <div className={`aurora-canvas aurora-${glowIntensity}`}>
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center gap-10 px-6 py-20 text-center">
        {/* Greeting Hero */}
        <div className="flex flex-col items-center gap-5">
          <div className="animate-float-in">
            <span
              className="block font-display text-7xl md:text-9xl font-bold tracking-tight text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, hsl(190, 80%, 80%) 0%, hsl(217, 91%, 75%) 40%, hsl(262, 83%, 78%) 100%)',
              }}
            >
              <span className={glowClass}>{message}</span>
            </span>
          </div>

          <p
            className="animate-float-in-delay-1 text-xl md:text-2xl font-light tracking-wide max-w-md"
            style={{ color: 'hsla(220, 60%, 88%, 0.85)' }}
          >
            {sublines[glowIntensity]}
          </p>
        </div>

        {/* Glow Controls */}
        <div className="animate-float-in-delay-2 frosted-card rounded-2xl px-8 py-5 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: 'hsla(220, 60%, 75%, 0.7)' }}
            >
              Aurora intensity
            </span>
            <span
              className="badge-glow rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
              style={{
                background:
                  'linear-gradient(90deg, hsla(217, 91%, 55%, 0.35), hsla(262, 83%, 60%, 0.35))',
                border: '1px solid hsla(262, 83%, 70%, 0.4)',
                color: 'hsl(220, 80%, 88%)',
              }}
            >
              {glowLabels[glowIntensity]}
            </span>
          </div>

          <button
            onClick={cycleGlow}
            className="group relative rounded-xl px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95"
            style={{
              background:
                'linear-gradient(135deg, hsla(217, 91%, 55%, 0.25) 0%, hsla(262, 83%, 60%, 0.25) 100%)',
              border: '1px solid hsla(262, 83%, 70%, 0.35)',
              color: 'hsl(220, 80%, 90%)',
              boxShadow:
                '0 0 0 0 hsla(262, 83%, 60%, 0), inset 0 1px 0 hsla(220, 80%, 80%, 0.12)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 24px 4px hsla(262, 83%, 60%, 0.3), inset 0 1px 0 hsla(220, 80%, 80%, 0.18)';
              (e.currentTarget as HTMLButtonElement).style.background =
                'linear-gradient(135deg, hsla(217, 91%, 55%, 0.38) 0%, hsla(262, 83%, 60%, 0.38) 100%)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 0 0 hsla(262, 83%, 60%, 0), inset 0 1px 0 hsla(220, 80%, 80%, 0.12)';
              (e.currentTarget as HTMLButtonElement).style.background =
                'linear-gradient(135deg, hsla(217, 91%, 55%, 0.25) 0%, hsla(262, 83%, 60%, 0.25) 100%)';
            }}
          >
            ✦ Change Glow
          </button>
        </div>

        {/* Footer note */}
        <p
          className="animate-float-in-delay-3 text-xs tracking-widest uppercase"
          style={{ color: 'hsla(220, 40%, 65%, 0.45)' }}
        >
          Aurora Hello
        </p>
      </main>
    </div>
  );
}
