import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonForm() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        <div className="col-span-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="col-span-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="col-span-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="col-span-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="col-span-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <Skeleton className="h-10 w-[280px]" />
        <Skeleton className="h-10 w-[280px]" />
      </div>
    </div>
  )
}
