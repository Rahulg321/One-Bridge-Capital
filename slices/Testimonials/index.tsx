import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <h2 className="md:text-center">Trusted By Industry Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4 md:mt-8 lg:mt-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            The Intelligent Canvas
          </h2>
          <p className="text-gray-600">
            Big ideas deserve room to grow. Our limitless canvas lets your team
            create and build together - from the first &apos;What if?&apos; to
            the final &apos;Wow!&apos; Add anything, plan everything, and watch
            collaboration come alive.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Custom-crafted to fit your needs
          </h2>
          <p className="text-gray-600">
            Power through any project with step-by-step templates that turn
            messy free-for-alls into super slick workflows. Then tweak and shape
            them until they&apos;re custom-fit for your team&apos;s needs.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Pure speed, no fluff
          </h2>
          <p className="text-gray-600">
            Focus on what matters with distraction-free formats like docs, data
            tables, timelines, and slides to keep your creative flow flowing.
            Get to work even faster by setting your favorite format as the
            default view when you open your board.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
