import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";

export default function PlayerSkeleton({
  loading = false,
}: {
  loading?: boolean;
}) {
  return (
    <Card className="mx-auto w-full max-w-3xl">
      {!loading && (
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="text-yellow-500" />
            <span>Episode Unavailable</span>
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <div className="space-y-4">
          <Skeleton className="aspect-video w-full rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </CardContent>
      {!loading && (
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            We&apos;re having trouble loading this episode. Please try again
            later.
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
