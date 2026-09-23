'use client';

import Link from 'next/link';
import SiteChrome from '@/components/SiteChrome';

export default function ServicesPage() {
  const services = [{
    title: "Data pipelines",
    description: "Ingestion, transformation, and AWS workflows so claims, product, and operational data move reliably from source to store.",
    features: [
      "ETL / ELT pipeline design",
      "AWS Lambda, SQS, S3, RDS, DynamoDB",
      "Schema and contract handling",
      "Dead-letter queues and retries"
    ]
  },
  {
    title: "Data analysis & quality",
    description: "SQL-first analysis, cleansing, and quality checks so reports rest on data people can trust.",
    features: [
      "Advanced SQL & Python",
      "Data cleansing and validation",
      "Multi-source integration",
      "Quality monitoring"
    ]
  },
  {
    title: "Reporting & KPIs",
    description: "Operational dashboards and executive summaries that track pipeline health, data quality, and business metrics.",
    features: [
      "KPI dashboards",
      "Splunk & CloudWatch",
      "Stakeholder reporting",
      "Incident analytics"
    ]
  },
  {
    title: "Healthcare data",
    description: "Working with regulated member, claims, and eligibility data — including FHIR-shaped interchange and PHI-aware handling.",
    features: [
      "Claims & eligibility datasets",
      "FHIR / HL7 transformations",
      "PHI protection",
      "HIPAA-aware pipelines"
    ]
  }
];

  return (
    <SiteChrome>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 text-slate-900 transition-all duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header with animations */}
        <div className="animate-fade-in mb-16 text-center">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-400 dark:to-violet-400">
            Services
          </h1>
          <p className="animate-fade-in mt-4 text-lg text-slate-600 dark:text-slate-300" style={{ animationDelay: '0.2s' }}>
            Comprehensive data analysis, pipelines, and reporting for healthcare and enterprise teams
          </p>
        </div>

        {/* Services Grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in transform rounded-lg border border-slate-200/80 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/90"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-violet-400">
                {service.title}
              </h2>
              <p className="mb-6 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <div className="space-y-3">
                <h3 className="font-medium text-slate-900 dark:text-white">Key Features:</h3>
                <ul className="space-y-2 stagger-animation">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start transform hover:translate-x-2 transition-all duration-300"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block rounded-lg border border-slate-200/80 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
            <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-cyan-400 dark:to-violet-400">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-slate-600 dark:text-slate-300">
              Let&apos;s discuss pipelines, SQL, and reporting work that needs to ship cleanly.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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