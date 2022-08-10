import React from 'react';
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Container from "../components/Container";
import NewsCard from "../components/NewsCard";
import {newsAPI} from "../services/NewsService";
import {INews} from "../models/INews";

function LatestNews() {

    const { data, isLoading, error } = newsAPI.useFetchRecentNewsQuery(10)
    // const { data, isLoading, error } = newsAPI.useFetchByLanguageQuery("ru")
    return (
        <Container>
            <h1 className="text-3xl text-center my-8 font-semibold text-indigo-900">World's Latest News</h1>
            {error && <ErrorMessage error={error}/>}
            {isLoading && <Loader/>}
            {data?.news.map((n: INews) => (
                <NewsCard key={n?.id} data={n} />
            ))}
        </Container>
    );
}

export default LatestNews;