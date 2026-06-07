import { Search } from "lucide-react";

export default function TrackPage() {
  return (
    <div className="bg-gray-50 flex-1 flex flex-col items-center justify-center p-6 min-h-[60vh]">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm p-10 text-center border border-gray-100">
        <h1 className="text-3xl font-bold text-[#0A192F] mb-4">Track Shipment</h1>
        <p className="text-gray-600 mb-8">Enter your tracking number below to get real-time updates on your cargo.</p>
        <div className="relative">
          <input type="text" placeholder="e.g. FLX-123456789" className="w-full border border-gray-300 rounded-lg p-4 pr-16 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-lg" />
          <button className="absolute right-2 top-2 bottom-2 bg-[#FF6B00] text-white px-4 rounded-md hover:bg-[#e66000] transition flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
