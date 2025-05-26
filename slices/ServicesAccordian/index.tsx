import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ServicesAccordianProps =
  SliceComponentProps<Content.ServicesAccordianSlice>;

const ServicesAccordian: FC<ServicesAccordianProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <div className="px-4">
        <Accordion type="single" collapsible className="space-y-4">
          {slice.primary.approaches.map((approach, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="text-left">{approach.heading}</div>
              </AccordionTrigger>
              <AccordionContent>
                <PrismicRichText field={approach.content} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesAccordian;
