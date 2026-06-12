import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-[#0A192F] text-white py-24 px-6 sm:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF6B00] via-[#0A192F] to-[#0A192F]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Global Logistics,<br />
            <span className="text-[#FF6B00]">Delivered On Time.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Fast, secure, and reliable shipping solutions for individuals and enterprise businesses worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-[#FF6B00] hover:bg-[#e66000] text-white text-lg px-8 py-4 rounded-md font-semibold transition shadow-lg">
              Request a Quote
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg px-8 py-4 rounded-md font-semibold transition backdrop-blur-sm">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Track Section */}
      <section className="bg-white py-12 px-6 shadow-sm border-b border-gray-100 relative -mt-8 mx-4 sm:mx-12 rounded-xl z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-[#0A192F]">Track Your Shipment</h2>
            <p className="text-gray-500 text-sm mt-1">Enter your tracking number below</p>
          </div>
          <div className="md:w-2/3 w-full flex">
            <input 
              type="text" 
              placeholder="e.g. FLX-9823749823" 
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
            />
            <button className="bg-[#0A192F] hover:bg-[#0f2445] text-white px-8 py-3 rounded-r-md font-semibold transition">
              Track
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A192F] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive logistics solutions tailored to meet the demands of modern supply chains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-[#0A192F] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-3">Freight Forwarding</h3>
              <p className="text-gray-600 mb-4">Seamless international freight solutions via air, ocean, and land with full customs clearance support.</p>
              <Link href="/services/freight" className="text-[#FF6B00] font-medium hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-orange-50 text-[#FF6B00] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-3">Last-Mile Delivery</h3>
              <p className="text-gray-600 mb-4">Fast and reliable local delivery ensuring your packages reach their final destination safely.</p>
              <Link href="/services/domestic" className="text-[#FF6B00] font-medium hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-[#0A192F] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-3">Warehousing</h3>
              <p className="text-gray-600 mb-4">Secure, scalable storage solutions with real-time inventory management and distribution.</p>
              <Link href="/services/warehousing" className="text-[#FF6B00] font-medium hover:underline">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Banner */}
      <section className="bg-[#FF6B00] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to optimize your supply chain?</h2>
        <p className="text-lg mb-8 opacity-90">Talk to our logistics experts today and get a customized solution.</p>
        <Link href="/contact" className="bg-white text-[#FF6B00] hover:bg-gray-100 px-8 py-3 rounded-md font-bold transition shadow-sm inline-block">
          Contact Sales
        </Link>
      </section>
    </div>
  );
}
