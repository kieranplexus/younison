import type { Metadata, Viewport } from "next";
import { Inter_Tight, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Central — Customer communications platform for small business",
    template: "%s | Central",
  },
  description: site.description,
  applicationName: "Central",
  openGraph: {
    title: "Central — Customer communications platform for small business",
    description: site.description,
    url: site.url,
    siteName: "Central",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central — Customer communications platform for small business",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${interTight.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-bg font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
