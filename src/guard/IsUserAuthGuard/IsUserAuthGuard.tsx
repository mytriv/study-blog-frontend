import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {useHistory} from "react-router";
import {useEffect} from "react";
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

    }, [me, pending, isLoaded, history]);


    return (
        <>
            {props.children}
        </>
    );
}