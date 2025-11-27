import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

export default function Services() {
  const layanan = [
    {
      title: "Espresso",
      items: [
        { type: "Single Shot", price: "18000/cup" },
        { type: "Double Shot", price: "25000/cup" },
        { type: "Triple Shot", price: "32000/cup" },
      ],
    },
    {
      title: "Americano",
      items: [
        { type: "Regular", price: "20000/cup" },
        { type: "Large", price: "28000/cup" },
      ],
    },
    {
      title: "Cappuccino",
      items: [
        { type: "Regular", price: "32000/cup" },
        { type: "Large", price: "40000/cup" },
        { type: "Extra Hot", price: "42000/cup" },
      ],
    },
    {
      title: "Latte",
      items: [
        { type: "Regular", price: "32000/cup" },
        { type: "Large", price: "40000/cup" },
        { type: "Vanilla", price: "45000/cup" },
      ],
    },
    {
      title: "Macchiato",
      items: [
        { type: "Regular", price: "28000/cup" },
        { type: "Large", price: "36000/cup" },
      ],
    },
    {
      title: "Cold Brew",
      items: [
        { type: "Regular", price: "30000/cup" },
        { type: "Vanilla", price: "35000/cup" },
        { type: "Caramel", price: "35000/cup" },
      ],
    },
    {
      title: "Iced Latte",
      items: [
        { type: "Classic", price: "35000/cup" },
        { type: "With Almond Milk", price: "40000/cup" },
        { type: "Flavored", price: "42000/cup" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            ☕ Menu Kopi Kami
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nikmati koleksi kopi premium kami yang dipilih dengan cermat dari berbagai belahan dunia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((lay, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-amber-100"
            >
              {/* Gradient Header */}
              <div className="p-6 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h2 className="text-2xl font-bold relative z-10">{lay.title}</h2>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-3">
                {lay.items.map((item, i) => (
                  <Link
                    key={i}
                    to={`/orders?service=${lay.title}&type=${item.type}&price=${item.price}`}
                    className="block p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all duration-200 group/item"
                  >
                    <p className="font-semibold text-gray-800 group-hover/item:text-amber-800">{item.type}</p>
                    <p className="text-sm text-amber-700 font-bold mt-1">{item.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
