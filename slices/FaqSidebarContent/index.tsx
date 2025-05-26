import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";

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
      className="block-space-mini extra-big-container"
    >
      <div className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-3">
              1. What sets <span className="text-special">OneBridge</span> apart
              in the industry?
            </h3>
            <p className="mb-6">
              <span className="text-special">OneBridge</span> is a financial
              knowledge partner specializing in behind-the-scenes M&A execution
              support that is lean, fast, and integrated. The delivery model is
              designed for responsiveness, institutional-grade outputs, and
              seamless collaboration with client deal teams.
            </p>

            <h3 className="mb-3">
              2. Who typically engages with our services?
            </h3>
            <p className="mb-2">We work closely with:</p>
            <ul className="list-disc pl-5 mb-6 text-sm">
              <li className="mb-1">Global and boutique M&A advisory firms</li>
              <li className="mb-1">Strategic acquirers and corporates</li>
              <li className="mb-1">
                Financial due diligence and consulting firms
              </li>
              <li className="mb-1">Private equity and venture capital funds</li>
            </ul>

            <h3 className="mb-3">
              3. What kind of support do we provide across the M&A lifecycle?
            </h3>
            <p className="mb-2">
              Our services span a broad range of execution needs, including:
            </p>
            <ul className="list-disc pl-5 mb-6 text-sm">
              <li className="mb-1">
                Valuation and financial modeling (DCF, Comps, LBOs, Merger
                Models)
              </li>
              <li className="mb-1">
                Information Memorandums (IMs) and investor pitch decks
              </li>
              <li className="mb-1">
                Synergy analysis and post-merger integration planning
              </li>
              <li className="mb-1">
                Due diligence support and data room readiness
              </li>
              <li className="mb-1">
                Custom research and strategic benchmarking
              </li>
            </ul>

            <h3 className="mb-3">
              4. How is our pricing structured for client engagements?
            </h3>
            <p className="mb-2">
              We offer two flexible pricing models to suit different scopes of
              work:
            </p>
            <ul className="list-disc pl-5 mb-6 text-sm">
              <li className="mb-1">
                Fixed Hourly Model: Ideal for projects with clearly defined
                timelines and outputs
              </li>
              <li className="mb-1">
                Floating Hour Model: Best for evolving or open-ended mandates,
                billed based on logged analyst hours with transparent tracking
              </li>
            </ul>

            <h3 className="mb-3">5. How can you reach us?</h3>
            <p className="mb-6">
              Engagement can be initiated via our website contact form, email,
              or LinkedIn. We typically respond within 24 hours and remain
              available for urgent or high-priority mandates on accelerated
              timelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSidebarContent;
