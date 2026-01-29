import type { News } from "@/types/types";

const NewsCard = ({ news }: { news: News }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor(
            (now.getTime() - date.getTime()) / (1000 * 60 * 60),
        );

        if (diffInHours < 1) return "Just now";
        if (diffInHours < 24) return `${diffInHours}h ago`;
        if (diffInHours < 48) return "Yesterday";
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    return (
        <article className="group relative h-112.5 overflow-hidden rounded-xl bg-zinc-900 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10">
            {/* Image Container */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={
                        news.urlToImage ||
                        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                    }
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white border border-white/20">
                        {news.category}
                    </span>
                </div>

                {/* linear Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col justify-between p-6 h-[calc(100%-13rem)]">
                {/* Title & Description */}
                <div className="space-y-3">
                    <h3 className="text-lg font-bold leading-tight text-white line-clamp-2 group-hover:text-gray-100 transition-colors">
                        {news.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-400 line-clamp-2">
                        {news.description}
                    </p>
                </div>

                {/* Footer */}
                <div className="space-y-4 mt-4">
                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                    <div className="flex items-center justify-between">
                        {/* Source Info */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                                {(news.source?.name || news.channelName)
                                    .charAt(0)
                                    .toUpperCase()}
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">
                                    {news.source?.name || news.channelName}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {formatDate(news.publishedAt)}
                                </span>
                            </div>
                        </div>

                        {/* Read Button */}
                        <a
                            href={news.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-gray-300 transition-colors group/btn"
                        >
                            Read
                            <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;
