import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userSlice, UserState } from "./user/user.slice";
import { articlesSlice, ArticlesState } from "./articles/articlesSlice";
import { articleSlice, ArticleState } from "./article/articleSlice";

export interface Store {
  user: UserState;
  articles: ArticlesState;
  article: ArticleState;
}

export const store = configureStore<any, any, any>({
  reducer: {
    user: userSlice.reducer,
    articles: articlesSlice.reducer,
    article: articleSlice.reducer,
  },
  devTools: true,
  middleware: [thunk],
});
