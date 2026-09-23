import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lahari Karrotu — Master Data Analyst · Healthcare Supply Chain',
  description:
    'Lahari Karrotu — Master Data Analyst with 4+ years in healthcare MDM, Workday ERP, Infor Lawson, data quality, and operational reporting across supply chain and enterprise systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {
                document.documentElement.classList.add('dark')
              }
            `,
          }}
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100" suppressHydrationWarning>
        <div className="site-grain pointer-events-none fixed inset-0 z-[1]" aria-hidden />
        {children}
      </body>
    </html>
  );
}