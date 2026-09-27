import type { Metadata } from "next";
import { Raleway, Fjalla_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });

export const metadata: Metadata = {
  metadataBase: new URL('https://tiger365login.com'),
  verification: {
    google: "wc1-N_qovGM7kkiUpVqCylsrbMPAPslDhgGSUHh1OWE",
  },
  title: `Tiger365 Login & Pro ID – Official Betting ID Guide`,
  description: SITE_CONFIG.description,
  keywords: ["Tiger365 Pro ID", "Genuine Betting IDs", "Tiger365 Pro ID registration", "Tiger365 Pro", "Online Betting India", "Cricket Betting ID"],
  applicationName: 'Tiger365',
  authors: [{ name: 'Tiger365' }],
  creator: 'Tiger365',
  publisher: 'Tiger365',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Tiger365 Login & Pro ID – Official Betting ID Guide`,
    description: SITE_CONFIG.description,
    url: "https://tiger365login.com",
    siteName: "Tiger365",
    images: [
      {
        url: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: `Tiger365 Login & Pro ID – Official Betting ID Guide`,
    description: SITE_CONFIG.description,
    images: ["https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp"],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${raleway.variable} ${fjallaOne.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
        } as React.CSSProperties}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQ6NVNZV"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
        <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQ6NVNZV');`
        }} />
        <Script id="ga-script-1" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-PW61XER0EB" />
        <Script id="ga-script-2" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PW61XER0EB');`
        }} />
      </body>
    </html>
  );
}
