import type { Metadata } from "next";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahan Ghafarian | Portfolio",
  description: "Portfolio of Mahan Ghafarian, Software Developer and Creative Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pl-0 md:pl-20 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
