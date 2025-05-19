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
        "Working as a true extension of our clients’ internal teams.",
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
      <h2 className=" text-center text-gray-700 mb-12">Our Core Values</h2>

      <div className="relative flex justify-center mb-16 overflow-x-auto sm:overflow-visible px-4 py-2">
        <div className="flex -space-x-4 xs:-space-x-5 sm:-space-x-6 md:-space-x-8 min-w-min">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full border-4 border-gray-300  bg-white flex items-center justify-center z-10 relative">
                <span className="text-blue-600 font-bold text-xs xs:text-sm md:text-base px-2 text-center">
                  {value.title}
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
