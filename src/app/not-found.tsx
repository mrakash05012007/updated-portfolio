import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0B1120',
        padding: '2rem',
        fontFamily: 'var(--font-inter)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          fontSize: '7rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(34, 211, 238, 0.1))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          marginBottom: '1rem',
        }}
      >
        404
      </div>

      <div
        style={{
          width: '68px',
          height: '68px',
          background: 'rgba(59, 130, 246, 0.12)',
          border: '1.5px solid rgba(34, 211, 238, 0.3)',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 0 25px rgba(34, 211, 238, 0.2)',
        }}
      >
        🤖
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
          fontWeight: 800,
          color: '#F8FAFC',
          marginBottom: '0.75rem',
          letterSpacing: '-0.03em',
        }}
      >
        Node Not Found
      </h1>

      <p
        style={{
          fontSize: '1.0625rem',
          color: '#94A3B8',
          maxWidth: '460px',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}
      >
        The page or endpoint you are attempting to reach does not exist in this neural network architecture.
      </p>

      <Link
        href="/"
        className="btn-primary"
        style={{ textDecoration: 'none' }}
      >
        Return to Home Node →
      </Link>
    </div>
  );
}
