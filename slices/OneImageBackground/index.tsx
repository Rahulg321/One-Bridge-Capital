import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { cn } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";
import AnimatedHeading from "@/components/animated-heading";
/**
 * Props for `OneImageBackground`.
 */
export type OneImageBackgroundProps =
  SliceComponentProps<Content.OneImageBackgroundSlice>;

/**
 * Component for "OneImageBackground" Slices.
 */
const OneImageBackground: FC<OneImageBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[52vh] w-full overflow-hidden block-space-mini extra-big-container"
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        fill
        priority
        className={cn("object-cover")}
      />

      <div className="bg-slate-800/60 absolute inset-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <AnimatedHeading heading={slice.primary.heading} />
      </div>
    </section>
  );
};

export default OneImageBackground;
