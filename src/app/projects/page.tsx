'use client';

import Navigation from '@/components/Navigation';
import DarkModeToggle from '@/components/DarkModeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionHeader from '@/components/SectionHeader';
import ProjectShowcase from '@/components/ProjectShowcase';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="gradient-background relative min-h-screen text-gray-800 dark:text-gray-100">
      <DarkModeToggle />
      <Navigation />
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTop />

      <div className="relative z-10 pt-28 pb-20 sm:pt-32">
        <section className="projects-section overflow-hidden py-20" id="projects">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects"
            subtitle="Detailed build work, shipped experiments, and production-minded implementations"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProjectShowcase projects={projects} />
          </div>
        </section>
      </div>
    </main>
  );
}
