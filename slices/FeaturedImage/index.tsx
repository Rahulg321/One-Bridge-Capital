import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
/**
 * Props for `FeaturedImage`.
 */
export type FeaturedImageProps =
  SliceComponentProps<Content.FeaturedImageSlice>;

/**
 * Component for "FeaturedImage" Slices.
 */
const FeaturedImage: FC<FeaturedImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full big-container block-space bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-auto  lg:h-full">
                <PrismicNextImage
                  field={slice.primary.main_image}
                  className="object-cover w-full h-full"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#3d6098] p-6 md:p-10 lg:p-12 flex flex-col justify-center mt-12 lg:ml-[-4rem] z-20">
            <h2 id="who-we-help-heading" className="mb-4 md:mb-6 text-white">
              {slice.primary.title}
            </h2>
            <div className="prose prose-lg max-w-none text-white " style={{}}>
              <PrismicRichText field={slice.primary.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
