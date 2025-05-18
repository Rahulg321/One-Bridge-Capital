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
    >
      <div className="w-full block-space big-container">
        {slice.variation === "contentWithLeftHeading" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            <div className="space-y-6">
              <h2 className="text-center">{slice.primary.heading}</h2>
              {slice.primary.tagline && (
                <p className="text-lg">{slice.primary.tagline}</p>
              )}
            </div>
            {slice.primary.content && (
              <div>
                <article className="prose prose-lg max-w-none">
                  <PrismicRichText field={slice.primary.content} />
                </article>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a3f35]">
              {slice.primary.heading}
            </h2>
            {slice.primary.tagline && (
              <p className="text-lg text-gray-600">{slice.primary.tagline}</p>
            )}
            {slice.primary.content && (
              <div>
                <article className="prose prose-lg mx-auto">
                  <PrismicRichText field={slice.primary.content} />
                </article>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentHeading;
