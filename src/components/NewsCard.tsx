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
        <article className="group relative h-[420px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={
                        news.urlToImage ||
                        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                    }
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay - gets lighter on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative flex h-full flex-col justify-between p-6">
                {/* Top Section - Category Badge */}
                <div className="flex items-start justify-between">
                    <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md ring-1 ring-white/30 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:ring-0">
                        {news.category}
                    </span>
                </div>

                {/* Bottom Section - Main Content */}
                <div className="space-y-4">
                    {/* Title */}
                    <h3 className="text-2xl font-bold leading-tight text-white line-clamp-2 transition-all duration-300 group-hover:text-shadow-lg">
                        {news.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-200 line-clamp-2 transition-all duration-300 group-hover:text-white">
                        {news.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                        <div className="flex items-center gap-3">
                            {/* Channel Avatar */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white shadow-lg ring-2 ring-white/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-white/50">
                                {(news.source?.name || news.channelName)
                                    .charAt(0)
                                    .toUpperCase()}
                            </div>

                            {/* Channel Info */}
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-white">
                                    {news.source?.name || news.channelName}
                                </span>
                                <span className="text-xs text-gray-300">
                                    {formatDate(news.publishedAt)}
                                </span>
                            </div>
                        </div>

                        {/* Read More Button */}
                        <a
                            href={news.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm ring-1 ring-white/30 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-xl"
                        >
                            Read
                            <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

            {/* Decorative Gradient Accent */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-3xl transition-all duration-700 group-hover:scale-[2] group-hover:opacity-80" />
        </article>
    );
};
export default NewsCard;
