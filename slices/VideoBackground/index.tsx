import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      className="relative min-h-screen flex flex-row items-center  w-full overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full bg-blue-700/40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/27890193/12254165_2560_1440_60fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative flex items-center justify-center flex-col w-full bg-slate-800/60 px-4 text-center text-white min-h-screen">
        <h1 className="mb-4">{slice.primary.heading}</h1>
        <p className="mb-8 max-w-2xl">{slice.primary.tagline}</p>
      </div>
      <div className="relative h-full w-full "></div>
    </section>
  );
};

export default VideoBackground;
