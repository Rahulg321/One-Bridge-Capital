"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion, AnimatePresence, transform } from "framer-motion"; // Import AnimatePresence
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
      title: "OneBridge is a leading M&A Knoweldge Partner",
      video:
        "https://videos.pexels.com/video-files/19315789/19315789-uhd_2560_1440_30fps.mp4",
      text: "OneBrige provides agile and cost-effective execution support to boutique M&A investment banks and advisory firms focused on the mid-market M&A.",
    },
    {
      id: 2,
      title: "Welcome to OneBridge",
      video:
        "https://videos.pexels.com/video-files/14084677/14084677-uhd_2560_1440_60fps.mp4",
      text: "We empower our clients to stay active in the market, focusing on selling and winning more transactions, while we manage all the execution and due diligence behind the scenes. We enable our clients to transform their operating model and cost base.",
    },
    {
      id: 3,
      title: "Trusted By Industry Leaders",
      video:
        "https://videos.pexels.com/video-files/7691553/7691553-hd_1920_1080_25fps.mp4",
      text: "From managing confidential information memorandums (CIMs), teasers, and data rooms to conducting in-depth financial modeling, valuation, and due diligence, we handle critical execution tasks that help our clients to focus 100% on client relationships and deal strategy.",
    },
    {
      id: 4,
      title: "Interested in learning more?",
      video:
        "https://videos.pexels.com/video-files/5562047/5562047-hd_1920_1080_30fps.mp4",
      text: "Our approach helps boutique firms maintain lean operations while accessing expert execution capabilities typically available only to larger firms.",
    },
    {
      id: 5,
      title: "We’re here to support your next project.",
      video:
        "https://videos.pexels.com/video-files/7692776/7692776-hd_1920_1080_25fps.mp4",
      text: "We’re here to support your next project. Reach out to discuss how we can partner on your next  transaction or growth initiative.",
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
      className="block-space-mini extra-big-container"
    >
      <Carousel
        setApi={(api) => setEmblaApi(api ?? null)} // Use setApi instead of ref for better state handling
        plugins={[
          Autoplay({
            delay: 4500,
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
        <CarouselContent className="min-h-[60vh] md:min-h-[75vh]">
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
              <div className="relative z-10 flex justify-center flex-col w-full bg-slate-800/60 px-4 text-white min-h-full">
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
                        className="mb-4"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        {item.title}
                      </motion.h1>
                      <motion.p
                        className="mb-8 text-base"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
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
