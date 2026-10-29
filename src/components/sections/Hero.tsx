'use client';

import { useState } from 'react';
import { Download, ChevronDown, Sparkles, Cpu, Zap, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

export default function Hero() {
  const [pulseCount, setPulseCount] = useState(0);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const triggerShockwave = (e: React.MouseEvent) => {
    setPulseCount((c) => c + 1);
    // Dispatches a simulated window click event to create shockwaves in the full 3D background
    const event = new MouseEvent('click', {
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient lens lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(34, 211, 238, 0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '-10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div className="container" style={{ width: '100%', padding: '4rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.08fr 0.92fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT: Text Content */}
          <div style={{ maxWidth: '620px' }}>
            {/* High-tech Badge */}
            <div className="hero-badge">
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#22D3EE',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #22D3EE',
                  flexShrink: 0,
                  animation: 'pulse-slow 2s ease-in-out infinite',
                }}
              />
              <span>AI & DATA SCIENCE &nbsp;|&nbsp; AI/ML & GENAI ENGINEER</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.3vw, 3.85rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#F8FAFC',
                marginBottom: '1.25rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              }}
            >
              Building{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Intelligent
              </span>{' '}
              Solutions for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22D3EE 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Real-World
              </span>{' '}
              Problems.
            </h1>

            {/* Sub intro */}
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: '#E2E8F0',
                marginBottom: '0.85rem',
              }}
            >
              {"Hi, I'm "}
              <span style={{ color: '#22D3EE', fontWeight: 700 }}>Akash Srinivasan</span>.
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: '1.0625rem',
                color: '#94A3B8',
                lineHeight: 1.75,
                marginBottom: '2.25rem',
                maxWidth: '540px',
              }}
            >
              Artificial Intelligence & Data Science engineer specializing in
              Machine Learning pipelines, Computer Vision models, Generative AI applications, and scalable intelligent systems.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2.25rem',
              }}
            >
              <button onClick={scrollToProjects} className="btn-primary">
                Explore My Projects
                <ArrowRight size={15} />
              </button>
              <a
                href="/Akash_Srinivasan_Resume.pdf"
                download="Akash_Srinivasan_Resume.pdf"
                className="btn-secondary"
              >
                <Download size={15} />
                Download Resume
              </a>
              <button onClick={scrollToContact} className="btn-ghost" style={{ padding: '0.75rem 1rem' }}>
                Connect With Me →
              </button>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '0.8125rem',
                  color: '#64748B',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Find me on
              </span>
              <div style={{ height: '14px', width: '1px', background: '#263449' }} />
              <a
                href="https://github.com/mrakash05012007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#94A3B8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#22D3EE';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akash-s-5b1a78374/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#94A3B8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#3B82F6';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: Real & Useful Candidate Profile Card */}
          <div
            style={{
              background: 'rgba(11, 17, 32, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(34, 211, 238, 0.25)',
              padding: '1.85rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(59, 130, 246, 0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="hero-hud"
          >
            {/* Top ambient accent beam */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #22D3EE, #3B82F6, transparent)',
              }}
            />

            {/* Header: Verified Profile & Availability */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.1rem',
                borderBottom: '1px solid rgba(38, 52, 73, 0.7)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(34, 211, 238, 0.12)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShieldCheck size={20} color="#22D3EE" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Candidate Profile
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#F8FAFC', fontWeight: 700 }}>
                    AI & Data Science Specialist
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.3rem 0.75rem',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '9999px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 8px #34D399',
                  }}
                />
                <span style={{ fontSize: '0.72rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.04em' }}>
                  AVAILABLE FOR HIRE
                </span>
              </div>
            </div>

            {/* Real Experience & Education Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {/* Education */}
              <div
                style={{
                  background: 'rgba(17, 24, 39, 0.75)',
                  border: '1px solid rgba(38, 52, 73, 0.75)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Cpu size={16} color="#3B82F6" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#F8FAFC', lineHeight: 1.3 }}>
                    B.Tech in Artificial Intelligence & Data Science
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Vel Tech High Tech Engineering College · <span style={{ color: '#22D3EE', fontWeight: 600 }}>CGPA: 7.8</span>
                  </div>
                </div>
              </div>

              {/* Practical Experience */}
              <div
                style={{
                  background: 'rgba(17, 24, 39, 0.75)',
                  border: '1px solid rgba(38, 52, 73, 0.75)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(34, 211, 238, 0.15)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Activity size={16} color="#22D3EE" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#F8FAFC', lineHeight: 1.3 }}>
                    Freelance AI Dev & Ex-Computer Vision Intern
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    NSIC Technical Services & Independent Client Projects
                  </div>
                </div>
              </div>

              {/* Hackathon Achievement */}
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={16} color="#FBBF24" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FDE68A', lineHeight: 1.3 }}>
                    Smart India Hackathon (SIH 2026) Internal Winner
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>
                    ISRO Bharatiya Antariksh & Singularity Hackathon Participant
                  </div>
                </div>
              </div>
            </div>

            {/* Real Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                background: 'rgba(8, 14, 28, 0.7)',
                border: '1px solid rgba(38, 52, 73, 0.8)',
                borderRadius: '14px',
                padding: '0.9rem',
                marginBottom: '1.25rem',
              }}
            >
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#22D3EE', lineHeight: 1.1 }}>
                  6+
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                  AI & ML Projects
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(38, 52, 73, 0.6)', paddingLeft: '0.75rem' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#3B82F6', lineHeight: 1.1 }}>
                  4+
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                  Hackathon Events
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(38, 52, 73, 0.6)', paddingLeft: '0.75rem' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#F8FAFC', lineHeight: 1.1 }}>
                  Chennai
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                  Tamil Nadu, IN
                </div>
              </div>
            </div>

            {/* Core Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
              {['Python', 'Machine Learning', 'Computer Vision', 'Generative AI', 'FastAPI', 'React'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '0.22rem 0.6rem',
                    background: 'rgba(38, 52, 73, 0.55)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    borderRadius: '6px',
                    color: '#BAE6FD',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Row: 3D interactive cue & trigger */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(38, 52, 73, 0.6)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#22D3EE',
                    boxShadow: '0 0 8px #22D3EE',
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                  Interactive 3D Background
                </span>
              </div>

              <button
                onClick={triggerShockwave}
                className="btn-ghost"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.75rem',
                  color: '#22D3EE',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Zap size={13} />
                Send Pulse {pulseCount > 0 && `(${pulseCount})`}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '3.5rem',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              color: '#64748B',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Explore Portfolio
          </span>
          <button
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="scroll-indicator"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#22D3EE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem',
            }}
          >
            <ChevronDown size={22} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
