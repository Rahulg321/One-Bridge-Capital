import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `TeamIndex`.
 */
export type TeamIndexProps = SliceComponentProps<Content.TeamIndexSlice>;

type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  linkedin: string;
};

/**
 * Component for "TeamIndex" Slices.
 */
const TeamIndex: FC<TeamIndexProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="extra-big-container block-space-large"
    >
      <h2 className="md:text-center">Meet the Team</h2>

      <div className="mt-4 md:mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {slice.primary.team_members.map((member, index) => (
          <div
            key={`${member.member_name}-${index}`}
            className="flex flex-col items-center"
          >
            <div className="relative mb-4">
              <div className="rounded-full border-4 border-[#0d3b49] overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
                <PrismicNextImage
                  field={member.member_image}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-bold text-lg text-center">
              {member.member_name}
            </h3>
            <span className="text-sm text-center text-[#ff5722]">
              {member.member_designation}
            </span>
            <PrismicNextLink
              field={member.linkedin_link}
              target="_blank"
              className="mt-4 flex items-center justify-center"
            >
              <FaLinkedin />
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamIndex;
