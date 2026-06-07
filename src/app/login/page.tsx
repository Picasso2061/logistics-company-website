export default function LoginPage() {
  return (
    <div className="bg-gray-50 flex-1 flex items-center justify-center p-6 min-h-[60vh]">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#0A192F] mb-2 text-center">Welcome Back</h1>
        <p className="text-gray-600 mb-8 text-center">Log in to your FastLogix account</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" />
          </div>
          <button className="w-full bg-[#0A192F] text-white py-3 rounded font-bold hover:bg-gray-800 transition mt-6">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
