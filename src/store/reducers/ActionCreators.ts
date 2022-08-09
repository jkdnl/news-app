import {AppDispatch} from "../store";
import axios, {AxiosError} from "axios";
import {newsSlice} from "./NewsSlice";

export const fetchNews = () => async (dispatch: AppDispatch) => {
    const url = "https://api.currentsapi.services/v1/latest-news?"
    const key = "apiKey=" + process.env["REACT_APP_NEWS_API_KEY"]
    try {
        dispatch(newsSlice.actions.newsFetching())
        const response = await axios.get(url+key)
        // console.log(response)
        // console.log(response.data)
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data.news))
    } catch(e) {
        const error = e as AxiosError | Error
        dispatch(newsSlice.actions.newsFetchingError(error.message))
    }
}