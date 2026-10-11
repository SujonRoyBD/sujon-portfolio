import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollProgressBar from "@/components/providers/ScrollProgressBar";
import ScrollToTop from "@/components/providers/ScrollToTop";
import ToastProvider from "@/components/providers/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sujon Roy | Frontend Developer & Aspiring Full Stack Engineer",
  description:
    "Portfolio of Sujon Roy — Frontend Developer specializing in Next.js, React 19, TypeScript, and Tailwind CSS, actively expanding into Backend development.",
  keywords: [
    "Sujon Roy",
    "Frontend Developer",
    "React Specialist",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Aspiring Full Stack Engineer",
    "Node.js Learner",
    "Portfolio",
  ],
  authors: [{ name: "Sujon Roy" }],
  creator: "Sujon Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujon-sheikh.dev",
    title: "Sujon Roy | Frontend Developer & Aspiring Full Stack Engineer",
    description:
      "Crafting high-impact, performant web applications with Next.js, React, and TypeScript while expanding into backend development.",
    siteName: "Sujon Roy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujon Roy | Frontend Developer",
    description:
      "Explore the portfolio, projects, and technical skills of Sujon Roy.",
    creator: "@sujon_dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090D16] text-white flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#FF7639] selection:text-white">
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTop />
          <ToastProvider />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
