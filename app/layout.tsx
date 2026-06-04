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
  title: "Mahan Ghafarian | Software Developer & Creative Engineer",
  description: "Portfolio of Mahan Ghafarian, a Software Developer and Creative Engineer specializing in building elegant, scalable applications with Next.js, React, and AI.",
  keywords: ["Mahan Ghafarian", "Software Developer", "Creative Engineer", "Portfolio", "Next.js", "React", "TypeScript", "AI Development", "Web Development"],
  authors: [{ name: "Mahan Ghafarian" }],
  creator: "Mahan Ghafarian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahanghafarian.com",
    title: "Mahan Ghafarian | Software Developer & Creative Engineer",
    description: "Software Developer and Creative Engineer specializing in bridging the gap between elegant design and robust engineering.",
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
    title: "Mahan Ghafarian | Software Developer & Creative Engineer",
    description: "Software Developer and Creative Engineer specializing in bridging the gap between elegant design and robust engineering.",
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
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
    "jobTitle": "Software Developer",
    "description": "Software Developer and Creative Engineer specializing in bridging the gap between elegant design and robust engineering.",
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
        <Navbar />
        <main className="flex-1 pl-0 md:pl-20 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
