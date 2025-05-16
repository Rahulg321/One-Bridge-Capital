import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import {
  BarChart3,
  FileText,
  DollarSign,
  ClipboardList,
  Database,
  TrendingUp,
} from "lucide-react";
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
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "M&A and Growth Capital",
      description:
        "As specialists in M&A transaction advisory, we provide buy-side as well as sell-side advisory. We also assist our clients in raising private equity/ venture capital funding to expand, enter new markets or finance a significant acquisition without a change in control.",
      link: "#",
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Due Diligence",
      description:
        "Acumen specializes in conducting accounting and financial due diligence on the target company on behalf of the client.",
      link: "#",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "IM and Business Modelling",
      description:
        "We provide research assistance on different aspects of transactions such as buyer's list, information memorandums, analytical review of target companies, business model preparation etc. for our clients.",
      link: "#",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-white" />,
      title: "Valuation",
      description:
        "We provide valuation services including business valuation, valuation of intangible assets, purchase price allocations, valuations for regulatory compliances.",
      link: "#",
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Data Room Assistance",
      description:
        "Acumen assists clients in getting ready for a due-diligence by setting up a data room.",
      link: "#",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "IPO Assistance",
      description:
        "We assist your team in the IPO process by providing inputs in drafting the business & industry section in the prospectus.",
      link: "#",
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative  w-full py-16 md:py-24 bg-white"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#4a3f35]">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e74c3c] shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mt-3 text-[#4a3f35] group-hover:text-[#e74c3c] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.link}
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
