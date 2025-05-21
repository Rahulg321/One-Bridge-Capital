import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

type Testimonial = {
  title: string;
  description: string;
};

interface TestimonialsProps
  extends SliceComponentProps<Content.TestimonialsSlice> {
  title?: string;
  testimonials?: Testimonial[];
  className?: string;
}

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({
  slice,
  title = "Trusted By Industry Leaders",
  testimonials = [
    {
      title: "The Intelligent Canvas",
      description:
        "Big ideas deserve room to grow. Our limitless canvas lets your team create and build together - from the first 'What if?' to the final 'Wow!' Add anything, plan everything, and watch collaboration come alive.",
    },
    {
      title: "Custom-crafted to fit your needs",
      description:
        "Power through any project with step-by-step templates that turn messy free-for-alls into super slick workflows. Then tweak and shape them until they're custom-fit for your team's needs.",
    },
    {
      title: "Pure speed, no fluff",
      description:
        "Focus on what matters with distraction-free formats like docs, data tables, timelines, and slides to keep your creative flow flowing. Get to work even faster by setting your favorite format as the default view when you open your board.",
    },
    {
      title: "Seamless Integration",
      description:
        "The platform's ability to integrate with our existing tools and workflows has been a game-changer. It's like having a Swiss Army knife for our business processes.",
    },
    {
      title: "Exceptional Support",
      description:
        "Their customer support team is incredibly responsive and knowledgeable. Every time we've needed help, they've been there with solutions that actually work.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "The analytics and reporting features have given us unprecedented visibility into our operations. We're making better decisions based on real data.",
    },
    {
      title: "Scalable Solution",
      description:
        "As our business grows, the platform grows with us. We've never had to worry about outgrowing our tools or hitting performance limits.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "The intuitive design makes it easy for our team to adopt and use effectively. Training time was minimal, and productivity gains were immediate.",
    },
  ],
  className = "",
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={` bg-slate-800 ${className}`}
    >
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="md:text-center text-white">{title}</h2>
        <div className="mt-4 md:mt-8 lg:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <h4 className="md:text-center text-white">
                  {testimonial.title}
                </h4>
                <p className="text-white">{testimonial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
