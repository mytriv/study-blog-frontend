import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {useHistory} from "react-router";
import {useEffect} from "react";
import {userSlice} from "../../store/user/user.slice";
import {getUserThunk} from "../../store/user/getUser.thunk";
import {stat} from "fs";
import {User} from "../../api/user/models/user.model";


export const IsUserAuthGuard = (props: any) => {

    const me = useSelector<Store>( state => state.user.me) as User
    const pending = useSelector<Store>( state => state.user.pending)
    const isLoaded = useSelector<Store>( state => state.user.isLoaded)

    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        if (me === null && pending === false && isLoaded === true) {
            history.replace("/auth/login")
        }
        if ( me !== null && me.isEmailVerified === false && isLoaded === true) {
            history.replace("/auth/verify")
        }
        if ( me !== null && me.isEmailVerified === true && isLoaded === true) {
            history.replace("/home")
        }
        if (me === null && isLoaded === false && pending === false) {
            dispatch(getUserThunk())
        }
    }, [me, pending, isLoaded]);


    return (
        <>
            {props.children}
        </>
    );
}