'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(11, 17, 32, 0.92)' : 'rgba(11, 17, 32, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #263449' : '1px solid rgba(38, 52, 73, 0.35)',
        transition: 'all 0.3s ease',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          style={{
            fontWeight: 800,
            fontSize: '1.1875rem',
            color: '#F8FAFC',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#22D3EE',
            boxShadow: '0 0 10px #22D3EE',
            marginRight: '0.25rem'
          }} />
          AKASH<span style={{ color: '#22D3EE' }}>.S</span>
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: 'flex',
            gap: '0.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '0.4rem 0.75rem',
                    display: 'block',
                    color: isActive ? '#22D3EE' : '#94A3B8',
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="btn-primary"
            style={{ padding: '0.55rem 1.35rem', fontSize: '0.875rem' }}
          >
            {"Let's Connect"}
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid #263449',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#F8FAFC',
              padding: '0.4rem',
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: '#111827',
            borderTop: '1px solid #263449',
            borderBottom: '1px solid #263449',
            padding: '1rem 1.5rem 1.75rem',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href} style={{ borderBottom: '1px solid #1f293d' }}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    style={{
                      display: 'block',
                      padding: '0.875rem 0',
                      color: isActive ? '#22D3EE' : '#94A3B8',
                      fontWeight: isActive ? 600 : 500,
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="btn-primary"
            style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}
          >
            {"Let's Connect"}
          </a>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
