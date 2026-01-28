import { Skeleton } from "@/components/ui/skeleton";

const NewsCardSkeleton = () => {
    return (
        <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden border">
            {/* Media */}
            <Skeleton className="h-40 w-full" />

            {/* Content */}
            <div className="p-4 space-y-2">
                <Skeleton className="h-5 w-1/4" /> {/* Badge */}
                <Skeleton className="h-6 w-full" /> {/* Title */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-8 w-full mt-2" /> {/* CTA Button */}
            </div>
        </div>
    );
};

export default NewsCardSkeleton;
