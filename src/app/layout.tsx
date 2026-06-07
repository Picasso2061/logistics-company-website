import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-50 text-gray-900`}>
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#050C17] text-gray-400 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">FastLogix</h3>
              <p className="text-sm">Delivering excellence across the globe. Your trusted partner for logistics and freight.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-[#FF6B00] transition">Domestic Delivery</Link></li>
                <li><Link href="/services" className="hover:text-[#FF6B00] transition">International Shipping</Link></li>
                <li><Link href="/services" className="hover:text-[#FF6B00] transition">Freight Forwarding</Link></li>
                <li><Link href="/services" className="hover:text-[#FF6B00] transition">Warehousing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-[#FF6B00] transition">About Us</Link></li>
                <li><Link href="/fleet" className="hover:text-[#FF6B00] transition">Fleet</Link></li>
                <li><Link href="/trucks" className="hover:text-[#FF6B00] transition">Trucks</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B00] transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>1-800-LOGISTICS</li>
                <li>support@fastlogix.com</li>
                <li>123 Freight Way, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            &copy; {new Date().getFullYear()} FastLogix. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
