import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-amber-700 text-white"
          : "text-white/90 hover:bg-amber-600/40"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function NavbarAdmin() {
  return (
    <header className="bg-amber-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-semibold">☕ Admin Panel</h1>

          <nav className="hidden md:flex items-center gap-2 mr-4">
            <LinkItem to="/admin/dashboard">Dashboard</LinkItem>
            <LinkItem to="/admin/orders">Pesanan</LinkItem>
            <LinkItem to="/admin/tracking">Lacak</LinkItem>
          </nav>

          <NavLink
            to="/"
            className="px-3 py-2 bg-amber-700 hover:bg-amber-900 text-white rounded-md text-sm"
          >
            Keluar
          </NavLink>
        </div>
      </div>
    </header>
  );
}
