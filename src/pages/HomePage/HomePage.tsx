import {useHistory} from "react-router";
import {Button} from "../../components/Button";


export const HomePage = () => {
    const history = useHistory();

    const onMyArticlesClick = () => {
        history.replace("/myarticles");
    }
    return (
        <div>
            <Button title={"My Articles"}
                    onClick={onMyArticlesClick}/>
        </div>
    );
}