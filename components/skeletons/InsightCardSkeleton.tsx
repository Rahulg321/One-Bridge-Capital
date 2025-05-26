import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const InsightCardSkeleton = () => {
  return (
    <Card className="overflow-hidden max-w-md">
      <Skeleton className="h-48 w-full rounded-none" />

      <CardHeader className="p-4 pb-2 space-y-2">
        <Skeleton className="h-6 w-24" />

        <Skeleton className="h-7 w-full" />
      </CardHeader>

      <CardContent className="p-4 pt-0 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {/* Read more link skeleton */}
        <Skeleton className="h-4 w-24" />
      </CardFooter>
    </Card>
  );
};

export default InsightCardSkeleton;
