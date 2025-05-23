import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `SidebarContent`.
 */
export type SidebarContentProps =
  SliceComponentProps<Content.SidebarContentSlice>;

/**
 * Component for "SidebarContent" Slices.
 */
const SidebarContent: FC<SidebarContentProps> = ({ slice }) => {
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
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              WHO WE ARE
            </h2>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                About One Horizon Capital
              </Link>
              <Link
                href="/principles"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Principles & Values
              </Link>
              <Link
                href="/people"
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-200"
              >
                Our People
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

export default SidebarContent;
