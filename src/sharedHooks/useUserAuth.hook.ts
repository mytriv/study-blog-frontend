import {useSelector} from "react-redux";
import {Store} from "../store/store";
import {useHistory} from "react-router";
import {User} from "../api/user/models/user.model"
import {useEffect} from "react";

export const useUserAuth = () => {
    const me = useSelector<Store>( state => state.user.me) as User
    const isLoaded = useSelector<Store>( state => state.user.isLoaded)

    const history = useHistory();

    useEffect(() => {
        if (me !== null && me.isEmailVerified === false && isLoaded === true) {
            history.replace("/auth/verify")
        } else if (me !== null && me.isEmailVerified === true && isLoaded === true) {
            console.log("user found")
            history.replace("/home")
        } else {
            console.log("user not found")
        }
    }, [history, me, isLoaded]);

}

