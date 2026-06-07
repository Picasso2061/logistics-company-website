import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const trucks = [
  {
    category: "Light Duty Trucks",
    models: "Box Trucks, Step Vans",
    capacity: "Up to 5,000 kg",
    coverage: "Local & Regional",
    status: "High Availability",
    features: ["Liftgate equipped", "Perfect for urban areas", "Real-time tracking"],
  },
  {
    category: "Medium Duty Trucks",
    models: "Straight Trucks, Flatbeds",
    capacity: "5,000 - 15,000 kg",
    coverage: "Regional & National",
    status: "Available",
    features: ["Air ride suspension", "Pallet jack included", "Temperature control options"],
  },
  {
    category: "Heavy Duty Trucks",
    models: "Tractor-Trailers, 53' Dry Vans",
    capacity: "Up to 34,000 kg",
    coverage: "National & Cross-border",
    status: "Limited Availability",
    features: ["SmartWay certified", "Team drivers available", "High-security locks"],
  },
  {
    category: "Specialized Long Haul",
    models: "Reefers, Oversized Loaders",
    capacity: "Custom Limits",
    coverage: "Continental",
    status: "Pre-booking Required",
    features: ["Multi-temp zones", "Escort vehicles", "Permit handling"],
  }
];

export default function TrucksPage() {
  return (
    <div className="bg-white flex-1">
      <section className="bg-[#0A192F] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Truck Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">From last-mile delivery to heavy-haul freight, we have the right truck for your cargo.</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-12">
          {trucks.map((truck, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="lg:w-1/3 bg-gray-100 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚛</div>
                  <h3 className="text-2xl font-bold text-[#0A192F]">{truck.category}</h3>
                  <p className="text-gray-500 mt-2">{truck.models}</p>
                </div>
              </div>
              <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm text-gray-500 font-semibold mb-1">Cargo Capacity</h4>
                    <p className="text-lg font-medium text-gray-900">{truck.capacity}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-semibold mb-1">Route Coverage</h4>
                    <p className="text-lg font-medium text-gray-900">{truck.coverage}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-semibold mb-1">Availability</h4>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${truck.status.includes('High') ? 'bg-green-100 text-green-700' : truck.status.includes('Limited') ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                      {truck.status}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-semibold mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    {truck.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="text-[#FF6B00] mr-2" size={16} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A192F] mb-6">Not sure which truck you need?</h2>
          <p className="text-lg text-gray-600 mb-8">Our logistics experts will analyze your freight and recommend the most cost-effective and efficient transportation method.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="bg-[#FF6B00] text-white px-8 py-3 rounded font-bold hover:bg-[#e66000] transition shadow-lg">
              Request a Quote
            </Link>
            <Link href="/contact" className="bg-white text-[#0A192F] border-2 border-[#0A192F] px-8 py-3 rounded font-bold hover:bg-gray-50 transition">
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
