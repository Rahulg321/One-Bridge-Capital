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
  const stats = [
    {
      value: "6,000+",
      description: "Employees and counting",
    },
    {
      value: "650+",
      description: "Satisfied clients",
    },
    {
      value: "USD5bn",
      description: "Saved for clients annually",
    },
    {
      value: "16+",
      description: "Cities presence globally",
    },
    {
      value: "10,000+",
      description: "Children's education sponsored",
    },
    {
      value: "20+",
      description:
        "Working with 20+ NGOs focusing on education, entrepreneurship and the environment",
    },
    {
      value: "5,000+",
      description: "Volunteering hours spent by employees annually",
    },
    {
      value: "36.5%",
      description:
        "Women Employees. We take pride in women's empowerment and skill development.",
    },
  ];

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

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-special mb-2">{stat.value}</h2>
              <p className="text-white text-sm md:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
