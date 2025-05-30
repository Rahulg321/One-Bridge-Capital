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
      className="block-space-mini  extra-big-container mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <article className="prose max-w-prose w-full text-justify">
          <PrismicRichText field={slice.primary.content} />
        </article>

        <div className="space-y-8 md:space-y-12 basis-1/3">
          <div className="">
            <PrismicNextImage
              field={slice.primary.first_image}
              className="object-cover"
            />
          </div>

          <div className="">
            <PrismicNextImage
              field={slice.primary.second_image}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithTwoImages;
