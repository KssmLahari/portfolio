'use client';

import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SiteChrome from '@/components/SiteChrome';

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Master Data Analyst / Software Engineer',
      company: 'The Cigna Group',
      location: 'United States',
      period: 'Sep 2024 – Feb 2026',
      achievements: [
        'Created, updated, and maintained supply chain master data including provider network records, vendor information, pricing data, and product catalogs in Workday ERP and enterprise data systems, following established MDM policies and procedures',
        'Maintained Infor Lawson Supply Chain Management-compatible workflows — managed inventory, vendor, and pricing data, ensured accuracy within purchase orders and contracts, and supported sourcing and procurement operations',
        'Monitored data quality across multiple integrated systems — identified inaccuracies, performed data cleansing, coordinated corrections with Purchasing and Accounts Payable teams, and implemented process improvements reducing recurring data issues',
        'Developed and maintained operational reports and dashboards tracking supply chain KPIs and data quality metrics — gathered stakeholder feedback and delivered executive-facing summaries supporting leadership decision-making',
        'Served as primary point of contact for master data questions — partnered with IT, operational leaders, and vendors to resolve system issues, coordinated data change request approvals, and trained users on data management processes',
      ],
    },
    {
      title: 'Data Analyst / Software Engineer Co-op',
      company: 'Anguliyam AI',
      location: 'Remote',
      period: 'Oct 2023 – May 2024',
      achievements: [
        'Maintained master data quality for enterprise client systems — created and updated product, vendor, and configuration records, reviewed change requests, and coordinated approvals with business owners following data governance policies',
        'Developed operational reports and dashboards tracking data quality KPIs — delivered executive-facing analytics summaries and recommendations to enterprise stakeholders',
        'Monitored data quality across integrated systems — identified inaccuracies, performed cleansing, and implemented process improvements reducing data errors and improving consistency',
        'Provided data analysis and benchmarking identifying process improvement and cost-saving opportunities, communicating findings clearly to leadership teams',
      ],
    },
    {
      title: 'Graduate Research Assistant',
      company: 'Florida Institute of Technology',
      location: 'Melbourne, FL',
      period: 'Dec 2022 – Aug 2023',
      achievements: [
        'Maintained and cleansed research datasets from multiple sources — applied MDM principles to ensure data accuracy, consistency, and integrity across research computing systems',
        'Developed operational reporting pipelines and data summaries — delivered findings to faculty stakeholders in clear, accessible formats supporting data-driven research decisions',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Zoho Corporation',
      location: 'India',
      period: 'Aug 2021 – May 2022',
      achievements: [
        'Maintained product and vendor master data records across 14 database entities for a live enterprise SaaS platform — ensured accuracy within systems and optimized data access performance from 4.8s to under 200ms',
        'Partnered with product and operations teams to resolve data integrity issues and delivered training on data management processes and business rules',
      ],
    },
  ];

  return (
    <SiteChrome>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 text-slate-900 transition-all duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 transition-colors duration-300 hover:translate-x-[-4px] hover:text-purple-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="animate-fade-in mb-16 text-center">
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-400 dark:to-violet-400">
              Professional Experience
            </h1>
            <p
              className="animate-fade-in mt-4 text-lg text-slate-600 dark:text-slate-300"
              style={{ animationDelay: '0.2s' }}
            >
              Healthcare master data, supply chain MDM, and enterprise data quality — 4+ years
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="animate-slide-in relative border-l-2 border-indigo-200 pb-8 pl-8 dark:border-slate-600"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -left-2 top-0 h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />

                <div className="transform rounded-lg border border-slate-200/80 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-800">
                  <div className="mb-6 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div>
                      <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-violet-400">
                        {exp.title}
                      </h2>
                      <h3 className="text-lg text-slate-800 dark:text-slate-200">{exp.company}</h3>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <div className="mb-1 flex items-center text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="stagger-animation space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex transform items-start transition-all duration-300 hover:translate-x-2"
                      >
                        <span className="mr-3 mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                        <span className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in mt-16 text-center" style={{ animationDelay: '0.8s' }}>
            <div className="inline-block transform rounded-lg border border-slate-200/80 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
              <h2 className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-violet-400">
                Let&apos;s connect
              </h2>
              <p className="mb-4 text-slate-600 dark:text-slate-300">
                Open to conversations about healthcare master data, supply chain analytics, and data governance.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
