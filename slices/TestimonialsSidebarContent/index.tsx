import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";

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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24">
          <div className="md:col-span-1 md:sticky md:top-26 h-fit">
            <SidebarNav />
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            {slice.primary.testimonials.map((testimonial, idx) => (
              <Card className="border" key={idx}>
                <CardContent>
                  <h3 className="mb-2 font-semibold text-lg flex items-center gap-2">
                    {testimonial.person_name}
                    {testimonial.linkedin_url && (
                      <PrismicNextLink
                        field={testimonial.linkedin_url}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${testimonial.person_name}'s LinkedIn profile`}
                      >
                        <FaLinkedin size={20} />
                      </PrismicNextLink>
                    )}
                  </h3>
                  <div className="mb-2 md:mb-4 text-sm text-gray-500">
                    {testimonial.designation}
                  </div>
                  <blockquote className="border-l-4 text-gray-600 text-sm border-blue-900 pl-4">
                    &ldquo;{testimonial.quote}&rdquo;
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
