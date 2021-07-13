import {userSlice} from "./user.slice";
import axios from "axios";
import {userService} from "../../api/user/user.service";

export const getUserThunk = () => {
    return async (dispatch: any) => {
        dispatch(userSlice.actions.getMe());
        try {
            const me = await userService.getMe()
            dispatch(userSlice.actions.getMeSuccess(me.data))
        } catch (error) {
            console.log('error: ', error.response.data);
            dispatch(userSlice.actions.getMeFail())
        }
    }
}