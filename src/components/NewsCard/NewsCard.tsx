import React from 'react';
import {INews} from "../../models/INews";
import {Badge} from "flowbite-react";

function NewsCard({data}: {data: INews}) {
    return (
        <div className="max-w-2xl mx-auto my-5 border-2 rounded-md p-4 shadow-md md:relative">
            <a href={data.url} target="_blank">
                <span className="text-indigo-800 font-bold py-2">{data.title}</span>
            </a>
            <div className="flex-col mb-4">
                <div>{data.author}</div>
                <div>{data.published}</div>
            </div>
            <p className="italic">{data.description}</p>
            <span className="flex my-2 md:justify-end md:absolute md:-top-4 md:right-1">
                {data.category.map(c => (
                    <span className="mr-2">
                        <Badge color="indigo">
                            {c}
                        </Badge>
                    </span>
                ))}
            </span>
        </div>
    );
}

export default NewsCard;