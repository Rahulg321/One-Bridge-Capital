import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import SimpleFooter from "@/components/simple-footer";
import { baseUrl } from "./sitemap";
import { GoogleAnalytics } from "@next/third-parties/google";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  manifest: "./manifest.json",
  title: {
    default:
      "OneBridge Knowledge Partners – Fast, Precise M&A Execution Support",
    template: "%s | OneBridge Knowledge Partners",
  },
  description:
    "Looking for fast, precise M&A execution support? At OneBridge, we’re your agile extension—committed to trust, speed, and integrity. Whether you’re a boutique investment bank, advisory firm, or corporate team, let’s work together to make your next deal a success. Discover our tailored services and reach out to start the conversation. ",
  openGraph: {
    title: "OneBridge Knowledge Partners – Fast, Precise M&A Execution Support",
    description:
      "Looking for fast, precise M&A execution support? At OneBridge, we’re your agile extension—committed to trust, speed, and integrity. Whether you’re a boutique investment bank, advisory firm, or corporate team, let’s work together to make your next deal a success. Discover our tailored services and reach out to start the conversation. ",
    url: baseUrl,
    siteName: "OneBridge Knowledge Partners",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "OneBridge Knowledge Partners – Fast, Precise M&A Execution Support",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} antialiased`}>
        <Header />
        {children}
        <SimpleFooter />

        <Toaster />
        <GoogleAnalytics gaId="G-QYC3XQ1184" />
      </body>
    </html>
  );
}
