export interface News {
    urlToImage: string;
    title: string;
    description: string;
    category: string;
    channelName: string;
    url: string;
    publishedAt: string;
    source?: {
        name: string;
    };
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: News[];
}

export interface CountryContextType {
    country: string;
    setCountry: (country: string) => void;
}
