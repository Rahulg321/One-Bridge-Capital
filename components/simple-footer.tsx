import React from "react";
import Link from "next/link";
import { Linkedin, Phone } from "lucide-react";

const SimpleFooter = () => {
  return (
    <footer className="w-full py-4 px-4 md:px-6 border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-xs text-muted-foreground mb-4 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} OneBridge Knowledge Partners. All Rights
          Reserved. Developed by{" "}
          <Link href="https://apptaeon.com" className="hover:underline">
            Apptaeon
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/company/onebridgeknowledgepartners"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-700 hover:text-gray-900" />
          </Link>
          <Link href="/contact" aria-label="Contact">
            <Phone className="h-5 w-5 text-gray-700 hover:text-gray-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
