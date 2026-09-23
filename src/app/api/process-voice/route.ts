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
        response: "I've worked on several projects including HealthScan, an AI healthcare assistant, and Blinds & Boundaries, a virtual try-on platform. Would you like me to open the projects page?",
        action: { type: 'navigate', target: 'projects' }
      },
      {
        transcript: "What are your skills",
        response: "I specialize in healthcare master data management — Workday ERP, Infor Lawson Supply Chain Management, advanced SQL, Python, data cleansing, multi-source integration, and KPI tracking. I also use Splunk, CloudWatch, Jira, and ServiceNow for reporting and operations.",
        action: { type: 'navigate', target: 'skills' }
      },
      {
        transcript: "Show me your experience",
        response: "I spent over a year at The Cigna Group as Master Data Analyst maintaining supply chain MDM in Workday and Infor Lawson. Before that I worked at Anguliyam AI, did graduate research at Florida Tech, and interned at Zoho. I'll open my experience page for you.",
        action: { type: 'navigate', target: '/experience' }
      },
      {
        transcript: "Show me your experience",
        response: "I'll take you to my experience page — healthcare master data at Cigna, plus Anguliyam, Florida Tech, and Zoho.",
        action: { type: 'navigate', target: '/experience' }
      },
      {
        transcript: "Tell me about yourself",
        response: "I'm Lahari Karrotu, a Master Data Analyst based in Palo Alto with 4+ years in healthcare environments. I maintain supply chain master data — items, vendors, pricing, and inventory — with Workday ERP, Infor Lawson, data quality monitoring, and operational reporting.",
        action: null
      },
      {
        transcript: "What certifications do you have",
        response: "I'm AWS Certified Solutions Architect, ServiceNow Certified System Administrator, and Cisco CCNA certified in Switching, Routing & Wireless.",
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
