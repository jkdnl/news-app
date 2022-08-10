import React, {useState} from 'react';
import {newsAPI} from "../services/NewsService";
import LatestNews from "./LatestNews";
import {Label, Select, TextInput, Button} from "flowbite-react";
import {INews} from "../models/INews";
import NewsCard from "../components/NewsCard";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

function AdvancedSearch() {

    const [value, setValue] = useState<string>("")
    const [language, setLanguage] = useState<string>("en")
    const [region, setRegion] = useState<string>("INT")

    const resetHandler = () => {
        setValue("")
        setLanguage("en")
        setRegion("INT")
    }

    const { data: lang } = newsAPI.useFetchAvailableLanguagesQuery()
    const { data: reg } = newsAPI.useFetchAvailableRegionsQuery()
    console.log(reg)

    const [fetchAdvanced, { data, isLoading, error }] = newsAPI.useLazyFetchAdvanceQuery()
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if(value.length >=3) fetchAdvanced({value, language, region})
    }

    return (
        <div className="max-w-[90%] mx-auto lg:flex gap-6">
            <div className="order-2 w-full">
                <h2 className="text-3xl text-center my-8 font-semibold text-indigo-900">Advanced search</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <Label
                            htmlFor="keyword"
                            value="Enter a keyword"
                        />
                        <TextInput
                            id="keyword"
                            type="keyword"
                            placeholder="e.g. USA"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                    </div>
                    <div id="select">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="languages"
                                value="Select news language"
                            />
                        </div>
                        <Select
                            id="languages"
                            onChange={e => setLanguage(lang.languages[`${e.target.value}`])}
                        >
                            <option disabled selected>
                                Choose language
                            </option>
                            {
                                lang && Object.keys(lang?.languages).map(l => (
                                    <option key={l} value={l}>
                                        {l}
                                    </option>
                                ))
                            }
                        </Select>
                    </div>
                    <div id="select">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="regions"
                                value="Select news language"
                            />
                        </div>
                        <Select
                            id="regions"
                            onChange={e => setRegion(reg.regions[`${e.target.value}`])}
                        >
                            <option disabled selected>
                                Choose a region
                            </option>
                            {
                                reg && Object.keys(reg?.regions).map(r => (
                                    <option key={r} value={r}>
                                        {r}
                                    </option>
                                ))
                            }
                        </Select>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Button.Group outline={true}>
                            <Button gradientMonochrome="info" type="submit">
                                Search
                            </Button>
                            <Button gradientMonochrome="purple" type="button" onClick={resetHandler}>
                                Reset
                            </Button>
                        </Button.Group>
                    </div>
                </form>
            </div>
            <div className="order-1 w-full">
                {error && <ErrorMessage error={error}/>}
                {isLoading && <Loader/>}
                {!data
                    ? <LatestNews/>
                    : (data?.news.map((n: INews) => (
                        <NewsCard key={n?.id} data={n} />
                    )))}
            </div>
        </div>
    );
}

export default AdvancedSearch;