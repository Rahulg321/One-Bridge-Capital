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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <SidebarNav />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <h3 className="mb-4 md:mb-6 lg:mb-8">
              {(() => {
                const title = slice.primary.title || "";
                const words = title.split(" ");
                if (words.length === 0) return null;
                if (words.length === 1) {
                  return (
                    <span className="text-special italic">{words[0]}</span>
                  );
                }
                return (
                  <>
                    {words.slice(0, -1).join(" ") + " "}
                    <span className="text-special italic">
                      {words[words.length - 1]}
                    </span>
                  </>
                );
              })()}
            </h3>

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
