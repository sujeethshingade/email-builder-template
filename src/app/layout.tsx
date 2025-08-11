import React from 'react';
import { Metadata, Viewport } from 'next';
import ClientThemeProvider from '../theme/ClientThemeProvider';

export const metadata: Metadata = {
  title: 'Email Builder',
  description: 'Email Builder Template',
};

export const viewport: Viewport = {
  width: 900,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ margin: 0, height: '100vh', width: '100%' }}>
      <body style={{ minHeight: '100vh', width: '100%', margin: 0 }}>
        <div id="root" style={{ height: '100vh', width: '100%' }}>
          <ClientThemeProvider>
            {children}
          </ClientThemeProvider>
        </div>
      </body>
    </html>
  );
}
