import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Props for `FaqSlice`.
 */
export type FaqSliceProps = SliceComponentProps<Content.FaqSliceSlice>;

/**
 * Component for "FaqSlice" Slices.
 */
const FaqSlice: FC<FaqSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-gray-100 block-space"
    >
      <div className="container mx-auto px-4 big-container">
        <div className="grid md:grid-cols-[300px_1fr] gap-8 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-[#1a2d5a] mb-8">FAQS</h2>
            <div className="space-y-4">
              <h3 className="text-xl text-[#1a2d5a]">Have more questions?</h3>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {slice.primary.faq_questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 4}`}
                  className="border-b border-[#1a2d5a]/20"
                >
                  <AccordionTrigger className="text-[#1a2d5a] text-left hover:no-underline py-4 text-sm md:text-lg ">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1a2d5a]/80 pb-4 prose prose-ul:list-disc prose-ul:marker:text-red-500 text-sm">
                    <PrismicRichText field={faq.answer} />
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

export default FaqSlice;
