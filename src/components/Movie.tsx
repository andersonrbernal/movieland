'use client';
import Components from "$/@types/Components"
import React from 'react';
import { truncate } from "lodash";

const cardClass = "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
const linkClass = "block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"

export const Movie: React.FC<Components.Movie> = ({ Title, Plot, Poster }) => {
    return (
        <a href={Poster} target='_blank' className={linkClass}>
            <div className={cardClass}>
                <img src={Poster} alt={Title} className="rounded-t-lg object- max-h-64 w-full" />
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{Title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{truncate(Plot, { length: 70 })}</p>
            </div>
        </a>
    )
}

export default Movie;