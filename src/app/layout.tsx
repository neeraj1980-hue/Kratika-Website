import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "Kratika Dubey | Biotechnology Specialist & Lab Technician",
  description:
    "Official Portfolio of Kratika Dubey - B.Sc. Biotechnology scholar, Methodology Lab Specialist (2+ Years Exp), Academic Achiever (97%), and Professional Footballer.",
  keywords: [
    "Kratika Dubey",
    "Biotechnology",
    "Lab Technician",
    "Methodology Lab",
    "Zoology",
    "Portfolio",
    "Scientist",
    "Footballer",
  ],
  authors: [{ name: "Kratika Dubey" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="bg-space-950 text-slate-100 min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
        {/* Animated Cosmic Canvas Background */}
        <Starfield />

        {/* Global Ambient Glow Orbs */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="fixed top-1/2 left-3/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-10 pt-20">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
