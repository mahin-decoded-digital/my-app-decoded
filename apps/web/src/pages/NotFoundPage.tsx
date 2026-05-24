import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--paper)', color: 'var(--ink)' }}
    >
      <div className="max-w-md w-full">
        {/* 404 numeral */}
        <p
          className="mb-4 select-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(5rem, 22vw, 11rem)',
            lineHeight: 1,
            color: 'var(--rule)',
            letterSpacing: '-0.03em',
            fontStyle: 'italic',
          }}
        >
          404
        </p>

        {/* Thin rule */}
        <div
          className="w-12 mx-auto mb-8"
          style={{ borderTop: '1px solid var(--rule)' }}
        />

        {/* Copy */}
        <p
          className="mb-10"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--ink-muted)',
            lineHeight: 1.6,
          }}
        >
          A wrong turn. Nothing of note here.
        </p>

        {/* Return link */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-sub)',
            fontWeight: 300,
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--rule)',
            paddingBottom: '2px',
          }}
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
