import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastLogix | Modern Logistics & Courier Services",
  description: "Enterprise-grade logistics, freight forwarding, and courier services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
