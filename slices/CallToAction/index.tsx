import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-gray-100 block-space"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1e2a4a] mb-4">
              {slice.primary.heading}
            </h2>
            <p className="text-[#1e2a4a] text-lg">{slice.primary.tagline}</p>
          </div>
          <Button
            asChild
            className="bg-[#1e2a4a] hover:bg-[#2a3a5a] text-white font-medium px-8 py-6 h-auto rounded-none"
          >
            <PrismicNextLink field={slice.primary.cta_link} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
