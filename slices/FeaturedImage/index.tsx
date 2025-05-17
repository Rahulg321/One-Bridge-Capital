import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

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

          <div className="w-full lg:w-1/2 bg-neutral-200 p-6 md:p-10 lg:p-12 flex flex-col justify-center mt-12 lg:ml-[-4rem] z-20">
            <h2
              id="who-we-help-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-800 mb-6"
            >
              Who do we help?
            </h2>

            <div className="space-y-4 text-neutral-700">
              <p>
                We work with corporations, partnerships, institutions, family
                offices and private equity investors across Australia and New
                Zealand, to deliver reliable financial advice.
              </p>

              <p>
                We&apos;re well connected throughout the globe with investors
                and corporates, through our large, diverse network and trusted
                relationships.
              </p>

              <p>
                We are particularly well positioned to support stable, long-term
                investment decisions for family offices, with Equion, in part,
                being family owned.
              </p>

              <p>
                Whether you&apos;re in the food & agriculture, technology,
                finance, health, industrial, or consumer markets and services
                sector, we take the time to understand you, and your needs, and
                to advise based on your personal requirements – or those of your
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
