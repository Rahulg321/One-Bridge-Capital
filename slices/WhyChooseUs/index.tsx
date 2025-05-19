import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  Link2,
  Users,
  Award,
  Users2,
  HeartHandshake,
  UserRound,
} from "lucide-react";
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
      icon: <Link2 className="h-6 w-6 text-white" />,
      title: "We Take Action",
      description:
        "Our professional advisors bring perseverance, problem-solving, and a 'get it done' attitude to the table.",
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Our Team Works Hard & Plays Hard",
      description:
        "We balance a strong work ethic that brings profitable results to our clients within a culture that celebrates the process.",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "We're Leaders In More Ways Than One",
      description:
        "At True North Mergers & Acquisitions, we're a leader to our clients, a leader in the marketplace, and leaders to each other.",
    },
    {
      icon: <Users2 className="h-6 w-6 text-white" />,
      title: "We Believe in Teamwork",
      description:
        "We bring our whole selves and work as a team to deliver world-class service to our clients.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-white" />,
      title: "Help People First & Success Will Follow",
      description:
        "We're devoted to encouraging, equipping, collaborating and uplifting all who come in contact with us.",
    },
    {
      icon: <UserRound className="h-6 w-6 text-white" />,
      title: "It's All About Servant Leadership",
      description:
        "This is the core purpose of why we exist — placing the needs of others before ourselves. Success will follow.",
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

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#1e2a4a]">
            It&apos;s Our Culture That Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-black/50 rounded-lg p-6 border border-white/10 hover:bg-black/40 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-4 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <div className="w-12 h-1 bg-white/30 mb-4"></div>
              <p className="text-white/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
