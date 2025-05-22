import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
/**
 * Props for `ServicesColoredSection`.
 */
export type ServicesColoredSectionProps =
  SliceComponentProps<Content.ServicesColoredSectionSlice>;

/**
 * Component for "ServicesColoredSection" Slices.
 */
const ServicesColoredSection: FC<ServicesColoredSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-[#edf4f7]  py-10"
    >
      <div className="big-container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h4>
            Reach out for a friendly conversation on your interests,
            requirements, or career aspirations if you’re looking
            to work with us.
          </h4>
          <div className="mt-4 md:mt-6">
            <Link href="/contact">
              <Button>Request a Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesColoredSection;
