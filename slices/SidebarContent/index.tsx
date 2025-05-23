import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SidebarNav from "./SidebarNav";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <h4 className=" text-gray-700 mb-4">We are OneBridge</h4>
            <SidebarNav />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="prose max-w-none break-words w-full">
              <PrismicRichText field={slice.primary.main_content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarContent;
