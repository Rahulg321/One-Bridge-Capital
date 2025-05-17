import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e1e4b] text-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mr-4">
              <span className="text-[#1e1e4b] font-bold text-xl">MSA</span>
            </div>
            <div className="uppercase">
              <div className="text-xl font-semibold">Morgan Shaw</div>
              <div className="text-sm">Advisory</div>
            </div>
          </div>
          <h2 className="text-2xl font-light mt-8 mb-12">
            Find out if you&apos;re Game Ready.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h3 className="text-[#f7941d] font-semibold mb-4">OFFERINGS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Advisory Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Transaction (M&A)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Coaching & Mentoring Options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  EBITDA+ Six Steps to Success™
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Valuations
                </Link>
              </li>
            </ul>
          </div>

          {/* Collaborate Column */}
          <div className="col-span-1">
            <h3 className="text-[#f7941d] font-semibold mb-4">COLLABORATE</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Book a call
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Find us
                </Link>
              </li>
            </ul>
          </div>

          {/* Content Column */}
          <div className="col-span-1">
            <h3 className="text-[#f7941d] font-semibold mb-4">CONTENT</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Daily Industry Updates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  FAQ&apos;s Strategic Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  FAQ&apos;s M&A Transaction
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1">
            <h3 className="text-[#f7941d] font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Meet The MSA Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Giving Back
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">
              Morgan Shaw Advisory
            </h3>
            <p className="mb-1">Suite 3.02, Level 3</p>
            <p className="mb-1">89 York Street</p>
            <p className="mb-4">Sydney NSW 2000</p>
            <p className="flex items-center text-[#f7941d] mb-2">
              <Phone size={16} className="mr-2" />
              <Link href="tel:+611300980344" className="hover:underline">
                +61 1300 980 344
              </Link>
            </p>
            <p className="flex items-center text-[#f7941d]">
              <Mail size={16} className="mr-2" />
              <Link
                href="mailto:info@morganshawadvisory.com"
                className="hover:underline"
              >
                info@morganshawadvisory.com
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="max-w-2xl mb-4 lg:mb-0">
            <p>
              Helping business owners in{" "}
              <Link href="#" className="text-[#f7941d] hover:underline">
                Sydney
              </Link>
              ,{" "}
              <Link href="#" className="text-[#f7941d] hover:underline">
                Melbourne
              </Link>
              ,{" "}
              <Link href="#" className="text-[#f7941d] hover:underline">
                Brisbane
              </Link>
              ,{" "}
              <Link href="#" className="text-[#f7941d] hover:underline">
                Canberra
              </Link>
              ,{" "}
              <Link href="#" className="text-[#f7941d] hover:underline">
                Adelaide
              </Link>
              ,{" "}
              <Link href="#" className="text-[#f7941d] hover:underline">
                Perth
              </Link>{" "}
              and across Australia to maximise their business value.
            </p>
          </div>
          <div>
            <p>Copyright © {currentYear} Morgan Shaw Advisory</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
