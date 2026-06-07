import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white flex-1">
      <section className="bg-[#0A192F] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">We&apos;re here to help with all your logistics needs.</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#0A192F] mb-8">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="text-[#FF6B00] mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-600">1-800-LOGISTICS</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="text-[#FF6B00] mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600">support@fastlogix.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-[#FF6B00] mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg">Headquarters</h4>
                <p className="text-gray-600">123 Freight Way, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2 focus:ring-[#FF6B00]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded p-2 focus:ring-[#FF6B00]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded p-2 focus:ring-[#FF6B00]"></textarea>
            </div>
            <button className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold hover:bg-[#e66000] transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
