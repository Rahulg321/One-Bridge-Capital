import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { cn } from "@/lib/utils";

export type FeaturedImageProps =
  SliceComponentProps<Content.FeaturedImageSlice>;

const FeaturedImage: FC<FeaturedImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full extra-big-container block-space-mini bg-white overflow-hidden"
    >
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 md:gap-12 lg:gap-16">
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

          <div
            className={cn("w-full lg:w-1/2 z-20", {
              "bg-[#3d6098] p-4 md:p-6 lg:p-8":
                slice.variation !== "featuredImageTransparent",
              "bg-none": slice.variation === "featuredImageTransparent",
            })}
          >
            <h2
              id="who-we-help-heading"
              className={cn("mb-4 md:mb-6", {
                "text-white ": slice.variation !== "featuredImageTransparent",
                "text-black": slice.variation === "featuredImageTransparent",
              })}
            >
              {slice.primary.title}
            </h2>
            <div
              className={cn("prose max-w-none", {
                "text-white prose-strong:text-white prose-b:text-white":
                  slice.variation !== "featuredImageTransparent",
                "text-black prose-strong:text-black prose-b:text-black":
                  slice.variation === "featuredImageTransparent",
              })}
              style={{}}
            >
              <PrismicRichText field={slice.primary.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
