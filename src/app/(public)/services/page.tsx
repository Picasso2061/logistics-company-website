import { Plane, Ship, Truck, Package, Warehouse, FileText, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Truck, title: "Domestic Delivery", desc: "Fast and reliable national transport.", benefits: "Next-day options, tracking, insured" },
  { icon: Ship, title: "International Shipping", desc: "Global freight forwarding solutions.", benefits: "Customs handled, sea/air freight" },
  { icon: Plane, title: "Express Courier", desc: "Time-critical delivery services.", benefits: "Same-day delivery, priority handling" },
  { icon: Package, title: "Freight Forwarding", desc: "End-to-end supply chain management.", benefits: "Cost-effective, scalable, secure" },
  { icon: Warehouse, title: "Warehousing & Distribution", desc: "Secure storage and fulfillment.", benefits: "Inventory management, 24/7 security" },
  { icon: FileText, title: "Customs Clearance", desc: "Expert handling of border regulations.", benefits: "Fast processing, compliance assured" },
  { icon: ShoppingCart, title: "E-commerce Logistics", desc: "Tailored solutions for online retail.", benefits: "API integrations, reverse logistics" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white flex-1">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Comprehensive logistics solutions tailored to meet the demands of modern business.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all group">
                <div className="bg-[#FF6B00]/10 w-16 h-16 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#FF6B00] transition-colors">
                  <Icon className="text-[#FF6B00] group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F] mb-3">{svc.title}</h3>
                <p className="text-gray-600 mb-4">{svc.desc}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <p className="text-sm text-gray-500">{svc.benefits}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition">
                    Learn More
                  </Link>
                  <Link href="/quote" className="inline-flex items-center text-[#FF6B00] font-semibold hover:text-[#e66000] transition">
                    Request Quote <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-12">Why Choose FastLogix</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100"><Plane className="text-[#FF6B00]" /></div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-600">Operating in over 150 countries worldwide with trusted partners.</p>
            </div>
            <div>
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100"><Ship className="text-[#FF6B00]" /></div>
              <h3 className="text-xl font-bold mb-2">Advanced Tracking</h3>
              <p className="text-gray-600">Real-time visibility into your supply chain at every step.</p>
            </div>
            <div>
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100"><Truck className="text-[#FF6B00]" /></div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated logistics experts available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B00] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to streamline your logistics?</h2>
        <Link href="/quote" className="bg-white text-[#FF6B00] px-8 py-3 rounded font-bold hover:bg-gray-100 transition shadow-lg inline-block">
          Get a Custom Quote
        </Link>
      </section>
    </div>
  );
}
