import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavLinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition ${
        isActive
          ? "bg-amber-700 text-white"
          : "text-gray-200 hover:bg-amber-600/40 hover:text-white"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="bg-amber-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white text-amber-800 flex items-center justify-center font-bold shadow text-lg">
              ☕
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-white">Coffee Shop</div>
              <div className="text-xs text-amber-200">Premium Coffee</div>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLinkItem to="/dashboard">Dashboard</NavLinkItem>
            <NavLinkItem to="/services">Menu</NavLinkItem>
            <NavLinkItem to="/orders">Pesan</NavLinkItem>
            <NavLinkItem to="/tracking">Lacak</NavLinkItem>
            <NavLinkItem to="/contact">Kontak</NavLinkItem>
          </nav>

          {/* KELUAR */}
          <Link
            to="/"
            className="px-4 py-2 bg-white text-amber-800 rounded-md font-medium hover:bg-amber-100 transition"
          >
            Keluar
          </Link>

        </div>
      </div>
    </header>
  );
}
