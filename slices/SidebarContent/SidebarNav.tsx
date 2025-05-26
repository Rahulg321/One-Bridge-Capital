"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "Who We Are" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/core-values", label: "Our Core Values" },
  { href: "/sector-expertise", label: "Sector Expertise" },
  { href: "/engage-with-us", label: "Engage With Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/frequently-asked-questions", label: "Frequently Asked Questions" },
];

const SidebarNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <h4 className={cn(" mb-4 text-blue-900")}>We are OneBridge</h4>
      <nav className="flex flex-col space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname && pathname.includes(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 border-b border-gray-200 text-sm ${
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
    </div>
  );
};

export default SidebarNav;
