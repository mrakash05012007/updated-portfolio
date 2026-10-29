'use client';

import { Brain, Code2, Layers, Cpu } from 'lucide-react';

const interests = [
  { icon: Brain, label: 'Machine Learning & AI', color: '#3B82F6' },
  { icon: Cpu, label: 'Computer Vision', color: '#22D3EE' },
  { icon: Layers, label: 'Generative AI & LLMs', color: '#60A5FA' },
  { icon: Code2, label: 'Full-Stack AI Apps', color: '#38BDF8' },
];

const focusAreas = [
  { title: 'ML & Deep Learning', description: 'Building neural networks, classification, regression, and optimization pipelines for production use.' },
  { title: 'Computer Vision', description: 'Real-time object detection, segmentation, spatial feature extraction, and CV pipelines.' },
  { title: 'Generative AI & RAG', description: 'Retrieval-Augmented Generation, vector embeddings, prompt engineering, and agentic workflows.' },
  { title: 'Industrial AI & Digital Twins', description: 'Applying AI to digital twin architectures, real-time sensor analytics, and predictive intelligence.' },
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '620px' }}>
          <span className="section-label">About Me</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            Turning Technical Ideas into{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              High-Impact Products
            </span>
          </h2>
          <div className="gradient-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Bio */}
          <div>
            <p
              style={{
                fontSize: '1.0625rem',
                color: '#CBD5E1',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}
            >
              {"I'm an Artificial Intelligence and Data Science student with hands-on experience developing practical, high-performance intelligent software. My work centers on machine learning, computer vision, NLP, and web-scale AI integrations — bridging the gap between theoretical algorithms and deployed real-world products."}
            </p>
            <p
              style={{
                fontSize: '1.0625rem',
                color: '#94A3B8',
                lineHeight: 1.85,
                marginBottom: '2.25rem',
              }}
            >
              {'As a freelance AI & software developer, I build end-to-end AI/ML prototypes, predictive architectures, digital twin telemetry platforms, and automation systems using Python and modern engineering stacks. I am particularly passionate about Generative AI, agentic systems, and industrial AI innovations.'}
            </p>

            {/* Quick stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              {[
                { label: 'Current CGPA', value: '7.8 / 10' },
                { label: 'Degree', value: 'B.Tech AI & DS' },
                { label: 'Location', value: 'Chennai, TN, India' },
                { label: 'Status', value: 'Open to AI/ML Roles', highlight: true },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '1.15rem',
                    background: '#0B1120',
                    borderRadius: '12px',
                    border: '1px solid #263449',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: stat.highlight ? '#22D3EE' : '#F8FAFC'
                  }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Areas of interest + focus */}
          <div>
            {/* Interests */}
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#94A3B8', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Core Competencies
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.875rem',
                marginBottom: '2.25rem',
              }}
            >
              {interests.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '1.1rem',
                    background: '#0B1120',
                    border: '1px solid #263449',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      background: 'rgba(59, 130, 246, 0.12)',
                      border: '1px solid rgba(34, 211, 238, 0.2)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={19} color={color} />
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#94A3B8', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Specialized Focus Areas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {focusAreas.map((area, idx) => (
                <div
                  key={area.title}
                  style={{
                    padding: '1.15rem 1.35rem',
                    background: '#0B1120',
                    borderRadius: '12px',
                    border: '1px solid #263449',
                    borderLeft: `3px solid ${idx % 2 === 0 ? '#22D3EE' : '#3B82F6'}`,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.35rem' }}>
                    {area.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>
                    {area.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
