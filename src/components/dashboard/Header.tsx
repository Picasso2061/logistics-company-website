"use client";

import { Bell, Search } from "lucide-react";

export default function Header({ user }: { user: any }) {

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
      <div className="flex-1 flex items-center">
        {/* Search */}
        <div className="max-w-md w-full relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] sm:text-sm transition"
            placeholder="Search shipments, drivers, orders..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="p-2 text-gray-400 hover:text-gray-500 relative transition-colors">
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-[#FF6B00] ring-2 ring-white" />
          <Bell className="h-5 w-5" />
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-200" aria-hidden="true" />

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900 group-hover:text-[#FF6B00] transition-colors">
              {user?.name || "Admin User"}
            </p>
            <p className="text-xs text-gray-500">
              {user?.role || "Logistics Manager"}
            </p>
          </div>
          <img
            className="h-8 w-8 rounded-full border border-gray-200"
            src={user?.image || "https://ui-avatars.com/api/?name=Admin+User&background=0A192F&color=fff"}
            alt="User profile"
          />
        </div>
      </div>
    </header>
  );
}
