import {BlogTitle} from "../../components/BlogTitle";
import {MainArticle} from "../../components/MainArticle";


export const HomePage = () => {
    return (
        <div>
            <BlogTitle text={"Plane Blog"}/>
            <MainArticle/>
            <BlogTitle text={"Last Updates"}/>
        </div>
    );
}