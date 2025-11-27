import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";

export default function TrackingUser() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Gagal fetch orders:", err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-amber-900 text-center">
          Lacak Pesanan Kopi Anda
        </h1>

        {/* Table Pesanan */}
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-amber-200">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gradient-to-r from-amber-700 to-orange-600 text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">Menu Kopi</th>
                <th className="p-3 text-left">Tipe</th>
                <th className="p-3 text-left">Jumlah</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b hover:bg-amber-50 transition-colors ${
                    idx % 2 === 0 ? "bg-white/80" : "bg-orange-50/50"
                  }`}
                >
                  <td className="p-3 font-medium text-gray-700">#{item.id}</td>
                  <td className="p-3 text-gray-700">{item.name}</td>
                  <td className="p-3 text-gray-700">{item.service}</td>
                  <td className="p-3 text-gray-600">{item.type}</td>
                  <td className="p-3 text-gray-700">{item.quantity}</td>
                  <td className="p-3 font-semibold text-amber-800">Rp {item.total.toLocaleString()}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white font-semibold text-xs ${
                        item.status === "Selesai"
                          ? "bg-green-600"
                          : item.status === "Diproses"
                          ? "bg-orange-500"
                          : "bg-yellow-600"
                      }`}
                    >
                      {item.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))}

              {orders.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="p-6 text-center text-gray-500 text-lg"
                  >
                    Tidak ada pesanan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
