import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import type { ReactNode } from "react";
import { MotionProvider } from "@/animations/MotionProvider";
import { RevealObserver } from "@/animations/RevealObserver";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — HOTY.",
  },
  description: site.description,
  applicationName: "HOTY.",
  keywords: [
    "Shopify development studio",
    "Shopify developer",
    "Shopify Partners",
    "custom Shopify theme",
    "Shopify Liquid",
    "Shopify redesign",
    "Shopify sections",
    "Shopify integrations",
    "Shopify performance optimization",
    "ecommerce CRO",
  ],
  authors: [{ name: "HOTY.", url: site.url }],
  creator: "HOTY.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "HOTY.",
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [{ url: "/brand/og-brand.png", width: 1200, height: 630, alt: "HOTY. — Shopify Development Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/brand/og-brand.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#FAFCFB",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: "HOTY.",
  alternateName: "HOTY",
  description: site.description,
  url: `${site.url}/`,
  logo: `${site.url}/brand/brand-mark-square.png`,
  image: `${site.url}/brand/og-brand.png`,
  email: site.contact.email,
  telephone: "+54 381 459 4146",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.city,
    addressRegion: site.contact.region,
    addressCountry: site.contact.countryCode,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Shopify development",
    "Shopify theme development",
    "Shopify Liquid",
    "Ecommerce UX/UI",
    "Conversion rate optimization",
    "Web performance optimization",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Flag JS before paint so scroll reveals never hide content for no-JS visitors. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-carbon focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <RevealObserver />
        {/* Meta Pixel carried over from the previous site; loads after the page is idle. */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${site.metaPixelId}');fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  );
}
