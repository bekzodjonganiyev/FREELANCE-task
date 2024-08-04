import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { MainHeader, TopHeader } from "@/components/header";
import { Footer } from "@/components/footer";

import { cn } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <header className="sticky top-0 bg-white z-10 container">
          <TopHeader />
          <MainHeader />
        </header>
        <main className="flex-1">{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
