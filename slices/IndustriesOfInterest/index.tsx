import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  Heart,
  Monitor,
  ShoppingCart,
  Lightbulb,
  DollarSign,
  Factory,
} from "lucide-react";
/**
 * Props for `IndustriesOfInterest`.
 */
export type IndustriesOfInterestProps =
  SliceComponentProps<Content.IndustriesOfInterestSlice>;

/**
 * Component for "IndustriesOfInterest" Slices.
 */
const IndustriesOfInterest: FC<IndustriesOfInterestProps> = ({ slice }) => {
  const sectors = [
    {
      name: "Healthcare",
      icon: Heart,
    },
    {
      name: "Technology",
      icon: Monitor,
    },
    {
      name: "Consumer",
      icon: ShoppingCart,
    },
    {
      name: "Services",
      icon: Lightbulb,
    },
    {
      name: "Financial Services",
      icon: DollarSign,
    },
    {
      name: "Industrial",
      icon: Factory,
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full  py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-center mb-2">Sector Expertise</h2>
        <div className="w-48 h-px bg-white/30 mx-auto mb-10"></div>

        <p className="md:text-center mb-16 max-w-4xl mx-auto">
          We provide advice across all industries, with specialised expertise in
          the following sectors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sectors.map((sector) => (
            <div key={sector.name} className="flex flex-col items-center">
              <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center mb-4">
                <sector.icon className="w-12 h-12 text-[#1e5184] stroke-[1.5px]" />
              </div>
              <span className="text-xl font-light text-center">
                {sector.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesOfInterest;
