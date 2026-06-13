"use client";

import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackingData, setTrackingData] = useState<{ lat: number, lng: number, status: string } | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  const handleSearch = () => {
    if (!trackingNumber) return;
    setIsSearching(true);
    // Simulate API call delay
    setTimeout(() => {
      // Dummy data around Lagos
      setTrackingData({
        lat: 6.5244 + (Math.random() - 0.5) * 0.1,
        lng: 3.3792 + (Math.random() - 0.5) * 0.1,
        status: "In Transit"
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 flex-1 flex flex-col items-center justify-center p-6 min-h-[70vh]">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-sm p-8 border border-gray-100 flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#0A192F] mb-4">Track Shipment</h1>
          <p className="text-gray-600 mb-8">Enter your tracking number below to get real-time updates on your cargo.</p>
          <div className="relative mb-8">
            <input 
              type="text" 
              placeholder="e.g. FLX-123456789" 
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full border border-gray-300 rounded-lg p-4 pr-16 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-lg" 
            />
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className="absolute right-2 top-2 bottom-2 bg-[#FF6B00] text-white px-4 rounded-md hover:bg-[#e66000] transition flex items-center justify-center disabled:opacity-50"
            >
              {isSearching ? <span className="animate-spin text-xl">↻</span> : <Search size={20} />}
            </button>
          </div>
          
          {trackingData && (
            <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg flex items-start gap-4 tw-animate-fade-in">
               <div className="p-2 bg-blue-100 text-blue-600 rounded-full shrink-0"><MapPin size={24} /></div>
               <div>
                  <h3 className="font-bold text-[#0A192F] text-lg">Status: <span className="text-[#FF6B00]">{trackingData.status}</span></h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Your shipment is currently in transit. The latest location update is displayed on the map.
                  </p>
               </div>
            </div>
          )}
        </div>
        
        <div className="flex-1 h-[400px] lg:h-[500px] bg-slate-100 rounded-xl overflow-hidden relative flex items-center justify-center border border-gray-200">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={trackingData || { lat: 6.5244, lng: 3.3792 }}
              zoom={trackingData ? 13 : 10}
              options={{ disableDefaultUI: true, mapId: "DEMO_MAP_ID" }}
            >
              {trackingData && <Marker position={{ lat: trackingData.lat, lng: trackingData.lng }} />}
            </GoogleMap>
          ) : (
            <div className="flex flex-col items-center gap-4 text-gray-500">
              <MapPin className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
              <p>Loading Map Tracking...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
