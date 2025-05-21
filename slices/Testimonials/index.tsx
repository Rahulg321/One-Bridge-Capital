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
  ],
  className = "",
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`py-16 px-4 max-w-7xl mx-auto ${className}`}
    >
      <h2 className="md:text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4 md:mt-8 lg:mt-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-4 text-center md:text-left">
            <h4 className="font-bold text-gray-900">{testimonial.title}</h4>
            <p className="text-gray-600">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
