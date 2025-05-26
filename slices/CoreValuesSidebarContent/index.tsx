import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";

export type CoreValuesSidebarContentProps =
  SliceComponentProps<Content.CoreValuesSidebarContentSlice>;

const CoreValuesSidebarContent: FC<CoreValuesSidebarContentProps> = ({
  slice,
}) => {
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
            <p className="mb-8">
              Our core values are the foundation of how we operate, guiding our
              agile and hands-on approach in every engagement across the broader
              dealmaking and advisory ecosystem.
            </p>
            <ul className="space-y-6 text-sm">
              <li>
                <span className="font-semibold">Partnership:</span> Working as a
                true extension of our clients&apos; internal teams.
              </li>
              <li>
                <span className="font-semibold">Trust:</span> Building lasting
                relationships through transparency and reliability.
              </li>
              <li>
                <span className="font-semibold">Excellence:</span> Seamlessly
                combining global execution discipline with deep domain
                expertise.
              </li>
              <li>
                <span className="font-semibold">Speed:</span> Delivering timely,
                high-quality services under tight timelines.
              </li>
              <li>
                <span className="font-semibold">Accountability:</span> Embracing
                ownership of our commitments to drive results that exceed
                expectations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSidebarContent;
