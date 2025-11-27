import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* User */
import Dashboard from "./pages/user/Dashboard";
import Services from "./pages/user/Services";
import Order from "./pages/user/Order";
import Contact from "./pages/user/Contact";
import TrackingUser from "./pages/user/TrackingUser";

/* Auth */
import LoginChoice from "./pages/auth/LoginChoice";

/* Admin */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import TrackingAdmin from "./pages/admin/TrackingAdmin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* default pertama keluar */}
        <Route path="/" element={<LoginChoice />} />

        {/* user */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/tracking" element={<TrackingUser />} />
        <Route path="/contact" element={<Contact />} />

        {/* admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/tracking" element={<TrackingAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
