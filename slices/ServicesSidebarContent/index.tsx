import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import ServicesSidebarNav from "./ServicesSidebarNav";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <h4 className="t text-gray-700 mb-4">Our Services</h4>
            <ServicesSidebarNav />
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
