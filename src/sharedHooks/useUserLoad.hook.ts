import {useDispatch} from "react-redux";
import {getUserThunk} from "../store/user/getUser.thunk";
import {useEffect} from "react";

export const useUserLoad = (postPonLoading: boolean = false) => {

    const dispatch = useDispatch()

    const getMe = () => {
        dispatch(getUserThunk())
    }

    useEffect(() => {
        if(postPonLoading === false) {
            getMe()
        }
    }, []);

    return {getMe}
}
