import {Button} from "../../components/Button";
import {AuthHeader} from "../../components/AuthHeader";
import styles from "./index.module.css";
import {VerifyInput} from "../../components/VerifyInput/VerifyInput";
import axios from "axios";
import {useState} from "react";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {userSlice} from "../../store/user/user.slice";

export const VerifyPage  = () => {

    const [verify, setVerifyCode]  = useState("");
    const history = useHistory();
    const dispatch = useDispatch()

    const onVerifyClick = async () => {
        try {
            await axios.post("/api/v1/auth/basic/verify-email", {code: verify});
            dispatch(userSlice.actions.setEmailVerified())
            history.push("/home");
        } catch (error) {
            console.log("error: ", error.response.data);
        }
    }

    const updateCode = (verificationCode: string) => {
        setVerifyCode(verificationCode)
    }

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div>
                    <AuthHeader title={'Verify'} text={"We send a code your email address. Check you email and write a code here"} />
                </div>
                <div>
                    <div className={styles.verifyWrapper}>
                        <VerifyInput updateCode={updateCode} />
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <Button onClick={onVerifyClick} title='Go' />
                </div>
            </div>
        </div>);
}