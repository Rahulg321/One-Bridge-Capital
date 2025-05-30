"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SidebarNav from "../SidebarContent/SidebarNav";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";

export type TestimonialsSidebarContentProps =
  SliceComponentProps<Content.TestimonialsSidebarContentSlice>;

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
  const [startIndex, setStartIndex] = useState(0);
  const VISIBLE_COUNT = 3;
  const total = testimonials.length;

  const paginate = (direction: number) => {
    setStartIndex((prev) => {
      const next = prev + direction * VISIBLE_COUNT;
      if (next < 0)
        return (Math.ceil(total / VISIBLE_COUNT) - 1) * VISIBLE_COUNT;
      if (next >= total) return 0;
      return next;
    });
  };

  // Get the 3 testimonials to show, wrapping if needed
  const visibleTestimonials = Array(VISIBLE_COUNT)
    .fill(0)
    .map((_, i) => testimonials[(startIndex + i) % total]);

  // Number of groups for indicators
  const groupCount = Math.ceil(total / VISIBLE_COUNT);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Testimonials List */}
      <div className="w-full flex flex-col gap-6">
        {visibleTestimonials.map((testimonial, i) => (
          <Card
            key={i}
            className="border w-full max-w-full mx-auto shadow-md h-full flex flex-col justify-between"
          >
            <CardContent>
              <h3 className="mb-2 font-semibold text-lg flex items-center gap-2 flex-wrap">
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
              <div className="mb-2 md:mb-4 text-sm text-gray-500 break-words">
                {testimonial.designation}
              </div>
              <blockquote className="border-l-4 text-gray-600 text-xs italic border-blue-900 pl-4 break-words">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Navigation Buttons at the Bottom */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full border bg-white hover:bg-gray-100 transition shadow"
          aria-label="Previous testimonials"
        >
          &#8592;
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full border bg-white hover:bg-gray-100 transition shadow"
          aria-label="Next testimonials"
        >
          &#8594;
        </button>
      </div>
      {/* Indicator Dots */}
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {Array(groupCount)
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * VISIBLE_COUNT)}
              className={`w-2 h-2 rounded-full ${i === Math.floor(startIndex / VISIBLE_COUNT) ? "bg-blue-900" : "bg-gray-300"}`}
              aria-label={`Go to testimonial group ${i + 1}`}
            />
          ))}
      </div>
    </div>
  );
};

export default TestimonialsSidebarContent;
