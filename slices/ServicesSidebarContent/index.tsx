import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `ServicesSidebarContent`.
 */
export type ServicesSidebarContentProps =
  SliceComponentProps<Content.ServicesSidebarContentSlice>;

/**
 * Component for "ServicesSidebarContent" Slices.
 */
const ServicesSidebarContent: FC<ServicesSidebarContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-mini extra-big-container"
    >
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <h3 className="t text-gray-700 mb-4">OUR SERVICES</h3>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/services/financial-due-diligence"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Financial Due Diligence
              </Link>
              <Link
                href="/services/operational-due-diligence"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Operational Due Diligence
              </Link>
              <Link
                href="/services/information-memorandum-drafting"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Information Memorandum Drafting
              </Link>
              <Link
                href="/services/data-room-assistance"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Data Rooom Assistance
              </Link>
              <Link
                href="/services/synergy-assessment"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Synergy Assessment
              </Link>
              <Link
                href="/services/financial-modelling"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Financial Modelling
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="prose">
              <PrismicRichText field={slice.primary.main_content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSidebarContent;
