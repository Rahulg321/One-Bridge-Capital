"use client";

import { FC, useState } from "react";
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

          {/* Testimonial Carousel */}
          <div className="md:col-span-3 flex flex-col gap-6 items-center">
            {slice.primary.testimonials &&
              slice.primary.testimonials.length > 0 && (
                <TestimonialCarousel
                  testimonials={slice.primary.testimonials}
                />
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCarousel: FC<{
  testimonials: Content.TestimonialsSidebarContentSlice["primary"]["testimonials"];
}> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full border hover:bg-gray-100 transition"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full border hover:bg-gray-100 transition"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
      <div className="w-full">
        <Card className="border w-full max-w-full mx-auto">
          <CardContent>
            <h3 className="mb-2 font-semibold text-lg flex items-center gap-2 flex-wrap">
              {testimonials[index].person_name}
              {testimonials[index].linkedin_url && (
                <PrismicNextLink
                  field={testimonials[index].linkedin_url}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${testimonials[index].person_name}'s LinkedIn profile`}
                >
                  <FaLinkedin size={20} />
                </PrismicNextLink>
              )}
            </h3>
            <div className="mb-2 md:mb-4 text-sm text-gray-500 break-words">
              {testimonials[index].designation}
            </div>
            <blockquote className="border-l-4 text-gray-600 text-xs italic border-blue-900 pl-4 break-words">
              &ldquo;{testimonials[index].quote}&rdquo;
            </blockquote>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {testimonials.map((_, i: number) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-blue-900" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSidebarContent;
