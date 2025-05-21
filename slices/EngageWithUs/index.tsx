import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import EngagementModels from "@/components/engagement-model";

/**
 * Props for `EngageWithUs`.
 */
export type EngageWithUsProps = SliceComponentProps<Content.EngageWithUsSlice>;

/**
 * Component for "EngageWithUs" Slices.
 */
const EngageWithUs: FC<EngageWithUsProps> = ({ slice }) => {
  const engagementModels: EngagementModel[] = [
    {
      id: "dedicated-staff",
      title: "Dedicated Staff Model",
      description:
        "Team is solely dedicated to the client and works as an extension of the client's onshore team",
      suitableFor:
        "Seamless team extension; clients with steady workflow, for provision of basic to complex support",
      highlights: [
        "Fosters a deep understanding of the client's requirements and a strong relationship with the onshore team",
        "Knowledge sharing leads to high value addition and increased efficiency",
        "Teams are staffed in a secure single-client room",
      ],
    },
    {
      id: "block-of-hours",
      title: "Block of Hours Model",
      description:
        "Client purchases a block of hours that can be used any time during the month",
      suitableFor: "Clients with variable workflow support during peak cycles",
      highlights: [
        "Flexibility to utilize capacity at any time during the month",
        "Teams are staffed with relevant subject-matter experts as per project requirements",
        "The client will always have a single point of contact at Acuity Knowledge Partners",
      ],
    },
    {
      id: "project-model",
      title: "1-hoc Project Model",
      description:
        "Support on a standalone project basis, with no long-term commitment",
      suitableFor: "Standalone tasks and smaller engagements",
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
      className="min-h-screen bg-slate-50 py-12"
    >
      <EngagementModels models={engagementModels} />
    </section>
  );
};

export default EngageWithUs;
