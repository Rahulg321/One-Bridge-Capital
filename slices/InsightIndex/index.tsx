import { FC, Suspense } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import InsightCard from "@/components/insight-card";
import { createClient } from "@/prismicio";
import InsightCardSkeleton from "@/components/skeletons/InsightCardSkeleton";
/**
 * Props for `InsightIndex`.
 */
export type InsightIndexProps = SliceComponentProps<Content.InsightIndexSlice>;

/**
 * Component for "InsightIndex" Slices.
 */
const InsightIndex: FC<InsightIndexProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        <h2>Insights</h2>
        <p>
          Riveron Insights brings fresh perspectives on timely and relevant
          issues shaping today’s business world. Explore our library of top
          accounting, finance, and operations trends analysis, Riveron news, and
          client success stories.
        </p>
      </div>
      <div className="mt-10">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InsightCardSkeleton />
              <InsightCardSkeleton />
              <InsightCardSkeleton />
              <InsightCardSkeleton />
              <InsightCardSkeleton />
            </div>
          }
        >
          <GetInsights />
        </Suspense>
      </div>
    </section>
  );
};

export default InsightIndex;

async function GetInsights() {
  const client = createClient();
  const insights = await client.getAllByType("insight");
  console.log(insights);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {insights.map((insight) => (
        <InsightCard key={insight.id} insight={insight} />
      ))}
    </div>
  );
}
