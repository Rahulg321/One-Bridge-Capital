import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ContentWithTwoImages`.
 */
export type ContentWithTwoImagesProps =
  SliceComponentProps<Content.ContentWithTwoImagesSlice>;

/**
 * Component for "ContentWithTwoImages" Slices.
 */
const ContentWithTwoImages: FC<ContentWithTwoImagesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <article className="prose">
          <PrismicRichText field={slice.primary.content} />
        </article>
        <div className="space-y-8">
          <PrismicNextImage field={slice.primary.first_image} />
          <PrismicNextImage field={slice.primary.second_image} />
        </div>
      </div>
    </section>
  );
};

export default ContentWithTwoImages;
