'use client';
import { MotionDiv } from './MotionDiv';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Small uppercase line above the title (e.g. “Work”, “Services”). */
  eyebrow?: string;
}

const SectionHeader = ({ title, subtitle, eyebrow }: SectionHeaderProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center md:mb-20"
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="relative mx-auto inline-block text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {title}
        <span
          className="absolute -bottom-3 left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-400 opacity-90 dark:from-cyan-400 dark:via-teal-400 dark:to-amber-400/90"
          aria-hidden
        />
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      ) : null}
    </MotionDiv>
  );
};

export default SectionHeader; 