import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/context/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Agustin Ockier",
  description: "Portafolio de Juan Agustin Ockier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light";
  return (
    <html lang="es" data-theme={theme}>
      <head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider>
        <header>
        <Navbar />
        </header>
        <main className="flex justify-center">
        <div className="w-full max-w-[800px]">{children}</div>
        </main>
        <footer>
        <Footer />
        </footer>
      </ThemeProvider>
      </body>
    </html>
  );
}
