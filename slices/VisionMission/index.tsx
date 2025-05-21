import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `VisionMission`.
 */
export type VisionMissionProps =
  SliceComponentProps<Content.VisionMissionSlice>;

/**
 * Component for "VisionMission" Slices.
 */
const VisionMission: FC<VisionMissionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-indigo-950/90 z-0">
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-slate-800/80 z-10"></div>

      <div className="big-container md:text-center relative z-10 mx-auto px-4">
        <h2 className="text-white"> Our Mission and Vision</h2>
        <p className="text-white">
          OneBridge is a trusted knowledge partner in the mid-market M&A,
          providing agile and cost-effective execution support to boutique M&A
          investment banks and advisory firms.
        </p>
        <p className="text-white">
          Guided by our values, we embed seamlessly into our clients’ deal
          teams, operating as an offshore extension to enable efficient and
          high-quality delivery.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
