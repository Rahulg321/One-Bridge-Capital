import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentHeading`.
 */
export type ContentHeadingProps =
  SliceComponentProps<Content.ContentHeadingSlice>;

/**
 * Component for "ContentHeading" Slices.
 */
const ContentHeading: FC<ContentHeadingProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            {slice.primary.heading}
          </h1>

          <p className="text-gray-800 leading-relaxed max-w-2xl">
            {slice.primary.tagline}
          </p>

          <div className="space-y-4 max-w-2xl">
            <PrismicRichText field={slice.primary.content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHeading;
