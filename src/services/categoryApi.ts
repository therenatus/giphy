import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_API_KEY;

export const categoryApi = createApi({
    reducerPath: 'category',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.giphy.com/v1/gifs/'}),
    endpoints: (build) => ({
        getCategories: build.query({
            query: ({limit = 5, offset = 0}) => `categories?limit=${limit}&offset=${offset}&api_key=${API_KEY}`
        })
    })
})

export const {useGetCategoriesQuery} = categoryApi;