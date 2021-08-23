import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../api/articles/models/article.model";

export type ArticleState = {
  article: Article;
};

const initialState: ArticleState = {
  // @ts-ignore
  article: null,
};

export const articleSlice = createSlice({
  name: "manage",
  initialState,
  reducers: {
    getArticle: (state, action: PayloadAction<Article>) => {
      return {
        ...state,
        article: action.payload,
      };
    },
    // @ts-ignore
    clearArticle: (state) => {
      return {
        ...state,
        article: null,
      };
    },
  },
});
