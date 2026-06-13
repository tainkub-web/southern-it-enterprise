import { Inter, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import { TranslationProvider } from '../context/TranslationContext';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap' 
});

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ['thai'], 
  variable: '--font-thai',
  display: 'swap' 
});

export const metadata = {
  title: 'Southern Enterprise IT Solution & Cybersecurity Partner',
  description: 'Premium enterprise-grade IT infrastructure, backup, storage virtualization, disaster recovery, and cybersecurity solutions for organisations in Southern Thailand.',
  keywords: 'IT Solution, System Integration, Backup, Cybersecurity, Server Infrastructure, Southern Thailand, Surat Thani, Chumphon, Ranong, NebulaSoft Partner',
  authors: [{ name: 'Southern Enterprise IT Team' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-navy-950 font-sans antialiased text-white">
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
