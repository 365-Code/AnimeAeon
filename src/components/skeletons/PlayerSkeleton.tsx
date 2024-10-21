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
        <CardContent className=" h-fit w-full p-4">
          <Skeleton className="relative my-auto aspect-video w-full rounded-md">
            <Skeleton className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="absolute bottom-4 h-fit w-full">
              <Skeleton className="mx-auto h-4 w-[95%]" />
            </div>
          </Skeleton>
        </CardContent>
      )}
      {!loading && (
        <CardFooter className="flex flex-col items-center justify-between gap-2">
          <div className="text-center text-sm text-muted-foreground">
            We&apos;re having trouble loading this episode. Please try again
            later.
          </div>
          {/* <Button onClick={() => nav.refresh()}>
            Retry <RefreshCcw size={15} className="ml-2" />
          </Button> */}
        </CardFooter>
      )}
    </Card>
  );
}
