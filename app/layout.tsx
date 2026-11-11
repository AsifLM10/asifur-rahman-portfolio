import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Asifur Rahman | Software Engineer | AI/ML",
  description:
    "Portfolio of Asifur Rahman, a Software Engineer with AI/ML expertise and research experience in data science and applied systems.",
  keywords: [
    "Asifur Rahman",
    "Software Engineer",
    "AI/ML",
    "Machine Learning",
    "Research",
    "Portfolio",
  ],
  openGraph: {
    title: "Asifur Rahman | Software Engineer | AI/ML",
    description:
      "Portfolio website for Asifur Rahman featuring projects, research, and technical expertise.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f6f2ec] text-slate-900">{children}</body>
    </html>
  );
}
