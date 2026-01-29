import GridWrapper from "@/components/GridWrapper";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import useCountry from "@/hooks/useCountry";
import { api } from "@/lib/api";
import type { News, PaginatedNewsResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import NewsCard from "@/components/NewsCard";
import PaginationController from "@/components/Pagination";

const NewsContainer = () => {
    const { country } = useCountry();
    const [page, setPage] = useState(1);
    const limit = 9;

    const fetchNews = async (
        country?: string,
        page = 1,
        limit = 10,
    ): Promise<PaginatedNewsResponse> => {
        const { data } = await api.get("/news", {
            params: {
                country,
                page,
                limit,
            },
        });

        return data;
    };

    const { data, isLoading, isFetching, error } =
        useQuery<PaginatedNewsResponse>({
            queryKey: ["news", country ?? "all", page],
            queryFn: () => fetchNews(country, page, limit),
        });

    const visiblePages = 5;
    const start = Math.max(page - Math.floor(visiblePages / 2), 1);
    const end = Math.min(start + visiblePages - 1, data?.totalPages || 1);

    return (
        <div>
            {/* Loading */}
            {(isLoading || isFetching) && (
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <NewsCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            )}
            {/* Error */}
            {!isLoading && !isFetching && error && (
                <div className="h-[50vh] flex items-center justify-center text-red-400 text-lg">
                    Something went wrong. Please try again later.
                </div>
            )}

            {/*Not found */}
            {!isLoading &&
                !isFetching &&
                !error &&
                data &&
                data.articles.length === 0 && (
                    <div className="h-[50vh] flex flex-col items-center justify-center text-gray-400">
                        <svg
                            className="w-16 h-16 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <p className="text-lg">No news found for this region</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Try selecting a different country
                        </p>
                    </div>
                )}

            {/* SUCCESS */}
            {!isLoading && !error && data && data.articles.length > 0 && (
                <>
                    <GridWrapper>
                        {data.articles.map((news: News) => (
                            <NewsCard key={news.title} news={news} />
                        ))}
                    </GridWrapper>

                    <div className="py-10 flex justify-center">
                        <PaginationController
                            page={page}
                            end={end}
                            setPage={setPage}
                            start={start}
                            totalPages={data.totalPages}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsContainer;
