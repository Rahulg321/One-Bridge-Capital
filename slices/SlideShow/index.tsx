"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import type { EmblaCarouselType } from "embla-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import fade from "embla-carousel-fade";

export type SlideShowProps = SliceComponentProps<Content.SlideShowSlice>;

const SlideShow: FC<SlideShowProps> = ({ slice }) => {
  const items = [
    {
      id: 1,
      title: "One Bridge Capital",
      video:
        "https://videos.pexels.com/video-files/4620480/4620480-uhd_2732_1440_25fps.mp4",
      text: "We are in the business of making money",
    },
    {
      id: 2,
      title: "Get Something",
      video:
        "https://videos.pexels.com/video-files/3917742/3917742-uhd_2732_1440_25fps.mp4",
      text: "We are in the business of making money",
    },
    {
      id: 3,
      title: "Master the Markets",
      video:
        "https://videos.pexels.com/video-files/3917525/3917525-uhd_2732_1440_25fps.mp4",
      text: "Gain an edge with our expert analysis; discover investment opportunities others have missed",
    },
  ];

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = (api: EmblaCarouselType) => {
      setActiveIndex(api.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    // Set initial index
    onSelect(emblaApi);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <Carousel
        setApi={(api) => setEmblaApi(api ?? null)} // Use setApi instead of ref for better state handling
        plugins={[
          Autoplay({
            delay: 2000,
          }),
          fade({
            active: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="min-h-[60dvh]">
          {items.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className="relative flex flex-row items-center w-full overflow-hidden"
            >
              <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
                <video
                  key={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="relative z-10 flex items-center justify-center flex-col w-full bg-slate-800/60 px-4 text-white min-h-screen md:text-center">
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      // "display: contents" makes this wrapper invisible to the flex layout, preserving your styles.
                      className="contents"
                    >
                      <motion.h1
                        className="mb-4" // Original class
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        {item.title}
                      </motion.h1>
                      <motion.p
                        className="mb-8" // Original class
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        {item.text}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="hidden md:block relative h-full w-full"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default SlideShow;
