import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import { company } from "@/lib/site";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://propertylifts.co.uk"),
  title: {
    default: "PROPERTY LIFTS LIMITED | Lift Installation, Maintenance & Repairs in London",
    template: "%s | PROPERTY LIFTS LIMITED",
  },
  description:
    "London-based lift specialists providing lift installation, maintenance, repairs, modernisation and 24/7 breakdown call-outs for residential and commercial properties.",
  keywords: [
    "lift maintenance",
    "lift installation",
    "lift repair",
    "lift modernisation",
    "lift breakdown London",
    "PROPERTY LIFTS LIMITED",
  ],
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: company.url,
  telephone: "+442038315882",
  email: company.email,
  foundingDate: String(company.founded),
  image: `${company.url}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.town,
    postalCode: company.address.postcode,
    addressRegion: company.address.region,
    addressCountry: "GB",
  },
  areaServed: ["London", "Essex", "Kent"],
  sameAs: [company.social.facebook, company.social.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <SpeedInsights />
        <Footer />
        <Analytics />
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9830129627192162"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}