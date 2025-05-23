import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
export type ColorBackgroundProps =
  SliceComponentProps<Content.ColorBackgroundSlice>;

const ColorBackground: FC<ColorBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-slate-900 text-white py-10"
    >
      <div className="extra-big-container md:text-center">
        <h2 className="mb-6">{slice.primary.title}</h2>

        {slice.primary.content && (
          <div className="prose text-white max-w-none">
            <PrismicRichText field={slice.primary.content} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ColorBackground;
