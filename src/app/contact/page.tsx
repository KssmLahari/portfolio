'use client';

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { GITHUB_URL } from '@/lib/site';
import SiteChrome from '@/components/SiteChrome';

export default function ContactPage() {
  return (
    <SiteChrome>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 text-slate-900 transition-all duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-fade-in mb-16 text-center">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-400 dark:to-violet-400">
            Get in Touch
          </h1>
          <p className="animate-fade-in mt-4 text-lg text-slate-600 dark:text-slate-300" style={{ animationDelay: '0.2s' }}>
            I&apos;m interested in backend, cloud, and healthcare technology roles — plus teams shipping AI products with strong engineering discipline. Reach out through any of these channels.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-in rounded-lg border border-slate-200/80 bg-gradient-to-br from-gray-50/90 to-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800" style={{ animationDelay: '0.3s' }}>
            <div className="stagger-animation space-y-8">
              <div className="flex transform items-center rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:bg-white/80 dark:hover:bg-slate-800/80">
                <Mail className="mr-6 h-8 w-8 shrink-0 text-blue-600 dark:text-cyan-400 animate-bounce-subtle" />
                <div>
                  <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <a
                    href="mailto:laharikarrotu@gmail.com"
                    className="text-lg text-slate-900 transition-all duration-300 hover:text-blue-600 dark:text-white dark:hover:text-cyan-400"
                  >
                    laharikarrotu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex transform items-center rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:bg-white/80 dark:hover:bg-slate-800/80">
                <Phone className="mr-6 h-8 w-8 shrink-0 text-blue-600 dark:text-cyan-400 animate-bounce-subtle" style={{ animationDelay: '0.1s' }} />
                <div>
                  <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <a
                    href="tel:904-590-2128"
                    className="text-lg text-slate-900 transition-all duration-300 hover:text-blue-600 dark:text-white dark:hover:text-cyan-400"
                  >
                    904-590-2128
                  </a>
                </div>
              </div>

              <div className="flex transform items-center rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:bg-white/80 dark:hover:bg-slate-800/80">
                <MapPin className="mr-6 h-8 w-8 shrink-0 text-blue-600 dark:text-cyan-400 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
                <div>
                  <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-lg text-slate-900 dark:text-white">United States</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in mt-12 border-t border-slate-200 pt-12 dark:border-slate-700" style={{ animationDelay: '0.6s' }}>
              <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-violet-400">
                Professional Profiles
              </h2>
              <div className="flex justify-center space-x-8">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center rounded-lg border border-slate-200 bg-white px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-600 dark:bg-slate-800"
                >
                  <Github className="mr-3 h-6 w-6 text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-cyan-400" />
                  <span className="text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/karrotulahari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center rounded-lg border border-slate-200 bg-white px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-600 dark:bg-slate-800"
                >
                  <Linkedin className="mr-3 h-6 w-6 text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-cyan-400" />
                  <span className="text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in mt-12 text-center" style={{ animationDelay: '0.8s' }}>
            <p className="text-slate-600 transition-transform duration-300 hover:scale-105 dark:text-slate-400">
              Looking forward to connecting about backend, cloud, healthcare tech, and production AI work.
            </p>
          </div>
        </div>
      </div>
    </div>
    </SiteChrome>
  );
}