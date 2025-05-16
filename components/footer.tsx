"use client";

import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              Meridian Partners
            </h3>
            <p className="text-sm text-slate-300">Strategic M&A Advisory</p>
            <p className="mt-4 text-sm text-slate-300 max-w-xs">
              Providing expert guidance for mergers, acquisitions, and strategic
              transactions to help businesses achieve their growth objectives.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-300" />
                <span className="text-sm text-slate-300">
                  +1 (212) 555-7890
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-300" />
                <a
                  href="mailto:info@meridianpartners.com"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  info@meridianpartners.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 p-2 rounded-full hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 p-2 rounded-full hover:bg-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-700" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Meridian Partners. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="#"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
