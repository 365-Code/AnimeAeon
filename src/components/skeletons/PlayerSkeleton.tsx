import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function PlayerSkeleton({
  loading = false,
}: {
  loading?: boolean;
}) {
  const nav = useRouter();
  return (
    <Card className="mx-auto flex h-full w-full flex-col items-center justify-center">
      {!loading && (
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="text-yellow-500" />
            <span>Episode Unavailable</span>
          </CardTitle>
        </CardHeader>
      )}
      {loading && (
        <CardContent className="h-full w-full pt-4">
          <Skeleton className="aspect-video w-full rounded-md" />
          <Skeleton className="mt-4 h-4 w-full" />
        </CardContent>
      )}
      {!loading && (
        <CardFooter className="flex flex-col items-center justify-between gap-2">
          <div className="text-center text-sm text-muted-foreground">
            We&apos;re having trouble loading this episode. Please try again
            later.
          </div>
          <Button onClick={() => nav.refresh()}>
            Retry <RefreshCcw size={15} className="ml-2" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
