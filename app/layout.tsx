import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AntdProvider } from "@/components/providers/antd-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlareHer - AI Skincare Analysis",
  description: "Get personalized skincare recommendations powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans flex min-h-screen flex-col`}>
        <ThemeProvider>
          <AntdProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AntdProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}