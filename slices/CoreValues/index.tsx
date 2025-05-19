"use client";

import { FC } from "react";
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-[#3d6098] p-4  transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="font-bold text-xl mb-3 border-b-1 border-white pb-2 text-white group-hover:text-white">
              {value.title}
            </h3>
            <p className="text-white group-hover:text-white">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
