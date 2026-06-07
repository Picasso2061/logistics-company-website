import { ShieldCheck, Wrench, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const fleetData = [
  { name: "Motorcycles", cap: "Up to 15 kg", use: "Express urban courier", icon: "🏍️" },
  { name: "Delivery Vans", cap: "Up to 1,500 kg", use: "Last-mile distribution", icon: "🚐" },
  { name: "Box Trucks", cap: "Up to 5,000 kg", use: "Regional LTL freight", icon: "🚚" },
  { name: "Refrigerated Trucks", cap: "Up to 20,000 kg", use: "Cold chain logistics", icon: "❄️" },
  { name: "Heavy Duty Trucks", cap: "Up to 34,000 kg", use: "Long-haul transport", icon: "🚛" },
  { name: "Cargo Containers", cap: "20ft / 40ft", use: "Intermodal shipping", icon: "🚢" },
];

export default function FleetPage() {
  return (
    <div className="bg-white flex-1">
      <section className="bg-[#0A192F] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Modern, efficient, and versatile vehicles ready for any logistics challenge.</p>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((v, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="text-5xl mb-4 bg-gray-50 rounded-lg p-4 text-center">{v.icon}</div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-2">{v.name}</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li><strong>Capacity:</strong> {v.cap}</li>
                <li><strong>Best For:</strong> {v.use}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0A192F] mb-6">Safety & Maintenance</h2>
            <p className="text-gray-600 mb-6">Our entire fleet undergoes rigorous maintenance and adheres to the highest safety standards to ensure your cargo arrives securely and on time.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="text-[#FF6B00] mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold">Safety Standards</h4>
                  <p className="text-sm text-gray-600">Compliant with DOT and international regulations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Wrench className="text-[#FF6B00] mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold">Maintenance Program</h4>
                  <p className="text-sm text-gray-600">Weekly inspections and comprehensive preventive care.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Coverage Map</h3>
            <div className="bg-gray-100 w-full h-64 rounded flex flex-col items-center justify-center text-gray-400">
              <MapPin size={48} className="mb-2" />
              <span className="block text-center text-sm font-medium">[Interactive Map Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#FF6B00] mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Vehicles Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B00] mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B00] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">GPS Tracking</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B00] mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Miles Driven Annually</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A192F] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Need specialized transport?</h2>
        <Link href="/contact" className="bg-[#FF6B00] text-white px-8 py-3 rounded font-bold hover:bg-[#e66000] transition shadow-lg inline-flex items-center">
          Contact Fleet Management <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  );
}
