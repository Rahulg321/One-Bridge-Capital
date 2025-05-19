import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { FileText, ClipboardList, TrendingUp } from "lucide-react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  const services = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Financial Due Diligence",
      description:
        "Conducting thorough assessments of financial health, market position, and operational capabilities to validate assumptions and identify risks",
      link: "/services/financial-due-diligence",
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Operational Due Diligence",
      description:
        "Conducting thorough assessments of financial health, market position, and operational capabilities to validate assumptions and identify risks",
      link: "/services/operational-due-diligence",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-white" />,
      title: "Information Memorandum Drafting",
      description:
        "Preparing comprehensive documents that outline the target company's business, financials, and growth prospects for potential buyers or investors.",
      link: "/services/information-memorandum-drafting",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Data Room Assistance",
      description:
        "Establishing secure virtual data rooms to organize and share confidential documents during due diligence.",
      link: "/services/data-room-assistance",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Synergy Assessment",
      description:
        "Our detailed, data-driven analysis helps quantify achievable value, identify integration challenges, and design governance frameworks to track synergy realization-maximizing the combined entity’s success.",
      link: "/services/synergy-assessment",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Program Management",
      description:
        "Overseeing the implementation of strategic initiatives, ensuring alignment with business goals and timelines.",
      link: "/services/program-management",
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full py-16 md:py-24 bg-white"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className=" mb-12 md:text-center">
          <h2 className="">Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e74c3c] shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  {service?.icon}
                </div>
                <h4 className="font-bold mt-3 transition-colors duration-300">
                  {service?.title}
                </h4>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {service?.description}
              </p>
              <Link
                href={service?.link || "#"}
                className="mt-3 text-[#e74c3c] hover:text-[#c0392b] font-medium transition-colors duration-300 flex items-center"
              >
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
