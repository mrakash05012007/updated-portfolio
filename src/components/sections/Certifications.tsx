'use client';

import { Award } from 'lucide-react';
import { certifications, type Certification } from '@/data/certifications';

const categoryColors: Record<Certification['category'], { bg: string; color: string; border: string }> = {
  'AI/ML': { bg: 'rgba(59, 130, 246, 0.12)', color: '#60A5FA', border: 'rgba(59, 130, 246, 0.3)' },
  'GenAI': { bg: 'rgba(34, 211, 238, 0.12)', color: '#22D3EE', border: 'rgba(34, 211, 238, 0.3)' },
  'Web': { bg: 'rgba(16, 185, 129, 0.12)', color: '#34D399', border: 'rgba(16, 185, 129, 0.3)' },
  'IoT': { bg: 'rgba(56, 189, 248, 0.12)', color: '#38BDF8', border: 'rgba(56, 189, 248, 0.3)' },
  'Blockchain': { bg: 'rgba(168, 85, 247, 0.12)', color: '#C084FC', border: 'rgba(168, 85, 247, 0.3)' },
  'Data': { bg: 'rgba(245, 158, 11, 0.12)', color: '#FBBF24', border: 'rgba(245, 158, 11, 0.3)' },
  'Other': { bg: 'rgba(148, 163, 184, 0.1)', color: '#94A3B8', border: 'rgba(148, 163, 184, 0.25)' },
};

const categoryEmoji: Record<Certification['category'], string> = {
  'AI/ML': '🤖',
  'GenAI': '✨',
  'Web': '🌐',
  'IoT': '📡',
  'Blockchain': '⛓️',
  'Data': '📊',
  'Other': '📜',
};

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '620px' }}>
          <span className="section-label">Certifications</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            Validated Industry{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Credentials
            </span>
          </h2>
          <div className="gradient-line" />
          <p style={{ fontSize: '1.0625rem', color: '#94A3B8', lineHeight: 1.7 }}>
            Technical specializations from certified organizations in machine learning, generative models, cloud platforms, and data engineering.
          </p>
        </div>

        {/* Certifications grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {certifications.map((cert) => {
            const { bg, color, border } = categoryColors[cert.category] || categoryColors['Other'];
            const emoji = categoryEmoji[cert.category] || '📜';

            return (
              <div
                key={cert.id}
                className="card"
                style={{
                  padding: '1.35rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: '#111827',
                  border: '1px solid #263449',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    flexShrink: 0,
                  }}
                >
                  {emoji}
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', gap: '0.5rem' }}>
                    <span
                      style={{
                        padding: '0.15rem 0.6rem',
                        background: bg,
                        color: color,
                        border: `1px solid ${border}`,
                        borderRadius: '9999px',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                      }}
                    >
                      {cert.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      {cert.month ? `${cert.month} ` : ''}{cert.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.3rem', lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '0.8125rem', color: '#22D3EE', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {cert.provider}
                  </div>

                  {cert.duration && (
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      Duration: {cert.duration}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
