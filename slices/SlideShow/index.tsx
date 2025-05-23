"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-mini extra-big-container"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 3500,
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
        <CarouselContent className="min-h-[60dvh] ">
          {items.map((item) => {
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
                <div className="relative z-10 flex items-center justify-center flex-col w-full bg-slate-800/60 px-4 text-white min-h-screen">
                  <h1 className="mb-4">{item.title}</h1>
                  <p className="mb-8">{item.text}</p>
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
