import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Hubungi Kami</h1>
        <p className="text-gray-600 mb-8">Kami siap melayani Anda dengan segala pertanyaan tentang kopi premium kami</p>

        <div className="bg-white rounded shadow p-6 grid gap-6">
          {/* Email */}
          <a
            href="mailto:coffee@coffeeshop.com"
            className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition"
          >
            <Mail className="w-6 h-6 text-amber-700" />
            <div>
              <p className="text-xs text-gray-600">Email</p>
              <span className="text-gray-700 font-medium">coffee@coffeeshop.com</span>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+6285796119642"
            className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition"
          >
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-xs text-gray-600">Telepon</p>
              <span className="text-gray-700 font-medium">0857-9611-9642</span>
            </div>
          </a>

          {/* Address */}
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition"
          >
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-xs text-gray-600">Alamat</p>
              <span className="text-gray-700 font-medium">JL. Airmadidi Bawah Depan Unklab</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-700" />
            <span className="text-gray-700 font-medium">LinkedIn</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/cr_mlt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition"
          >
            <Instagram className="w-6 h-6 text-pink-600" />
            <span className="text-gray-700 font-medium">@cr_mlt</span>
          </a>
        </div>
      </main>
    </div>
  );
}