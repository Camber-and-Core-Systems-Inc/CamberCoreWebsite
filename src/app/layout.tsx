import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Camber & Core Systems",
    template: "%s - Camber & Core Systems",
  },
  description:
    "Camber & Core Systems builds geospatial, LiDAR, and custom software solutions for local governments across British Columbia. NG9-1-1 readiness, GIS consulting, and data automation.",
  keywords: [
    "GIS",
    "LiDAR",
    "NG9-1-1",
    "geospatial",
    "Victoria BC",
    "local government",
    "NENA",
    "ArcGIS",
  ],
  openGraph: {
    title: "Camber & Core Systems | Secure Local Intelligence",
    description:
      "Geospatial solutions engineered for the public sector.",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Camber & Core Systems Inc.",
  url: "https://cambercore.ca",
  slogan: "Secure Local Intelligence.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Victoria",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  email: "john@camberandcore.ca",
  telephone: "+1-250-279-8735",
  areaServed: "British Columbia",
  knowsAbout: [
    "GIS",
    "LiDAR",
    "NG9-1-1",
    "Geospatial software",
    "Local government data systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F1B2D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Raleway:wght@700&family=Questrial&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
