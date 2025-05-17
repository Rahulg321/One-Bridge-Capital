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
      className="w-full block-space narrow-container space-y-8"
    >
      <h2 className="text-gray-900 text-center mb-8 md:mb-12">
        {slice.primary.heading}
      </h2>

      {slice.primary.tagline && (
        <p className="text-gray-800 mt-8 md:mt-12">{slice.primary.tagline}</p>
      )}

      {slice.primary.content && (
        <div className="mt-8 md:mt-12">
          <article className="space-y-6 max-w-2xl text-lg prose">
            <PrismicRichText field={slice.primary.content} />
          </article>
        </div>
      )}
    </section>
  );
};

export default ContentHeading;
