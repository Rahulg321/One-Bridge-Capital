import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `MemberBioSlice`.
 */
export type MemberBioSliceProps =
  SliceComponentProps<Content.MemberBioSliceSlice>;

/**
 * Component for "MemberBioSlice" Slices.
 */
const MemberBioSlice: FC<MemberBioSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#edf4f7] p-8 md:p-12  rounded-lg shadow-sm block-space-mini extra-big-container"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 py-4">
        <div className="flex flex-col items-center md:w-1/4">
          <div className="mb-4">
            <PrismicNextImage
              field={slice.primary.member_image}
              className="border-2 border-gray-300"
            />
          </div>
          <h3 className="font-medium text-center ">
            {slice.primary.member_name}
          </h3>
          <span className="text-center mt-2 text-gray-700">
            {slice.primary.designation}
          </span>
        </div>

        <div className="md:w-3/4 space-y-6 prose prose-lg">
          <PrismicRichText field={slice.primary.bio} />
        </div>
      </div>
    </section>
  );
};

export default MemberBioSlice;
