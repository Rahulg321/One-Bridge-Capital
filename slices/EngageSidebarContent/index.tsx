import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Props for `EngageSidebarContent`.
 */
export type EngageSidebarContentProps =
  SliceComponentProps<Content.EngageSidebarContentSlice>;

/**
 * Component for "EngageSidebarContent" Slices.
 */
const EngageSidebarContent: FC<EngageSidebarContentProps> = ({ slice }) => {
  const pricingModels = [
    {
      title: "Model 1: Block of Hours",
      description:
        "Client purchases a block of hours that can be used any time during the month",
      suitable: "Clients with variable workflow; support during peak cycles",
      highlights: [
        "Flexibility to utilize capacity at any time during the month",
        "Teams are staffed with relevant subject-matter experts as per project requirements",
        "The client will always have a single point of contact at Acuity Knowledge Partners",
      ],
    },
    {
      title: "Model 2: Dedicated Staff Model",
      description:
        "Team is solely dedicated to the client and works as an extension of the client's onshore team",
      suitable:
        "Seamless team extension; clients with steady workflow, for provision of basic to complex support",
      highlights: [
        "Fosters a deep understanding of the client's requirements and a strong relationship with the onshore team",
        "Knowledge sharing leads to high value addition and increased efficiency",
        "Teams are staffed in a secure single-client room",
      ],
    },
    {
      title: "Model 3: Ad-hoc Project Model",
      description:
        "Support on a standalone project basis, with no long-term commitment",
      suitable: "Standalone tasks and smaller engagements",

      highlights: [
        "Ability to staff any team size at short notice for any time period",
        "Teams are staffed with relevant subject-matter experts as per project requirements",
        "Full visibility of project costing",
      ],
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container text-sm"
    >
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            {pricingModels.map((model, idx) => (
              <Card className="border" key={model.title}>
                <CardContent>
                  <h4 className="text-base mb-4 md:mb-6 lg:mb-8">
                    {model.title}
                  </h4>
                  <span className="mb-4 md:mb-4 block lg:mb-6 text-xs">
                    <strong>Description:</strong> {model.description}
                  </span>
                  <span className="mb-4 md:mb-4 block lg:mb-6 text-xs">
                    <strong>Suitable for:</strong> {model.suitable}
                  </span>
                  <div className="block">
                    <strong>Highlight:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-2 text-xs">
                      {model.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngageSidebarContent;
