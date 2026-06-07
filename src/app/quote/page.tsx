"use client";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-50 flex-1 flex items-center justify-center p-6 min-h-[60vh]">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-lg p-10 text-center">
          <CheckCircle className="text-green-500 w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Success!</h2>
          <p className="text-gray-600 mb-8">Your quote request has been submitted successfully. Our team will contact you shortly.</p>
          <button onClick={() => setIsSuccess(false)} className="bg-[#FF6B00] text-white px-8 py-3 rounded font-bold hover:bg-[#e66000] transition">
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex-1">
      <section className="bg-[#0A192F] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Shipping Quote</h1>
          <p className="text-lg text-gray-300">Fill out the form below with your shipment details, and our logistics experts will provide you with a competitive, custom quote.</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Sender Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-6 border-b pb-2">Sender Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="Acme Logistics" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input required type="email" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input required type="tel" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-6 border-b pb-2">Shipment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="City, State or ZIP" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Location *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="City, State or ZIP" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Package Type *</label>
                  <select required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]">
                    <option value="">Select type</option>
                    <option value="box">Box / Parcel</option>
                    <option value="pallet">Pallet</option>
                    <option value="crate">Crate</option>
                    <option value="container">Full Container</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg) *</label>
                  <input required type="number" min="0" step="0.1" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="0.0" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Dimensions (cm)</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="L x W x H" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Qty *</label>
                  <input required type="number" min="1" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="1" />
                </div>
              </div>
            </div>

            {/* Delivery & Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl font-bold text-[#0A192F] mb-4 border-b pb-2">Delivery Options *</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="standard" required className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Standard Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="express" className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Express Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="sameday" className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Same-Day Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="international" className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">International Shipping</span>
                  </label>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0A192F] mb-4 border-b pb-2">Additional Services</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#FF6B00] rounded focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Insurance</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#FF6B00] rounded focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Fragile Handling</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#FF6B00] rounded focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Warehousing</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#FF6B00] rounded focus:ring-[#FF6B00]" />
                    <span className="text-gray-700">Customs Clearance</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4 border-b pb-2">Additional Instructions</h2>
              <textarea rows={4} className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="Any specific requirements or details we should know about?"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#FF6B00] text-white py-4 rounded font-bold text-lg hover:bg-[#e66000] transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? <><Loader2 className="animate-spin mr-2" /> Processing...</> : "Get My Quote"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
