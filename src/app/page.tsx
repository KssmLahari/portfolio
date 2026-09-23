'use client';

import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import TypeWriter from '@/components/TypeWriter';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { MotionDiv } from '@/components/MotionDiv';
import { RevealText, RevealHeading } from '@/components/RevealText';
import DarkModeToggle from '@/components/DarkModeToggle';
import SpotlightCard from '@/components/SpotlightCard';
import HeroProfileBubble from '@/components/HeroProfileBubble';
import { GITHUB_URL } from '@/lib/site';

const heroStats = [
  { value: '4+ yrs', label: 'Healthcare MDM' },
  { value: 'Workday', label: 'ERP & Infor Lawson' },
  { value: 'Primary POC', label: 'Master data lead' },
  { value: '3 certs', label: 'AWS · ServiceNow · CCNA' },
];

const skillPills = ['Workday ERP', 'Infor Lawson', 'SQL & Python', 'Data Quality', 'Splunk'];

export default function Home() {
  const explore = [
    { title: 'About', body: 'Background, education, skills, and certifications.', href: '/about' },
    { title: 'Experience', body: 'Cigna, Anguliyam, Florida Tech, and Zoho — full timeline.', href: '/experience' },
    { title: 'Projects', body: 'AI healthcare tools and systems I have shipped.', href: '/projects' },
    { title: 'Writing', body: 'Notes on data systems, quality, and trade-offs.', href: '/blog' },
    { title: 'Services', body: 'MDM, data quality, reporting, and analytics.', href: '/services' },
    { title: 'Contact', body: 'Email, phone, LinkedIn, and Palo Alto.', href: '/contact' },
  ];

  return (
    <main className="gradient-background relative min-h-screen text-gray-800 dark:text-gray-100">
      <DarkModeToggle />
      <Navigation />
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTop />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animated-orb animated-orb-indigo top-24 -left-24" />
        <div className="animated-orb animated-orb-violet top-[34%] right-[-8rem]" />
        <div className="animated-orb animated-orb-sky bottom-8 left-[18%]" />
        <div className="modern-grid-overlay" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="hero-section flex min-h-[88vh] flex-col justify-center pt-28 pb-16 sm:pt-32 md:pb-24 md:pt-36">
          <div className="mx-auto w-full max-w-6xl px-4">
            {/* Banner */}
            <RevealText delay={0.02} duration={0.5}>
              <div className="mb-10 flex justify-center md:justify-start">
                <div className="hero-banner">
                  <span className="hero-banner-dot" aria-hidden />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Healthcare supply chain MDM
                  </span>
                  <span className="hero-banner-sep" aria-hidden>
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden />
                    Palo Alto, CA
                  </span>
                  <span className="hero-banner-sep hidden sm:inline" aria-hidden>
                    ·
                  </span>
                  <span className="hidden text-sm text-slate-600 dark:text-slate-300 sm:inline">
                    laharikarrotu@gmail.com
                  </span>
                </div>
              </div>
            </RevealText>

            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <RevealText delay={0.05} duration={0.6}>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
                    Lahari Karrotu
                  </p>
                </RevealText>

                <RevealHeading
                  delay={0.1}
                  duration={0.8}
                  className="mb-5 text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-[3.25rem]"
                >
                  Master{' '}
                  <span className="hero-headline-accent">Data Analyst</span>
                </RevealHeading>

                <RevealText delay={0.18} duration={0.6}>
                  <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
                    Supply chain master data across{' '}
                    <span className="font-medium text-slate-800 dark:text-slate-100">Workday ERP</span> and{' '}
                    <span className="font-medium text-slate-800 dark:text-slate-100">Infor Lawson</span> — items,
                    vendors, pricing, and inventory teams can rely on.
                  </p>
                </RevealText>

                <RevealText delay={0.26} duration={0.7}>
                  <div className="mb-8 min-h-[2.75rem] text-lg font-medium leading-snug text-slate-700 dark:text-slate-300 sm:min-h-[3rem] sm:text-xl">
                    <TypeWriter
                      texts={[
                        'Data cleansing and quality monitoring across integrated systems.',
                        'Operational dashboards that track supply chain KPIs.',
                        'Primary POC for master data across IT and business teams.',
                      ]}
                    />
                  </div>
                </RevealText>

                <RevealText delay={0.34} duration={0.6}>
                  <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
                    {skillPills.map((pill) => (
                      <span key={pill} className="hero-pill">
                        {pill}
                      </span>
                    ))}
                  </div>
                </RevealText>

                <RevealText delay={0.42} duration={0.7}>
                  <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                    <Link
                      href="/experience"
                      className="rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0 active:scale-[0.98]"
                    >
                      View experience
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl border border-cyan-200/80 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.98] dark:border-cyan-800/80 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-cyan-950/30"
                    >
                      Contact
                    </Link>
                  </div>
                </RevealText>

                <RevealText delay={0.5} duration={0.7}>
                  <div className="mt-10 flex justify-center gap-3 lg:justify-start">
                    <Link
                      href={GITHUB_URL}
                      target="_blank"
                      className="rounded-xl border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-cyan-600 dark:hover:text-white"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/karrotulahari/"
                      target="_blank"
                      className="rounded-xl border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-cyan-600 dark:hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="mailto:laharikarrotu@gmail.com"
                      className="rounded-xl border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-cyan-600 dark:hover:text-white"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </RevealText>
              </div>

              <RevealText delay={0.2} duration={0.75} className="w-full max-w-sm shrink-0 lg:max-w-xs">
                <div className="hero-profile-card pb-4">
                  <div className="flex flex-col items-center">
                    <HeroProfileBubble />
                    <span className="hero-profile-badge">
                      <span className="hero-banner-dot" aria-hidden />
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </RevealText>
            </div>

            {/* Stat bar */}
            <RevealText delay={0.55} duration={0.7}>
              <div className="hero-stat-bar mx-auto mt-14 max-w-4xl">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="hero-stat-value">{stat.value}</p>
                    <p className="hero-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </RevealText>
          </div>
        </section>

        <div className="relative z-10 px-4">
          <div className="section-divider-glow mx-auto max-w-4xl rounded-full" aria-hidden />
        </div>

        {/* Explore */}
        <section className="bg-gradient-to-br from-cyan-50/80 via-white to-teal-50/60 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Portfolio
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Explore by page
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Each section has its own route — pick what you want to read first.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {explore.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                >
                  <SpotlightCard className="h-full rounded-xl">
                    <MotionDiv
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 380, damping: 28, delay: idx * 0.06 }}
                      whileHover={{ y: -5 }}
                      className="vibrant-card flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-cyan-200/90 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-cyan-800/60"
                    >
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 dark:text-cyan-400"
                          aria-hidden
                        />
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.body}</p>
                    </MotionDiv>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Compact footer */}
        <footer className="border-t border-slate-200/80 bg-slate-50/80 py-10 dark:border-slate-800 dark:bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-medium text-slate-900 dark:text-white">Lahari Karrotu</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} · Healthcare master data, supply chain, and analytics
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/experience" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">
                Experience
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">
                Projects
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">
                Contact
              </Link>
              <Link href="/connect" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">
                Connect
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
