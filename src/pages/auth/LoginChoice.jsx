import { Link } from "react-router-dom";

export default function LoginChoice() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 overflow-hidden px-4">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Coffee Shop Logo */}
      <div className="absolute top-10 left-10 flex items-center gap-2 z-20">
        <div className="text-5xl">☕</div>
        <div>
          <h1 className="text-2xl font-bold text-amber-900">Coffee Shop</h1>
          <p className="text-xs text-amber-700">Premium Coffee</p>
        </div>
      </div>

      {/* Login Container */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-10 z-10 max-w-md w-full border border-amber-100 animate-fade-in">
        
        {/* Welcome Message */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-amber-800 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            Selamat Datang
          </h2>
          <p className="text-gray-600">Pilih akses sesuai peran Anda</p>
        </div>

        {/* User Button */}
        <Link
          to="/dashboard"
          className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <span className="text-2xl">👤</span>
          <span>Masuk sebagai Pelanggan</span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </Link>

        {/* Admin Button */}
        <Link
          to="/admin/dashboard"
          className="w-full group relative overflow-hidden bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <span className="text-2xl">⚙️</span>
          <span>Masuk sebagai Admin</span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </Link>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

        {/* Footer Info */}
        <p className="text-center text-sm text-gray-600">
          Kelola pesanan kopi Anda dengan mudah dan efisien
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}
