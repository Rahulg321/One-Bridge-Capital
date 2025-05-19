import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e1e4b] text-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="font-light mt-8 mb-12">
              OneBridge is a trusted knowledge partner in the mid-Market M&A,
              providing agile and cost effective support to boutique M&A
              Investment Banks and Advisory firms.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#f7941d] font-semibold mb-4">
              Important Links
            </h3>
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
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f7941d] border-b border-white/30 inline-block"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#BD3F16] font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <Link href="tel:+918561046369" className="hover:underline">
                +91 85610 46369
              </Link>
            </p>
            <p className="flex items-center ">
              <Mail size={16} className="mr-2" />
              <Link
                href="mailto:info@onebridge.com"
                className="hover:underline"
              >
                info@onebridge.com
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
