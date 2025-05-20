import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
          <div>
            <h2 className="">{slice.primary.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mt-4 md:mt-8 lg:mt-12">
              <div className="space-y-6">
                {slice.primary.tagline && (
                  <div className="prose prose-lg mx-auto">
                    <PrismicRichText field={slice.primary.tagline} />
                  </div>
                )}
                <Button
                  asChild
                  size={"3xl"}
                  className="bg-[#1e2a4a] hover:bg-[#2a3a5a] text-lg text-white rounded-none"
                >
                  <Link href={"/contact"}>Contact Us</Link>
                </Button>
              </div>
              {slice.primary.content && (
                <div>
                  <article className="prose prose-lg max-w-none">
                    <PrismicRichText field={slice.primary.content} />
                  </article>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="md:text-center">{slice.primary.heading}</h2>
            {slice.primary.tagline && (
              <div className="prose prose-lg ">
                <PrismicRichText field={slice.primary.tagline} />
              </div>
            )}
            {slice.primary.content && (
              <div>
                <article className="prose prose-lg">
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
