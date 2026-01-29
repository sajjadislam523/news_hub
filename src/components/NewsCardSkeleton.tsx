import { Skeleton } from "@/components/ui/skeleton";

const NewsCardSkeleton = () => {
    return (
        <article className="relative h-112.5 overflow-hidden rounded-xl bg-zinc-900 border border-white/10">
            {/* Image Skeleton */}
            <div className="relative h-52 overflow-hidden bg-zinc-800">
                <Skeleton className="h-full w-full bg-zinc-800/50" />

                {/* Category Badge Skeleton */}
                <div className="absolute top-4 left-4">
                    <Skeleton className="h-7 w-20 rounded-md bg-zinc-700/50" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col justify-between p-6 h-[calc(100%-13rem)]">
                {/* Title & Description */}
                <div className="space-y-3">
                    {/* Title Skeleton */}
                    <Skeleton className="h-5 w-full bg-zinc-800/50" />
                    <Skeleton className="h-5 w-4/5 bg-zinc-800/50" />

                    {/* Description Skeleton */}
                    <div className="space-y-2 pt-1">
                        <Skeleton className="h-4 w-full bg-zinc-800/30" />
                        <Skeleton className="h-4 w-3/4 bg-zinc-800/30" />
                    </div>
                </div>

                {/* Footer */}
                <div className="space-y-4 mt-4">
                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                    <div className="flex items-center justify-between">
                        {/* Source Info Skeleton */}
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-9 w-9 rounded-full bg-zinc-800/50" />

                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-4 w-24 bg-zinc-800/50" />
                                <Skeleton className="h-3 w-16 bg-zinc-800/30" />
                            </div>
                        </div>

                        {/* Read Button Skeleton */}
                        <Skeleton className="h-9 w-16 rounded bg-zinc-800/30" />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NewsCardSkeleton;
