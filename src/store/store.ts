import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {userSlice, UserState} from "./user/user.slice";
import {articlesSlice, ArticleState} from "./articles/articlesSlice";

export interface Store {
    user: UserState
    articles: ArticleState
}

export const store = configureStore<any, any, any>({
    reducer: {
        user: userSlice.reducer,
        articles: articlesSlice.reducer
    },
    devTools: true,
    middleware: [thunk]
});
