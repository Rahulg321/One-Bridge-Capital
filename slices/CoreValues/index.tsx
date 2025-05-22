"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type CoreValuesProps = SliceComponentProps<Content.CoreValuesSlice>;

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
      <h2 className="md:text-center mb-12">Our Core Values</h2>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className=" w-full md:w-[calc(50%-1.5rem)] border-4 lg:w-[calc(33.333%-1.5rem)] p-4 transition-all duration-300 hover:shadow-lg rounded-lg"
          >
            <h5 className="font-bold mb-3 border-b-2 text-special">
              {value.title}
            </h5>
            <span className=" inline-block text-sm">{value.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
