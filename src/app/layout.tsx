import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_URL } from "@/lib/constant";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/googleanalytics";
import { GoogleAdsense } from "@/components/googleAdsense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monster Hunter API",
  description:
    "All the monster hunter data you'll ever need in one place, easily accessible through a modern free open-source RESTful API. Check out the docs!",
  keywords:
    "モンスターハンター, データ, API, RESTful, オープンソース, モダン, 簡単アクセス",
  authors: [{ name: "TaviNikkiy Team" }],
  creator: "MH API",
  publisher: "MH API",
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: APP_URL,
    siteName: "MH-API",
    title: "Monster Hunter API",
    description:
      "All the monster hunter data you'll ever need in one place, easily accessible through a modern free open-source RESTful API. Check out the docs!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monster Hunter API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster Hunter API",
    description:
      "All the monster hunter data you'll ever need in one place, easily accessible through a modern free open-source RESTful API. Check out the docs!",
    images: ["/og-image.png"],
    creator: "@o_ga09",
    site: "@o_ga09",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/android-chrome-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        url: "/android-chrome-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics />
      <GoogleAdsense />
    </html>
  );
}
