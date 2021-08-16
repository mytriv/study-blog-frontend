import axios, {AxiosResponse} from "axios";
import {Article} from "./models/article.model";

class ArticleService {
    getMyArticle(): Promise<AxiosResponse<Article>> {
        return axios.get("/api/v1/articles/my-articles", {
            params: {
                take: 10,
                skip: 0
            }
        });
    }
}

export const articleService = new ArticleService();