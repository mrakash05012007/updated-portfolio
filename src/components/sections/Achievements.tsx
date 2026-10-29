'use client';

import { Trophy, Rocket, Users, Star } from 'lucide-react';
import { achievements } from '@/data/achievements';

const statusIcons: Record<string, string> = {
  Won: '🏆',
  'Currently Participating': '⚡',
  Submitted: '🚀',
  Participated: '🎯',
};

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  Won: { bg: 'rgba(245, 158, 11, 0.12)', color: '#FBBF24', border: 'rgba(245, 158, 11, 0.35)' },
  'Currently Participating': { bg: 'rgba(34, 211, 238, 0.12)', color: '#22D3EE', border: 'rgba(34, 211, 238, 0.35)' },
  Submitted: { bg: 'rgba(59, 130, 246, 0.12)', color: '#60A5FA', border: 'rgba(59, 130, 246, 0.35)' },
  Participated: { bg: 'rgba(148, 163, 184, 0.1)', color: '#94A3B8', border: 'rgba(148, 163, 184, 0.25)' },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '620px' }}>
          <span className="section-label">Hackathons & Achievements</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            Competitive Excellence &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FBBF24, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Hackathon Victories
            </span>
          </h2>
          <div className="gradient-line" />
          <p style={{ fontSize: '1.0625rem', color: '#94A3B8', lineHeight: 1.7 }}>
            National and institutional level engineering competitions — evaluated strictly on validated project submissions and results.
          </p>
        </div>

        {/* Featured Win (Smart India Hackathon 2024 Winner) */}
        {achievements.filter((a) => a.highlight).map((a) => (
          <div
            key={a.id}
            style={{
              marginBottom: '2.5rem',
              padding: '2.25rem',
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1.5px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(245, 158, 11, 0.12)',
            }}
          >
            {/* Ambient golden glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1.5px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  boxShadow: '0 0 20px rgba(245, 158, 11, 0.25)',
                  flexShrink: 0,
                }}
              >
                🏆
              </div>

              <div style={{ flex: 1, minWidth: '240px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#F8FAFC' }}>
                    {a.event}
                  </h3>
                  <span
                    style={{
                      padding: '0.25rem 0.85rem',
                      background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                      color: '#0B1120',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      boxShadow: '0 0 12px rgba(245, 158, 11, 0.4)',
                    }}
                  >
                    🏆 1ST PLACE WINNER
                  </span>
                </div>

                <p style={{ fontSize: '1rem', color: '#FBBF24', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {a.organization}
                </p>

                <p style={{ fontSize: '0.9375rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '850px' }}>
                  {a.description}
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.8125rem', color: '#94A3B8' }}>
                  <span><strong style={{ color: '#F8FAFC' }}>Organization:</strong> {a.organization}</span>
                  <span><strong style={{ color: '#F8FAFC' }}>Year:</strong> {a.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other achievements grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {achievements.filter((a) => !a.highlight).map((a) => {
            const sc = statusColors[a.status] || statusColors['Participated'];
            return (
              <div
                key={a.id}
                className="card"
                style={{
                  padding: '1.5rem',
                  background: '#0B1120',
                  border: '1px solid #263449',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem', gap: '0.5rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>{statusIcons[a.status] || '🎯'}</div>
                  <span
                    style={{
                      padding: '0.2rem 0.65rem',
                      background: sc.bg,
                      color: sc.color,
                      border: `1px solid ${sc.border}`,
                      borderRadius: '9999px',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {a.status}
                  </span>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.35rem' }}>
                  {a.event}
                </h4>

                <div style={{ fontSize: '0.8125rem', color: '#22D3EE', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {a.organization} · {a.year}
                </div>

                <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  {a.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
