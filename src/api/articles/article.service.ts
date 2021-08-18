import axios, {AxiosResponse} from "axios";
import {Article} from "./models/article.model";
import {PaginatedRes} from "../shared/paginatedRes.model";
import {PaginationParams} from "../shared/paginationParams.model";

class ArticleService {
    getMyArticle(pagination: PaginationParams): Promise<AxiosResponse<PaginatedRes<Article>>> {
        return axios.get("/api/v1/articles/my-articles", {
            params: {
                ...pagination
            }
        });
    }
}

export const articleService = new ArticleService();