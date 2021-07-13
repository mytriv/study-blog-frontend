import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {AuthHeader} from "../../components/AuthHeader";
import {ReactComponent as Mail} from "../../assets/icons/mail.svg";
import {ReactComponent as Password} from "../../assets/icons/password.svg";
import {ReactComponent as ShowPassword} from "../../assets/icons/showPassword.svg";
import {useEffect, useState} from "react";
import styles from "./index.module.css"
import axios from "axios";
import {useHistory} from "react-router";

export const LoginPage  = () => {
/*
    const [test, setTest] = useState(0);

    useEffect(() => {
        console.log("trigger")
        return () => {
        console.log("destroy")
        };
    }, [test]);

    useEffect(() => {
        setInterval(() => {
            setTest(Math.random())
        }, 1000)
    }, []);
*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    /*console.log(email, password)*/

    const onLoginClick = async () => {
        try {
            await axios.post("/api/v1/auth/basic/login", {email, password});
            history.push("/auth/verify");
        } catch (error) {
            console.log('error: ', error.response.data);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div>
                    <AuthHeader title={'Log in'} text={"Don’t have an account? Click "} link={'/auth/signup'} linkText={"Signup"}/>
                </div>
                <div>
                    <div>
                        <Input value={email} updateValue={setEmail} header={'Email'} icon={<Mail />} type='email' placeholder='Please enter your email'  />
                        <Input value={password} updateValue={setPassword} type={'password'} icon={<Password/>} iconRev={<ShowPassword/>} placeholder={'Please enter your password.'} header={'Password'}/>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <Button onClick={onLoginClick} title='Next' />
                </div>
            </div>
        </div>);
}