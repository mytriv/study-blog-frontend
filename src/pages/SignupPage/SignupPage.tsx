import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {AuthHeader} from "../../components/AuthHeader";
import {ReactComponent as Mail} from "../../assets/icons/mail.svg";
import {ReactComponent as Password} from "../../assets/icons/password.svg";
import {ReactComponent as ShowPassword} from "../../assets/icons/showPassword.svg";
import styles from "./index.module.css"
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import {useUserAuth} from "../../sharedHooks/useUserAuth.hook";
import {useUserLoad} from "../../sharedHooks/useUserLoad.hook";

export const SignupPage  = () => {

    useUserAuth()

    const {getMe} = useUserLoad(true)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onSignupClick = async () => {
        try {
            await axios.post("/api/v1/auth/basic/signup", {email, password});
            getMe();
            history.push("/auth/verify");

        } catch (error) {
            console.log("error: ", error.response.data);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div>
                    <AuthHeader title={'Sign up'} text={"Have an account? Click "} link={'/auth/login'} linkText={"Login"}/>
                </div>
                <div>
                    <div>
                        <Input header={'Email'} value={email} updateValue={setEmail} icon={<Mail />} type='email' placeholder='Please enter your email' />
                        <Input type={'password'} value={password} updateValue={setPassword} icon={<Password/>} iconRev={<ShowPassword/>} placeholder={'Please enter your password.'} header={'Password'}/>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <Button onClick={onSignupClick} title='Next' />
                </div>
            </div>
        </div>);
}