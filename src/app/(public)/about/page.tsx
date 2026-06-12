import { Users, Target, Award, Globe, Building2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white flex-1">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About FastLogix</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Connecting businesses across borders with seamless, innovative, and reliable logistics solutions since 2005.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-[#FF6B00]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower global commerce by providing resilient, sustainable, and transparent supply chain solutions. We are dedicated to delivering not just cargo, but trust and reliability to every partner we serve.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-[#0A192F]/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="text-[#0A192F]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the world&apos;s most trusted logistics partner, recognized for our technological innovation, commitment to environmental sustainability, and unwavering focus on customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#FF6B00] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-extrabold mb-2">18+</div>
              <div className="font-medium text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">5M+</div>
              <div className="font-medium text-white/80">Deliveries Completed</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">50+</div>
              <div className="font-medium text-white/80">Branch Locations</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">10k+</div>
              <div className="font-medium text-white/80">Active Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0A192F] mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <Award className="mx-auto text-[#FF6B00] mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p className="text-gray-600">We strive for perfection in every shipment, ensuring highest quality standards.</p>
          </div>
          <div className="p-6">
            <Users className="mx-auto text-[#FF6B00] mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3">Partnership</h3>
            <p className="text-gray-600">We grow by helping our clients grow. Your success is our success.</p>
          </div>
          <div className="p-6">
            <TrendingUp className="mx-auto text-[#FF6B00] mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600">Continuously adopting new technologies to optimize the supply chain.</p>
          </div>
        </div>
      </section>

      {/* CSR & Certifications */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#0A192F] mb-6">Corporate Social Responsibility</h2>
            <p className="text-gray-600 mb-6">
              As a global logistics leader, we recognize our impact on the environment. FastLogix is committed to achieving net-zero emissions by 2040. We are actively investing in electric vehicles, optimizing our routing algorithms to reduce fuel consumption, and partnering with eco-friendly suppliers.
            </p>
            <div className="flex gap-4">
              <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-[#0A192F] flex items-center shadow-sm">
                <Building2 size={16} className="mr-2 text-green-600" /> ISO 14001
              </span>
              <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-[#0A192F] flex items-center shadow-sm">
                <Award size={16} className="mr-2 text-blue-600" /> ISO 9001
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-80 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/80 to-transparent flex items-end p-8">
               <span className="text-white font-bold text-xl">Building a sustainable future.</span>
            </div>
            {/* Placeholder for an image */}
            <span className="text-gray-500 font-medium z-0">CSR Image Placeholder</span>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0A192F] mb-6">Partner with FastLogix Today</h2>
        <Link href="/contact" className="bg-[#0A192F] text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition shadow-lg inline-block">
          Contact Our Team
        </Link>
      </section>
    </div>
  );
}
