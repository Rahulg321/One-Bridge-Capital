"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/services/financial-due-diligence",
    label: "Financial Due Diligence",
  },
  {
    href: "/services/operational-due-diligence",
    label: "Operational Due Diligence",
  },
  {
    href: "/services/information-memorandum-drafting",
    label: "Information Memorandum Drafting",
  },
  { href: "/services/data-room-assistance", label: "Data Rooom Assistance" },
  { href: "/services/synergy-assessment", label: "Synergy Assessment" },
  { href: "/services/financial-modelling", label: "Financial Modelling" },
];

const ServicesSidebarNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2">
      {navLinks.map((link) => {
        const isActive = pathname && pathname.includes(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`  py-2 border-b border-gray-200 text-sm ${
              isActive
                ? "text-blue-900 font-semibold border-blue-900"
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

export default ServicesSidebarNav;
