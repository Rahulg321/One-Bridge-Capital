"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Topbar */}
      <div
        className={cn(
          "bg-slate-900 text-white w-full transition-all duration-300 z-50 fixed top-0"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="#"
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium py-1 px-3 rounded flex items-center transition-colors"
              >
                <Calendar className="h-3 w-3 mr-1" />
                <span>SET AN APPOINTMENT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "w-full transition-all duration-300 z-40 fixed top-10",
          "bg-gradient-to-r from-slate-900 to-slate-800 text-white py-5"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Firm Name */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                <span className="font-bold text-white text-lg">M</span>
              </div>
              <div>
                <h1 className={cn("font-bold text-xl tracking-tight")}>
                  Meridian Partners
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-400"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn("lg:hidden p-2 rounded-md")}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Decorative element - subtle pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "url('/abstract-geometric-pattern.png')",
            backgroundSize: "100px",
          }}
          aria-hidden="true"
        ></div>
      </header>

      {/* Add padding to body to account for fixed header */}
      <div className="h-[120px]"></div>

      {/* Slide-in Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          isMobileMenuOpen ? "visible" : "invisible"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
                <span className="font-bold text-white text-sm">M</span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="p-5 h-full overflow-y-auto">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 px-3 text-base font-medium text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA buttons in mobile menu */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
              <p className="text-sm font-medium text-slate-500 mb-3">
                Quick Actions
              </p>

              <Link
                href="/appointment"
                className="flex items-center py-2 px-3 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700 transition-colors"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Set an Appointment
              </Link>
            </div>

            {/* Contact info in mobile menu */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm font-medium text-slate-500 mb-3">
                Contact Us
              </p>
              <Link
                href="tel:+918561046369"
                className="block py-2 text-sm text-slate-700 hover:text-blue-600"
              >
                +91 8561046369
              </Link>
              <Link
                href="mailto:info@onebridgekp.com"
                className="block py-2 text-sm text-slate-700 hover:text-blue-600"
              >
                info@onebridgekp.com
              </Link>

              {/* Social media in mobile menu */}
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
