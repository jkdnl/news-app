import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Container from "../components/Container";
import NewsCard from "../components/NewsCard";
import {fetchNews} from "../store/reducers/ActionCreators";

function LatestNews() {
    const dispatch = useAppDispatch()
    const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

    useEffect(() => {
        dispatch(fetchNews())
    }, [])
    return (
        <Container>
            <h1 className="text-3xl text-center my-8 font-semibold text-indigo-900">World's Latest News</h1>
            {error && <ErrorMessage error={error}/>}
            {isLoading && <Loader/>}
            {news[0] && news.map(n => (
                <NewsCard key={n.id} data={n} />
            ))}
        </Container>
    );
}

export default LatestNews;