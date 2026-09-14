import './globals.css';
import localFont from 'next/font/local';
import { site } from '../data/site';

const geist = localFont({ src: '../public/fonts/geist-latin.woff2', variable: '--font-geist', display: 'swap', weight: '100 900' });
const geistMono = localFont({ src: '../public/fonts/geist-mono-latin.woff2', variable: '--font-geist-mono', display: 'swap', weight: '100 900' });
const description = 'Portfolio of Oadud Hossain, a full-stack developer building fast, modern and thoughtful web applications.';

export const metadata = {
  title: 'Oadud Hossain | Full-Stack Developer',
  description,
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: '/' } } : {}),
  openGraph: { title: 'Oadud Hossain | Full-Stack Developer', description, type: 'website', locale: 'en_US', siteName: 'Oadud Hossain', ...(site.url ? { url: site.url } : {}) },
  twitter: { card: 'summary', title: 'Oadud Hossain | Full-Stack Developer', description },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
};
export const viewport = { themeColor: '#090b0c', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: site.role, email: site.email, ...(site.url ? { url: site.url } : {}) };
  return <html lang="en" data-theme="dark" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('oadud-theme')==='light'?'light':'dark';document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==='light'?'#f6f8fa':'#090b0c';}catch(e){}})();` }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} /></body></html>;
}
