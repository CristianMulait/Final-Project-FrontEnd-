import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Link } from "react-router-dom";

const serviceData = [
  {
    title: "Espresso",
    icon: "☕",
    subtitle: "Pilihan Favorit",
    items: [
      { label: "Single Shot", value: "Rp18.000" },
      { label: "Double Shot", value: "Rp25.000" },
      { label: "Triple Shot", value: "Rp32.000" },
    ],
  },
  {
    title: "Cappuccino",
    icon: "🥛",
    subtitle: "Kaya Busa Susu",
    items: [
      { label: "Regular", value: "Rp32.000" },
      { label: "Large", value: "Rp40.000" },
      { label: "Extra Hot", value: "Rp42.000" },
    ],
  },
  {
    title: "Latte",
    icon: "🍶",
    subtitle: "Susu Melimpah",
    items: [
      { label: "Regular", value: "Rp32.000" },
      { label: "Large", value: "Rp40.000" },
      { label: "Vanilla", value: "Rp45.000" },
    ],
  },
  {
    title: "Americano",
    icon: "💧",
    subtitle: "Sederhana & Nikmat",
    items: [
      { label: "Regular", value: "Rp20.000" },
      { label: "Large", value: "Rp28.000" },
    ],
  },
  {
    title: "Macchiato",
    icon: "🎯",
    subtitle: "Espresso & Susu",
    items: [
      { label: "Regular", value: "Rp28.000" },
      { label: "Large", value: "Rp36.000" },
    ],
  },
  {
    title: "Cold Brew",
    icon: "🧊",
    subtitle: "Segar & Menggugah",
    items: [
      { label: "Regular", value: "Rp30.000" },
      { label: "Vanilla", value: "Rp35.000" },
      { label: "Caramel", value: "Rp35.000" },
    ],
  },
  {
    title: "Iced Latte",
    icon: "❄️",
    subtitle: "Dingin & Nikmat",
    items: [
      { label: "Classic", value: "Rp35.000" },
      { label: "Almond Milk", value: "Rp40.000" },
      { label: "Flavored", value: "Rp42.000" },
    ],
  },
  {
    title: "Mocha",
    icon: "🍫",
    subtitle: "Kopi & Cokelat",
    items: [
      { label: "Regular", value: "Rp38.000" },
      { label: "Large", value: "Rp46.000" },
    ],
  },
  {
    title: "Flat White",
    icon: "☁️",
    subtitle: "Mikro Foam Latte",
    items: [
      { label: "Regular", value: "Rp35.000" },
      { label: "Large", value: "Rp43.000" },
    ],
  },
  {
    title: "Affogato",
    icon: "🍨",
    subtitle: "Espresso & Es Krim",
    items: [
      { label: "Vanilla", value: "Rp40.000" },
      { label: "Choco", value: "Rp42.000" },
    ],
  },
];

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Kedai Kopi Premium Kami
            </h1>
            <p className="text-gray-700 mb-6">
              Nikmati berbagai pilihan kopi berkualitas premium dari berbagai belahan dunia.
            </p>
            {/* ✅ Link ke Order.jsx */}
            <Link
              to="http://localhost:5173/orders"
              className="px-6 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="text-6xl animate-bounce">☕</div>
            <div className="absolute -top-6 left-10 text-2xl animate-pulse">🫖</div>
            <div className="absolute -top-10 right-10 text-2xl animate-pulse">🌰</div>
            <div className="absolute -bottom-6 left-1/3 text-2xl animate-pulse">💫</div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="harga" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Menu & Harga
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Pilih minuman favorit Anda dan rasakan kualitas terbaiknya
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-amber-100"
              >
                {/* Gradient Top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"></div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center mb-5">
                    <div className="text-5xl mr-4 group-hover:scale-125 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                      <p className="text-amber-600 text-sm font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-colors"
                      >
                        <span className="text-gray-700 font-medium">{item.label}</span>
                        <span className="text-amber-800 font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
