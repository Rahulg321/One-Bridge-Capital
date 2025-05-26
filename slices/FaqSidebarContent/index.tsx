import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="">
                    What sets <span className="text-special">OneBridge</span>{" "}
                    apart in the industry?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="text-special">OneBridge</span> is a financial
                  knowledge partner specializing in behind-the-scenes M&A
                  execution support that is lean, fast, and integrated. The
                  delivery model is designed for responsiveness,
                  institutional-grade outputs, and seamless collaboration with
                  client deal teams.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Who typically engages with our services?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-3">We work closely with:</div>
                  <ul className="list-disc pl-5 mb-2 text-sm space-y-2">
                    <li className="mb-2">
                      Global and boutique M&A advisory firms
                    </li>
                    <li className="mb-2">Strategic acquirers and corporates</li>
                    <li className="mb-2">
                      Financial due diligence and consulting firms
                    </li>
                    <li className="mb-2">
                      Private equity and venture capital funds
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What kind of support do we provide across the M&A lifecycle?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-3">
                    Our services span a broad range of execution needs,
                    including:
                  </div>
                  <ul className="list-disc pl-5 mb-2 text-sm space-y-2">
                    <li className="mb-2">
                      Valuation and financial modeling (DCF, Comps, LBOs, Merger
                      Models)
                    </li>
                    <li className="mb-2">
                      Information Memorandums (IMs) and investor pitch decks
                    </li>
                    <li className="mb-2">
                      Synergy analysis and post-merger integration planning
                    </li>
                    <li className="mb-2">
                      Due diligence support and data room readiness
                    </li>
                    <li className="mb-2">
                      Custom research and strategic benchmarking
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How is our pricing structured for client engagements?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-3">
                    We offer two flexible pricing models to suit different
                    scopes of work:
                  </div>
                  <ul className="list-disc pl-5 mb-2 text-sm space-y-2">
                    <li className="mb-2">
                      Fixed Hourly Model: Ideal for projects with clearly
                      defined timelines and outputs
                    </li>
                    <li className="mb-2">
                      Floating Hour Model: Best for evolving or open-ended
                      mandates, billed based on logged analyst hours with
                      transparent tracking
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can you reach us?</AccordionTrigger>
                <AccordionContent>
                  <div className="mb-3">
                    Engagement can be initiated via our website contact form,
                    email, or LinkedIn. We typically respond within 24 hours and
                    remain available for urgent or high-priority mandates on
                    accelerated timelines.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSidebarContent;
