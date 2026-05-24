import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight, ArrowUpRight, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const HERO_IMG = 'https://images.pexels.com/photos/7693156/pexels-photo-7693156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const FEATURE_1 = 'https://images.pexels.com/photos/7718866/pexels-photo-7718866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FEATURE_2 = 'https://images.pexels.com/photos/7430339/pexels-photo-7430339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FEATURE_3 = 'https://images.pexels.com/photos/18854010/pexels-photo-18854010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const CTA_BG = 'https://images.pexels.com/photos/28506813/pexels-photo-28506813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const NAV_LINKS = ['Services', 'Work', 'Process', 'About', 'Contact'];

const SERVICES = [
  {
    index: '01',
    title: 'Pipeline Architecture',
    description:
      'We engineer your outbound and inbound pipeline from first principles — ICP definition, sequencing cadences, and conversion analytics built to scale.',
    image: FEATURE_1,
  },
  {
    index: '02',
    title: 'Strategic Pursuit',
    description:
      'Enterprise sales cycles demand orchestration. We run multi-threaded deal strategies, executive alignment, and commercial negotiation at every stage.',
    image: FEATURE_2,
  },
  {
    index: '03',
    title: 'Close & Expand',
    description:
      'The signature lands the client. We drive disciplined discovery, proposal architecture, and post-close expansion motions that compound revenue.',
    image: FEATURE_3,
  },
];

const STATS = [
  { value: '94%', label: 'Average quota attainment across client portfolios' },
  { value: '3×', label: 'Median pipeline increase within the first quarter' },
  { value: '$2.4B', label: 'Total revenue influenced since founding' },
  { value: '12yr', label: 'Median senior consultant experience' },
];

const TESTIMONIALS = [
  {
    quote:
      'Meridian didn\'t hand us a playbook. They rebuilt our entire sales motion from the ground up. Revenue in Q3 was the best quarter in our company\'s history.',
    name: 'Caroline Holt',
    title: 'Chief Revenue Officer, Ardent Systems',
  },
  {
    quote:
      'The rigour they bring to pipeline analysis is unlike anything we\'d seen in a consulting engagement. Precise, unsentimental, and relentlessly effective.',
    name: 'James Okafor',
    title: 'CEO, Vela Capital Partners',
  },
  {
    quote:
      'Within six weeks we had a functioning enterprise sales process where there had been none. The results speak for themselves.',
    name: 'Sonia Brandt',
    title: 'Founder & MD, Clearwater Technology',
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollTo(id: string) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required.';
    if (!formData.company.trim()) errs.company = 'Company name is required.';
    if (!formData.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email.';
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setFormErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', company: '', email: '', message: '' });
      setFormErrors({});
      toast.success('Thank you. We will be in touch within one business day.');
    }, 1200);
  }

  return (
    <div style={{ fontFamily: 'var(--sans-body)', background: 'var(--cream)', color: 'var(--ink)' }}>
      {/* ── NAVBAR ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'var(--cream)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
          transition: 'background 0.35s var(--ease-editorial), border-color 0.35s var(--ease-editorial)',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => scrollTo('top')}
            style={{
              fontFamily: 'var(--serif-display)',
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--ink)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            MERIDIAN
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.78rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--ink-light)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--ink)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-light)')}
              >
                {link}
              </button>
            ))}

            {/* Theme toggler */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2rem',
                height: '2rem',
                color: 'var(--ink-light)',
                background: 'none',
                border: '1px solid var(--rule)',
                cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--ink-light)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--rule)';
              }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button
              onClick={() => scrollTo('contact')}
              style={{
                fontFamily: 'var(--sans-body)',
                fontSize: '0.78rem',
                letterSpacing: 'var(--letter-wide)',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                background: 'var(--ink)',
                border: 'none',
                cursor: 'pointer',
                padding: '0.55rem 1.3rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.8')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              Enquire
            </button>
          </nav>

          {/* Mobile right side: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2rem',
                height: '2rem',
                color: 'var(--ink-light)',
                background: 'none',
                border: '1px solid var(--rule)',
                cursor: 'pointer',
              }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: 'var(--cream)',
              borderTop: '1px solid var(--rule)',
              padding: '1.5rem 1.5rem 2rem',
            }}
          >
            {[...NAV_LINKS, 'Enquire'].map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.85rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid var(--rule-light)',
                }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="top" ref={heroRef} style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden' }}>
        <img
          src={HERO_IMG}
          alt="Professional handshake representing partnership and deal-closing"
          crossOrigin="anonymous"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Overlay — subtle cream wash so text reads cleanly */}
        <div style={{ position: 'absolute', inset: 0, background: isDark ? 'linear-gradient(to right, rgba(26,24,20,0.92) 45%, rgba(26,24,20,0.4) 100%)' : 'linear-gradient(to right, rgba(245,240,232,0.88) 45%, rgba(245,240,232,0.3) 100%)' }} />

        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative h-full flex flex-col justify-end pb-24 md:pb-32">
          <div style={{ maxWidth: 620 }}>
            <p
              style={{
                fontFamily: 'var(--sans-body)',
                fontSize: '0.72rem',
                letterSpacing: 'var(--letter-wide)',
                textTransform: 'uppercase',
                color: 'var(--ink-light)',
                marginBottom: '1.4rem',
              }}
            >
              Sales Strategy & Revenue Agency
            </p>
            <h1
              style={{
                fontFamily: 'var(--serif-display)',
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: 'var(--letter-xtight)',
                color: 'var(--ink)',
                marginBottom: '1.8rem',
              }}
            >
              Revenue built<br />
              with<br />
              <em style={{ fontStyle: 'italic' }}>precision.</em>
            </h1>
            <p
              style={{
                fontFamily: 'var(--sans-body)',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                lineHeight: 1.7,
                color: 'var(--ink-mid)',
                maxWidth: 440,
                marginBottom: '2.8rem',
              }}
            >
              Meridian is a boutique sales agency for companies that take
              commercial excellence seriously. We architect pipelines, lead
              pursuits, and close the deals that matter.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.8rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  background: 'var(--ink)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.9rem 2.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Start a Conversation <ArrowRight size={14} />
              </button>
              <button
                onClick={() => scrollTo('services')}
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.8rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  background: 'transparent',
                  border: '1px solid var(--rule)',
                  cursor: 'pointer',
                  padding: '0.9rem 2.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--ink)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--rule)')}
              >
                Our Services <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.2rem',
            right: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--ink-light)',
          }}
        >
          <div style={{ width: 1, height: 60, background: 'var(--rule)' }} />
          <span style={{ fontSize: '0.65rem', letterSpacing: 'var(--letter-wide)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--cream-deep)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <p
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1,
                  color: 'var(--ink)',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.8rem',
                  lineHeight: 1.55,
                  color: 'var(--ink-light)',
                  maxWidth: 180,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '4rem' }}>
            <div style={{ width: 40, height: 1, background: 'var(--ink)' }} />
            <span
              style={{
                fontFamily: 'var(--sans-body)',
                fontSize: '0.72rem',
                letterSpacing: 'var(--letter-wide)',
                textTransform: 'uppercase',
                color: 'var(--ink-light)',
              }}
            >
              Services
            </span>
          </div>

          <div style={{ display: 'grid', gap: 0 }}>
            {SERVICES.map((svc, i) => (
              <div
                key={svc.index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  borderTop: '1px solid var(--rule)',
                  paddingTop: '3.5rem',
                  paddingBottom: '3.5rem',
                  gap: '3rem',
                }}
                className="flex-col md:grid"
              >
                {/* Text block */}
                <div
                  style={{
                    order: i % 2 === 0 ? 0 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingRight: i % 2 === 0 ? '3rem' : 0,
                    paddingLeft: i % 2 !== 0 ? '3rem' : 0,
                  }}
                  className="service-text"
                >
                  <span
                    style={{
                      fontFamily: 'var(--serif-display)',
                      fontSize: '0.85rem',
                      color: 'var(--ink-light)',
                      display: 'block',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {svc.index}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--serif-display)',
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      letterSpacing: 'var(--letter-xtight)',
                      color: 'var(--ink)',
                      marginBottom: '1.4rem',
                    }}
                  >
                    {svc.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--sans-body)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'var(--ink-mid)',
                      maxWidth: 420,
                    }}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Image block */}
                <div
                  style={{
                    order: i % 2 === 0 ? 1 : 0,
                    overflow: 'hidden',
                    aspectRatio: '4 / 3',
                  }}
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    crossOrigin="anonymous"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: 'var(--cream-deep)', padding: 'clamp(4rem, 8vw, 8rem) 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 40, height: 1, background: 'var(--ink)' }} />
            <span style={{ fontFamily: 'var(--sans-body)', fontSize: '0.72rem', letterSpacing: 'var(--letter-wide)', textTransform: 'uppercase', color: 'var(--ink-light)' }}>
              Process
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--serif-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: 'var(--letter-xtight)',
              color: 'var(--ink)',
              maxWidth: 640,
              marginBottom: '4rem',
            }}
          >
            How we work with you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '1', title: 'Diagnostic', body: 'We audit your current pipeline, ICP assumptions, and conversion data. No assumptions — only evidence.' },
              { step: '2', title: 'Architecture', body: 'We design a sales system calibrated to your market, cycle length, and growth ambition.' },
              { step: '3', title: 'Execution', body: 'We embed alongside your team — running sequences, coaching on pursuits, and leading complex negotiations.' },
              { step: '4', title: 'Compound', body: 'Closed revenue is the beginning. We build expansion motions that turn clients into multi-year partners.' },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  padding: '2.5rem 2rem',
                  borderLeft: i === 0 ? '1px solid var(--rule)' : 'none',
                  borderRight: '1px solid var(--rule)',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif-display)',
                    fontSize: '3.5rem',
                    fontWeight: 400,
                    color: 'var(--rule)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '1.5rem',
                  }}
                >
                  {item.step}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--serif-display)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    marginBottom: '0.8rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--ink-light)' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK / TESTIMONIALS ── */}
      <section id="work" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '4rem' }}>
            <div style={{ width: 40, height: 1, background: 'var(--ink)' }} />
            <span style={{ fontFamily: 'var(--sans-body)', fontSize: '0.72rem', letterSpacing: 'var(--letter-wide)', textTransform: 'uppercase', color: 'var(--ink-light)' }}>
              Client Voices
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                style={{
                  padding: '2.5rem',
                  borderLeft: i === 0 ? '1px solid var(--rule)' : 'none',
                  borderRight: '1px solid var(--rule)',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--serif-display)',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                    fontWeight: 400,
                    lineHeight: 1.55,
                    color: 'var(--ink)',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid var(--rule-light)', paddingTop: '1.2rem' }}>
                  <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.2rem' }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.78rem', color: 'var(--ink-light)' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MANIFESTO ── */}
      <section id="about" style={{ background: 'var(--ink)', padding: 'clamp(5rem, 10vw, 10rem) 0', position: 'relative', overflow: 'hidden' }}>
        <img
          src={CTA_BG}
          alt="Modern dark boardroom"
          crossOrigin="anonymous"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }}
        />
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ width: 40, height: 1, background: 'var(--rule)' }} />
                <span style={{ fontFamily: 'var(--sans-body)', fontSize: '0.72rem', letterSpacing: 'var(--letter-wide)', textTransform: 'uppercase', color: 'var(--rule)' }}>
                  About Meridian
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: 'var(--letter-xtight)',
                  color: 'var(--cream)',
                  marginBottom: '2rem',
                }}
              >
                We are not a consultancy.<br />
                We are a <em style={{ fontStyle: 'italic' }}>revenue partner.</em>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'var(--cream-deep)',
                  marginBottom: '1.5rem',
                  opacity: 0.85,
                }}
              >
                Meridian was founded by operators who had closed enterprise deals, built sales
                teams from scratch, and rebuilt broken pipeline machines. We have no interest
                in frameworks for frameworks&apos; sake.
              </p>
              <p
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'var(--cream-deep)',
                  marginBottom: '2.5rem',
                  opacity: 0.85,
                }}
              >
                Every engagement is led by a senior partner. Every strategy is built for your
                specific context. And every dollar of our fee is accountable to revenue outcomes.
              </p>
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.78rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  background: 'var(--cream)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.9rem 2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Work With Us <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: 'clamp(4rem, 8vw, 8rem) 0', borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ width: 40, height: 1, background: 'var(--ink)' }} />
                <span style={{ fontFamily: 'var(--sans-body)', fontSize: '0.72rem', letterSpacing: 'var(--letter-wide)', textTransform: 'uppercase', color: 'var(--ink-light)' }}>
                  Contact
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontSize: 'clamp(2.4rem, 4vw, 4rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: 'var(--letter-xtight)',
                  color: 'var(--ink)',
                  marginBottom: '1.5rem',
                }}
              >
                Let&rsquo;s talk<br />revenue.
              </h2>
              <p style={{ fontFamily: 'var(--sans-body)', fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink-mid)', maxWidth: 380, marginBottom: '2.5rem' }}>
                Tell us where you are and where you want to be. We respond to every serious
                enquiry within one business day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.85rem', color: 'var(--ink-light)', letterSpacing: '0.04em' }}>
                  hello@meridianagency.co
                </p>
                <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.85rem', color: 'var(--ink-light)', letterSpacing: '0.04em' }}>
                  London · New York · Sydney
                </p>
              </div>
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name' },
                { id: 'company', label: 'Company', type: 'text', placeholder: 'Organisation name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@company.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--sans-body)',
                      fontSize: '0.72rem',
                      letterSpacing: 'var(--letter-wide)',
                      textTransform: 'uppercase',
                      color: 'var(--ink-light)',
                      marginBottom: '0.55rem',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, [field.id]: e.target.value }));
                      setFormErrors((prev) => ({ ...prev, [field.id]: '' }));
                    }}
                    style={{
                      width: '100%',
                      fontFamily: 'var(--sans-body)',
                      fontSize: '0.95rem',
                      color: 'var(--ink)',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${formErrors[field.id] ? '#c0392b' : 'var(--rule)'}`,
                      padding: '0.6rem 0',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--ink)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = formErrors[field.id] ? '#c0392b' : 'var(--rule)')}
                  />
                  {formErrors[field.id] && (
                    <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.75rem', color: '#c0392b', marginTop: '0.35rem' }}>
                      {formErrors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--sans-body)',
                    fontSize: '0.72rem',
                    letterSpacing: 'var(--letter-wide)',
                    textTransform: 'uppercase',
                    color: 'var(--ink-light)',
                    marginBottom: '0.55rem',
                  }}
                >
                  What can we help with?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your current situation and goals…"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--sans-body)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--rule)',
                    padding: '0.6rem 0',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--ink)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--rule)')}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                style={{
                  alignSelf: 'flex-start',
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.78rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  background: sending ? 'var(--ink-light)' : 'var(--ink)',
                  border: 'none',
                  cursor: sending ? 'not-allowed' : 'pointer',
                  padding: '0.9rem 2.2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'opacity 0.2s, background 0.2s',
                }}
              >
                {sending ? 'Sending…' : 'Send Enquiry'} {!sending && <ArrowRight size={14} />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid var(--rule)', background: 'var(--cream-deep)', padding: '2.5rem 0' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span
            style={{
              fontFamily: 'var(--serif-display)',
              fontSize: '1.15rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--ink)',
            }}
          >
            MERIDIAN
          </span>
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  fontFamily: 'var(--sans-body)',
                  fontSize: '0.72rem',
                  letterSpacing: 'var(--letter-wide)',
                  textTransform: 'uppercase',
                  color: 'var(--ink-light)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {link}
              </button>
            ))}
          </nav>
          <p style={{ fontFamily: 'var(--sans-body)', fontSize: '0.75rem', color: 'var(--ink-light)' }}>
            © {new Date().getFullYear()} Meridian Agency
          </p>
        </div>
      </footer>
    </div>
  );
}
