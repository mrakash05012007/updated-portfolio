'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = 'Name is required.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required.';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akashsrinivasan05012007@gmail.com',
    href: 'mailto:akashsrinivasan05012007@gmail.com',
    color: '#3B82F6',
    description: 'Direct inquiries & opportunities',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/mrakash05012007',
    href: 'https://github.com/mrakash05012007',
    color: '#22D3EE',
    description: 'Repositories, models & codebases',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akash-s-5b1a78374',
    href: 'https://www.linkedin.com/in/akash-s-5b1a78374/',
    color: '#60A5FA',
    description: 'Professional engineering network',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Email fallback: open mailto with pre-filled content
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hi Akash,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:akashsrinivasan05012007@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const inputStyle = (hasError: boolean) => ({
    width: '100%',
    padding: '0.85rem 1.1rem',
    background: '#0B1120',
    border: `1.5px solid ${hasError ? '#EF4444' : '#263449'}`,
    borderRadius: '10px',
    fontSize: '0.9375rem',
    color: '#F8FAFC',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  });

  return (
    <section id="contact" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="text-heading" style={{ color: '#F8FAFC', marginBottom: '1rem' }}>
            {"Let's Start a "}
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Conversation
            </span>
          </h2>
          <div className="gradient-line" style={{ margin: '0.85rem auto 1.5rem' }} />
          <p style={{ fontSize: '1.0625rem', color: '#94A3B8', lineHeight: 1.7 }}>
            Interested in collaborating on AI/ML applications, research initiatives, freelance projects, or full-time roles? Drop me a message.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.45fr',
            gap: '3.5rem',
          }}
          className="contact-grid"
        >
          {/* Left: Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactLinks.map(({ icon: Icon, label, value, href, color, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.35rem 1.5rem',
                  textDecoration: 'none',
                  background: '#111827',
                  border: '1px solid #263449',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22D3EE';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#263449';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(34, 211, 238, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.2rem', wordBreak: 'break-all' }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    {description}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div
            style={{
              padding: '2.25rem',
              background: '#111827',
              border: '1px solid #263449',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(34, 211, 238, 0.15)',
                  border: '1.5px solid #22D3EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  <CheckCircle size={32} color="#22D3EE" />
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.5rem' }}>
                  Message Drafted
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Your email client has been prepared with your message. You can send it directly from your inbox.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ fontSize: '0.875rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-two-col">
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.45rem' }}>
                      Your Name <span style={{ color: '#22D3EE' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle(!!errors.name)}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#22D3EE')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#EF4444' : '#263449')}
                    />
                    {errors.name && (
                      <p style={{ fontSize: '0.75rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.45rem' }}>
                      Email Address <span style={{ color: '#22D3EE' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle(!!errors.email)}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#22D3EE')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#EF4444' : '#263449')}
                    />
                    {errors.email && (
                      <p style={{ fontSize: '0.75rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.45rem' }}>
                    Subject <span style={{ color: '#22D3EE' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Collaboration on AI/ML Project"
                    value={formData.subject}
                    onChange={handleChange}
                    style={inputStyle(!!errors.subject)}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#22D3EE')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.subject ? '#EF4444' : '#263449')}
                  />
                  {errors.subject && (
                    <p style={{ fontSize: '0.75rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertCircle size={12} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.45rem' }}>
                    Message <span style={{ color: '#22D3EE' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle(!!errors.message), resize: 'vertical' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#22D3EE')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? '#EF4444' : '#263449')}
                  />
                  {errors.message && (
                    <p style={{ fontSize: '0.75rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
