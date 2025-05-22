import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  Monitor,
  ShoppingCart,
  Truck,
  DollarSign,
  Pill,
  Factory,
  Fuel,
  Plane,
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
      name: "Technology, Media and Entertainment",
      icon: Monitor,
    },
    {
      name: "Consumer",
      icon: ShoppingCart,
    },
    {
      name: "Logistics and Distribution",
      icon: Truck,
    },
    {
      name: "Financial Services",
      icon: DollarSign,
    },
    {
      name: "Pharmaceuticals and Healthcare",
      icon: Pill,
    },
    {
      name: "Industrials",
      icon: Factory,
    },
    {
      name: "Oil and Gas",
      icon: Fuel,
    },
    {
      name: "Travel and Entertainment",
      icon: Plane,
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-center mb-2">Sector Expertise</h2>
        <span className="md:text-center block text-sm mt-4 mb-12 max-w-4xl mx-auto">
          We provide advice across all industries, with specialised expertise in
          the following sectors:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sectors.map((sector) => (
            <div key={sector.name} className="flex flex-col items-center">
              <div className="bg-white rounded-full w-22 h-22 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#1e5184]"></div>
                <sector.icon className="w-8 h-8 text-[#1e5184] stroke-[1.5px] relative z-10" />
              </div>
              <span className="font-light text-center">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesOfInterest;
