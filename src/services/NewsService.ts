import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const newsAPI = createApi({
    reducerPath: "newsAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.currentsapi.services/v1/"}),
    endpoints: (build) => ({
        fetchRecentNews: build.query({
            query: (limit: number = 5) => ({
                url: "latest-news",
                params: {
                    page_size: limit,
                    apiKey: process.env["REACT_APP_NEWS_API_KEY"]
                }
            })
        }),
        fetchByLanguage: build.query({
            query: (lang: string = "en") => ({
                url: "search",
                params: {
                    language: lang,
                    apiKey: process.env["REACT_APP_NEWS_API_KEY"]
                }
            })
        }),
        fetchAvailableLanguages: build.query({
            query: (arg: void) => "available/languages"
        }),
        fetchAvailableRegions: build.query({
            query: (arg: void) => "available/regions"
        }),
        fetchByWord: build.query({
            query: (key: string) => ({
                url: "search",
                params: {
                    keywords: key,
                    apiKey: process.env["REACT_APP_NEWS_API_KEY"]
                }
            })
        }),
        fetchAdvance: build.query({
            query: ({value, language, region}: {value: string, language: string, region: string}) => ({
                url: "search",
                params: {
                    keywords: value,
                    language: language,
                    country: region,
                    apiKey: process.env["REACT_APP_NEWS_API_KEY"]
                }
            })
        }),
    })
})