import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

// =======================
// DATA MENU KOPI
// =======================
const serviceData = {
  "Espresso": { "Single Shot": "18000/cup", "Double Shot": "25000/cup", "Triple Shot": "32000/cup" },
  "Americano": { "Regular": "20000/cup", "Large": "28000/cup" },
  "Cappuccino": { "Regular": "32000/cup", "Large": "40000/cup", "Extra Hot": "42000/cup" },
  "Latte": { "Regular": "32000/cup", "Large": "40000/cup", "Vanilla": "45000/cup" },
  "Macchiato": { "Regular": "28000/cup", "Large": "36000/cup" },
  "Cold Brew": { "Regular": "30000/cup", "Vanilla": "35000/cup", "Caramel": "35000/cup" },
  "Iced Latte": { "Classic": "35000/cup", "Almond Milk": "40000/cup", "Flavored": "42000/cup" },
};

export default function Order() {
  const [params] = useSearchParams();

  const paramService = params.get("service") || "";
  const paramType = params.get("type") || "";
  const paramPrice = params.get("price") || "";

  const [service, setService] = useState(paramService);
  const [type, setType] = useState(paramType);
  const [price, setPrice] = useState(paramPrice);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);

  const extractNumber = (value) => (value ? Number(value.replace(/[^0-9]/g, "")) : 0);
  const numericPrice = extractNumber(price);

  const unit = "cup";

  useEffect(() => {
    setTotal(numericPrice * qty);
  }, [qty, numericPrice]);

  const handleServiceChange = (value) => {
    setService(value);
    setType("");
    setPrice("");
  };

  const handleTypeChange = (value) => {
    setType(value);
    setPrice(serviceData[service][value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!name || !phone || !service || !type || !price) {
      Swal.fire({
        icon: "warning",
        title: "Perhatian",
        text: "Mohon isi semua field yang diperlukan!",
        confirmButtonColor: "#b45309",
      });
      return;
    }

    const payload = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      phone,
      notes,
      quantity: `${qty} ${unit}`,
      service,
      type,
      price,
      total,
      status: "Pending",
    };

    try {
      const response = await fetch("http://127.0.0.1:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Pesanan Anda berhasil diterima. Terima kasih!",
        confirmButtonColor: "#b45309",
      });

      setService("");
      setType("");
      setPrice("");
      setQty(1);
      setTotal(0);
      setName("");
      setPhone("");
      setNotes("");
    } catch (err) {
      console.error("Gagal submit pesanan:", err);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Pastikan JSON Server berjalan di port 3000. Error: " + err.message,
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pb-10">
      <Navbar />

      <main className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-800 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            ☕ Pesan Kopi Favorit
          </h1>
          <p className="text-gray-600">Isi form di bawah untuk memesan kopi premium Anda</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 space-y-6 border border-amber-100">
          {/* Pilih Menu */}
          <div className="space-y-4">
            <label className="block">
              <span className="font-bold text-gray-800 flex items-center gap-2">
                <span className="text-xl">☕</span> Pilih Menu Kopi
              </span>
              <select
                value={service}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="mt-3 w-full border-2 border-amber-200 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-gradient-to-r from-amber-50 to-orange-50"
                required
              >
                <option value="">-- pilih menu --</option>
                {Object.keys(serviceData).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            {service && (
              <label className="block">
                <span className="font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🎯</span> Pilih Ukuran/Varian
                </span>
                <select
                  value={type}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="mt-3 w-full border-2 border-amber-200 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-gradient-to-r from-amber-50 to-orange-50"
                  required
                >
                  <option value="">-- pilih ukuran --</option>
                  {Object.keys(serviceData[service]).map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            )}

            {price && (
              <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl">
                <p className="font-bold text-amber-900 text-lg">💰 Harga: {price}</p>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="grid gap-5">
            <label className="block">
              <span className="font-bold text-gray-800 flex items-center gap-2">
                <span className="text-xl">👤</span> Nama Anda
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 w-full border-2 border-amber-200 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-gradient-to-r from-amber-50 to-orange-50"
                placeholder="Masukkan nama lengkap"
              />
            </label>

            <label className="block">
              <span className="font-bold text-gray-800 flex items-center gap-2">
                <span className="text-xl">📱</span> Nomor Telepon
              </span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-3 w-full border-2 border-amber-200 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-gradient-to-r from-amber-50 to-orange-50"
                placeholder="081234567890"
              />
            </label>

            <label className="block">
              <span className="font-bold text-gray-800 flex items-center gap-2">
                <span className="text-xl">📝</span> Catatan (Opsional)
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-3 w-full border-2 border-amber-200 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-gradient-to-r from-amber-50 to-orange-50"
                placeholder="Contoh: Extra panas, tanpa gula, dll"
                rows="3"
              ></textarea>
            </label>

            {price && (
              <label className="block">
                <span className="font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xl">📦</span> Jumlah ({unit})
                </span>
                <input
                  type="number"
                  min="1"
                  required
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="mt-3 w-full border-2 border-amber-200 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gradient-to-r from-green-50 to-emerald-50"
                />
              </label>
            )}

            {price && (
              <div className="p-5 border-2 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-green-400">
                <p className="text-lg font-bold text-green-800">
                  💵 Total Harga: <span className="text-2xl">Rp {total.toLocaleString()}</span>
                </p>
              </div>
            )}

            <button
              type="submit"
              className={`p-4 rounded-2xl text-white font-bold text-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
                service && type && price ? "bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 hover:shadow-2xl" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!service || !type || !price}
            >
              <span className="text-2xl">✓</span> Kirim Pesanan
            </button>
          </form>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}
