"use client";

import { FC, useState, useEffect, useCallback } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  title: string;
  description: string;
  personName: string;
  companyName: string;
};

interface TestimonialsProps
  extends SliceComponentProps<Content.TestimonialsSlice> {
  title?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const Testimonials: FC<TestimonialsProps> = ({
  slice,
  title = "Trusted By Industry Leaders",
  testimonials = [
    {
      title: "Exceptional Service",
      description:
        "OneBridge has transformed our M&A advisory process. Their expertise and dedication have been invaluable to our success.",
      personName: "John Smith",
      companyName: "Global Investment Partners",
    },
    {
      title: "Outstanding Results",
      description:
        "Working with OneBridge has significantly improved our deal execution speed and quality. Highly recommended!",
      personName: "Sarah Johnson",
      companyName: "Strategic Advisors Inc.",
    },
    {
      title: "Professional Excellence",
      description:
        "The team at OneBridge brings unmatched expertise and professionalism to every project. A true partner in success.",
      personName: "Michael Chen",
      companyName: "Capital Ventures",
    },
    {
      title: "Game-Changing Partnership",
      description:
        "OneBridge's innovative approach has revolutionized how we handle our M&A transactions. Outstanding results every time.",
      personName: "Emily Rodriguez",
      companyName: "Merchant Banking Group",
    },
    {
      title: "Top-Tier Service",
      description:
        "The level of service and attention to detail from OneBridge is exceptional. They've become an integral part of our success.",
      personName: "David Wilson",
      companyName: "Investment Solutions Ltd",
    },
    {
      title: "Strategic Excellence",
      description:
        "OneBridge's strategic insights have been crucial in helping us navigate complex M&A transactions successfully.",
      personName: "Lisa Thompson",
      companyName: "Corporate Advisors",
    },
  ],
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: none, 1: next, -1: prev
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for desktop

  const updateItemsPerPage = useCallback(() => {
    // Tailwind's 'md' breakpoint is 768px
    if (window.innerWidth < 768) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(3);
    }
  }, []);

  useEffect(() => {
    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  useEffect(() => {
    // Adjust currentIndex when itemsPerPage or total testimonials change
    // to ensure it's valid and aligns to a "page"
    if (testimonials.length === 0) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prevCurrentIndex) => {
      // Try to keep the user on a page that shows the first item they were previously seeing.
      // Or, align to the start of the logical page based on new itemsPerPage.
      let newIndex = Math.floor(prevCurrentIndex / itemsPerPage) * itemsPerPage;

      // Ensure newIndex is clamped within valid bounds
      const maxStartIndex = Math.max(0, testimonials.length - itemsPerPage);
      newIndex = Math.max(0, Math.min(newIndex, maxStartIndex));

      // If no items would be shown due to a too large newIndex (e.g. length decreased a lot)
      // ensure it's the last possible page.
      if (
        newIndex + itemsPerPage > testimonials.length &&
        testimonials.length > 0
      ) {
        newIndex = maxStartIndex;
      }

      return newIndex;
    });
  }, [itemsPerPage, testimonials.length]);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + itemsPerPage >= testimonials.length;

  const nextTestimonials = () => {
    if (!isAtEnd) {
      setDirection(1);
      setCurrentIndex((prevIndex) => {
        // Ensure next index doesn't exceed the last possible start index
        const newIndex = prevIndex + itemsPerPage;
        const maxStartIndex = Math.max(0, testimonials.length - itemsPerPage);
        return Math.min(newIndex, maxStartIndex);
      });
    }
  };

  const prevTestimonials = () => {
    if (!isAtStart) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const slideVariants = {
    enter: (directionValue: number) => ({
      x: directionValue > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (directionValue: number) => ({
      zIndex: 0,
      x: directionValue < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`bg-slate-800 ${className}`}
    >
      <div className="py-10 md:py-14 px-4 max-w-6xl mx-auto">
        <h2 className="text-center text-white text-xl sm:text-2xl font-bold mb-8 md:mb-10">
          {title}
        </h2>
        <div className="relative">
          <div className="overflow-x-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.personName}-${currentIndex + index}`}
                    className="bg-white rounded-lg p-3 sm:p-5 shadow-lg flex flex-col"
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3">
                      {testimonial.title}
                    </h4>
                    <span className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-5 flex-grow italic">
                      &quot;{testimonial.description}&quot;
                    </span>
                    <div className="border-t border-slate-200 pt-3">
                      <span className="font-semibold block text-slate-800 text-sm">
                        {testimonial.personName}
                      </span>
                      <span className="text-slate-500 text-xs block">
                        {testimonial.companyName}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {testimonials.length > itemsPerPage && (
            <>
              <button
                onClick={prevTestimonials}
                disabled={isAtStart}
                className="absolute z-10 left-0 md:-left-2 lg:-left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-800" />
              </button>
              <button
                onClick={nextTestimonials}
                disabled={isAtEnd}
                className="absolute z-10 right-0 md:-right-2 lg:-right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-800" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
