import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ColorBackground`.
 */
export type ColorBackgroundProps =
  SliceComponentProps<Content.ColorBackgroundSlice>;

/**
 * Component for "ColorBackground" Slices.
 */
const ColorBackground: FC<ColorBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-slate-900 text-white block-space"
    >
      <div className="big-container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">{slice.primary.title}</h2>
          <p>
            We empower our clients to stay active in the market, focusing on
            selling and winning more transactions, while we manage all the
            execution and due diligence behind the scenes. We enable our clients
            to transform their operating model and cost base.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColorBackground;
