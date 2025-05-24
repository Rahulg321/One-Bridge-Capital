"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About One Horizon Capital" },
  { href: "/mission-vision", label: "Mission & Vision" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/core-values", label: "Our Core Values" },
  { href: "/sector-expertise", label: "Sector Expertise" },
  { href: "/frequently-asked-questions", label: "Frequently Asked Questions" },
];

const SidebarNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-4">
      {navLinks.map((link) => {
        const isActive = pathname && pathname.includes(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`py-2 border-b border-gray-200 ${
              isActive
                ? "text-blue-400 font-semibold border-blue-400"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
