import GridWrapper from "@/components/GridWrapper";
import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import useCountry from "@/hooks/useCountry";
import { api } from "@/lib/api";
import type { News } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const NewsContainer = () => {
    const { country } = useCountry();

    console.log("This is the freaking country right here!:", country);

    const fetchNews = async (country?: string) => {
        const { data } = country
            ? await api.get(`/news?country=${country}`)
            : await api.get(`/news`);

        return data;
    };

    const { data, isLoading, error, isFetching } = useQuery({
        queryKey: ["news", country ?? "all"],
        queryFn: () => fetchNews(country),
    });

    if (isLoading || isFetching) {
        return (
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <NewsCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return <p>Something went wrong</p>;
    }

    if (!data || !data.articles) {
        return <p>No news found</p>;
    }

    return (
        <GridWrapper>
            {data.articles?.map((news: News) => (
                <NewsCard key={news.title} news={news} />
            ))}
        </GridWrapper>
    );
};

export default NewsContainer;
