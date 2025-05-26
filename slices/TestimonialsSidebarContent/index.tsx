import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Props for `TestimonialsSidebarContent`.
 */
export type TestimonialsSidebarContentProps =
  SliceComponentProps<Content.TestimonialsSidebarContentSlice>;

/**
 * Component for "TestimonialsSidebarContent" Slices.
 */
const TestimonialsSidebarContent: FC<TestimonialsSidebarContentProps> = ({
  slice,
}) => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, ExampleCorp",
      message:
        "OneBridge Capital provided exceptional support throughout our M&A process. Their expertise and dedication were invaluable.",
    },
    {
      name: "Jane Smith",
      title: "Managing Director, Acme Advisors",
      message:
        "The team at OneBridge was proactive, knowledgeable, and always available. We couldn't have asked for a better partner.",
    },
    {
      name: "Michael Lee",
      title: "Partner, FinGrowth Partners",
      message:
        "Their attention to detail and client-first approach made a real difference in our project. Highly recommended!",
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-mini extra-big-container"
    >
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card className="border" key={idx}>
                <CardContent>
                  <h3 className="mb-2 font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <div className="mb-2 text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                  <blockquote className="text-base italic text-gray-800 border-l-4 border-red-500 pl-4">
                    &ldquo;{testimonial.message}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSidebarContent;
