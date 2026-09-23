import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as Blob;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // For demo purposes, we'll simulate different responses based on a random selection
    // In a real implementation, you would use Google Speech-to-Text API here
    const responses = [
      {
        transcript: "Tell me about your projects",
        response: "I've shipped data-heavy work including HealthScan, RAG pipelines, and ingestion systems. Would you like me to open the projects page?",
        action: { type: 'navigate', target: 'projects' }
      },
      {
        transcript: "What are your skills",
        response: "I work across SQL, Python, AWS data services, ETL pipelines, data quality, Splunk reporting, and healthcare datasets including claims and FHIR. Let me show you more on the about page.",
        action: { type: 'navigate', target: '/about' }
      },
      {
        transcript: "Show me your experience",
        response: "I'll open my experience page — Cigna data pipelines, Anguliyam RAG ingestion, Florida Tech research data, and Zoho SQL work.",
        action: { type: 'navigate', target: '/experience' }
      },
      {
        transcript: "Tell me about yourself",
        response: "I'm Lahari Karrotu, a data analyst and data engineer. I work with healthcare data — pipelines, quality, and reporting — using SQL, Python, and AWS.",
        action: null
      },
      {
        transcript: "What certifications do you have",
        response: "I'm AWS Certified Solutions Architect, ServiceNow Certified System Administrator, and Cisco CCNA certified.",
        action: { type: 'navigate', target: 'certifications' }
      }
    ];

    // Randomly select a response for demo purposes
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return NextResponse.json({
      transcript: randomResponse.transcript,
      response: randomResponse.response,
      action: randomResponse.action
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 