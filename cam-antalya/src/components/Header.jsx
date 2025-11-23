import { Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Anasayfa", href: "/#anasayfa" },
    { name: "Hizmetlerimiz", href: "/#hizmetlerimiz" },
    { name: "Bloglar", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#anasayfa"
            className="flex items-center space-x-2 text-xl font-bold text-blue-600"
          >
            {/* Şirket Adı */}
            <span className="text-gray-900">Antalya</span>
            <span className="text-blue-600">Cam & PVC</span>
          </a>

          {/* Navigasyon Linkleri (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Telefon Numarası ve Menü Butonu */}
          <div className="flex items-center space-x-4">
            {/* Telefon Numarası */}
            <a
              href="tel:+905551234567"
              className="flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors hidden sm:flex"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>+90 532 694 74 19</span>
            </a>

            {/* Mobile Menü Butonu */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menü (Açılır Kapanır) */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-xl py-2 transition-all duration-300 text-center">
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+905326947419"
                className="flex items-center justify-center mt-2 px-4 py-2 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
