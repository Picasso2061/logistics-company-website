"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A192F] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">FastLogix</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/services" className="hover:text-[#FF6B00] transition">Services</Link>
          <Link href="/track" className="hover:text-[#FF6B00] transition">Track</Link>
          <Link href="/fleet" className="hover:text-[#FF6B00] transition">Fleet</Link>
          <Link href="/trucks" className="hover:text-[#FF6B00] transition">Trucks</Link>
          <Link href="/about" className="hover:text-[#FF6B00] transition">About Us</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="px-4 py-2 rounded text-sm font-medium hover:text-[#FF6B00] transition">Login</Link>
          <Link href="/quote" className="bg-[#FF6B00] hover:bg-[#e66000] text-white px-5 py-2 rounded font-medium transition shadow-sm">Get a Quote</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 pb-4">
          <Link href="/services" className="block px-2 py-1 hover:text-[#FF6B00] transition">Services</Link>
          <Link href="/track" className="block px-2 py-1 hover:text-[#FF6B00] transition">Track</Link>
          <Link href="/fleet" className="block px-2 py-1 hover:text-[#FF6B00] transition">Fleet</Link>
          <Link href="/trucks" className="block px-2 py-1 hover:text-[#FF6B00] transition">Trucks</Link>
          <Link href="/about" className="block px-2 py-1 hover:text-[#FF6B00] transition">About Us</Link>
          <div className="pt-4 flex flex-col space-y-2 px-2">
            <Link href="/login" className="px-4 py-2 rounded text-sm font-medium border border-gray-500 text-center">Login</Link>
            <Link href="/quote" className="bg-[#FF6B00] text-white px-5 py-2 rounded font-medium text-center">Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
