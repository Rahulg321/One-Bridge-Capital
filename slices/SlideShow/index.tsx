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
        setApi={(api) => setEmblaApi(api ?? null)}
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
          {/* Slide 1 */}
          <CarouselItem
            key={1}
            className="relative flex flex-row items-center w-full overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
              <video
                key="19315789-uhd_2560_1440_30fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                aria-hidden="true"
              >
                <source
                  src="https://videos.pexels.com/video-files/19315789/19315789-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex justify-center flex-col w-full bg-slate-800/90 px-4 text-white min-h-full">
              <AnimatePresence>
                {activeIndex === 0 && (
                  <motion.div
                    key={1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="contents"
                  >
                    <motion.h1
                      className="mb-4"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      Welcome to{" "}
                      <span className="text-special">OneBridge!</span>
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
                      Leading M&A Knoweldge Partner providing agile and
                      cost-effective execution support to boutique investment
                      banks and advisory firms across the Globe focused on the
                      mid-market M&A.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block relative h-full w-full"></div>
          </CarouselItem>

          <CarouselItem
            key={2}
            className="relative flex flex-row items-center w-full overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
              <video
                key="14084677-uhd_2560_1440_60fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                aria-hidden="true"
              >
                <source
                  src="https://videos.pexels.com/video-files/14084677/14084677-uhd_2560_1440_60fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex justify-center flex-col w-full bg-slate-800/90 px-4 text-white min-h-full">
              <AnimatePresence>
                {activeIndex === 1 && (
                  <motion.div
                    key={2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="contents"
                  >
                    <motion.h1
                      className="mb-4"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      We <span className="text-special">empower</span> you!
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
                      <span className="text-special">Empowering</span> our
                      clients to stay active in the market, to focus on selling
                      and winning more transactions, while we manage all the
                      execution and due diligence behind the scenes
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block relative h-full w-full"></div>
          </CarouselItem>
          <CarouselItem
            key={3}
            className="relative flex flex-row items-center w-full overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
              <video
                key="7691553-hd_1920_1080_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                aria-hidden="true"
              >
                <source
                  src="https://videos.pexels.com/video-files/7691553/7691553-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex justify-center flex-col w-full bg-slate-800/90 px-4 text-white min-h-full">
              <AnimatePresence>
                {activeIndex === 2 && (
                  <motion.div
                    key={3}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="contents"
                  >
                    <motion.h1
                      className="mb-4"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      We are your{" "}
                      <span className="text-special">extended team!</span>
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
                      From managing Confidential Information Memorandums (CIMs),
                      teasers, and data rooms to conducting in-depth financial
                      modeling, valuation, and due diligence, we handle all
                      critical execution tasks that help our clients to focus
                      100% on client relationships and deal strategy
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block relative h-full w-full"></div>
          </CarouselItem>

          {/* Slide 4 */}
          <CarouselItem
            key={4}
            className="relative flex flex-row items-center w-full overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
              <video
                key="7580434-uhd_2732_1440_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                aria-hidden="true"
              >
                <source
                  src="https://videos.pexels.com/video-files/7580434/7580434-uhd_2732_1440_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex justify-center flex-col w-full bg-slate-800/90 px-4 text-white min-h-full">
              <AnimatePresence>
                {activeIndex === 3 && (
                  <motion.div
                    key={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="contents"
                  >
                    <motion.h1
                      className="mb-4 "
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      We help you{" "}
                      <span className="text-special">cut cost!</span>
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
                      With a team of financial experts and specialists{" "}
                      <span>based in India</span>, we enable our clients to
                      transform their operating model and cut cost without
                      compromising on quality.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block relative h-full w-full"></div>
          </CarouselItem>

          <CarouselItem
            key={5}
            className="relative flex flex-row items-center w-full overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-blue-700/40 z-0">
              <video
                key="7580434-uhd_2732_1440_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                aria-hidden="true"
              >
                <source
                  src="https://videos.pexels.com/video-files/7692776/7692776-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex justify-center flex-col w-full bg-slate-800/90 px-4 text-white min-h-full">
              <AnimatePresence>
                {activeIndex === 4 && (
                  <motion.div
                    key={5}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="contents"
                  >
                    <motion.h1
                      className="mb-4"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      We’re here to support your{" "}
                      <span className="text-special">next project!</span>{" "}
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
                      Reach out to discuss how we can partner on your
                      next transaction!
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden md:block relative h-full w-full"></div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default SlideShow;
