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
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Full Name *</label>
                  <input id="fullName" required type="text" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Company Name</label>
                  <input id="companyName" type="text" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="Acme Logistics" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Email Address *</label>
                  <input id="email" required type="email" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Phone Number *</label>
                  <input id="phone" required type="tel" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-6 border-b pb-2">Shipment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Pickup Location *</label>
                  <input id="pickupLocation" required type="text" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="City, State or ZIP" />
                </div>
                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Delivery Location *</label>
                  <input id="deliveryLocation" required type="text" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="City, State or ZIP" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <label htmlFor="packageType" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Package Type *</label>
                  <select id="packageType" required className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors">
                    <option value="">Select type</option>
                    <option value="box">Box / Parcel</option>
                    <option value="pallet">Pallet</option>
                    <option value="crate">Crate</option>
                    <option value="container">Full Container</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Weight (kg) *</label>
                  <input id="weight" required type="number" min="0" step="0.1" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="0.0" />
                </div>
                <div>
                  <label htmlFor="dimensions" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Dimensions (cm)</label>
                  <input id="dimensions" type="text" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="L x W x H" />
                </div>
                <div>
                  <label htmlFor="qty" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Qty *</label>
                  <input id="qty" required type="number" min="1" className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="1" />
                </div>
              </div>
            </div>

            {/* Delivery & Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl font-bold text-[#0A192F] mb-4 border-b pb-2">Delivery Options *</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="standard" required className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Standard Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="express" className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Express Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="sameday" className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Same-Day Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="delivery" value="international" className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">International Shipping</span>
                  </label>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0A192F] mb-4 border-b pb-2">Additional Services</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Insurance</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Fragile Handling</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Warehousing</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-600 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-500 transition-colors" />
                    <span className="text-gray-900 dark:text-gray-200">Customs Clearance</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label htmlFor="instructions" className="text-2xl font-bold text-[#0A192F] mb-4 border-b pb-2 block">Additional Instructions</label>
              <textarea id="instructions" rows={4} className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors" placeholder="Any specific requirements or details we should know about?"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? <><Loader2 className="animate-spin mr-2" /> Processing...</> : "Get My Quote"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
