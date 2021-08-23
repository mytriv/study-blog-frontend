import { useHistory } from "react-router";
import { Button } from "../../components/Button";

export const HomePage = () => {
  const history = useHistory();

  const onMyArticlesClick = () => {
    history.replace("/myarticles");
  };

  const onLoginClick = () => {
    history.push("/auth/login");
  };

  const onSignUpClick = () => {
    history.push("/auth/signup");
  };

  return (
    <div>
      <Button title={"My Articles"} onClick={onMyArticlesClick} />
      <Button title={"Login"} onClick={onLoginClick} />
      <Button title={"Sign up"} onClick={onSignUpClick} />
    </div>
  );
};
