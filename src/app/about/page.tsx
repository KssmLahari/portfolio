/* eslint-disable @next/next/no-img-element */

import { GITHUB_URL, GITHUB_USERNAME } from '@/lib/site';
import SiteChrome from '@/components/SiteChrome';

export default function AboutPage() {
  return (
    <SiteChrome>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div className="animate-fade-in space-y-6">
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-400 dark:to-violet-400">
                About Me
              </h1>
              <p
                className="animate-fade-in text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                style={{ animationDelay: '0.2s' }}
              >
                Hey, I&apos;m Lahari — a Master Data Analyst based in Palo Alto with 4+ years of experience in
                healthcare environments. I maintain supply chain master data including items, vendors, pricing,
                and inventory in Workday ERP and Infor Lawson Supply Chain Management.
              </p>
              <p
                className="animate-fade-in text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                style={{ animationDelay: '0.3s' }}
              >
                At The Cigna Group I served as the primary point of contact for master data across IT, operations,
                and business teams — from data cleansing and quality monitoring to executive KPI reporting. I also
                have co-op experience at Anguliyam AI, graduate research at Florida Tech, and an engineering
                foundation from Zoho that sharpened how I think about data quality at scale.
              </p>

              <div className="transform space-y-4 transition-all duration-500 hover:translate-x-2">
                <h2 className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-teal-400">
                  Education
                </h2>
                <div className="stagger-animation space-y-3">
                  <div className="rounded-lg border border-slate-200/80 bg-white/60 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/90">
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Master of Science, Computer Science
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      Florida Institute of Technology · Aug 2022 – May 2024 · GPA 3.6 / 4.0
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white/60 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/90">
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Bachelor of Technology, Computer Science
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      KL University · Aug 2018 – May 2022 · GPA 8.7 / 10
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in space-y-4" style={{ animationDelay: '0.4s' }}>
                <h2 className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-teal-400">
                  Core Competencies
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: 'MDM & ERP',
                      skills: 'Workday ERP, Infor Lawson SCM, item/vendor/pricing/inventory data, data governance',
                    },
                    {
                      title: 'Supply Chain',
                      skills: 'Vendor management, purchase orders, contracts, sourcing, procurement, recalls',
                    },
                    {
                      title: 'Data & Analytics',
                      skills: 'SQL (advanced), Python, data cleansing, multi-source integration, KPI tracking',
                    },
                    {
                      title: 'Reporting & Tools',
                      skills: 'Splunk, CloudWatch, operational dashboards, Jira, ServiceNow, Git, Excel',
                    },
                  ].map((competency, index) => (
                    <div
                      key={index}
                      className="space-y-2 rounded-lg border border-slate-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-slate-600"
                      style={{ animationDelay: `${0.2 * index}s` }}
                    >
                      <h3 className="font-medium text-slate-900 dark:text-white">{competency.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{competency.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.3s' }}>
              <div className="transform overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/95">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  GitHub Activity
                </h3>
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-compact&area=true&hide_border=true&bg_color=ffffff&color=000000&line=4f46e5&point=24292e`}
                  alt="GitHub Contribution Activity"
                  className="w-full rounded dark:opacity-95"
                  loading="lazy"
                />
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Open source &amp; projects</span>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-800 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 shadow-md transition-all hover:shadow-lg dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                <h2 className="mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-teal-400">
                  Professional Highlights
                </h2>
                <ul className="stagger-animation space-y-3">
                  {[
                    'Cigna: Workday ERP + Infor Lawson MDM, data quality monitoring, executive KPI reporting, and primary POC for master data across IT and business teams',
                    'Anguliyam: enterprise data governance, operational dashboards, and process improvements reducing data errors',
                    'Florida Tech: research dataset cleansing and operational reporting pipelines using MDM principles',
                    'Zoho: maintained master data across 14 entities, optimized data access from 4.8s to under 200ms',
                    'Certifications: AWS Solutions Architect · ServiceNow CSA · Cisco CCNA',
                  ].map((highlight, index) => (
                    <li key={index} className="flex transform items-start transition-all duration-300 hover:translate-x-2">
                      <span className="mr-3 mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-violet-500" />
                      <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
