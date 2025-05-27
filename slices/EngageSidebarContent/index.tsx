import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Props for `EngageSidebarContent`.
 */
export type EngageSidebarContentProps =
  SliceComponentProps<Content.EngageSidebarContentSlice>;

/**
 * Component for "EngageSidebarContent" Slices.
 */
const EngageSidebarContent: FC<EngageSidebarContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container text-sm"
    >
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            {slice.primary.models.map((model, idx) => (
              <Card className="border" key={idx}>
                <CardContent>
                  <h4 className="text-base mb-4 md:mb-6 lg:mb-8">
                    {model.heading}
                  </h4>
                  <span className="mb-4 md:mb-4 block lg:mb-6 text-xs">
                    <strong>Description:</strong>{" "}
                    <span className="text-xs text-gray-700">
                      {model.description}
                    </span>
                  </span>
                  <span className="mb-4 md:mb-4 block lg:mb-6 text-xs">
                    <strong>Suitable for:</strong>{" "}
                    <span className="text-xs text-gray-700">
                      {model.suitable_for}
                    </span>
                  </span>
                  <div className="block">
                    <strong className="text-xs">Highlight:</strong>
                    <div className="prose">
                      <PrismicRichText field={model.highlight} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngageSidebarContent;
