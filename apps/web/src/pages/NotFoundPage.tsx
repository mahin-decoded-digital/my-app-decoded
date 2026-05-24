import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'var(--sans-body)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--serif-display)',
          fontSize: '0.85rem',
          color: 'var(--ink-light)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--serif-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          color: 'var(--ink)',
          marginBottom: '1.2rem',
          letterSpacing: '-0.02em',
        }}
      >
        This page has<br />moved on.
      </h1>
      <p
        style={{
          fontFamily: 'var(--sans-body)',
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--ink-light)',
          maxWidth: 360,
          marginBottom: '2.5rem',
        }}
      >
        The page you were looking for no longer exists, or may have been relocated.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          fontFamily: 'var(--sans-body)',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--cream)',
          background: 'var(--ink)',
          border: 'none',
          cursor: 'pointer',
          padding: '0.9rem 2.2rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        Back to Home <ArrowRight size={14} />
      </button>
    </div>
  );
}
