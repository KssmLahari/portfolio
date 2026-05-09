'use client';

import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import TypeWriter from '@/components/TypeWriter';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { MotionDiv } from '@/components/MotionDiv';
import { RevealText, RevealParagraph, RevealHeading } from '@/components/RevealText';
import DarkModeToggle from '@/components/DarkModeToggle';
import SpotlightCard from '@/components/SpotlightCard';
import HeroProfileBubble from '@/components/HeroProfileBubble';
import { GITHUB_URL } from '@/lib/site';

export default function Home() {
  const explore = [
    { title: 'About', body: 'Background, skills, and how I think about engineering.', href: '/about' },
    { title: 'Experience', body: 'The Cigna Group, Anguliyam AI, Florida Tech, Zoho — full timeline.', href: '/experience' },
    { title: 'Projects', body: 'Shipped work, experiments, and architecture notes.', href: '/projects' },
    { title: 'Writing', body: 'Articles on AI systems, infra, and trade-offs.', href: '/blog' },
    { title: 'Services', body: 'Ways I can help beyond a typical résumé line.', href: '/services' },
    { title: 'Contact', body: 'Email, phone, and profiles.', href: '/contact' },
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
        <section className="hero-section flex min-h-[85vh] flex-col justify-center pt-32 pb-24 sm:pt-36 md:pb-32 md:pt-40">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-center">
            <div className="flex-1 text-center md:text-left">
              <RevealText delay={0.05} duration={0.6}>
                <p className="mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 md:text-left">
                  Lahari Karrotu
                </p>
              </RevealText>
              <RevealHeading
                delay={0.1}
                duration={0.8}
                className="mb-4 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl"
              >
                Software engineer
              </RevealHeading>
              <RevealText delay={0.2} duration={0.6}>
                <p className="mb-8 max-w-2xl text-lg font-normal leading-relaxed text-slate-700 dark:text-slate-300 md:text-left">
                  Backend &amp; cloud systems · Healthcare technology
                </p>
              </RevealText>

              <RevealText delay={0.3} duration={0.8}>
                <div className="mb-10 min-h-[3.5rem] max-w-3xl text-xl font-normal leading-relaxed text-slate-700 dark:text-slate-300 md:min-h-[4rem] md:text-2xl">
                  <TypeWriter
                    texts={[
                      'The messy middle: serialization, concurrency, infra that fails at 2 a.m.',
                      'FHIR, AWS serverless, and data that has to stay inside policy.',
                      'RAG, agents, and pipelines where the API matters as much as the model.',
                    ]}
                  />
                </div>
              </RevealText>

              <RevealParagraph
                text="Production healthcare backends at The Cigna Group; RAG and FastAPI work at Anguliyam AI; side projects that stay honest about errors and contracts. No infinite scroll — pick a page below."
                className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-800 dark:text-slate-300 md:text-xl"
                delay={0.45}
                duration={0.9}
                stagger={0.08}
              />

              <RevealText delay={0.55} duration={0.7}>
                <div className="modern-quote mb-10 max-w-3xl px-5 py-4 text-left">
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 md:text-lg">
                    I optimize for clarity under constraint: regulated data, load, and teams across time zones —
                    not polish for its own sake.
                  </p>
                </div>
              </RevealText>

              <RevealText delay={0.65} duration={0.8}>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    href="/lahari-karrotu-resume.docx"
                    download="lahari-karrotu-resume.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0 active:scale-[0.98]"
                  >
                    <span aria-hidden>📄</span>
                    Download resume
                  </a>
                  <Link
                    href="/projects"
                    className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-2xl active:translate-y-0 active:scale-[0.98] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    Browse projects
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl border border-cyan-200 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.98] dark:border-cyan-800 dark:bg-gray-900/40 dark:text-gray-300 dark:hover:bg-cyan-950/30 dark:hover:border-amber-700/70"
                  >
                    Contact
                  </Link>
                </div>
              </RevealText>

              <RevealText delay={0.8} duration={0.8}>
                <div className="mt-12 flex justify-center gap-4 md:justify-start">
                  <Link
                    href={GITHUB_URL}
                    target="_blank"
                    className="rounded-xl border border-gray-200 bg-white/70 p-2.5 text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.35)] dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:border-cyan-600 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/karrotulahari/"
                    target="_blank"
                    className="rounded-xl border border-gray-200 bg-white/70 p-2.5 text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.35)] dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:border-cyan-600 dark:hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:laharikarrotu@gmail.com"
                    className="rounded-xl border border-gray-200 bg-white/70 p-2.5 text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.35)] dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:border-cyan-600 dark:hover:text-white"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </RevealText>
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <HeroProfileBubble />
            </div>
          </div>
        </section>

        <div className="relative z-10 px-4">
          <div className="section-divider-glow mx-auto max-w-4xl rounded-full" aria-hidden />
        </div>

        {/* Explore */}
        <section className="bg-gradient-to-br from-cyan-50/80 via-white to-amber-50/70 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Explore by page
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-slate-700 dark:text-slate-400">
              Everything lives on its own route — no mile-long scroll.
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
                      className="vibrant-card flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-cyan-200/90 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-800/60"
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
                      <p className="flex-1 text-sm leading-relaxed text-slate-800 dark:text-slate-300">{item.body}</p>
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
                © {new Date().getFullYear()} · Backend, healthcare tech, and AI systems
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
