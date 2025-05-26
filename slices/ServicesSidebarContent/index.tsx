import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import ServicesSidebarNav from "./ServicesSidebarNav";

/**
 * Props for `ServicesSidebarContent`.
 */
export type ServicesSidebarContentProps =
  SliceComponentProps<Content.ServicesSidebarContentSlice>;

// Helper to recursively highlight 'OneBridge' in any text node
function highlightOneBridge(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") {
    const parts = node.split(/(OneBridge)/g);
    return parts.map((part, i) =>
      part === "OneBridge" ? (
        <span key={i} style={{ color: "red" }}>
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
 * Component for "ServicesSidebarContent" Slices.
 */
const ServicesSidebarContent: FC<ServicesSidebarContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-mini extra-big-container"
    >
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
          <div className="md:col-span-1">
            <div className="md:col-span-1 md:sticky md:top-32 h-fit">
              <h4 className="t text-gray-700 mb-4">Our Services</h4>
              <ServicesSidebarNav />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="prose">
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

export default ServicesSidebarContent;
