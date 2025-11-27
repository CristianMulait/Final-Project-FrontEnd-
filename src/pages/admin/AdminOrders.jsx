import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/layout/NavbarAdmin";
import Swal from "sweetalert2";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // Fetch orders dari db.json
  const loadOrders = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Gagal memuat pesanan:", err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const showDetail = (order) => {
    Swal.fire({
      title: `Pesanan ${order.name}`,
      html: `
        <div class="text-left space-y-3">
          <p><strong>ID Pesanan:</strong> #${order.id}</p>
          <p><strong>Nama:</strong> ${order.name}</p>
          <p><strong>Telepon:</strong> ${order.phone}</p>
          <p><strong>Menu Kopi:</strong> ${order.service} - ${order.type}</p>
          <p><strong>Jumlah:</strong> ${order.quantity}</p>
          <p><strong>Total:</strong> Rp ${order.total.toLocaleString()}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Catatan:</strong> ${order.notes || '-'}</p>
        </div>
      `,
      icon: 'info',
      confirmButtonColor: '#b45309'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <NavbarAdmin />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-amber-900">📋 Daftar Pesanan Kopi</h1>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gradient-to-r from-amber-700 to-orange-600 text-white">
              <tr>
                <th className="p-4 text-left font-bold">ID</th>
                <th className="p-4 text-left font-bold">Pelanggan</th>
                <th className="p-4 text-left font-bold">Menu</th>
                <th className="p-4 text-left font-bold">Jumlah</th>
                <th className="p-4 text-left font-bold">Total</th>
                <th className="p-4 text-left font-bold">Status</th>
                <th className="p-4 text-left font-bold">Catatan</th>
                <th className="p-4 text-left font-bold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-gray-500 text-lg">
                    Belum ada pesanan.
                  </td>
                </tr>
              )}

              {orders.map((order, idx) => (
                <tr 
                  key={order.id} 
                  className={`border-t hover:bg-amber-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-orange-50/30'}`}
                >
                  <td className="p-4 font-bold text-amber-700">#{order.id}</td>
                  <td className="p-4 text-gray-800">{order.name}</td>
                  <td className="p-4 text-gray-700">{order.service}</td>
                  <td className="p-4 text-gray-700">{order.quantity}</td>
                  <td className="p-4 font-semibold text-amber-800">Rp {order.total.toLocaleString()}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white font-semibold text-xs ${
                        order.status === "Selesai"
                          ? "bg-green-600"
                          : order.status === "Diproses"
                          ? "bg-orange-500"
                          : "bg-yellow-600"
                      }`}
                    >
                      {order.status || "Pending"}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 max-w-xs truncate" title={order.notes}>
                    {order.notes ? order.notes : <span className="text-gray-400 italic">-</span>}
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => showDetail(order)}
                      className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg text-sm font-bold hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
