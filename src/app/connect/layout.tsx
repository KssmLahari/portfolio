import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lahari Karrotu - Connect',
  description: 'Data Analyst & Data Engineer',
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      position: 'relative'
    }}>
      {children}
    </div>
  );
}

