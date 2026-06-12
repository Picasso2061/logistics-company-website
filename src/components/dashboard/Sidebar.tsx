"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  UserSquare,
  Truck,
  MapPin,
  Warehouse,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Shipments", href: "/dashboard/shipments", icon: Package },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Drivers", href: "/dashboard/drivers", icon: UserSquare },
  { name: "Fleet", href: "/dashboard/fleet", icon: Truck },
  { name: "Tracking", href: "/dashboard/tracking", icon: MapPin },
  { name: "Warehouses", href: "/dashboard/warehouses", icon: Warehouse },
  { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#0A192F] text-white flex flex-col h-screen shrink-0 shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF6B00] rounded-md flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">FastLogix</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors",
                isActive
                  ? "bg-[#FF6B00] text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-sm font-semibold mb-1">Need help?</p>
          <p className="text-xs text-gray-400 mb-3">Check our documentation or contact support.</p>
          <button className="w-full bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
