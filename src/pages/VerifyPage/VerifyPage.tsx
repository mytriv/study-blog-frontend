import {Button} from "../../components/Button";
import {AuthHeader} from "../../components/AuthHeader";
import styles from "./index.module.css";
import {VerifyInput} from "../../components/VerifyInput/VerifyInput";
import axios from "axios";
import {useState} from "react";
import {useHistory} from "react-router";

export const VerifyPage  = () => {

    const [verify, setVerify]  = useState("");
    const history = useHistory();

    const onVerifyClick = async () => {
        try {
            await axios.post("/api/v1/auth/basic/verify-email", {code: verify});
            history.push("#");
        } catch (error) {
            console.log("error: ", error.response.data);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div>
                    <AuthHeader title={'Verify'} text={"We send a code your email address. Check you email and write a code here"} />
                </div>
                <div>
                    <div className={styles.verifyWrapper}>
                        <VerifyInput  />
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <Button onClick={onVerifyClick} title='Go' />
                </div>
            </div>
        </div>);
}