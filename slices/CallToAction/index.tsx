import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      className="w-full "
    >
      <div className="w-full bg-gray-200 block-space-large">
        <div className="big-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mx-auto">
            <div className="max-w-2xl">
              <h2 className="mb-4">{slice.primary.heading}</h2>
              <p className=" text-lg">{slice.primary.tagline}</p>
            </div>
            <Button
              asChild
              size={"4xl"}
              className="bg-[#1e2a4a] hover:bg-[#2a3a5a] text-white rounded-none"
            >
              <Link href={"/contact"}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
