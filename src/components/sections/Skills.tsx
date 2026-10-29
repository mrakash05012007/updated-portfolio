'use client';

import { Code2, Brain, Sparkles, Layers, Database, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} color="#22D3EE" />,
  Brain: <Brain size={20} color="#3B82F6" />,
  Sparkles: <Sparkles size={20} color="#22D3EE" />,
  Layers: <Layers size={20} color="#60A5FA" />,
  Database: <Database size={20} color="#38BDF8" />,
  Wrench: <Wrench size={20} color="#22D3EE" />,
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '620px' }}>
          <span className="section-label">Technical Skills</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            Tools & Technologies I{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Engineer With
            </span>
          </h2>
          <div className="gradient-line" />
          <p style={{ fontSize: '1.0625rem', color: '#94A3B8', lineHeight: 1.7 }}>
            A verified inventory of technologies utilized across machine learning algorithms, deep learning architectures, generative AI models, and production software systems.
          </p>
        </div>

        {/* Skill categories grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="card"
              style={{
                padding: '1.75rem',
                background: '#111827',
                border: '1px solid #263449',
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1.35rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(34, 211, 238, 0.25)',
                    borderRadius: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {iconMap[cat.icon]}
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#F8FAFC' }}>
                  {cat.category}
                </h3>
              </div>

              {/* Skills list */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.35rem 0.8rem',
                      background: '#0B1120',
                      border: '1px solid #263449',
                      borderRadius: '8px',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: '#CBD5E1',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = 'rgba(34, 211, 238, 0.1)';
                      el.style.borderColor = '#22D3EE';
                      el.style.color = '#22D3EE';
                      el.style.transform = 'translateY(-1px)';
                      el.style.boxShadow = '0 0 12px rgba(34, 211, 238, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = '#0B1120';
                      el.style.borderColor = '#263449';
                      el.style.color = '#CBD5E1';
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
