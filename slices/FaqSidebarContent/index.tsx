import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * Props for `FaqSidebarContent`.
 */
export type FaqSidebarContentProps =
  SliceComponentProps<Content.FaqSidebarContentSlice>;

/**
 * Component for "FaqSidebarContent" Slices.
 */
const FaqSidebarContent: FC<FaqSidebarContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="">
              {slice.primary.questions.map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{question.question_text}</AccordionTrigger>
                  <AccordionContent className="prose">
                    <PrismicRichText field={question.question_answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSidebarContent;
