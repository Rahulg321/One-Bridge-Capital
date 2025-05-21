import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `TeamIndex`.
 */
export type TeamIndexProps = SliceComponentProps<Content.TeamIndexSlice>;

type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
};

/**
 * Component for "TeamIndex" Slices.
 */
const TeamIndex: FC<TeamIndexProps> = ({ slice }) => {
  const teamMembers: TeamMember[] = [
    {
      id: "philip-gore-randall",
      name: "Philip Gore-Randall",
      title: "Chairman",
      image: "/older-man-headshot.png",
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 py-12 max-w-6xl"
    >
      <h2 className="md:text-center">Meet the Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 md:mt-6 lg:mt-12">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="rounded-full border-4 border-[#0d3b49] overflow-hidden w-[160px] h-[160px] relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg text-center">{member.name}</h3>
            <span className="text-sm text-center text-[#ff5722]">
              {member.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamIndex;
