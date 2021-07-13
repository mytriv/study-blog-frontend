import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {useHistory} from "react-router";
import {useEffect} from "react";
import {userSlice} from "../../store/user/user.slice";
import {getUserThunk} from "../../store/user/getUser.thunk";
import {stat} from "fs";


export const IsUserAuthGuard = (props: any) => {
    const me = useSelector<Store>( state => state.user.me)
    const pending = useSelector<Store>( state => state.user.pending)
    const isLoaded = useSelector<Store>( state => state.user.isLoaded)
    const isEmailVerified = useSelector<Store>(state => state.user.isEmailVerified)

    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        if (me === null && pending === false && isLoaded === true) {
            history.replace("/auth/login")
        }
        else if (isEmailVerified === false && isLoaded === false) {
            history.replace("/auth/verify")
        }
        else if (isEmailVerified === true && isLoaded === true) {
            history.replace("/home")
        }
        else if (me === null && isLoaded === false && pending === false) {
            dispatch(getUserThunk())
        }
    }, [me, pending, isLoaded, isEmailVerified]);


    return (
        <>
            {props.children}
        </>
    );
}