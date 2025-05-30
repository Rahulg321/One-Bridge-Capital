import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Helper to recursively highlight 'OneBridge' in any text node
function highlightOneBridge(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") {
    const parts = node.split(/(OneBridge)/g);
    return parts.map((part, i) =>
      part === "OneBridge" ? (
        <span key={i} className="text-blue-900">
          OneBridge
        </span>
      ) : (
        part
      )
    );
  }
  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={i}>{highlightOneBridge(child)}</React.Fragment>
    ));
  }
  if (
    React.isValidElement(node) &&
    (node as React.ReactElement<{ children: React.ReactNode }>).props &&
    (node as React.ReactElement<{ children: React.ReactNode }>).props.children
  ) {
    return React.cloneElement(
      node as React.ReactElement<{ children: React.ReactNode }>,
      {
        children: highlightOneBridge(
          (node as React.ReactElement<{ children: React.ReactNode }>).props
            .children
        ),
      }
    );
  }
  return node;
}

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
      <div className="">
        {slice.variation === "contentWithLeftHeading" ? (
          <div className="space-y-8 extra-big-container w-full block-space-mini">
            <h2 className="text-3xl font-bold text-gray-900">
              {slice.primary.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {slice.primary.tagline && (
                  <div className="prose">
                    <PrismicRichText field={slice.primary.tagline} />
                  </div>
                )}
                <Button
                  asChild
                  className="bg-[#1e2a4a] hover:bg-[#2a3a5a] text-lg text-white rounded-none"
                >
                  <Link href={"/contact"}>Contact Us</Link>
                </Button>
              </div>
              {slice.primary.content && (
                <div className="prose">
                  <PrismicRichText field={slice.primary.content} />
                </div>
              )}
            </div>
          </div>
        ) : slice.variation === "contentHeadingBlueBackground" ? (
          <div className="bg-[#3d6098] w-full block-space-mini">
            <div className="  w-full block-space text-white">
              <div className="extra-big-container space-y-4">
                {slice.primary.heading && (
                  <h2 className="md:text-center">{slice.primary.heading}</h2>
                )}
                {slice.primary.tagline && (
                  <div className="prose max-w-none text-white">
                    <PrismicRichText
                      field={slice.primary.tagline}
                      components={{
                        paragraph: ({ children }) => (
                          <p>{highlightOneBridge(children)}</p>
                        ),
                      }}
                    />
                  </div>
                )}
                {slice.primary.content && (
                  <div>
                    <article className="prose max-w-none text-white">
                      <PrismicRichText field={slice.primary.content} />
                    </article>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : slice.variation === "contentBlueBackgroundMargins" ? (
          <div className="bg-[#3d6098] extra-big-container w-full block-space-mini">
            <div className="w-full text-white">
              <div className="space-y-4 md:text-center px-4 md:px-6">
                {slice.primary.heading && (
                  <h2 className="text-white md:text-center">
                    {slice.primary.heading}
                  </h2>
                )}
                {slice.primary.tagline && (
                  <div className="prose max-w-none   prose-strong:text-white prose-b:text-white  text-white">
                    <PrismicRichText field={slice.primary.tagline} />
                  </div>
                )}
                {slice.primary.content && (
                  <div>
                    <article className="prose max-w-none   prose-strong:text-white prose-b:text-white  text-white">
                      <PrismicRichText field={slice.primary.content} />
                    </article>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="extra-big-container space-y-4 w-full block-space-mini">
            {slice.primary.heading && (
              <h2 className="md:text-center">{slice.primary.heading}</h2>
            )}
            {slice.primary.tagline && (
              <div className="prose max-w-none">
                <PrismicRichText
                  field={slice.primary.tagline}
                  components={{
                    paragraph: ({ children }) => (
                      <p>{highlightOneBridge(children)}</p>
                    ),
                  }}
                />
              </div>
            )}
            {slice.primary.content && (
              <div>
                <article className="prose max-w-none">
                  <PrismicRichText
                    field={slice.primary.content}
                    components={{
                      paragraph: ({ children }) => (
                        <p>{highlightOneBridge(children)}</p>
                      ),
                    }}
                  />
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
