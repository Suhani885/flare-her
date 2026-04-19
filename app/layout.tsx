import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AntdProvider } from "@/components/providers/antd-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { GlobalSkeletonLoader } from "@/components/shared/global-skeleton-loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "FlareHer - Authentic Beauty & Skincare",
  description: "Get personalized skincare recommendations powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans flex min-h-screen flex-col bg-background text-textPrimary antialiased transition-colors duration-300">
        <AntdProvider>
          <GlobalSkeletonLoader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AntdProvider>
      </body>
    </html>
  );
}