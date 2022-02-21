import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoryApi } from '../../services/categoryApi';
import { searchApi } from '../../services/searchApi';

const rootReducer = combineReducers({
    [categoryApi.reducerPath]: categoryApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(searchApi.middleware, categoryApi.middleware)
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']