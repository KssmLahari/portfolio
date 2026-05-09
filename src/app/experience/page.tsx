'use client';

import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SiteChrome from '@/components/SiteChrome';

export default function ExperiencePage() {
  const experiences = [
  {
    title: "Software Engineer",
    company: "Cigna",
    location: "United States",
    period: "Aug 2024 – Present",
    achievements: [
      "Own backend microservices and AWS infrastructure for member-facing healthcare APIs at scale — FHIR R4 REST APIs translating legacy claims and eligibility into HL7 resources for the mobile app, including serialization, bundle pagination, and versioned profiles",
      "Built a Golang-based PII/PHI masking layer in API Gateway that redacts sensitive fields (SSNs, diagnosis codes, insurance IDs) before responses reach clients, aligned with HIPAA minimum-necessary practice",
      "Design and operate serverless claims processing on AWS — Lambda sizing, DynamoDB access patterns, SQS dead-letter queues, API Gateway throttling — with Terraform and CloudFormation and least-privilege IAM across environments",
      "Implement and maintain Pega BPM decision tables for adjudication and claim routing so business teams can update rules independently",
      "Lead production incident triage with Splunk across Lambda, RDS, and API Gateway; diagnosed connection pool exhaustion and DynamoDB hot partitions, cutting member login 5xx rate from 3.2% to under 0.5% over two sprint cycles",
      "Collaborate across product, compliance, and engineering in SAFe Agile delivery, including architecture reviews with a distributed team across time zones"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Zoho",
    location: "India",
    period: "Aug 2021 – May 2022",
    achievements: [
      "Shipped backend features for a live J2EE SaaS product using layered MVC, from database through API, within Agile sprints",
      "Designed a YAML-to-table JDBC data access layer replacing per-entity DAO boilerplate across 14 entities, standardizing CRUD and shortening feature delivery",
      "Built authentication and session management: BCrypt (work factor 12), OTP-based 2FA via JavaMail with configurable SMTP TLS, and idle timeout expiry for a multi-tenant production product",
      "Improved MySQL performance by removing N+1 patterns in high-traffic modules in favor of indexed JOINs — page loads dropped from about 4.8s to under 200ms on realistic data"
    ]
  }
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
             Healthcare payer platforms and production SaaS — measurable reliability and performance wins
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
               I&apos;m always open to interesting roles in Software Engineering, Backend, or AI/ML. Let&apos;s talk.
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