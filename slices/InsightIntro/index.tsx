import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Calendar, Clock, User } from "lucide-react";

/**
 * Props for `InsightIntro`.
 */
export type InsightIntroProps = SliceComponentProps<Content.InsightIntroSlice>;

/**
 * Component for "InsightIntro" Slices.
 */
const InsightIntro: FC<InsightIntroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space-mini"
    >
      <div className="extra-big-container mx-auto ">
        <div className="flex items-center gap-4 md:gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Author:</span>
            <span className="text-slate-900">{slice.primary.author}</span>
          </div>

          {/* Last Publication Date */}
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">
              Last Publication Date:
            </span>
            <span className="text-slate-900">
              {slice.primary.publication_date}
            </span>
          </div>

          {/* Total Time Taken */}
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Read Time:</span>
            <span className="text-slate-900">
              {slice.primary.total_time_taken}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightIntro;
