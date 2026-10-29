'use client';

import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'rgba(7, 13, 26, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: '#94A3B8',
        padding: '3.5rem 0 2.25rem',
        borderTop: '1px solid rgba(38, 52, 73, 0.7)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid #1E293B',
          }}
        >
          {/* Logo */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#F8FAFC', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              AKASH<span style={{ color: '#22D3EE' }}>.S</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748B' }}>
              Artificial Intelligence & Data Science Engineer
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="https://github.com/mrakash05012007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#111827',
                border: '1px solid #263449',
                color: '#94A3B8',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(34, 211, 238, 0.12)';
                e.currentTarget.style.borderColor = '#22D3EE';
                e.currentTarget.style.color = '#22D3EE';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111827';
                e.currentTarget.style.borderColor = '#263449';
                e.currentTarget.style.color = '#94A3B8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-s-5b1a78374/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#111827',
                border: '1px solid #263449',
                color: '#94A3B8',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = '#3B82F6';
                e.currentTarget.style.color = '#60A5FA';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111827';
                e.currentTarget.style.borderColor = '#263449';
                e.currentTarget.style.color = '#94A3B8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:akashsrinivasan05012007@gmail.com"
              aria-label="Email Me"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#111827',
                border: '1px solid #263449',
                color: '#94A3B8',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(34, 211, 238, 0.12)';
                e.currentTarget.style.borderColor = '#22D3EE';
                e.currentTarget.style.color = '#22D3EE';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111827';
                e.currentTarget.style.borderColor = '#263449';
                e.currentTarget.style.color = '#94A3B8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            paddingTop: '1.75rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
            Chennai, Tamil Nadu, India · AI & Data Science
          </p>
        </div>
      </div>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '46px',
            height: '46px',
            background: '#111827',
            border: '1.5px solid #22D3EE',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(34, 211, 238, 0.3)',
            zIndex: 40,
            color: '#22D3EE',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#22D3EE';
            e.currentTarget.style.color = '#0B1120';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#111827';
            e.currentTarget.style.color = '#22D3EE';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
