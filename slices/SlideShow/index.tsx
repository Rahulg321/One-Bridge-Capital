"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
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

  const [activeIndex, setActiveIndex] = useState(0);
  const emblaApiRef = useRef<EmblaCarouselType | null>(null);

  // Handler to update active index
  useEffect(() => {
    const emblaApi = emblaApiRef.current;
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    // Set initial index
    setActiveIndex(emblaApi.selectedScrollSnap());
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApiRef.current]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space extra-big-container"
    >
      <Carousel
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
        setApi={(api) => {
          emblaApiRef.current = api ?? null;
        }}
      >
        <CarouselContent className="min-h-[60dvh] ">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <CarouselItem
                key={item.id}
                className="relative flex flex-row items-center w-full overflow-hidden"
              >
                <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
                  <video
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
                  <motion.h1
                    className="mb-4"
                    key={
                      isActive
                        ? `active-title-${item.id}`
                        : `inactive-title-${item.id}`
                    }
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    className="mb-8"
                    key={
                      isActive
                        ? `active-text-${item.id}`
                        : `inactive-text-${item.id}`
                    }
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  >
                    {item.text}
                  </motion.p>
                </div>
                <div className="hidden md:block relative h-full w-full"></div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default SlideShow;
