"use client";

import { Package, Truck, CheckCircle, Clock, DollarSign, Car, MapPin } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const performanceData = [
  { name: 'Jan', deliveries: 4000, revenue: 2400 },
  { name: 'Feb', deliveries: 3000, revenue: 1398 },
  { name: 'Mar', deliveries: 2000, revenue: 9800 },
  { name: 'Apr', deliveries: 2780, revenue: 3908 },
  { name: 'May', deliveries: 1890, revenue: 4800 },
  { name: 'Jun', deliveries: 2390, revenue: 3800 },
];

const stats = [
  { name: "Total Shipments", value: "12,483", icon: Package, change: "+12.5%", color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Active Deliveries", value: "1,204", icon: Truck, change: "+4.2%", color: "text-[#FF6B00]", bg: "bg-orange-50" },
  { name: "Completed", value: "11,042", icon: CheckCircle, change: "+14.1%", color: "text-green-600", bg: "bg-green-50" },
  { name: "Pending Orders", value: "237", icon: Clock, change: "-2.4%", color: "text-yellow-600", bg: "bg-yellow-50" },
  { name: "Revenue", value: "$1.2M", icon: DollarSign, change: "+18.2%", color: "text-[#0A192F]", bg: "bg-slate-100" },
  { name: "Available Vehicles", value: "84", icon: Car, change: "+8.1%", color: "text-purple-600", bg: "bg-purple-50" },
];

const shipments = [
  { id: "FLX-8821A", customer: "Acme Corp", origin: "Lagos, LA", dest: "Abuja, FC", driver: "John Smith", status: "In Transit", eta: "Oct 24, 14:00" },
  { id: "FLX-8822B", customer: "TechFlow", origin: "Port Harcourt, RI", dest: "Kano, KN", driver: "Sarah Connor", status: "Delivered", eta: "Oct 22, 09:30" },
  { id: "FLX-8823C", customer: "Global Trade", origin: "Ibadan, OY", dest: "Enugu, EN", driver: "Mike Johnson", status: "Pending", eta: "Oct 26, 11:00" },
  { id: "FLX-8824D", customer: "Stark Ind.", origin: "Lekki, LA", dest: "Kaduna, KD", driver: "Tony Stark", status: "In Transit", eta: "Oct 25, 16:45" },
];

const fleet = [
  { id: "TRK-01", driver: "John Smith", type: "Heavy Duty", location: "Lagos-Ibadan Exp", status: "Active", fuel: "78%", maintenance: "Good" },
  { id: "TRK-02", driver: "Sarah Connor", type: "Refrigerated", location: "Abuja Hub, FC", status: "Idle", fuel: "100%", maintenance: "Service Due" },
  { id: "TRK-03", driver: "Mike Johnson", type: "Box Truck", location: "Apapa Port, LA", status: "Loading", fuel: "45%", maintenance: "Good" },
  { id: "TRK-04", driver: "Tony Stark", type: "Heavy Duty", location: "Kaduna-Kano Exp", status: "Active", fuel: "92%", maintenance: "Excellent" },
];

export default function DashboardOverview() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  const center = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria Coordinates

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0A192F]">Dashboard Overview</h1>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition shadow-sm">
            Export Report
          </button>
          <button className="bg-[#FF6B00] hover:bg-[#e66000] text-white px-4 py-2 rounded-md text-sm font-medium transition shadow-sm">
            New Shipment
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.name}</p>
              <h3 className="text-2xl font-extrabold text-[#0A192F]">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h2 className="text-lg font-bold text-[#0A192F] mb-6">Delivery Performance</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#f3f4f6', strokeWidth: 2 }}
                />
                <Line type="monotone" dataKey="deliveries" stroke="#0A192F" strokeWidth={3} dot={false} activeDot={{ r: 8, fill: '#0A192F' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-[#0A192F] mb-6">Revenue Growth</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f9fafb' }}
                />
                <Bar dataKey="revenue" fill="#FF6B00" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Shipment Tracking Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-[#0A192F]">Active Shipments</h2>
            <button className="text-sm text-[#FF6B00] font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Route</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">ETA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {shipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-semibold text-[#0A192F]">{shipment.id}</td>
                    <td className="px-6 py-4 text-gray-600">{shipment.customer}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">From: {shipment.origin}</span>
                        <span className="text-gray-700">{shipment.dest}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 
                          shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{shipment.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet Management Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-[#0A192F]">Fleet Status</h2>
            <button className="text-sm text-[#FF6B00] font-medium hover:underline">Manage Fleet</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Vehicle</th>
                  <th className="px-6 py-4">Driver</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Fuel</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fleet.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#0A192F]">{vehicle.id}</span>
                        <span className="text-xs text-gray-500">{vehicle.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{vehicle.driver}</td>
                    <td className="px-6 py-4 text-gray-600">{vehicle.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 max-w-[50px]">
                          <div className={`h-1.5 rounded-full ${parseInt(vehicle.fuel) > 20 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: vehicle.fuel }}></div>
                        </div>
                        <span className="text-xs text-gray-500">{vehicle.fuel}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 
                          vehicle.status === 'Idle' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}`}>
                        {vehicle.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Map Tracking Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#0A192F]">Live Map Tracking</h2>
          <p className="text-sm text-gray-500">Real-time GPS tracking of your active fleet</p>
        </div>
        <div className="h-[400px] w-full bg-slate-100 relative overflow-hidden flex items-center justify-center">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={center}
              zoom={10}
              options={{ disableDefaultUI: true, mapId: "DEMO_MAP_ID" }}
            >
              {fleet.map((vehicle, index) => {
                // Generate some slightly random positions around NY for the demo fleet
                const pos = {
                  lat: center.lat + (Math.random() - 0.5) * 0.1,
                  lng: center.lng + (Math.random() - 0.5) * 0.1
                };
                return <Marker key={vehicle.id} position={pos} />;
              })}
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
