import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type ImageBackgroundProps =
  SliceComponentProps<Content.ImageBackgroundSlice>;

const ImageBackground: FC<ImageBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[45vh] w-full overflow-hidden"
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className=" text-white mb-4">{slice.primary.heading}</h1>
        <p className=" text-white max-w-2xl">{slice.primary.tagline}</p>
        {slice.variation === "imageBackgroundWithButton" ? (
          <div>
            <Button asChild>
              <Link href={"/contact"}>Request a Quote</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ImageBackground;
