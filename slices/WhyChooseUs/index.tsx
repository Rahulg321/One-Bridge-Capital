import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Rocket, Scale, Shield, Globe, DollarSign } from "lucide-react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `WhyChooseUs`.
 */
export type WhyChooseUsProps = SliceComponentProps<Content.WhyChooseUsSlice>;

/**
 * Component for "WhyChooseUs" Slices.
 */
const WhyChooseUs: FC<WhyChooseUsProps> = ({ slice }) => {
  const services = [
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "Execution Expertise",
      description:
        "A team of trained professionals fluent in M&A analysis and deliverables.",
    },
    {
      icon: <Scale className="h-6 w-6 text-white" />,
      title: "Flexible and Scalable Delivery",
      description:
        "Ramp up capacity as deal pipelines shift, without fixed overhead.",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Confidential & Secure",
      description:
        "Trusted by global firms for our strict discretion and robust security protocols.",
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Follow the SUN model",
      description:
        "Global project experience with seamless, timezone-aligned execution.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Cost Efficiency",
      description:
        "Premium execution at offshore rates, cutting costs without compromising quality",
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/70 mix-blend-multiply"
          aria-hidden="true"
        />
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-blue-600/20"></div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <h2 className="">Why Choose Us?</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full space-y-3 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="flex items-center justify-start md:justify-center">
                <div className="bg-special w-8 h-8 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-gray-900 md:text-center text-sm font-bold">
                {service.title}
              </h4>
              <span className="text-gray-600 inline-block md:text-center text-sm">
                {service.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
