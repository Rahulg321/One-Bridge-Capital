import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import ServicesSidebarNav from "./ServicesSidebarNav";
import ServicesAccordian from "../ServicesAccordian";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createClient } from "@/prismicio";

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
 * Component for "ServicesSidebarContent" Slices.
 */
const ServicesSidebarContent: FC<ServicesSidebarContentProps> = async ({
  slice,
}) => {
  const client = createClient();
  const services = await client.getAllByType("service");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24">
          <div className="md:col-span-1">
            <div className="md:col-span-1 md:sticky md:top-32 h-fit">
              <h4 className=" text-gray-700 mb-4">Our Services</h4>
              <ServicesSidebarNav services={services} />
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

            {slice.primary.approaches.length > 0 && (
              <div>
                <h4 className="mt-4 md:mt-6 lg:mt-12">Our Approach</h4>
                <Accordion type="single" collapsible className="mt-4">
                  {slice.primary.approaches.map((approach, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>
                        <div className="text-left">{approach.heading}</div>
                      </AccordionTrigger>
                      <AccordionContent className="prose">
                        <PrismicRichText field={approach.content} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSidebarContent;
