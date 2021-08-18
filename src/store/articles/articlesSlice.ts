import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article} from "../../api/articles/models/article.model";

export type ArticleState = {
    articles: Article[]
    count: number
    take: number
    skip: number
}

const initialState: ArticleState = {
    articles: [],
    count: 0,
    take: 0,
    skip: 0
};

export const articlesSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        getArticlesSuccess: (state, action: PayloadAction<{articles: Article[], count: number, take: number, skip: number}>) => {
            return {
                ...state, articles: action.payload.articles , count: action.payload.count, skip: action.payload.skip, take: action.payload.take
            }
        }
    }
})