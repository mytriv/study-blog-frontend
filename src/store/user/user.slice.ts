import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../api/user/models/user.model";
import thunk from "redux-thunk";

export type UserState = {
    me: User;
    pending: boolean;
    isLoaded: boolean;
    isEmailVerified: boolean;
}

const initialState: UserState = {
    //@ts-ignore
    me: null,
    pending: false,
    isLoaded: false,
    isEmailVerified: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getMe: (state) => {
            return {
                ...state, pending: true
            }
        },
        getMeSuccess: (state, action: PayloadAction<User>) => {
            return {
                ...state, pending: false, me: action.payload, isLoaded: true, isEmailVerified: true
            }
        },
        getMeFail: (state) => {
            return {
                ...state, pending: false, isLoaded: true
            }
        },
    }
})
