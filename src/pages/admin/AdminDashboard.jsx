import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/layout/NavbarAdmin";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [topServices, setTopServices] = useState([]);

  // Fetch orders dari db.json
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/orders");
      const data = await res.json();
      setOrders(data);
      calculateTopServices(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // Hitung jumlah tiap menu kopi
  const calculateTopServices = (ordersData) => {
    const serviceCount = {};
    ordersData.forEach((order) => {
      serviceCount[order.service] = (serviceCount[order.service] || 0) + 1;
    });

    const formatted = Object.entries(serviceCount).map(([service, count]) => ({
      service,
      count,
    }));

    setTopServices(formatted);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "Pending").length;
  const processingOrders = orders.filter((o) => o.status === "Diproses").length;
  const completedOrders = orders.filter((o) => o.status === "Selesai").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans">
      <NavbarAdmin />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-500">Total Pesanan</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">{totalOrders}</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-500">Menunggu</p>
            <p className="text-3xl font-bold text-yellow-500 mt-2">{pendingOrders}</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-500">Diproses</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{processingOrders}</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-500">Selesai</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{completedOrders}</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Menu Kopi Paling Populer
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topServices} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="url(#colorBar)" radius={[6, 6, 0, 0]} />
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b45309" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#f97316" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
