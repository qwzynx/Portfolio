import type { Metadata, Viewport } from "next";
import Navbar from "./components/navbar";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahanghafarian.com"),
  title: "Mahan Ghafarian | Software Engineer & Security Enthusiast",
  description: "Portfolio of Mahan Ghafarian, a Software Engineer specializing in Software Security, Hardware Hacking, and Full-Stack Development. York University Engineering student and developer of Pico-Ducky3.0.",
  keywords: ["Mahan Ghafarian", "Software Engineer", "Software Security", "Hardware Hacking", "DuckyScript", "Pico-Ducky", "Next.js", "React", "TypeScript", "York University Engineering", "GDG York"],
  authors: [{ name: "Mahan Ghafarian" }],
  creator: "Mahan Ghafarian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahanghafarian.com",
    title: "Mahan Ghafarian | Software Engineer & Security Enthusiast",
    description: "Software Engineer specializing in Software Security and Hardware Hacking. York University Engineering student and developer of Pico-Ducky3.0.",
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
    description: "Software Engineer specializing in Software Security and Hardware Hacking. York University Engineering student and developer of Pico-Ducky3.0.",
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
      "https://linkedin.com/in/mahan-ghafarian-b02ba0298/",
      "https://www.instagram.com/qwzynx/"
    ],
    "jobTitle": "Software Engineer",
    "description": "Software Engineer specializing in Software Security, Hardware Hacking, and Full-Stack Development. York University Engineering student and developer of Pico-Ducky3.0.",
  };

  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth snap-y snap-proximity">
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
