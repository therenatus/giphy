import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Datum, IFetchData, IFetchDataId } from '../types/IFetchData';
const API_KEY = process.env.REACT_APP_API_KEY;
interface Search {
    tranding: string;
    limit: number;
    offset:number;
    q: string;
}

export const searchApi = createApi({
    reducerPath: 'search',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.giphy.com/v1/gifs/'}),
    endpoints: (builder) => ({
        getSearch: builder.query<IFetchData, Search>({
            query: ({tranding, limit, offset, q}) => `${tranding}?limit=${limit}${offset && `&offset=${offset}`}${q && `&q=${q}`}&api_key=${API_KEY}`
        }),
        getById: builder.query<IFetchDataId, any>({
            query: ({id}: any) => `${id}?api_key=${API_KEY}`
        })
    })
})

export const {useGetSearchQuery, useGetByIdQuery} = searchApi;