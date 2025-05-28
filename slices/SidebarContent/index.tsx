import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SidebarNav from "./SidebarNav";

// Helper to recursively highlight 'OneBridge' in any text node
function highlightOneBridge(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") {
    const parts = node.split(/(OneBridge)/g);
    return parts.map((part, i) =>
      part === "OneBridge" ? (
        <span key={i} className="text-blue-900 font-bold">
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
 * Props for `SidebarContent`.
 */
export type SidebarContentProps =
  SliceComponentProps<Content.SidebarContentSlice>;

/**
 * Component for "SidebarContent" Slices.
 */
const SidebarContent: FC<SidebarContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3">
            <div className="prose max-w-none break-words w-full">
              <PrismicRichText
                field={slice.primary.main_content}
                components={{
                  paragraph: ({ children }) => (
                    <p>{highlightOneBridge(children)}</p>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarContent;
