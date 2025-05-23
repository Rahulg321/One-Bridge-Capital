"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import {
  Building2,
  Truck,
  Heart,
  Briefcase,
  ShoppingCart,
  Cpu,
} from "lucide-react";

/**
 * Props for `FocusSectors`.
 */
export type FocusSectorsProps = SliceComponentProps<Content.FocusSectorsSlice>;

/**
 * Component for "FocusSectors" Slices.
 */
const FocusSectors: FC<FocusSectorsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-start">
          <h2 className="mb-4">FOCUS SECTORS</h2>
          <p className="text-gray-700">
            Our team of investment bankers possess strong relationships and deep
            sector knowledge that provide optimal outcomes to owners and senior
            executives in six key industries.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Industrials */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 p-6 transition-all duration-300 group-hover:bg-[#2c4159] group-hover:text-white rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 shrink-0 group-hover:border-white">
                <Building2 className="w-8 h-8 text-[#2c4159] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium">INDUSTRIALS</h3>
            </div>
            <div className="border-t border-dashed border-gray-300 mt-4"></div>
          </div>

          {/* Transportation & Logistics */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 p-6 transition-all duration-300 group-hover:bg-[#2c4159] group-hover:text-white rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 shrink-0 group-hover:border-white">
                <Truck className="w-8 h-8 text-[#2c4159] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium">
                TRANSPORTATION & LOGISTICS
              </h3>
            </div>
            <div className="border-t border-dashed border-gray-300 mt-4"></div>
          </div>

          {/* Healthcare */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 p-6 transition-all duration-300 group-hover:bg-[#2c4159] group-hover:text-white rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 shrink-0 group-hover:border-white">
                <Heart className="w-8 h-8 text-[#2c4159] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium">HEALTHCARE</h3>
            </div>
            <div className="border-t border-dashed border-gray-300 mt-4"></div>
          </div>

          {/* Business & IT Services */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 p-6 transition-all duration-300 group-hover:bg-[#2c4159] group-hover:text-white rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 shrink-0 group-hover:border-white">
                <Briefcase className="w-8 h-8 text-[#2c4159] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium">BUSINESS & IT SERVICES</h3>
            </div>
            <div className="border-t border-dashed border-gray-300 mt-4"></div>
          </div>

          {/* Consumer */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 p-6 transition-all duration-300 group-hover:bg-[#2c4159] group-hover:text-white rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 shrink-0 group-hover:border-white">
                <ShoppingCart className="w-8 h-8 text-[#2c4159] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium">CONSUMER</h3>
            </div>
            <div className="border-t border-dashed border-gray-300 mt-4"></div>
          </div>

          {/* Technology */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 p-6 transition-all duration-300 group-hover:bg-[#2c4159] group-hover:text-white rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 shrink-0 group-hover:border-white">
                <Cpu className="w-8 h-8 text-[#2c4159] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium">TECHNOLOGY</h3>
            </div>
            <div className="border-t border-dashed border-gray-300 mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSectors;
