import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Props for `VideoBackground`.
 */
export type VideoBackgroundProps =
  SliceComponentProps<Content.VideoBackgroundSlice>;

/**
 * Component for "VideoBackground" Slices.
 */
const VideoBackground: FC<VideoBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/1994828/1994828-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 max-w-4xl  font-bold tracking-tight ">
          Discover the Future of Digital Experience
        </h1>
        <p className="mb-8 max-w-2xl">
          Immersive, innovative, and designed for the modern world
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-white/90">
          <Link href="#learn-more">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default VideoBackground;
