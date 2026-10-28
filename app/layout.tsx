import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahanghafarian.com"),
  title: "Mahan Ghafarian | Software Engineer & Security Enthusiast",
  description: "Portfolio of Mahan Ghafarian, a York University Software Engineering student (Software Security stream) and Application Support Intern at HomeEquity Bank, building local-first apps, full-stack web tools, and embedded security projects.",
  keywords: ["Mahan Ghafarian", "Software Engineer", "Software Security", "York University", "Lassonde", "HomeEquity Bank", "C#", ".NET", "Next.js", "React", "Svelte", "Tauri", "Rust", "TypeScript", "Local-first", "Fretnote", "Pico-Ducky", "GDG York"],
  authors: [{ name: "Mahan Ghafarian" }],
  creator: "Mahan Ghafarian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahanghafarian.com",
    title: "Mahan Ghafarian | Software Engineer & Security Enthusiast",
    description: "York University Software Engineering student (Software Security stream) and Application Support Intern at HomeEquity Bank, building local-first apps and full-stack web tools.",
    siteName: "Mahan Ghafarian Portfolio",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Mahan Ghafarian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahan Ghafarian | Software Engineer & Security Enthusiast",
    description: "York University Software Engineering student (Software Security stream) and Application Support Intern at HomeEquity Bank, building local-first apps and full-stack web tools.",
    images: ["/portrait.jpg"],
    creator: "@qwzynx",
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
  icons: {
    icon: "/Mahan_Ghafarian_Logo.png",
    shortcut: "/Mahan_Ghafarian_Logo.png",
    apple: "/Mahan_Ghafarian_Logo.png",
  },
  alternates: {
    canonical: "https://mahanghafarian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahan Ghafarian",
    "url": "https://mahanghafarian.com",
    "image": "https://mahanghafarian.com/portrait.jpg",
    "sameAs": [
      "https://github.com/qwzynx",
      "https://www.linkedin.com/in/mahan-ghafarian/",
      "https://www.instagram.com/qwzynx/"
    ],
    "jobTitle": "Software Engineer",
    "description": "York University Software Engineering student (Software Security stream) and Application Support Intern at HomeEquity Bank, building local-first apps and full-stack web tools.",
  };

  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} h-full antialiased dark scroll-smooth snap-y snap-proximity`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex bg-background text-foreground">
        <div className="fixed top-0 left-0 right-0 h-24 bg-linear-to-b from-background to-transparent z-30 pointer-events-none" />
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent z-30 pointer-events-none" />
        <Navbar />
        <main className="flex-1 pl-0 md:pl-20 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
