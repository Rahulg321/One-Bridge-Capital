"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CoreValues`.
 */
export type CoreValuesProps = SliceComponentProps<Content.CoreValuesSlice>;

/**
 * Component for "CoreValues" Slices.
 */
const CoreValues: FC<CoreValuesProps> = ({ slice }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Partnership",
      description:
        "Working as a true extension of our clients' internal teams.",
    },
    {
      title: "Trust",
      description:
        "Building lasting relationships through transparency and reliability.",
    },
    {
      title: "Excellence",
      description:
        "Seamlessly combining global execution discipline with deep domain expertise.",
    },
    {
      title: "Speed",
      description:
        "Delivering timely, high-quality services under tight timelines.",
    },
    {
      title: "Accountability",
      description:
        "Embracing ownership of our commitments to drive results that exceed expectations.",
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-10 sm:py-16 px-2 sm:px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-center text-black mb-12">Our Core Values</h2>

      <div className="relative flex justify-center mb-16 px-4 py-2">
        <div className="flex flex-col sm:flex-row sm:-space-x-6 sm:xs:-space-x-8 sm:sm:-space-x-6 min-w-min gap-2 sm:gap-0">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] lg:w-[14rem] lg:h-[14rem] rounded-full border-4 border-blue-800 flex items-center justify-center z-10 relative transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  hoveredIndex === index ? "bg-blue-800" : "bg-white"
                }`}
              >
                <span
                  className={`font-bold text-base px-4 text-center ${
                    hoveredIndex === index ? "text-white" : "text-blue-600"
                  }`}
                >
                  {hoveredIndex === index ? value.description : value.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
