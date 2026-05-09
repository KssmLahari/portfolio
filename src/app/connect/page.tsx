'use client';

import SiteChrome from '@/components/SiteChrome';

const actionBtn =
  'flex min-h-14 w-full items-center justify-center rounded-[10px] px-6 py-[1.125rem] text-center text-base font-semibold text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-px hover:opacity-90 hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]';

export default function ConnectPage() {
  return (
    <SiteChrome>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 dark:bg-slate-950">
        <div className="w-full max-w-[500px] text-center text-slate-900 dark:text-slate-100">
          <h1 className="mb-3 text-[clamp(1.875rem,6vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em]">
            Lahari Karrotu
          </h1>
          <p className="mb-2 text-[clamp(1.0625rem,3.5vw,1.25rem)] font-medium tracking-[-0.01em] text-slate-700 dark:text-slate-300">
            Software Engineer
          </p>
          <p className="mb-10 text-[clamp(0.875rem,2.5vw,0.9375rem)] leading-relaxed text-slate-500 dark:text-slate-400">
            Backend & cloud systems • Healthcare tech • FHIR & AWS
          </p>

          <p className="mx-auto mb-12 max-w-[480px] text-[clamp(0.9375rem,2.5vw,1.0625rem)] leading-[1.65] text-slate-800 dark:text-slate-300">
            I build production-grade, HIPAA-aware backends — FHIR APIs, AWS serverless, and data protection — and ship AI tools that combine vision models with solid system design.
          </p>

          <div className="mx-auto mb-10 flex max-w-[400px] flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/karrotulahari/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionBtn} bg-[#0077B5] hover:bg-[#006399]`}
            >
              Connect on LinkedIn
            </a>

            <a
              href="/lahari-karrotu-resume.docx"
              download="lahari-karrotu-resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionBtn} bg-black dark:bg-slate-800 dark:hover:bg-slate-700`}
            >
              Download Resume
            </a>

            <a
              href="https://laharikarrotuportfolio.site"
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionBtn} bg-black dark:bg-slate-800 dark:hover:bg-slate-700`}
            >
              View Portfolio
            </a>
          </div>

          <p className="text-sm font-normal text-slate-500 dark:text-slate-400">
            <a
              href="mailto:laharikarrotu@gmail.com"
              className="text-slate-900 underline decoration-slate-400 underline-offset-2 transition-opacity hover:opacity-70 dark:text-cyan-400 dark:decoration-cyan-500/50"
            >
              laharikarrotu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </SiteChrome>
  );
}
