'use client';

import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SiteChrome from '@/components/SiteChrome';

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Data Engineer / Data Analyst',
      company: 'The Cigna Group',
      location: 'United States',
      period: 'Aug 2024 – Present',
      achievements: [
        'Transform legacy claims and eligibility data into FHIR R4 / HL7 resources for member-facing applications — serialization, bundle pagination, and versioned profiles across large healthcare datasets',
        'Design and operate AWS data infrastructure for claims processing — Lambda, DynamoDB access patterns, SQS dead-letter queues, RDS, and S3 — using Terraform and CloudFormation across environments',
        'Build PHI/PII protection on data flowing through API Gateway so sensitive fields (SSNs, diagnosis codes, insurance IDs) are redacted before they leave the pipeline, aligned with HIPAA minimum-necessary practice',
        'Monitor data quality and production health in Splunk — diagnosed connection-pool exhaustion and DynamoDB hot partitions, cutting member login 5xx from 3.2% to under 0.5%',
        'Maintain operational reports and business rules (Pega decision tables) for claim routing so analysts and operations teams can update logic independently',
        'Partner with product, compliance, and engineering on data change reviews in a distributed SAFe Agile team',
      ],
    },
    {
      title: 'Data Engineer Co-op',
      company: 'Anguliyam AI',
      location: 'Atlanta, GA · Remote',
      period: 'Oct 2023 – May 2024',
      achievements: [
        'Built Python document ingestion pipelines for enterprise RAG — chunking, metadata extraction, and embedding generation over large unstructured corpora',
        'Developed FastAPI services for multi-agent workflows: tool contracts, routing, and structured JSON between model calls and downstream actions',
        'Integrated vector search so users could retrieve relevant context; contributed to prompt evaluation that improved retrieval quality',
        'Documented pipeline configurations so client onboarding and deployments were reproducible',
      ],
    },
    {
      title: 'Graduate Research Assistant',
      company: 'Florida Institute of Technology',
      location: 'Melbourne, FL',
      period: 'Dec 2022 – Aug 2023',
      achievements: [
        'Built and maintained Python data processing pipelines for faculty research — cleaning, transforming, and analyzing datasets from multiple sources',
        'Supported experimental design and cloud-based prototypes; delivered summaries faculty could use in ongoing work',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Zoho Corporation',
      location: 'India',
      period: 'Aug 2021 – May 2022',
      achievements: [
        'Designed a reusable JDBC data access layer across 14 database entities, standardizing CRUD and cutting per-feature development time',
        'Optimized MySQL query performance from ~4.8s to under 200ms using indexed JOINs; partnered with product teams on data integrity issues',
      ],
    },
  ];

     return (
     <SiteChrome>
     <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 text-slate-900 transition-all duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
       <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
         <div className="mb-8">
           <Link
             href="/"
             className="inline-flex items-center gap-2 text-purple-600 transition-colors duration-300 hover:translate-x-[-4px] hover:text-purple-700 dark:text-cyan-400 dark:hover:text-cyan-300"
           >
             <ArrowLeft className="w-5 h-5" />
             <span>Back to Home</span>
           </Link>
         </div>
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-400 dark:to-violet-400">
            Professional Experience
          </h1>
                     <p className="animate-fade-in mt-4 text-lg text-slate-600 dark:text-slate-300" style={{ animationDelay: '0.2s' }}>
             Healthcare data pipelines, SQL, quality monitoring, and operational reporting
           </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="animate-slide-in relative border-l-2 border-indigo-200 pb-8 pl-8 dark:border-slate-600"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
              
              <div className="transform rounded-lg border border-slate-200/80 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
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
                
                <ul className="space-y-3 stagger-animation">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i} 
                      className="flex items-start transform hover:translate-x-2 transition-all duration-300"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block transform rounded-lg border border-slate-200/80 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                         <h2 className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent dark:from-cyan-400 dark:to-violet-400">
               Want to work together?
             </h2>
             <p className="mb-4 text-slate-600 dark:text-slate-300">
               Open to data analyst and data engineer roles — pipelines, SQL, reporting, and healthcare data. Let&apos;s talk.
             </p>
                         <Link
               href="/contact"
               className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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