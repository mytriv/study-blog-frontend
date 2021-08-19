import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthHeader } from "../../components/AuthHeader";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Password } from "../../assets/icons/password.svg";
import { ReactComponent as ShowPassword } from "../../assets/icons/showPassword.svg";
import { useState } from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useHistory } from "react-router";
import { useUserAuth } from "../../sharedHooks/useUserAuth.hook";
import { useUserLoad } from "../../sharedHooks/useUserLoad.hook";

export const LoginPage = () => {
  useUserAuth();

  const { getMe } = useUserLoad(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onLoginClick = async () => {
    try {
      await axios.post("/api/v1/auth/basic/login", { email, password });
      getMe();
      history.push("/auth/login");
    } catch (error) {
      console.log("error: ", error.response.data);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>
          <AuthHeader
            title={"Log in"}
            text={"Don’t have an account? Click "}
            link={"/auth/signup"}
            linkText={"Signup"}
          />
        </div>
        <div>
          <div>
            <Input
              value={email}
              updateValue={setEmail}
              header={"Email"}
              icon={<Mail />}
              type="email"
              placeholder="Please enter your email"
            />

            <Input
              value={password}
              updateValue={setPassword}
              type={passwordShown ? "text" : "password"}
              icon={<Password />}
              iconRev={<ShowPassword onClick={togglePasswordVisibility} />}
              placeholder={"Please enter your password."}
              header={"Password"}
            />
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <Button onClick={onLoginClick} title="Next" />
        </div>
      </div>
    </div>
  );
};
