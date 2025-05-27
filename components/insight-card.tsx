import Link from "next/link";
import { cn } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

interface InsightCardProps {
  className?: string;
  insight: Content.InsightDocument;
}

export default function InsightCard({ className, insight }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${insight.uid}`}
      className={cn(
        "block bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all",
        className
      )}
    >
      <div className="relative h-48 w-full">
        <PrismicNextImage
          field={insight.data.featured_image}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        {insight.data.tag && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
            {insight.data.tag}
          </span>
        )}

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {insight.data.title}
        </h3>

        <span className="text-sm text-gray-600 line-clamp-3">
          {insight.data.description}
        </span>
      </div>
    </Link>
  );
}
