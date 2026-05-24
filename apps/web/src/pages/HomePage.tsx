export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'var(--paper)', color: 'var(--ink)' }}
    >
      {/* Hero — full-viewport title page */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl w-full">
          {/* Thin rule above */}
          <div
            className="w-16 mx-auto mb-12"
            style={{ borderTop: '1px solid var(--rule)' }}
          />

          {/* Display heading */}
          <h1
            className="leading-tight mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(3rem, 9vw, 6.5rem)',
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
              fontStyle: 'italic',
            }}
          >
            Hello.
          </h1>

          {/* Subheading */}
          <p
            className="mb-12"
            style={{
              fontFamily: 'var(--font-sub)',
              fontWeight: 300,
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
            }}
          >
            A quiet place to begin.
          </p>

          {/* Thin rule below */}
          <div
            className="w-16 mx-auto"
            style={{ borderTop: '1px solid var(--rule)' }}
          />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="w-full px-6 py-8 flex items-center justify-center"
        style={{ borderTop: '1px solid var(--rule)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sub)',
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
          }}
        >
          Hello &mdash; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
