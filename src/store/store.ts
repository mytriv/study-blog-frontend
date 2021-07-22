import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {userSlice, UserState} from "./user/user.slice";

export interface Store {
    user: UserState
}

export const store = configureStore<any, any, any>({
    reducer: {
        user: userSlice.reducer
    },
    devTools: true,
    middleware: [thunk]
});
