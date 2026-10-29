'use client';

import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { experiences, education } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '620px' }}>
          <span className="section-label">Experience & Education</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            Academic & Professional{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Journey
            </span>
          </h2>
          <div className="gradient-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3.5rem',
          }}
          className="exp-grid"
        >
          {/* Experience */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Briefcase size={20} color="#22D3EE" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F8FAFC' }}>
                Professional Experience
              </h3>
            </div>

            <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
              {/* Timeline line */}
              <div
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '10px',
                  bottom: '0',
                  width: '2px',
                  background: 'linear-gradient(to bottom, #22D3EE, #3B82F6, transparent)',
                  borderRadius: '1px',
                }}
              />

              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  style={{
                    position: 'relative',
                    paddingBottom: i < experiences.length - 1 ? '2.5rem' : 0,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-1.75rem',
                      top: '6px',
                      width: '14px',
                      height: '14px',
                      background: '#22D3EE',
                      borderRadius: '50%',
                      border: '3px solid #0B1120',
                      boxShadow: '0 0 10px #22D3EE',
                      zIndex: 1,
                    }}
                  />

                  <div
                    className="card"
                    style={{
                      padding: '1.5rem',
                      background: '#111827',
                      border: '1px solid #263449',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#F8FAFC' }}>
                        {exp.role}
                      </h4>
                      <span
                        style={{
                          padding: '0.2rem 0.65rem',
                          background: 'rgba(59, 130, 246, 0.12)',
                          color: '#22D3EE',
                          border: '1px solid rgba(34, 211, 238, 0.3)',
                          borderRadius: '9999px',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#38BDF8', marginBottom: '0.75rem' }}>
                      {exp.organization}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', fontSize: '0.8125rem', color: '#94A3B8' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={13} color="#22D3EE" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <MapPin size={13} color="#22D3EE" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                          <span style={{ color: '#22D3EE', flexShrink: 0, marginTop: '2px' }}>▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={20} color="#22D3EE" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F8FAFC' }}>
                Education
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    background: '#111827',
                    border: '1px solid #263449',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#F8FAFC' }}>
                      {edu.degree}
                    </h4>
                    <span
                      style={{
                        padding: '0.2rem 0.65rem',
                        background: 'rgba(16, 185, 129, 0.12)',
                        color: '#34D399',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                      }}
                    >
                      {edu.scoreLabel}: {edu.score}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#38BDF8', marginBottom: '0.75rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.8125rem', color: '#94A3B8' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} color="#22D3EE" />
                      {edu.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
