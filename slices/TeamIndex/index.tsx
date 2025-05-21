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
    {
      id: "robert-king",
      name: "Robert King",
      title: "Chief Executive Officer",
      image: "/placeholder-gvrky.png",
    },
    {
      id: "ian-mullen",
      name: "Ian Mullen",
      title: "Chief Financial Officer",
      image: "/smiling-older-man-headshot.png",
    },
    {
      id: "jon-odonnell",
      name: "Jon O'Donnell",
      title: "Chief Operating Officer",
      image: "/bald-man-headshot.png",
    },
    {
      id: "sumit-chhabra",
      name: "Sumit Chhabra",
      title: "Chief Delivery Officer",
      image:
        "/placeholder.svg?height=200&width=200&query=professional%20headshot%20of%20man%20with%20dark%20hair",
    },
    {
      id: "joyce-church",
      name: "Joyce Church",
      title: "Chief of Staff",
      image:
        "/placeholder.svg?height=200&width=200&query=professional%20headshot%20of%20woman%20with%20glasses",
    },
    {
      id: "narasimhan-sl",
      name: "Narasimhan S L",
      title: "Chief Human Resources Officer",
      image:
        "/placeholder.svg?height=200&width=200&query=professional%20headshot%20of%20older%20man%20with%20glasses%20and%20gray%20hair",
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
