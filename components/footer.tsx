import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import MainLogo from "@/public/final_ong.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-4 md:mb-6">
            <Link href="/" className="">
              <Image
                src={MainLogo}
                alt="Meridian Partners Logo"
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p>
              Helping M&A Advisory firms and Investment Banks in accelerating
              delivery to their clients.
            </p>
          </div>

          <div className="col-span-1 md:mx-auto">
            <h4 className="text-special font-semibold mb-4">Important Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-special border-b border-white/30 inline-block"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/insights"
                  className="hover:text-special border-b border-white/30 inline-block"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-special border-b border-white/30 inline-block"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:mx-auto">
            <h4 className="text-special font-semibold mb-4">Contact</h4>
            <span className="flex items-center mb-2 text-sm">
              <Phone size={16} className="mr-2" />
              <Link href="tel:+918561046369" className="hover:underline">
                +91 85610 46369
              </Link>
            </span>
            <span className="flex items-center text-sm">
              <Mail size={16} className="mr-2" />
              <Link
                href="mailto:info@onebridge.com"
                className="hover:underline"
              >
                info@onebridge.com
              </Link>
            </span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="max-w-2xl mb-4 lg:mb-0"></div>
          <div>
            <p>Copyright © {currentYear} OneBridge Knowledge Partners</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
