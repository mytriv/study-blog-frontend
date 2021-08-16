import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article} from "../../api/articles/models/article.model";

export type ArticleState = {
    articles: Article[]
}

const initialState: ArticleState = {
    articles: []
};

export const articlesSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        getArticles: (state, action: PayloadAction<Article[]>) => {
            return {
                ...state, articles: action.payload
            }
        }
    }
})