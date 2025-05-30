import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { User, Plane, Plus } from "lucide-react";
import { PrismicNextImage } from "@prismicio/next";

export type LogoContentsProps = SliceComponentProps<Content.LogoContentsSlice>;

const LogoContents: FC<LogoContentsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="extra-big-container mx-auto block-space space-y-8">
        {/* Manufacturing and Labor */}
        {slice.primary.contents.map((content, index) => {
          return (
            <div className="flex gap-4" key={index}>
              <div className="flex-shrink-0">
                <div className="w-16 h-16  rounded-sm flex items-center justify-center">
                  <PrismicNextImage field={content.logo} />
                </div>
              </div>
              <div className="flex-1 prose w-full max-w-none">
                <PrismicRichText field={content.description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LogoContents;
