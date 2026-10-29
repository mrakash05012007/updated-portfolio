'use client';

import { useState } from 'react';
import { ExternalLink, Info, X, CheckCircle, Clock, Cpu, Eye, Sparkles, Network, Database } from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import { projects, type Project, projectCategories, type ProjectCategory } from '@/data/projects';

// Visual Banner with real project screenshot and direct GitHub link
function ProjectVisualBanner({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const banner = (
    <div
      style={{
        height: '185px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#091322',
        borderBottom: '1px solid #263449',
        cursor: project.githubUrl ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.image && !imgError ? (
        <img
          src={project.image}
          alt={project.title}
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            filter: hovered ? 'brightness(1.05) contrast(1.02)' : 'brightness(0.92)',
          }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B1120' }}>
          <Cpu size={32} color="#22D3EE" />
        </div>
      )}

      {/* Subtle bottom gradient shadow overlay for smooth card transition */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.3) 45%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Domain badge pill on top left */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.28rem 0.65rem',
          background: 'rgba(11, 17, 32, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          zIndex: 2,
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#22D3EE',
            boxShadow: '0 0 6px #22D3EE',
          }}
        />
        <span style={{ fontSize: '0.7rem', color: '#E2E8F0', fontWeight: 700, letterSpacing: '0.04em' }}>
          {project.category}
        </span>
      </div>

      {/* Hover action pill: Open GitHub on top right */}
      {project.githubUrl && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.28rem 0.65rem',
            background: hovered ? 'rgba(34, 211, 238, 0.95)' : 'rgba(11, 17, 32, 0.85)',
            backdropFilter: 'blur(8px)',
            border: hovered ? '1px solid #22D3EE' : '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '6px',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: hovered ? '#0B1120' : '#E2E8F0',
            letterSpacing: '0.04em',
            boxShadow: hovered ? '0 0 16px rgba(34, 211, 238, 0.5)' : 'none',
            transition: 'all 0.25s ease',
            zIndex: 2,
          }}
        >
          <Github size={12} />
          <span>{hovered ? 'OPEN GITHUB ↗' : 'CODE REPO'}</span>
        </div>
      )}
    </div>
  );

  if (project.githubUrl) {
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textDecoration: 'none' }}
        title={`Click to view ${project.title} source code on GitHub`}
      >
        {banner}
      </a>
    );
  }

  return banner;
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const styles: Record<string, { bg: string; color: string; border: string; label: string }> = {
    'Completed': { bg: 'rgba(16, 185, 129, 0.12)', color: '#34D399', border: 'rgba(16, 185, 129, 0.3)', label: 'Completed' },
    'In Development': { bg: 'rgba(245, 158, 11, 0.12)', color: '#FBBF24', border: 'rgba(245, 158, 11, 0.3)', label: 'In Development' },
    'Prototype': { bg: 'rgba(59, 130, 246, 0.12)', color: '#60A5FA', border: 'rgba(59, 130, 246, 0.3)', label: 'Prototype' },
  };
  const s = styles[status] || styles['Prototype'];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.22rem 0.65rem',
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        borderRadius: '9999px',
        fontSize: '0.6875rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}
    >
      {status === 'Completed' ? <CheckCircle size={11} /> : <Clock size={11} />}
      {s.label}
    </span>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#111827',
          border: '1px solid #263449',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(34, 211, 238, 0.12)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#1A2438',
            border: '1px solid #263449',
            borderRadius: '8px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#94A3B8',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#F8FAFC';
            e.currentTarget.style.borderColor = '#22D3EE';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94A3B8';
            e.currentTarget.style.borderColor = '#263449';
          }}
        >
          <X size={18} />
        </button>

        {/* Project Preview Image with direct GitHub link */}
        {project.image && (
          <a
            href={project.githubUrl || undefined}
            target={project.githubUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{ display: 'block', textDecoration: 'none' }}
            title={project.githubUrl ? `Open ${project.title} on GitHub` : undefined}
          >
            <div
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '14px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                border: '1px solid #263449',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                cursor: project.githubUrl ? 'pointer' : 'default',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {project.githubUrl && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.85rem',
                    background: 'rgba(11, 17, 32, 0.92)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid #22D3EE',
                    borderRadius: '8px',
                    color: '#22D3EE',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  }}
                >
                  <Github size={14} /> View on GitHub ↗
                </div>
              )}
            </div>
          </a>
        )}

        {/* Category & status */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span className="badge badge-blue">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>

        <h2
          id="modal-title"
          style={{ fontSize: '1.625rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h2>
        <p style={{ fontSize: '0.9375rem', color: '#22D3EE', fontWeight: 600, marginBottom: '1.5rem' }}>
          {project.subtitle}
        </p>

        {/* Overview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>Overview</h3>
          <p style={{ color: '#CBD5E1', lineHeight: 1.75, fontSize: '0.9375rem' }}>{project.longDescription}</p>
        </div>

        {/* Problem & Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }} className="modal-two-col">
          <div style={{ padding: '1.1rem', background: 'rgba(239, 68, 68, 0.08)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F87171', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.45rem' }}>Problem</h3>
            <p style={{ color: '#FCA5A5', lineHeight: 1.6, fontSize: '0.875rem' }}>{project.problem}</p>
          </div>
          <div style={{ padding: '1.1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.45rem' }}>Solution</h3>
            <p style={{ color: '#6EE7B7', lineHeight: 1.6, fontSize: '0.875rem' }}>{project.solution}</p>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>Key Architectural Capabilities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }} className="modal-two-col">
            {project.keyFeatures.map((feat) => (
              <div key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                <span style={{ color: '#22D3EE', flexShrink: 0, marginTop: '2px' }}>▸</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>Technologies Used</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid #263449' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.65rem 1.25rem' }}
            >
              <Github size={16} /> View Source Code
            </a>
          ) : (
            <button
              disabled
              title="GitHub repository link pending"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: '#1A2438',
                color: '#64748B',
                border: '1px solid #263449',
                borderRadius: '8px',
                cursor: 'not-allowed',
              }}
            >
              <Github size={16} /> GitHub Config Pending
            </button>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.875rem', padding: '0.65rem 1.25rem' }}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 600px) {
          .modal-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project, onDetails }: { project: Project; onDetails: (p: Project) => void }) {
  return (
    <div className="card-project" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Visual Domain Image Banner */}
      <ProjectVisualBanner project={project} />

      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', background: '#111827' }}>
        {/* Header Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
          <span className="badge badge-blue">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#22D3EE'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#F8FAFC'; }}
              title={`Open ${project.title} on GitHub`}
            >
              {project.title}
              <ExternalLink size={13} style={{ opacity: 0.6 }} />
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p style={{ fontSize: '0.8125rem', color: '#22D3EE', fontWeight: 600, marginBottom: '0.85rem' }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.35rem' }}>
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-tag" style={{ color: '#64748B' }}>+{project.technologies.length - 5} more</span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #263449' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: '0.8125rem',
                padding: '0.55rem 0.9rem',
                flex: 1,
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <Github size={14} /> View GitHub Code ↗
            </a>
          ) : (
            <button
              disabled
              title="GitHub repository not configured yet"
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.5rem 0.875rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                background: '#0B1120',
                color: '#64748B',
                border: '1px solid #263449',
                borderRadius: '8px',
                cursor: 'not-allowed',
              }}
            >
              <Github size={14} /> GitHub
            </button>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.8125rem', padding: '0.5rem 0.875rem' }}
            >
              <ExternalLink size={14} />
            </a>
          )}

          <button
            onClick={() => onDetails(project)}
            className="btn-ghost"
            style={{ fontSize: '0.8125rem', padding: '0.5rem 0.875rem', color: '#22D3EE' }}
          >
            <Info size={14} /> Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
          <span className="section-label">Featured Projects</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            What I Have{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Engineered & Built
            </span>
          </h2>
          <div className="gradient-line" />
          <p style={{ fontSize: '1.0625rem', color: '#94A3B8', lineHeight: 1.7 }}>
            Production-grade systems, digital twin architectures, and AI/ML models designed for high-performance inference and real-world deployment.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2.5rem' }}>
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  background: isActive ? '#3B82F6' : '#111827',
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  borderColor: isActive ? '#3B82F6' : '#263449',
                  boxShadow: isActive ? '0 4px 14px rgba(59, 130, 246, 0.4)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#22D3EE';
                    e.currentTarget.style.color = '#F8FAFC';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#263449';
                    e.currentTarget.style.color = '#94A3B8';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: '1.75rem',
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onDetails={setSelectedProject} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3.5rem', color: '#64748B' }}>
            No projects in this category yet.
          </div>
        )}

        {/* Note about GitHub URLs */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.1rem 1.35rem',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '12px',
            fontSize: '0.875rem',
            color: '#93C5FD',
          }}
        >
          <strong style={{ color: '#22D3EE' }}>📌 Developer Note:</strong> Repository links can be updated directly in{' '}
          <code style={{ background: '#0B1120', padding: '0.15rem 0.45rem', borderRadius: '4px', border: '1px solid #263449', color: '#22D3EE' }}>
            src/data/projects.ts
          </code>.
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
