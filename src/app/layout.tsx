import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "deelicious Bakes | Coming Soon – Handcrafted Cakes & Pastries",
  description:
    "deelicious Bakes is almost ready to sweeten your day! Handcrafted cakes, cupcakes, and pastries made fresh daily in [Your City]. Sign up to be notified when we launch.",
  keywords: [
    "bakery",
    "cakes",
    "cupcakes",
    "pastries",
    "custom cakes",
    "deelicious Bakes",
    "coming soon",
    "best bakery",
    "fresh baked",
    "order cakes online",
    "local bakery",
    "desserts",
    "birthday cakes",
    "wedding cakes",
    "gourmet bakery",
    "artisan bakery",
    "homemade cakes",
    "baked goods",
    "sweet treats",
    "shop cakes",
    "order online",
    "city bakery", // replace with your city
  ],
  authors: [{ name: "deelicious Bakes", url: "https://deelicious.com" }],
  creator: "deelicious Bakes",
  publisher: "deelicious Bakes",
  openGraph: {
    title: "deelicious Bakes | Coming Soon",
    description:
      "Handcrafted cakes, cupcakes, and pastries made fresh daily. deelicious Bakes is launching soon | sign up to be notified!",
    url: "https://deelicious.com",
    siteName: "deelicious Bakes",
    images: [
      {
        url: "https://deelicious.com/og-image.jpg", // create this image!
        width: 1200,
        height: 630,
        alt: "deelicious Bakes – Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "deelicious Bakes | Coming Soon",
    description:
      "Handcrafted cakes, cupcakes, and pastries made fresh daily. deelicious Bakes is launching soon | sign up to be notified!",
    images: ["https://deelicious.com/og-image.jpg"],
    creator: "@deelicious", // update if you have one
  },
  metadataBase: new URL("https://deelicious.com"),
  alternates: {
    canonical: "https://deelicious.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#f472b6", // Tailwind pink-400
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "deelicious Bakes",
              url: "https://deelicious.com",
              logo: "https://deelicious.com/logo.png",
              image: "https://deelicious.com/og-image.jpg",
              description:
                "Handcrafted cakes, cupcakes, and pastries made fresh daily. deelicious Bakes is launching soon.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "The Penruddocke Arms, Hindon Rd, Salisbury SP3 5EL",
                addressLocality: "Salisbury",
                addressRegion: "Wiltshire",
                postalCode: "SP3 5EL",
                addressCountry: "United Kingdom",
              },
              telephone: "123-456-7890",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
